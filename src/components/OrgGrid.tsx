import OrgCard from "./OrgCard";
import { Organizers } from "../data/Organizers";

export default function OrgGrid() {
  return (
    <div className="w-full flex justify-center pt-20">
      <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 w-max gap-8">
        {Organizers.slice(0, 12).map((organizer) => (
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
