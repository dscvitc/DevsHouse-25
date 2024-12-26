import OrgCard from "./OrgCard/OrgCard";
import { Organizers } from "../../data/Organizers";

export default function OrgGrid() {
  return (
    <div className="w-full flex justify-center lg:pt-20 md:pt-10">
      <div className="xl:grid xl:grid-cols-4 hidden w-max gap-8">
        {Organizers.slice(0, 12).map((organizer) => (
          <OrgCard
            key={Math.random() * 100}
            name={organizer.name}
            image={organizer.image}
            linkedIn={organizer.linkedIn}
          />
        ))}
      </div>
      <div className="lg:grid xl:hidden lg:grid-cols-3 hidden w-max gap-8">
        {Organizers.slice(0, 6).map((organizer) => (
          <OrgCard
            key={Math.random() * 100}
            name={organizer.name}
            image={organizer.image}
            linkedIn={organizer.linkedIn}
          />
        ))}
      </div>
      <div className="md:grid xl:hidden lg:hidden md:grid-cols-2 hidden w-max gap-8">
        {Organizers.slice(0, 4).map((organizer) => (
          <OrgCard
            key={Math.random() * 100}
            name={organizer.name}
            image={organizer.image}
            linkedIn={organizer.linkedIn}
          />
        ))}
      </div>
      <div className="grid xl:hidden lg:hidden md:hidden grid-cols-1 w-max gap-8">
        {Organizers.slice(0, 1).map((organizer) => (
          <OrgCard
            key={Math.random() * 100}
            name={organizer.name}
            image={organizer.image}
            linkedIn={organizer.linkedIn}
          />
        ))}
      </div>
    </div>
  );
}
