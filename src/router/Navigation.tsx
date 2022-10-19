import { BrowserRouter } from "react-router-dom";
import { Routes, Route, Navigate } from "react-router-dom";
import HomeIcon from "@rsuite/icons/legacy/Home";
import CogIcon from "@rsuite/icons/legacy/Cog";
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
            <Nav.Item href="/users">Users</Nav.Item>
            <Nav.Item href="/about">About</Nav.Item>
            <Nav.Menu title="About">
              <Nav.Item>Company</Nav.Item>
              <Nav.Item>Team</Nav.Item>
              <Nav.Menu title="Contact">
                <Nav.Item>Via email</Nav.Item>
                <Nav.Item>Via telephone</Nav.Item>
              </Nav.Menu>
            </Nav.Menu>
          </Nav>
          <Nav pullRight>
            <Nav.Item icon={<CogIcon />}>Settings</Nav.Item>
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
