export interface IOrders {
  codPedido: string;
  documento: string;
  razaoSocial: string;
  cep: string;
  produto: string;
  numPedido: number;
  data: Date;
  prazo: number;
  frete: number;
  regiao: string;
  valorProduto: number;
}
