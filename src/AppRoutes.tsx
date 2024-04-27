import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ViewPdf from "./pages/ViewPdf";
import ComingSoon from "./pages/ComingSoon";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/view-pdf" element={<ViewPdf />} />
      <Route path="/coming-soon" element={<ComingSoon />} />
    </Routes>
  );
}

export default AppRoutes;
