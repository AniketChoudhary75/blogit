import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { Signin } from "./pages/Signin";
import { Signup } from "./pages/Signup";
import { Blog } from "./pages/Blog";
import { Profile } from "./pages/Profile";
import { Home } from "./pages/Home";
import Landing from "./pages/Landing";
import { Appbar } from "./components/ui/Appbar";
import Footer from "./components/ui/Footer";
import { RecoilRoot } from "recoil";
import { ProtectedRoute } from "./components/ui/ProtectedRoute";
import { Create } from "./pages/Create";
import { Suspense } from "react";
import { Spinner } from "./components/ui/Spinner";
import { Toaster } from "react-hot-toast";

const App = () => {
  return (
    <RecoilRoot>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route
              path={"/signup" || "/signup/"}
              element={
                <ProtectedRoute redirectTo="/home">
                  <Signup />
                </ProtectedRoute>
              }
            />
            <Route
              path={"/signin" || "/signin/"}
              element={
                <ProtectedRoute redirectTo="/home">
                  <Signin />
                </ProtectedRoute>
              }
            />
            <Route
              path={"/blog/:id"}
              element={
                <section className="min-h-screen">
                  <Blog />
                </section>
              }
            />
            <Route path={"/profile/:username"} element={<Profile />} />

            <Route
              path={"/home"}
              element={
                <Suspense
                  fallback={
                    <div className="min-h-screen">
                      <Spinner />
                    </div>
                  }
                >
                  <Home />
                </Suspense>
              }
            />

            <Route path={"/write"} element={<Create />} />
          </Routes>
          <Toaster position="bottom-left" />
        </Layout>
      </BrowserRouter>
    </RecoilRoot>
  );
};

const Layout = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();
  const hideAppbarPaths = ["/", "/signup", "/signin", "/profile/"];

  return (
    <>
      {!hideAppbarPaths.includes(location.pathname) && <Appbar />}
      {children}
      {!hideAppbarPaths.includes(location.pathname) && <Footer />}
    </>
  );
};

export default App;
