import OrgCard from "./OrgCard";
import { Organizers } from "../data/Organizers";

export default function OrgGrid() {
  return (
    <div className="xl:p-40">
      <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 xl:gap-10 lg:gap-8">
        {Organizers.map((organizer) => (
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
