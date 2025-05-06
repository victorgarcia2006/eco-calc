import React from "react";
import Layout from "@/components/Layout";

const ToolExplanation = () => {
  return (
    <Layout title="Cómo Funciona - EcoCalc">
      <section className="bg-white p-8 rounded shadow-md max-w-4xl mx-auto my-10">
        <h2 className="text-3xl font-bold mb-6 text-emerald-700">
          ¿Cómo funciona la herramienta?
        </h2>

        <p className="mb-4">
          Esta herramienta permite estimar el crecimiento económico futuro de un
          país usando un modelo de integral impropia basada en el Producto
          Interno Bruto (PIB). Se usa una función de la forma:
          <strong> A / t^p </strong> donde:
        </p>

        <ul className="list-disc list-inside mb-6">
          <li>
            <strong>A:</strong> PIB del año de referencia (en dólares)
          </li>
          <li>
            <strong>t:</strong> Tiempo en años transcurrido desde el año de
            referencia
          </li>
          <li>
            <strong>p:</strong> Parámetro que representa el nivel de
            desaceleración económica
          </li>
        </ul>

        <p className="mb-6">
          Luego se calcula la integral impropia desde un año inicial (T₀) hasta
          infinito, lo que representa el
          <strong> PIB acumulado futuro</strong>. La convergencia o divergencia
          de esta integral indica comportamientos económicos relevantes.
        </p>

        <h3 className="text-2xl font-semibold mt-8 mb-4 text-emerald-600">
          ¿Qué significa que la integral <u>converja</u>?
        </h3>

        <p className="mb-4">
          Cuando la integral converge, el área bajo la curva es finita. Esto
          ocurre cuando el parámetro
          <strong> p &gt; 1</strong>, lo cual representa una desaceleración
          suficientemente fuerte en el tiempo.
        </p>

        <h4 className="font-semibold text-lg mb-2">
          Interpretación económica:
        </h4>
        <ul className="list-disc list-inside mb-4">
          <li>
            La economía está entrando en una fase de madurez o estabilidad.
          </li>
          <li>
            El crecimiento económico se desacelera progresivamente con el
            tiempo.
          </li>
          <li>
            Es característico de países desarrollados o con mercados ya
            consolidados.
          </li>
        </ul>

        <h4 className="font-semibold text-lg mb-2">
          Acciones que podría tomar un economista:
        </h4>
        <ul className="list-disc list-inside mb-6">
          <li>Fomentar la innovación para evitar estancamiento económico.</li>
          <li>
            Enfocar políticas en mejorar calidad de vida y sostenibilidad.
          </li>
          <li>Mantener finanzas públicas equilibradas.</li>
          <li>
            Evitar estímulos innecesarios si ya hay crecimiento saludable.
          </li>
        </ul>

        <h3 className="text-2xl font-semibold mt-8 mb-4 text-emerald-600">
          ¿Qué significa que la integral <u>diverja</u>?
        </h3>

        <p className="mb-4">
          Cuando la integral diverge, el área bajo la curva es infinita. Esto
          ocurre cuando
          <strong> p ≤ 1</strong>, lo cual implica que la desaceleración del PIB
          es demasiado lenta o nula.
        </p>

        <h4 className="font-semibold text-lg mb-2">
          Interpretación económica:
        </h4>
        <ul className="list-disc list-inside mb-4">
          <li>La economía crece de manera agresiva y sin freno aparente.</li>
          <li>
            Podría simular una economía en expansión rápida, típica de países
            emergentes.
          </li>
          <li>
            Sin embargo, este crecimiento puede no ser sostenible en el largo
            plazo.
          </li>
        </ul>

        <h4 className="font-semibold text-lg mb-2">
          Posibles riesgos y acciones:
        </h4>
        <ul className="list-disc list-inside mb-6">
          <li>Alto riesgo de inflación o burbujas financieras.</li>
          <li>
            Puede haber sobreexplotación de recursos o concentración de riqueza.
          </li>
          <li>
            Los economistas deben vigilar si el crecimiento es equitativo y
            sostenible.
          </li>
          <li>
            Se deben implementar políticas de estabilización macroeconómica.
          </li>
        </ul>

        <h3 className="text-2xl font-semibold mt-8 mb-4 text-emerald-600">
          Resumen
        </h3>
        <table className="w-full border border-gray-300 text-sm">
          <thead className="bg-emerald-100">
            <tr>
              <th className="border p-2">Situación</th>
              <th className="border p-2">Ventaja</th>
              <th className="border p-2">Riesgo</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border p-2 font-semibold">
                Integral Converge (p &gt; 1)
              </td>
              <td className="border p-2">Estabilidad, madurez</td>
              <td className="border p-2">Estancamiento si no se innova</td>
            </tr>
            <tr>
              <td className="border p-2 font-semibold">
                Integral Diverge (p ≤ 1)
              </td>
              <td className="border p-2">Crecimiento rápido</td>
              <td className="border p-2">Inestabilidad, desigualdad</td>
            </tr>
          </tbody>
        </table>
      </section>
    </Layout>
  );
};

export default ToolExplanation;
