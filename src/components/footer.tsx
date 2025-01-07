import Image from "next/image";
import Link from "next/link";
import ScrollButton from "./scrollButton";

const Footer = () => {
  return (
    <div className="px-8 py-4 mt-3 -mb-20 w-full">
      <div className="justify-between items-center lg:flex">
        <ScrollButton />
        <div className="lg:flex md:flex mt-10 mr-20">
          <div className="mr-36 z-10 mb-5">
            <h2 className="font-bold text-2xl sm:mt-5">QuickLinks</h2>
            <ul className="mt-2 text-xl">
              <li>
                <Link href="#about" className="hover:underline">
                  About
                </Link>
              </li>
              <li>
                <Link href="#themes" className="hover:underline">
                  Themes
                </Link>
              </li>
              <li>
                <Link href="#timeline" className="hover:underline">
                  Timeline
                </Link>
              </li>
              <li>
                <Link href="#team" className="hover:underline">
                  Team
                </Link>
              </li>
              <li>
                <Link href="#sponsors" className="hover:underline">
                  Sponsors
                </Link>
              </li>
              <li>
                <Link href="#faqs" className="hover:underline">
                  FAQS
                </Link>
              </li>
              <li>
                <Link href="#contact" className="hover:underline">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          <div className="mr-36 mb-5">
            <h3 className="text-white font-bold text-2xl sm:mt-5">Join Us</h3>
            <div className="mt-2 text-xl flex flex-col gap-2">
              <Link
                href="https://github.com/dscvitc/dscvitchennai"
                className="flex items-center hover:underline"
              >
                <div className=" flex">
                  <Image
                    src="footer/github.svg"
                    alt="Github"
                    width="25"
                    height="20"
                    className="mr-1"
                  />
                  <span>Github</span>
                </div>
              </Link>
              <Link
                href="https://discord.com/invite/UFfPjTtzh7"
                className="flex items-center hover:underline"
              >
                <div className=" flex">
                  <Image
                    src="footer/discord.svg"
                    alt="Discord"
                    width="25"
                    height="20"
                    className="mr-1"
                  />
                  <span>Discord</span>
                </div>
              </Link>
            </div>
          </div>
          <div>
            <h2 className="font-bold text-2xl sm:mt-5">Follow Us</h2>
            <div className="mt-2 text-2xl">
              <div>Connect. Learn. Grow</div>
              <div className="flex mt-2">
                <Link
                  className="mr-3 "
                  href="https://www.instagram.com/devshouse.in?igsh=dWp5MjZ0eTdmMGc4"
                  style={{
                    marginTop: "0.5px",
                  }}
                >
                  <Image
                    src="footer/insta.svg"
                    alt="Instagram"
                    width="30"
                    height="20"
                  />
                </Link>
                {/* <Link
                  className="mr-3"
                  href="/"
                  style={{
                    marginTop: "2px",
                  }}
                >
                  <Image
                    src="footer/facebook.svg"
                    alt="Facebook"
                    width="26"
                    height="20"
                  />
                </Link> */}
                <Link
                  className="mr-3"
                  href="https://x.com/devshouse_tech"
                  style={{
                    marginTop: "2.2px",
                  }}
                >
                  <Image
                    src="footer/twitter.svg"
                    alt="Twitter"
                    width="28"
                    height="20"
                  />
                </Link>
                <Link
                  className="mr-3"
                  href="https://www.linkedin.com/company/devshouse/"
                  style={{
                    marginTop: "1.7px",
                  }}
                >
                  <Image
                    src="footer/linkdin.svg"
                    alt="Linkedin"
                    width="28"
                    height="20"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex lg:flex-row-reverse md:flex-row-reverse sm:mt-1 justify-between mr-8  w-full">
        <Link
          target="_blank"
          href="https://devshouse25.devfolio.co/"
          className="relative w-2/3 md:h-44 md:-mr-7 mb-40 lg:mb-10 lg:mt-56 "
        >
          <Image
            src="footer/ticket.svg"
            alt="ticket"
            width="1000"
            height="10"
            className="z-10 absolute md:bottom-0"
          />
        </Link>
      </div>
    </div>
  );
};

export default Footer;
