// components/TheorySection.tsx
import React from "react";
import Layout from "@/components/Layout";
import "katex/dist/katex.min.css";
import Latex from "react-latex-next";

const TheorySection: React.FC = () => {
  return (
    <Layout title="Teoría - EcoCalc">
      <div className="bg-white p-8 rounded shadow-md max-w-4xl mx-auto my-10">
        <h1 className="text-3xl font-bold mb-6 text-emerald-700">
          Teoría del Modelo de Crecimiento del PIB
        </h1>

        {/* Fundamento Matemático */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mt-8 mb-4 text-emerald-600">
            1. Fundamento Matemático
          </h2>
          <p className="mb-3">
            El crecimiento del Producto Interno Bruto (PIB) se modela mediante
            funciones matemáticas que describen su comportamiento a lo largo del
            tiempo. En este proyecto se propone el siguiente modelo:
          </p>
          <div className="bg-gray-100 p-4 rounded mb-3">
            <Latex>
              {`$$
                    f(t) = \\frac{A}{(t + b)^p}
                  $$
                `}
            </Latex>
          </div>
          <p className="mb-3">Donde:</p>
          <ul className="list-disc list-inside mb-3">
            <li>
              <strong>f(t)</strong> representa la tasa de crecimiento del PIB en
              el tiempo <em>t</em>.
            </li>
            <li>
              <strong>A</strong> es la constante de escala (PIB del año de
              referencia).
            </li>
            <li>
              <strong>b</strong> es un parámetro que ajusta el inicio del
              crecimiento (desfase temporal).
            </li>
            <li>
              <strong>p</strong> es el parámetro de <em>desaceleración</em>;
              este valor determina qué tan rápidamente el crecimiento disminuye
              con el tiempo.
            </li>
            <li>
              <strong>t</strong> es el tiempo transcurrido desde un punto base.
            </li>
          </ul>
          <p className="mb-3">
            Para analizar la contribución acumulada del PIB futuro, se utiliza
            la integral impropia:
          </p>
          <div className="bg-gray-100 p-4 rounded mb-3">
            <Latex>
              {`$$
                    PIB(t) = \\int_{T_0}^{\\infty} f(t) dt
                  $$
                `}
            </Latex>
          </div>
          <p className="mb-3">
            Esta integral es <strong>impropia</strong> por el límite superior
            infinito. Su convergencia depende de <strong>p</strong>:
          </p>
          <ul className="list-disc list-inside">
            <li>
              Si <strong>p &gt; 1</strong>, la integral converge (el crecimiento
              acumulado es finito).
            </li>
            <li>
              Si <strong>p ≤ 1</strong>, la integral diverge (el crecimiento
              acumulado es infinito).
            </li>
          </ul>
        </section>

        {/* Fundamento Económico */}
        <section>
          <h2 className="text-2xl font-semibold mt-8 mb-4 text-emerald-600">
            2. Fundamento Económico
          </h2>
          <p className="mb-3">
            El Producto Interno Bruto (PIB) es una medida esencial que indica el
            valor total de los bienes y servicios producidos en un país, siendo
            uno de los indicadores clave de la salud económica.
          </p>
          <p className="mb-3">
            El modelo propuesto refleja que, a medida que transcurre el tiempo,
            el crecimiento del PIB no es constante; en cambio, se desacelera.
            Esta desaceleración se representa con el parámetro{" "}
            <strong>p</strong>, que indica la rapidez con que disminuye la tasa
            de crecimiento:
          </p>
          <ul className="list-disc list-inside mb-3">
            <li>
              Un valor alto de <strong>p</strong> implica que la economía se
              estabiliza más rápidamente, ya que cada unidad de tiempo añade
              menos valor al acumulado total.
            </li>
            <li>
              Un valor bajo de <strong>p</strong> implica una desaceleración
              lenta y, en algunos casos, puede sugerir un crecimiento excesivo
              (si se extiende a tiempos muy tempranos, el modelo podría predecir
              una acumulación infinita, lo cual no es realista en la práctica).
            </li>
          </ul>
          <p className="mb-3">
            Además, el límite inferior <strong>T₀</strong> marca el inicio del
            periodo de análisis. Es importante elegir este punto de manera que
            represente un momento significativo en el desarrollo económico (por
            ejemplo, el año en que se implementó una política económica
            importante o el inicio de una recesión/expansión).
          </p>
          <p>
            En resumen, este modelo permite entender cómo las condiciones
            iniciales y la tasa de desaceleración influyen en el crecimiento
            acumulado del PIB, ofreciendo una herramienta para analizar la{" "}
            <em>sostenibilidad</em> del crecimiento económico a largo plazo.
          </p>
        </section>
      </div>
    </Layout>
  );
};

export default TheorySection;
