import OrgCard from "./OrgCard/OrgCard";
import { Organizers } from "../../data/Organizers";
import Heading from "../ui/Heading";

export default function OrgGrid() {
  return (
    <>
      <div className="w-full flex justify-center lg:pt-6 md:pt-2">
        <div className="grid xl:grid-cols-5 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 w-max gap-8">
          {Organizers.slice(0, 5).map((organizer) => (
            <OrgCard
              key={Math.random() * 100}
              name={organizer.name}
              image={organizer.image}
              linkedIn={organizer.linkedIn}
            />
          ))}
        </div>
      </div>
      <Heading title="TECHNICAL TEAM" geometry=""></Heading>
      <div className="w-full flex justify-center -mt-8">
        <div className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 w-max gap-8">
          {Organizers.slice(5, 8).map((organizer) => (
            <OrgCard
              key={Math.random() * 100}
              name={organizer.name}
              image={organizer.image}
              linkedIn={organizer.linkedIn}
            />
          ))}
        </div>
      </div>
      <Heading title="CO-ORGANIZER" geometry=""></Heading>
      <div className="w-full flex justify-center -mt-8">
        <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 w-max gap-8">
          {Organizers.slice(8, 16).map((organizer) => (
            <OrgCard
              key={Math.random() * 100}
              name={organizer.name}
              image={organizer.image}
              linkedIn={organizer.linkedIn}
            />
          ))}
        </div>{" "}
      </div>
    </>
  );
}
