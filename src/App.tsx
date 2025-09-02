import { BrowserRouter, Route, Routes } from "react-router";
import RootLayout from "./pages/layout";
import SignInPage from "./pages/auth/sign-in/page";
import SignUpPage from "./pages/auth/sign-up/page";
import AuthLayout from "./pages/auth/layout";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route element={<AuthLayout />}>
            <Route path="/auth/sign-in" element={<SignInPage />} />
            <Route path="/auth/sign-up" element={<SignUpPage />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
