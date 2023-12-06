import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ID } from "../../global/utils/index.utils";

export default function HomeHeader() {
  const navigate = useNavigate();
  const [abaSelecionada, setAbaSelecionada] = useState<string>("");
  return (
    <header className="w-full bg-primary-background h-[10%] flex flex-row justify-between">
      <h1 className="text-primary-color p-4 font-bold font-lato text-3xl">
        Onion S.A.
      </h1>
      <nav>
        <ul className="flex flex-rox m-4">
          <li
            className={`text-primary-color px-2 cursor-pointer ${
              abaSelecionada === ID.aba_upload ? "underline font-bold" : null
            }`}
            onClick={() => {
              setAbaSelecionada(ID.aba_upload);
              navigate("/home/uploadFiles");
            }}
          >
            Upload
          </li>
          <li
            className={`text-primary-color px-2 cursor-pointer ${
              abaSelecionada === ID.aba_graficos ? "underline font-bold" : null
            }`}
            onClick={() => {
              setAbaSelecionada(ID.aba_graficos);
              navigate("/");
            }}
          >
            Gráficos
          </li>
        </ul>
      </nav>
    </header>
  );
}
