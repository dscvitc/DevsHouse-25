import ContactUs from "@/components/Contact";
import Glimpses from "@/components/Glimpses";
import Tracks from "@/components/tracks/tracks";
import Timeline from "@/components/Timeline";
import About from "@/components/About";
import Org from "@/components/organizers/Org";

export default function Home() {
  return (
    <>
      <About />
      <Tracks />
      <Timeline />
      <Org />
      <Glimpses />
      <ContactUs />
    </>
  );
}
