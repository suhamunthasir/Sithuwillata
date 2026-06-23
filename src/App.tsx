import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Impact from "./pages/Impact";
import Projects from "./pages/Projects";
import About from "./pages/About";
import Gallery from "./pages/Gallery";
import { LanguageProvider } from "./i18n";

export default function App() {
  return (
    <LanguageProvider>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="impact" element={<Impact />} />
          <Route path="projects" element={<Projects />} />
          <Route path="about" element={<About />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
    </LanguageProvider>
  );
}
