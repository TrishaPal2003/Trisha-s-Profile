import Home from "@/components/sections/Home";
import MyJourney from "@/components/sections/MyJourney";
import Experience from "@/components/sections/Experience";
import MyVision from "@/components/sections/MyVision";
import Leadership from "@/components/sections/Leadership";
import Contact from "@/components/sections/Contact";
export default function Page() {
  return (
    <>
      <section id="home" className="scroll-mt-16">
        <Home />
      </section>

      <section id="my-journey" className="scroll-mt-16">
        <MyJourney />
      </section>

      <section id="experience" className="scroll-mt-16">
        <Experience />
      </section>

      <section id="my-vision" className="scroll-mt-16">
        <MyVision />
      </section>

      <section id="leadership" className="scroll-mt-16">
        <Leadership />
      </section>

      <section id="contact" className="scroll-mt-16">
        <Contact />
      </section>
    </>
  );
}