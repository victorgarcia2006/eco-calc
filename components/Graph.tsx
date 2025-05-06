import { useEffect, useRef } from "react";
import * as d3 from "d3";

type Props = {
  A: number;
  b: number;
  p: number;
  T0: number; // Límite inferior del tiempo
  Tmax?: number; // Tiempo máximo opcional
};

export default function FunctionGraph({ A, b, p, T0, Tmax = 30 }: Props) {
  const ref = useRef<SVGSVGElement | null>(null);

  useEffect(() => {
    if (!ref.current) return;

    const svg = d3.select(ref.current);
    svg.selectAll("*").remove(); // Limpia el gráfico anterior

    const width = 400;
    const height = 260;
    const margin = { top: 20, right: 30, bottom: 30, left: 50 };

    // Dominio del eje x (tiempo)
    const x = d3.scaleLinear()
      .domain([T0, T0 + 100])
      .range([margin.left, width - margin.right]);

    // Generar datos de la función
    const data = d3.range(T0, T0 + Tmax, 0.5).map(t => ({
      t,
      y: A / Math.pow(t + b, p),
    }));

    // Escala del eje y
    const y = d3.scaleLinear()
      .domain([0, d3.max(data, d => d.y) || 1])
      .nice()
      .range([height - margin.bottom, margin.top]);

    // Ejes
    const xAxis = d3.axisBottom(x).ticks(10);
    const yAxis = d3.axisLeft(y).ticks(6);

    svg.append("g")
      .attr("transform", `translate(0,${height - margin.bottom})`)
      .call(xAxis);

    svg.append("g")
      .attr("transform", `translate(${margin.left},0)`)
      .call(yAxis);

    // Línea de la función
    const line = d3.line<{ t: number; y: number }>()
      .x(d => x(d.t))
      .y(d => y(d.y));

    svg.append("path")
      .datum(data)
      .attr("fill", "none")
      .attr("stroke", "#009689")
      .attr("stroke-width", 2)
      .attr("d", line);

  }, [A, b, p, T0, Tmax]);

  return <svg ref={ref} width={500} height={300} />;
}
