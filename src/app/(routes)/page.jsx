import Home from "@/components/ui/Home/Home";
import About from "@/components/ui/About/About";
import Services from "@/components/ui/Services/Services";
import Contact from "@/components/ui/Contact/Contact"; // ✅ Ensure this exists

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
