import { useEffect, useState } from "react";
import Chart from "react-google-charts";
import { dateFormat, deadlineCalculate } from "../../global/utils/index.utils";
import { GetOrders } from "../../services/index.services";
import { IResponse } from "../../global/interface/response.interface";
import { IOrders } from "../../global/interface/index.interface";
import { Loading, NoData } from "../index.components";

export default function GraphicsComponent() {
  const [orders, setOrders] = useState<IOrders[]>();
  const [regionChart, setRegionChart] = useState<any[]>([]);
  const [productsChart, setProductsChart] = useState<any[]>([]);

  useEffect(() => {
    async function getOrders() {
      let resp: IResponse = await GetOrders();

      if (resp?.sucesso) {
        setOrders(resp?.dados);
      }
    }

    getOrders();
  }, []);

  useEffect(() => {
    setRegionChart([
      ["Região", "Vendas"],
      [
        "Norte/Nordeste",
        orders?.filter((o) => o.regiao === "Norte/Nordeste".toUpperCase())
          .length,
      ],
      [
        "Centro-Oeste/Sul",
        orders?.filter((o) => o.regiao === "Centro/Sul".toUpperCase()).length,
      ],
      [
        "Sudeste",
        orders?.filter((o) => o.regiao === "Sudeste".toUpperCase()).length,
      ],
      [
        "São Paulo",
        orders?.filter((o) => o.regiao === "SP".toUpperCase()).length,
      ],
    ]);
    setProductsChart([
      ["Produto", "Vendas"],
      ["Celular", orders?.filter((o) => o.produto === "Celular").length],
      ["Notebook", orders?.filter((o) => o.produto === "Notebook").length],
      ["Televisão", orders?.filter((o) => o.produto === "Televisão").length],
    ]);
  }, [orders]);

  const optionsRegion = {
    title: "Vendas Por Região",
    is3D: true,
    backgroundColor: "#e7e7e7",
  };

  const optionsProduct = {
    title: "Vendas Por Produto",
    is3D: true,
    backgroundColor: "#e7e7e7",
  };
  return (
    <div className="grid grid-cols-2 gap-2 w-full h-full bg-secondary-background">
      <div className="h-full m-4 flex flex-col">
        {orders && orders?.length > 0 ? (
          <>
            <Chart
              chartType="PieChart"
              data={regionChart}
              options={optionsRegion}
              width={"100%"}
              height={"300px"}
            />
            <Chart
              chartType="PieChart"
              data={productsChart}
              options={optionsProduct}
              width={"100%"}
              height={"300px"}
            />
          </>
        ) : (
          <Loading />
        )}
      </div>
      <div className="h-[70%] rounded-lg m-4 border-2 border-primary-border bg-primary-cards-background">
        <p className="text-black text-lg font-bold m-2">Resumo de vendas</p>
        <div className="h-px w-full bg-primary-border"></div>
        <div className="h-[70%] overflow-y-auto">
          {orders && orders?.length > 0 ? (
            orders.map((o, i) => (
              <div
                className="flex flex-row justify-between rounded-md h-auto bg-sec-background shadow-md m-2 p-2 hover:ring-2 hover:ring-primary-button"
                key={i}
              >
                <div className="flex flex-col text-primary">
                  <p>Nome: {o?.razaoSocial}</p>
                  <p>Produto: {o?.produto}</p>
                </div>
                <div className="flex flex-col text-primary">
                  <p>Valor Final: {o.valorProduto + o.frete}</p>
                  <p>
                    Data de Entrega:
                    {dateFormat(deadlineCalculate(o.prazo, o.data), {
                      onlyDate: true,
                    })}
                  </p>
                </div>
              </div>
            ))
          ) : (
            <NoData />
          )}
        </div>
      </div>
    </div>
  );
}
