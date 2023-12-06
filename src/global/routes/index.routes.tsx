import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "../../pages/home/index.home";
import Upload from "../../pages/uploadFiles/index.upload";

export default function AppRoutes() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route path="/home/uploadFiles" element={<Upload />}></Route>
          </Route>
        </Routes>
      </Router>
    </>
  );
}
