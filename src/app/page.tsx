import ContactUs from "@/components/Contact";
import Glimpses from "@/components/Glimpses";
import Tracks from "@/components/tracks/tracks";
import Timeline from "@/components/Timeline";
import HostInvitation from "@/components/HostInvitation";
import About from "@/components/About";
import Speakers from "@/components/Speakers";
import FAQ from '@/components/FAQ';
  
  
export default function Home() {
  return (
    <>
      <About />
      <Tracks />
      <Timeline />
      <Speakers />
      <FAQ />
      <Glimpses />
      <HostInvitation />
      <ContactUs />
    </>
  );
}
