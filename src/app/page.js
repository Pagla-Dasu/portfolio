// import Image from "next/image";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectsSection";
import EmailSection from "./components/EmailSection";
import Footer from "./components/Footer";
import AchivementSection from "./components/AchivementSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212] overflow-auto xl:scrollbar xl:scrollbar-thumb-purple-500">
      <Navbar />
      <div className="container mt-24  mx-auto px-12 py-4">
        <HeroSection />
        <AchivementSection />
        <AboutSection />
        <ProjectsSection />
        <EmailSection />
      </div>
      <Footer />
    </main>
  );
}
