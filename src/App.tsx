import "./App.css";
import AppRoutes from "./global/routes/index.routes";

function App() {
  return (
    <div className="app-layout-blank flex flex-auto flex-col h-[100vh]">
      <AppRoutes />
    </div>
  );
}

export default App;
