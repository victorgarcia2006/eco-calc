import React, { useState } from "react";
import "katex/dist/katex.min.css";
import Latex from "react-latex-next";
import Layout from "@/components/Layout";
import { Card, NumberInput, Button } from "@mantine/core";
import {
  IconChartLine,
  IconExclamationCircle,
  IconCheck,
  IconX,
} from "@tabler/icons-react";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import Graph from "@/components/Graph";

function HomePage() {
  const [result, setResult] = useState<number | null>(null);
  const [loading, setLoading] = useState(false);
  const [converge, setConverge] = useState(false);
  const [year, setYear] = useState(0);
  const [A, setA] = useState(0);
  const [b, setB] = useState(0);
  const [p, setP] = useState(0);

  const { control, handleSubmit } = useForm({
    defaultValues: {
      A: 0,
      b: 0,
      p: 0,
      T0: 0,
    },
  });

  const f = (t: number, A: number, b: number, p: number) => {
    return A / Math.pow(t + b, p);
  };

  const calculatePIB = (A: number, b: number, p: number, t0: number) => {
    const tMax = 100000; // Límite superior para aproximar infinito
    let result = 0;

    for (let t = t0; t < tMax; t += 0.01) {
      result += f(t, A, b, p) * 0.01;
    }

    return result;
  };

  /*   const handleCalculate = () => {
    // Aquí iría la lógica para calcular el PIB
    setResult(randomResult);
  }; */

  const onSubmit: SubmitHandler<{
    A: number;
    b: number;
    p: number;
    T0: number;
  }> = (data) => {
    const { A, b, p, T0 } = data;
    setLoading(true);
    try {
      const pib = calculatePIB(A, b, p, T0);
      setResult(pib);
      setYear(T0);
      setA(A);
      setB(b);
      setP(p);
      if (p <= 1 || result === Infinity || T0 === 0) {
        setConverge(false);
      } else {
        setConverge(true);
      }
      setLoading(false);
    } catch (error) {
      console.error("Error al calcular el PIB:", error);
      setResult(null);
      setLoading(false);
    }
  };

  return (
    <Layout title="EcoCalc: Analiza el Futuro del PIB">
      <div className="grid grid-cols-3 gap-8">
        {/* Formulario principal*/}
        <Card className="col-span-1" shadow="sm" padding="lg" radius="md">
          <Card.Section className="p-4">
            <h1 className="text-teal-600 text-2xl font-semibold">
              Parámetros de la función
            </h1>
            <div className="text-gray-700 mt-2">
              La función está definida como: <br />
              <Latex>
                {`$$
                    f(t) = \\frac{A}{(t + b)^p}
                  $$
                `}
              </Latex>{" "}
              <br />Y el PIB acumulado a lo largo del tiempo se calcula así:
              <Latex>
                {`$$
                    PIB(t) = \\int_{T_0}^{\\infty} f(t) dt
                  $$
                `}
              </Latex>
              Introduce los parámetros de la función:
            </div>
          </Card.Section>
          <div className="py-4">
            <form
              className="flex flex-col gap-4"
              onSubmit={handleSubmit(onSubmit)}
            >
              <Controller
                name="A"
                control={control}
                render={({ field }) => (
                  <NumberInput
                    label="A: PIB inicial (en millones de dólares)"
                    placeholder="A"
                    min={0}
                    step={0.1}
                    {...field}
                  />
                )}
              />
              <Controller
                name="b"
                control={control}
                render={({ field }) => (
                  <NumberInput
                    label="b: Desface temporal (en años)"
                    placeholder="b"
                    min={0}
                    step={0.1}
                    {...field}
                  />
                )}
              />
              <Controller
                name="p"
                control={control}
                render={({ field }) => (
                  <NumberInput
                    label="p: Desaceleración del PIB"
                    placeholder="p"
                    step={0.1}
                    {...field}
                  />
                )}
              />
              <Controller
                name="T0"
                control={control}
                render={({ field }) => (
                  <NumberInput
                    label="T₀ = Año inicial (en años)"
                    placeholder="T₀"
                    min={0}
                    step={0.1}
                    {...field}
                  />
                )}
              />
              <Button type="submit" loading={loading}>
                Calcular PIB
              </Button>
            </form>
          </div>
        </Card>
        {/* Gráfica y resultados */}
        <div className="col-span-2">
          {/*Grafica */}
          <Card shadow="sm" padding="lg" radius="md">
            <Card.Section className="p-4">
              <h1 className="text-teal-600 text-2xl font-semibold">
                Gráfica del PIB
              </h1>
              <p className="text-gray-700 mt-2">
                Visualización de la función con los parámetros ingresados
              </p>
            </Card.Section>
            <div className="bg-white border border-gray-200 rounded-md p-4 h-64 flex items-center justify-center">
              {result === null ? (
                <div className="text-center text-gray-500 flex flex-col items-center">
                  <IconChartLine className="h-12 w-12 mb-2 text-teal-300" />
                  <p>Aquí se mostrará la gráfica de la función</p>
                </div>
              ) : (
                <div className="text-center text-gray-500 flex flex-col items-center justify-center mt-6">
                  <Graph
                    A={A}
                    b={b}
                    p={p}
                    T0={year}
                    Tmax={1000} // Límite superior para la gráfica
                  />
                </div>
              )}
            </div>
          </Card>
          {/* Resultados */}
          <Card shadow="sm" padding="lg" radius="md" className="mt-4">
            <Card.Section className="p-4">
              <h1 className="text-teal-600 text-2xl font-semibold">
                Resultados
              </h1>
              <p className="text-gray-700 mt-2">
                Análisis de convergencia y valor del área bajo la curva
              </p>
            </Card.Section>
            <div className="bg-white border border-gray-200 rounded-md p-4 h-72 flex">
              {result === null ? (
                <div className="text-center py-6 text-gray-500 flex flex-col items-center justify-center w-full ">
                  <IconExclamationCircle className="h-12 w-12 mx-auto mb-2 text-teal-300" />
                  <p>
                    Ingresa los parámetros y haz clic en{" "}
                    <i>Calcular Crecimiento</i> para ver los resultados
                  </p>
                </div>
              ) : (
                <div className="flex flex-col w-full gap-y-3">
                  <p className="text-gray-700 mt-2">
                    El PIB acumulado a lo largo del tiempo es:
                    <div className="flex items-center justify-between mt-2 bg-gray-50 rounded-md p-4">
                      <Latex>
                        {`$$
                    PIB(t) = \\int_{${year}}^{\\infty} \\frac{${A}}{(t + ${b})^{${p}}} = ${
                          result == Infinity
                            ? `\\infty`
                            : converge
                            ? result.toFixed(2)
                            : `\\infty`
                        } 
                  $$
                `}
                      </Latex>
                      {converge ? (
                        <div className="flex flex-col items-center">
                          <div className="rounded-full p-3 bg-green-100">
                            <IconCheck className="h-6 w-6 text-green-600" />
                          </div>
                          <span className="text-sm font-medium mt-1 text-green-600">
                            Converge
                          </span>
                        </div>
                      ) : (
                        <div className="flex flex-col items-center">
                          <div className="rounded-full p-3 bg-red-100">
                            <IconX className="h-6 w-6 text-red-600" />
                          </div>
                          <span className="text-sm font-medium mt-1 text-red-600">
                            Diverge
                          </span>
                        </div>
                      )}
                    </div>
                  </p>
                  <div className="py-2 px-4 bg-blue-50 rounded-lg">
                    <h3 className="font-medium mb-2">
                      Interpretación económica:
                    </h3>
                    <p>
                      {converge
                        ? `A partir del año ${year}, se estima que la contribución acumulada al PIB en el futuro será de aproximadamente ${result.toFixed(
                            2
                          )} billones de dólares.`
                        : "Según los parámetros proporcionados, el crecimiento económico proyectado no tiene un límite acumulado, lo que sugiere un escenario de crecimiento indefinido."}
                    </p>
                  </div>
                </div>
              )}
            </div>
          </Card>
        </div>
      </div>
    </Layout>
  );
}

export default HomePage;
