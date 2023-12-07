import { toast } from "react-toastify";
import { api } from "./index.services";

export async function IncludeFiles(file: FormData) {
  try {
    let response = await api.post("api/Arquivos/Incluir", file);

    const data = response.data;

    return data;
  } catch (error: unknown) {
    if (error instanceof Error) {
      toast.error(error.message);
    }
  }
}

export async function GetAll() {
  try {
    let response = await api.get("api/Arquivos/ObterLista");
    const data = response.data;
    return data;
  } catch (error: unknown) {
    if (error instanceof Error) {
      toast.error(error.message);
    }
  }
}
