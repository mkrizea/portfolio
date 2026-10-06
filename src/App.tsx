import { useEffect, useRef } from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import NotFound from "./components/NotFound";

const titles: Record<string, string> = {
  "/": "Maria Krizea — Front-End Developer",
  "/projects": "Projects — Maria Krizea",
  "/contact": "Contact — Maria Krizea",
};

function Shell() {
  const location = useLocation();
  const mainRef = useRef<HTMLElement>(null);
  const isFirstRender = useRef(true);

  useEffect(() => {
    document.title =
      titles[location.pathname] ?? "Page not found — Maria Krizea";

    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    window.scrollTo(0, 0);
    mainRef.current?.focus({ preventScroll: true });
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 antialiased">
      <a
        href="#content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-lg focus:bg-white focus:px-3 focus:py-2 focus:text-sm focus:font-medium focus:text-gray-900 focus:shadow-md focus:outline-2 focus:outline-offset-2 focus:outline-blue-600"
      >
        Skip to content
      </a>
      <Navbar />
      <main
        id="content"
        ref={mainRef}
        tabIndex={-1}
        className="mx-auto w-full max-w-3xl scroll-mt-16 px-5 py-12 outline-none md:py-16"
      >
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Shell />
    </BrowserRouter>
  );
}

export default App;
