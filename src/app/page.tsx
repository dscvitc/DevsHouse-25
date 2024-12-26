import ContactUs from '@/components/Contact';
import Glimpses from '@/components/Glimpses';
import Tracks from '@/components/tracks/tracks';
import Timeline from '@/components/Timeline';
import FAQ from '@/components/FAQ';

export default function Home() {
	return (
		<>
			<Tracks />
			<Timeline />
			<Glimpses />
			<ContactUs />
			<FAQ />
		</>
	)
}
