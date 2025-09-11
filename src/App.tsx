import { BrowserRouter, Route, Routes } from "react-router";
import RootLayout from "./pages/layout";
import AuthPage from "./pages/auth/page";
import AuthLayout from "./pages/auth/layout";
import { PrivateRoute } from "./lib/utils/PrivateRoute";
import { PublicRoute } from "./lib/utils/PublicRoute";
import { SessionRedirect } from "./lib/utils/SessionRedirect";
import DashboardLayout from "./pages/dashboard/layout";
import MainProjects from "./pages/projects/page";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route index element={<SessionRedirect />} />
          <Route element={<AuthLayout />}>
            <Route
              path="/auth"
              element={
                <PublicRoute>
                  <AuthPage />
                </PublicRoute>
              }
            />
          </Route>
          <Route element={<DashboardLayout />} path="/dashboard">
            <Route
              index
              element={
                <PrivateRoute>
                  <div>Main Dashboard</div>
                </PrivateRoute>
              }
            />
            <Route
              path="/dashboard/projects"
              element={
                <PrivateRoute>
                  <MainProjects />
                </PrivateRoute>
              }
            />
            <Route
              path="/dashboard/team"
              element={
                <PrivateRoute>
                  <div>Team page</div>
                </PrivateRoute>
              }
            />
          </Route>
          <Route element={<DashboardLayout />} path="/profile">
            <Route
              index
              element={
                <PrivateRoute>
                  <div>Profile page</div>
                </PrivateRoute>
              }
            />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
