import { Icones } from "../../assets/icons/index.icons";

export default function NoData() {
  return (
    <>
      <div className="flex flex-col p-2 w-full h-full items-center justify-center text-center text-primary text-xl">
        <Icones.pesquisa className="m-2" size={60} />
        <p>Não existem dados para serem exibidos</p>
      </div>
    </>
  );
}
