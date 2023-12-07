import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ID } from "../../global/utils/index.utils";

export default function HomeHeader() {
  const navigate = useNavigate();
  const [selectedTab, setSelectedTab] = useState<string>("");
  return (
    <header className="w-full bg-primary-background h-[10%] flex flex-row justify-between">
      <h1
        className="text-primary-color p-4 font-bold font-lato text-3xl"
        onClick={() => {
          setSelectedTab("");
          navigate("/");
        }}
      >
        Onion S.A.
      </h1>
      <nav>
        <ul className="flex flex-rox m-4">
          <li
            className={`text-primary-color px-2 cursor-pointer ${
              selectedTab === ID.tab_upload ? "underline font-bold" : null
            }`}
            onClick={() => {
              setSelectedTab(ID.tab_upload);
              navigate("/home/uploadFiles");
            }}
          >
            Upload
          </li>
          <li
            className={`text-primary-color px-2 cursor-pointer ${
              selectedTab === ID.tab_graphics ? "underline font-bold" : null
            }`}
            onClick={() => {
              setSelectedTab(ID.tab_graphics);
              navigate("/home/graphics");
            }}
          >
            Gráficos
          </li>
        </ul>
      </nav>
    </header>
  );
}
