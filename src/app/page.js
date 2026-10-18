import AnnouncementBar from "./components/AnnouncementBar"
import NavBar from "./components/NavBar"
import Hero from "./components/Hero"
import HeroIntro from "./components/HeroIntro"
import Skills from "./components/Skills"
import Projects from "./components/Projects"
import Contact from "./components/Contact"
export default function Home() {
  return (
   <div className="">
    <AnnouncementBar />
    <NavBar />
    <Hero />
    <HeroIntro />
    <Skills />
    <Projects />
    <Contact />
   </div>
  )
}
