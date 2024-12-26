import ContactUs from '@/components/Contact';
import Prizes from '@/components/prizes/Prizes';
import Glimpses from '@/components/Glimpses';
import Tracks from '@/components/tracks/tracks';
import Timeline from '@/components/Timeline';

export default function Home() {
	return (
		<>
			<Prizes/>
			<Tracks />
			<Timeline />
			<Glimpses />
			<ContactUs />
		</>
	)
}
