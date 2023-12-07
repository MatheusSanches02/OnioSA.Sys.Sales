import { ChangeEvent, useEffect, useState } from "react";
import { GetAll, IncludeFiles } from "../../services/arquivos.services";
import { toast } from "react-toastify";
import { IFiles } from "../../global/interface/index.interface";

export default function UploadFiles() {
  const [file, setFile] = useState<File | null>(null);
  const [updateList, setUpdateList] = useState<boolean>(true);
  const [fileList, setFileList] = useState<IFiles[]>();

  useEffect(() => {
    async function getFiles() {
      let resp = await GetAll();

      if (resp.sucesso) {
        setFileList(resp.dados);
        setUpdateList(false);
      }
    }
    if (updateList) {
      getFiles();
    }
  }, [updateList]);

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files && e.target.files[0];

    if (selectedFile) {
      setFile(selectedFile);
    }
  };

  const handleUpload = async () => {
    try {
      if (file) {
        const formData = new FormData();
        formData.append("criarArquivo", file);

        const response = await IncludeFiles(formData);

        if (response.sucesso) {
          toast.success(response.mensagem);
          setUpdateList(true);
        }
      }
    } catch (error) {
      toast.error("Erro ao fazer upload de planilha");
    }
  };
  return (
    <div className="w-full h-full">
      <p className="text-primary-color text-lg w-[70%] m-auto text-center font-bold pt-2">
        Bem vindo ao sistema Nº 1 em organização e controle de vendas. Aqui você
        conseguirá importar uma planilha Excel e ter um controle através de
        gráficos das suas vendas!
      </p>
      <div className="h-[80%] w-[80%] rounded-md bg-primary-cards-background m-auto mt-5">
        <div className="flex flex-row justify-between m-2">
          <div className="grid grid-cols-1 gap-2">
            <p className="text-black text-lg font-bold ">
              Importe sua planilha
            </p>
            <div className="flex flex-row">
              <input
                type="file"
                className="self-center"
                onChange={handleFileChange}
              />
              <button
                onClick={handleUpload}
                className="rounded-lg border-2 border-secondary-button p-2 m-2"
              >
                Enviar
              </button>
            </div>
          </div>
          <button className="rounded-lg border-2 border-secondary-button bg-primary-button p-2 m-2">
            Download Exemplo
          </button>
        </div>
        <div className="w-ful h-px bg-primary-background"></div>
        <div className="h-[70%] overflow-y-auto">
          {fileList?.map((f, i) => (
            <div
              className="w-[95%] h-auto rounded-lg border-2 border-primary-border m-auto my-2"
              key={i}
            >
              <p className="text-black p-2">{f.nomeArquivo}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
