import About from "@/components/ui/About/About";
import Client from "@/components/ui/Clients/Clients";
import Home from "@/components/ui/Home/Home";
import Locations from "@/components/ui/Locations/Locations";
import Layout from "@/layout/Layout"

export default function HomePage() {
  return (
    <main>
      <Layout>
        <Home />
        <About />
        <Client />
        <Locations />
      </Layout>
    </main>
  );
}
