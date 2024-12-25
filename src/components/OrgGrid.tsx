import OrgCard from "./OrgCard";
import { Organizers } from "../data/Organizers";

export default function OrgGrid() {
  return (
    <div className="p-40">
      <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-14">
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
