// this is the main org component, all other org components will be imported here
import OrgGrid from "./OrgGrid";
import OrgHeader from "./OrgHeader";
import OrgBg from "./OrgBg";

export default function Org() {
  return (
    <div className="py-10" id="organizers">
      <OrgHeader></OrgHeader>
      <div className="relative">
        <div className="md:block hidden xl:mb-[22rem] lg:mb-[102rem] md:mb-[162rem]">
          <OrgBg />
        </div>
        <div className="md:absolute top-0 w-full">
          <OrgGrid></OrgGrid>
        </div>
      </div>
    </div>
  );
}
