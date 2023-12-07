const PlanilhaExemplo =
  require("../../assets/excel/PlanilhaTeste.xlsx") as string;

export default function DonwloadButton() {
  const downloadArquivo = () => {
    const linkDownload = document.createElement("a");
    linkDownload.href = PlanilhaExemplo;
    linkDownload.download = "PlanilhaExemplo.xlsx";
    document.body.appendChild(linkDownload);
    linkDownload.click();
    document.body.removeChild(linkDownload);
  };
  return (
    <button
      className="rounded-lg border-2 border-secondary-button bg-primary-button p-2 m-2"
      onClick={downloadArquivo}
    >
      Download Exemplo
    </button>
  );
}
