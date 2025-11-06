import { Route, Routes } from "react-router-dom";
import Career from "../pages/Career";
import Dashboard from "../pages/Dashboard";
import Team from "../pages/Team";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Community from "../pages/Community";
import PageNotFound from "../PageNotFound";
import CareerWrapper from "../components/careerComponent/CareerWrapper";
import CareerRoadmap from "../components/careerComponent/CareerRoadmap";
import CareerJobs from "../components/careerComponent/CareerJobs";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/career" element={<Career />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/team" element={<Team />} />
      <Route path="/community" element={<Community />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      <Route path="/career-wrapper" element={<CareerWrapper />}>
        <Route path="roadmap" element={<CareerRoadmap />} />
        <Route path="jobs" element={<CareerJobs />} />
      </Route>

      <Route path="/*" element={<PageNotFound />} />
    </Routes>
  );
};

export default MainRoutes;
