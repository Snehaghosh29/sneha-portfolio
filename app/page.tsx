import Header from "./components/Header";
import ProfileOverView from "./components/ProfileOverView";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import ContactForm from "./components/ContactForm";
import WorkExperience from "./components/WorkExperience";
import AnimatedPageWrapper from "./components/AnimatedPageWrapper";

export default function Home() {
  return (
    <AnimatedPageWrapper>
      <main className="relative overflow-x-hidden">

        <Header />

        <section id="home" className="scroll-mt-28 bg-transparent">
          <ProfileOverView />
        </section>

        <section id="skills" className="scroll-mt-28 bg-transparent">
          <Skills />
        </section>

        <section id="projects" className="scroll-mt-28 bg-transparent">
          <Projects />
        </section>

        <section id="experience" className="scroll-mt-28 bg-transparent">
          <WorkExperience />
        </section>

        <section id="contact" className="scroll-mt-28 bg-transparent">
          <ContactForm />
        </section>

      </main>
    </AnimatedPageWrapper>
  );
}
