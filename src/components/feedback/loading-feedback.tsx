import loadingGif from "../../assets/gif/loading.gif";

export default function Loading() {
  return (
    <div className="flex flex-col justify-center items-center text-center text-2xl p-20 w-full h-full">
      <img className="p-2 max-w-xs w-32" src={loadingGif} alt="spinner" />
    </div>
  );
}
