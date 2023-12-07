import Chart from "react-google-charts";
import { formatarData } from "../../global/utils/index.utils";

export default function GraphicsComponent() {
  const data = [
    ["bibliotecas", "usuarios"],
    ["recat", 15],
    [".net", 10],
    ["spring", 5],
  ];
  const options = {
    title: "Bibliotecas",
    is3D: true,
    backgroundColor: "#e7e7e7",
  };
  return (
    <div className="grid grid-cols-2 gap-2 w-full h-full bg-secondary-background">
      <div className="h-full m-4 flex flex-col">
        <Chart
          chartType="PieChart"
          data={data}
          options={options}
          width={"100%"}
          height={"300px"}
        />
        <Chart
          chartType="PieChart"
          data={data}
          options={options}
          width={"100%"}
          height={"300px"}
        />
      </div>
      <div className="h-[90%] rounded-lg m-4 border-2 border-primary-border bg-primary-cards-background">
        <p className="text-black text-lg font-bold m-2">Resumo de vendas</p>
        <div className="h-px w-full bg-primary-border"></div>
        <div
          className="flex flex-row justify-between rounded-md h-auto bg-sec-background shadow-md m-2 p-2 hover:ring-2 hover:ring-primary-button"
          // key={i}
        >
          <div className="flex flex-col text-primary">
            <p>Nome:</p>
            <p>Produto:</p>
          </div>
          <div className="flex flex-col text-primary">
            <p>Valor Final:</p>
            <p>
              Data de Entrega: {formatarData(new Date(), { onlyDate: true })}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
