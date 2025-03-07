import Home from "@/app/components/ui/Home/Home";
import About from "@/app/components/ui/About/About";
import Services from "@/app/components/ui/Services/Services";

export default function HomePage() {
  return (
    <main>
      <Home />
      <About />
      <Services />
      <Contact />
    </main>
  );
}
