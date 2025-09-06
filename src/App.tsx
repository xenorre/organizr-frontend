import { BrowserRouter, Route, Routes } from "react-router";
import RootLayout from "./pages/layout";
import AuthPage from "./pages/auth/page";
import AuthLayout from "./pages/auth/layout";
import MainDashboard from "./pages/dashboard/page";
import { PrivateRoute } from "./lib/utils/PrivateRoute";
import { PublicRoute } from "./lib/utils/PublicRoute";
import { SessionRedirect } from "./lib/utils/SessionRedirect";

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
          <Route
            path="/dashboard"
            element={
              <PrivateRoute>
                <MainDashboard />
              </PrivateRoute>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
