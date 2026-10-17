import AnnouncementBar from "./components/AnnouncementBar"
import NavBar from "./components/NavBar"
import Hero from "./components/Hero"
import HeroIntro from "./components/HeroIntro"
import Skills from "./components/Skills"
export default function Home() {
  return (
   <div className="">
    <AnnouncementBar />
    <NavBar />
    <Hero />
    <HeroIntro />
    <Skills />
   </div>
  )
}
