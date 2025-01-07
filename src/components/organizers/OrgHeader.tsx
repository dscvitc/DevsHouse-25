// this contains the heading and the diamond
import Heading from "../ui/Heading";

export default function OrgHeader() {
  return (
    <div className="relative h-[155px] md:h-[215px] lg:h-[225px] flex justify-center  pt-12 md:pt-16">
      <div className="md-108 w-full flex items-center justify-center mb-16 my-12">
        <Heading title="ORGANIZERS" geometry="Heart" />{" "}
        {/* Add margin-bottom here */}
      </div>
    </div>
  );
}
