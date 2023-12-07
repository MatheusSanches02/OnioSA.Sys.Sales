import { toast } from "react-toastify";
import { api } from "./index.services";

export async function IncludeOrder(file: FormData) {
  try {
    let response = await api.post("api/Pedidos/IncluirPedido", file);

    const data = response.data;

    return data;
  } catch (error: unknown) {
    if (error instanceof Error) {
      toast.error(error.message);
    }
  }
}

export async function GetOrders() {
  try {
    let response = await api.get("api/Pedidos/ObterPedidos");

    const data = response.data;

    return data;
  } catch (error: unknown) {
    if (error instanceof Error) {
      toast.error(error.message);
    }
  }
}
