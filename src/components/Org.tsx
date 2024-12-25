// this is the main org component, all other org components will be imported here
import OrgGrid from "./OrgGrid";
import OrgHeader from "./OrgHeader";
import OrgBg from "./OrgBg";

export default function Org() {
  return (
    <>
      <OrgHeader></OrgHeader>
      <div className="relative">
        <div className="absolute top-0 w-full">
          <OrgBg></OrgBg>
        </div>
        <div className="absolute top-0 w-full">
          <OrgGrid></OrgGrid>
        </div>
      </div>
    </>
  );
}
