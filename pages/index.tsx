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

function HomePage() {
  const [result, setResult] = useState<number | null>(null);

  const randomResult = Math.random() * 100; // Simulación de un resultado aleatorio

  const handleCalculate = () => {
    // Aquí iría la lógica para calcular el PIB
    setResult(randomResult);
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
            <p className="text-gray-700 mt-2">
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
            </p>
          </Card.Section>
          <div className="py-4">
            <form className="flex flex-col gap-4">
              <NumberInput
                label="Valor de A"
                placeholder="A"
                min={0}
                step={0.1}
              />
              <NumberInput
                label="Valor de b"
                placeholder="b"
                min={0}
                step={0.1}
              />
              <NumberInput
                label="Valor de p"
                placeholder="p"
                min={0}
                step={0.1}
              />
              <NumberInput
                label="Valor de T₀"
                placeholder="T₀"
                min={0}
                step={0.1}
              />
              <Button onClick={handleCalculate}>Calcular PIB</Button>
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
              <div className="text-center text-gray-500 flex flex-col items-center">
                <IconChartLine className="h-12 w-12 mb-2 text-teal-300" />
                <p>Aquí se mostrará la gráfica de la función</p>
              </div>
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
                    PIB(t) = \\int_{T_0}^{\\infty} f(t) dt = ${result.toFixed(
                      2
                    )} 
                  $$
                `}
                      </Latex>
                      {result > 50 ? (
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
                  <div className="p-4 bg-blue-50 rounded-lg">
                    <h3 className="font-medium mb-2">
                      Interpretación económica:
                    </h3>
                    <p>
                      {result > 50
                        ? "La función converge, lo que indica un crecimiento económico sostenible a largo plazo con los parámetros dados."
                        : "La función diverge, lo que sugiere un crecimiento económico no sostenible o inestable con los parámetros dados."}
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
