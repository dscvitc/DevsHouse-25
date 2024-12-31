// this is the main org component, all other org components will be imported here
import OrgGrid from "./OrgGrid";
import OrgHeader from "./OrgHeader";
import OrgBg from "./OrgBg";

export default function Org() {
  return (
    <div className="py-10" id="organizers">
      <OrgHeader></OrgHeader>
      <div className="relative">
        <div className=" lg:block">
          <OrgBg />
        </div>
        <div className="absolute top-0 w-full">
          <OrgGrid></OrgGrid>
        </div>
      </div>
    </div>
  );
}
