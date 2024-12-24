// this is the main org component, all other org components will be imported here
import OrgGrid from "./OrgGrid";
import OrgHeader from "./OrgHeader";
import OrgBg from "./OrgBg";

export default function Org() {
  return (
    <>
      <OrgHeader></OrgHeader>
      {/*these 2 components will overlap*/}
      <div>
        <OrgBg></OrgBg>
        <OrgGrid></OrgGrid>
      </div>
    </>
  );
}
