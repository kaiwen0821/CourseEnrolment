import { Routes, Route } from "react-router-dom";

import Home from "./Home";
import Diplomas from "./Diplomas";
import Diploma from "./Diploma";
import Module from "./Module";
import Register from "./Register";
import Confirmation from "./Confirmation";
import Header from "./Header";

export default function App() {
  return (
    <div className="app">
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="diplomas" element={<Diplomas />}>
          <Route path=":diplomaId" element={<Diploma />}>
            <Route path=":moduleId" element={<Module />} />
          </Route>
          <Route index element={<h3>Select a diploma from above</h3>} />
        </Route>

        <Route path="register" element={<Register />} />
        <Route path="confirmed" element={<Confirmation />} />
        <Route path="*" element={<h1 className="not-found">Page Not Found</h1>} />
      </Routes>

      <footer className="container">
        &copy; 2026 |{" "}
        <a
          href="https://www.rp.edu.sg/schools-courses"
          target="_blank"
          rel="noopener noreferrer"
        >
          Republic Polytechnic
        </a>{" "}
      </footer>
    </div>
  );
}
