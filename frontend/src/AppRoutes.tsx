import { Navigate, Route, Routes } from "react-router";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<span>Home page</span>} />
      <Route path="/User-profile" element={<span>USER PROFILE PAGE</span>} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};

export default AppRoutes;
