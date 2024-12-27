import ContactUs from "@/components/Contact";
import Glimpses from "@/components/Glimpses";
import Tracks from "@/components/tracks/tracks";
import Timeline from "@/components/Timeline";
import HostInvitation from "@/components/HostInvitation";
import About from "@/components/About";
import Prizes from "@/components/prizes/PrizesComponent";
import Org from "@/components/organizers/Org";
import Speakers from "@/components/Speakers";
import FAQ from "@/components/FAQ";
import Hero from "@/components/hero/Hero";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Tracks />
      <Prizes />
      <Timeline />
      <Org />
      <Speakers />
      <FAQ />
      <Glimpses />
      <HostInvitation />
      <ContactUs />
    </>
  );
}
