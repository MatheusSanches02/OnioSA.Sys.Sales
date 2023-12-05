import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "../../pages/home/index.home";

export default function AppRoutes() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/home/uploadFiles" element={<Home />} />
        </Routes>
      </Router>
    </>
  );
}
