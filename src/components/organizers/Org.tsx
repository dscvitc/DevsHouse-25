// this is the main org component, all other org components will be imported here
import OrgGrid from "./OrgGrid";
import OrgHeader from "./OrgHeader";
import OrgBg from "./OrgBg";

export default function Org() {
  return (
    <div className="py-10 md:py-0" id="organizers">
      <OrgHeader></OrgHeader>
      <div className="relative mt-16">
        <div className="md:block hidden xl:mb-[55rem] lg:mb-[135rem] md:mb-[195rem]">
          <OrgBg />
        </div>
        <div className="md:absolute top-0 w-full">
          <OrgGrid></OrgGrid>
        </div>
      </div>
    </div>
  );
}
