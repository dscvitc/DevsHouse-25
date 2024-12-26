import ContactUs from '@/components/Contact';
import Glimpses from '@/components/Glimpses';
import Tracks from '@/components/tracks/tracks';
import Timeline from '@/components/Timeline';
import FAQ from '@/components/FAQ';
import HostInvitation from '@/components/HostInvitation';
import About from "@/components/About";


export default function Home() {
	return (
		<>
      
		  <About />
			<Tracks />
			<Timeline />
      <FAQ />
			<Glimpses />
			<HostInvitation />
			<ContactUs />
			
		</>
	)
}
