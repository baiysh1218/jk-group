import React from "react";
import { Route, Routes } from "react-router-dom";
import About from "../components/about/About";
import HomePage from "../components/homePage/HomePage";

import PageNotFound from "../components/pageNotFound/PageNotFound";
import ProjectsList from "../components/projects/ProjectsList";

import Team from "../components/team/Team";

const MainRoutes = () => {
  return (
    <Routes>
      {/* Define routes and their corresponding components */}
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<About />} />
      <Route path="/products" element={<ProjectsList />} />
      <Route path="/team" element={<Team />} />

      {/* The following route matches any other path */}
      <Route path="/*" element={<PageNotFound />} />
    </Routes>
  );
};

export default MainRoutes;
