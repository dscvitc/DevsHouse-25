import ContactUs from "@/components/Contact";
import Glimpses from "@/components/Glimpses";
import Tracks from "@/components/tracks/tracks";
import Timeline from "@/components/Timeline";
import HostInvitation from "@/components/HostInvitation";
import About from "@/components/About";
import Org from "@/components/organizers/Org";
import FAQ from "@/components/FAQ";
import Hero from "@/components/hero/Hero";
import Sponsors from "@/components/sponsors/Sponsors";
import Prizes from "@/components/prizes/PrizesComponent";
import Community from "@/components/Community";
import Navbar from "@/components/navigation/Navbar";
import Footer from "@/components/footer";
export default function Home() {
  return (
    <>
    <Navbar />
      <Hero />
      <About />
      <Tracks />
      <Prizes />
      <Timeline />
      <Org />
      <Sponsors />
      <Community />
      <FAQ />
      <Glimpses />
      <HostInvitation />
      <ContactUs />
      <Footer />
    </>
  );
}
