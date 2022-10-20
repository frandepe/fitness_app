import { BrowserRouter } from "react-router-dom";
import { Routes, Route, Navigate } from "react-router-dom";
import HomeIcon from "@rsuite/icons/legacy/Home";
import { Navbar, Nav } from "rsuite";
import { Home } from "../pages/Home";
import "./Navigation.scss";
import logoFitness from "../screens/logoFit.png";
import LazyLoad from "../components/LazyLoad";
import ExerciseById from "../components/ExerciseById/ExerciseById";

export const Navigation = () => {
  return (
    <BrowserRouter>
      <div>
        <Navbar className="Navigation__navbar">
          <Navbar.Brand className="Navigation__logo">
            <LazyLoad
              alt="logoFitness"
              height="80px"
              src={logoFitness}
              width="80px"
            />
          </Navbar.Brand>
          <Nav>
            <Nav.Item icon={<HomeIcon />} href="/home">
              Home
            </Nav.Item>
          </Nav>
          <Nav pullRight style={{ marginRight: "10px" }}>
            <Nav.Menu title="Dev" className="Navigation__dropdown">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://frandepaulo.com"
              >
                Portfolio
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.linkedin.com/in/franco-de-paulo/"
              >
                LinkedIn
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/frandepe"
              >
                GitHub
              </a>
            </Nav.Menu>
          </Nav>
        </Navbar>

        <Routes>
          <Route path="/home" element={<Home />}>
            <Route path=":id" element={<ExerciseById />} />
          </Route>
          <Route path="/about" element={<h1>Home Page</h1>} />
          <Route path="/*" element={<Navigate to="/home" replace />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};
