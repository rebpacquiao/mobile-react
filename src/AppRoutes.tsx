import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ViewPdf from "./pages/ViewPdf";
import ComingSoon from "./pages/ComingSoon";
import Share from "./pages/Share";
import ReferFriend from "./pages/ReferFriend";
import ReportIssue from "./pages/ReportIssue";
import LeaveReview from "./pages/LeaveReview";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/view-pdf" element={<ViewPdf />} />
      <Route path="/coming-soon" element={<ComingSoon />} />
      <Route path="/share" element={<Share />} />
      <Route path="/refer-friend" element={<ReferFriend />} />
      <Route path="/report-issue" element={<ReportIssue />} />
      <Route path="/leave-review" element={<LeaveReview />} />
    </Routes>
  );
}

export default AppRoutes;
