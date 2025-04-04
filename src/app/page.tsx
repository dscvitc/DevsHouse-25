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
import Image from "next/image";
export default function Home() {
  return (
    <>
    {/* MLH Banner */}
    <a
            id="mlh-trust-badge"
            style={{
              display: 'block',
              maxWidth: '100px',
              minWidth: '60px',
              position: 'fixed',
              right: '50px',
              top: 0,
              width: '10%',
              zIndex: 10000
            }}
            href="https://mlh.io/apac?utm_source=apac-hackathon&utm_medium=TrustBadge&utm_campaign=2025-season&utm_content=gray"
            target="_blank"
            rel="noopener noreferrer"
            data-lenis-prevent
          >
            <Image
              src="https://s3.amazonaws.com/logged-assets/trust-badge/2025/mlh-trust-badge-2025-white.svg"
              alt="Major League Hacking 2025 Hackathon Season"
              width={100}
              height={100}
              style={{ width: '100%', height: 'auto' }}
              priority
            />
          </a>
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
