import ContactUs from '@/components/Contact';
import Glimpses from '@/components/Glimpses';
import Tracks from '@/components/tracks/tracks';
import Timeline from '@/components/Timeline';
import HostInvitation from '@/components/HostInvitation';

export default function Home() {
	return (
		<>
			<Tracks />
			<Timeline />
			<Glimpses />
			<HostInvitation />
			<ContactUs />

		</>
	)
}
