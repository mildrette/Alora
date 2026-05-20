import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import MainLayout from "./layouts/MainLayout";
import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Journal from "./pages/Journal";
import Documentation from "./pages/Documentation";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <MainLayout>
        <Routes>
          <Route
            path="/"
            element={<Home />}
          />

          <Route
            path="/dashboard"
            element={<Dashboard />}
          />

          <Route
            path="/login"
            element={<Login />}
          />

          <Route
            path="/journal"
            element={<Journal />}
          />

               <Route
            path="/documentation"
            element={<Documentation />}
          />

        </Routes>
      </MainLayout>
    </BrowserRouter>
  );
}

export default App;