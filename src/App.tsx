import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";
import About from "./sections/About";
import Hero from "./sections/Hero";
import Projects from "./sections/Projects";
import Workflow from "./sections/Workflow";

export default function App() {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      <Header />
      <main className="mx-auto max-w-5xl px-6">
        <Hero />
        <Projects />
        <Workflow />
        <About />
      </main>
      <Footer />
    </div>
  );
}
