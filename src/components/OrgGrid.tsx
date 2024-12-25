import OrgCard from "./OrgCard";
import { Organizers } from "../data/Organizers";

export default function OrgGrid() {
  return (
    <div className="p-6">
      <div className="grid grid-cols-4 gap-6">
        {Organizers.map((organizer) => (
          <OrgCard
            key={Math.random() * 100} // Use a unique key
            name={organizer.name}
            image={organizer.image}
            linkedIn={organizer.linkedIn}
          />
        ))}
      </div>
    </div>
  );
}
