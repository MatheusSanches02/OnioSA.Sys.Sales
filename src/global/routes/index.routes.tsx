import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "../../pages/home/index.home";
import Upload from "../../pages/uploadFiles/index.upload";
import Graphics from "../../pages/graphics/index.graphics";

export default function AppRoutes() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route path="/home/uploadFiles" element={<Upload />}></Route>
            <Route path="/home/graphics" element={<Graphics />}></Route>
          </Route>
        </Routes>
      </Router>
    </>
  );
}
