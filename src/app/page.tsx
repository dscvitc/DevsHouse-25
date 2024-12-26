import ContactUs from '@/components/Contact';
import Glimpses from '@/components/Glimpses';
import Tracks from '@/components/tracks/tracks';
import Timeline from '@/components/Timeline';
import Prizes from '@/components/prizes/Prizes';

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
