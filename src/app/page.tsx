
import ContactUs from "@/components/Contact";
import Glimpses from "@/components/Glimpses";
import Tracks from "@/components/tracks/tracks";
import Timeline from "@/components/Timeline";
import HostInvitation from "@/components/HostInvitation";
import About from "@/components/About";
import Prizes from '@/components/prizes/PrizesComponent';
import Speakers from "@/components/Speakers";

export default function Home() {
  return (
    <>
      <About />
      <Tracks />
	  <Prizes />
      <Timeline />
      <Speakers />
      <Glimpses />
      <HostInvitation />
      <ContactUs />
    </>
  );
}
