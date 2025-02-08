import Divider from "./Divider";
import MainPrize from "./MainPrizeCard";
import SpecialPrize from "./SpecialPrizeCardImage";
import Image from "next/image";
import { Hubot_Sans } from "next/font/google";

const hubot = Hubot_Sans({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function Prizes() {
  const PrizeInfo = [
    //Gold, silver and bronze images
    {
      src: "/images/prizes/gold.svg",
      width: 300,
      height: 300,
      price: "30,000",
      alt: "1st",
    },
    {
      src: "/images/prizes/bronze.svg",
      width: 250,
      height: 250,
      price: "₹20,000",
      alt: "3rd",
    },
    {
      src: "/images/prizes/silver.svg",
      width: 250,
      height: 250,
      price: "₹10,000",
      alt: "2nd",
    },
  ];


  const tracks = [
    //Individual prize tracks
    {
      trackName: "Company A",
      trackLogo: "/images/icons-track-prize.png",
      trackText: "Innovative financial system solutions earn premium plans from Company A.",
      color: "#C10929",
    },
    {
      trackName: "Company B",
      trackLogo: "/images/icons-track-prize.png",
      trackText: "Leading eco-friendly tech solutions win a 1-year Wolfram|Alpha Pro subscription.",
      color: "#FF5B62",
    },
    {
      trackName: "Company C",
      trackLogo: "/images/icons-track-prize.png",
      trackText: "Winning team for efficient developer tools gets 90-day unrestricted Balsamic Cloud access.",
      color: "#98098A",
    },
    {
      trackName: "Company D",
      trackLogo: "/images/icons-track-prize.png",
      trackText:
        "Cutting-edge hardware innovations, from IoT to embedded systems, pushing tech boundaries: Prize - INR 5,000.",
      color: "#42000A",
    },
    {
      trackName: "Company E",
      trackLogo: "/images/icons-track-prize.png",
      trackText: "Project promoting inclusivity through tech wins free therapist sessions from BetterHelp.",
      color: "#374391",
    },
    {
      trackName: "Company F",
      trackLogo: "/images/icons-track-prize.png",
      trackText: "Top open-source projects fostering transparent and collaborative tech development win INR 10,000.",
      color: "#07A158",
    },
  ];


  
  return (
    <section
      id="prizes"
      className="w-full flex flex-col justify-center items-center overflow-hidden mb-8"
    >
      <div className="relative flex items-center justify-center mt-12">
      <svg
        viewBox="0 0 391 398"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-[150px] h-[150px] sm:w-[150px] sm:h-[150px] md:w-[200px] md:h-[200px] lg:w-[250px] lg:h-[250px] animate-spin-elastic"
      >
        <g opacity="0.21">
          <path
            d="M225.407 312.639L117.339 205.638C105.269 193.698 93.2256 181.702 81.2091 169.689C80.8241 169.306 80.8151 168.668 81.2001 168.276C81.3255 168.148 81.4867 168.057 81.6478 168.012L180.233 140.977L278.881 114.206C279.409 114.06 279.947 114.379 280.09 114.908C280.135 115.081 280.135 115.273 280.09 115.437C275.577 131.953 271.046 148.478 266.462 164.958L225.407 312.639ZM225.407 312.639L264.948 164.111C269.309 147.685 273.741 131.297 278.183 114.908L279.383 116.139L180.797 143.174L82.1403 169.935L82.5791 168.258C94.4791 180.189 106.352 192.13 118.208 204.143L225.407 312.639Z"
            fill="white"
          />
          <path
            d="M247.577 398C247.479 398 247.38 397.991 247.291 397.964L52.9139 344.951C52.5289 344.842 52.2245 344.541 52.126 344.149L0.0395951 146.273C-0.0678549 145.881 0.0485507 145.461 0.32613 145.17L142.626 0.333284C142.912 0.0416055 143.324 -0.0677738 143.709 0.0416055L338.086 53.0632C338.471 53.1726 338.776 53.4734 338.874 53.8653L390.96 251.733C391.068 252.124 390.951 252.544 390.674 252.835L248.374 397.672C248.159 397.891 247.873 398 247.577 398ZM54.1227 342.918L247.246 395.594L388.623 251.678L336.877 55.0867L143.754 2.40238L2.36768 146.318L54.1227 342.918Z"
            fill="white"
          />
          <path
            d="M225.407 312.639L117.044 205.337C105.054 193.479 93.1271 181.593 81.2091 169.689L82.8656 169.142L68.6553 256.6L54.1854 344.012L53.0393 342.855C67.3212 340.284 81.5941 337.723 95.9029 335.244L225.407 312.639ZM225.407 312.639L96.6102 336.848C82.2209 339.564 67.7957 342.207 53.3706 344.842C52.8333 344.942 52.3229 344.577 52.2245 344.03C52.2065 343.912 52.2065 343.793 52.2245 343.684L66.4437 256.226L80.9225 168.814C81.0121 168.267 81.5135 167.902 82.0508 167.994C82.2567 168.03 82.4358 168.13 82.5791 168.267C94.5776 180.299 106.576 192.358 118.503 204.444L225.407 312.639Z"
            fill="white"
          />
          <path
            d="M1.12305 145.981L41.3451 156.837L61.7248 162.361C68.5389 164.193 75.3531 166.089 82.1582 168.012C82.6417 168.149 82.9372 168.641 82.8656 169.142L68.6553 256.6L54.1854 344.012C54.0959 344.559 53.5944 344.933 53.0572 344.842C52.6632 344.778 52.3588 344.477 52.2603 344.112L39.3305 294.4L1.12305 145.981ZM1.12305 145.981L41.0497 294.363L54.1586 343.584L52.2334 343.675L66.4526 256.217L80.9315 168.805L81.6389 169.935C74.977 168.021 68.333 166.098 61.689 164.092L1.12305 145.981Z"
            fill="white"
          />
          <path
            d="M337.791 54.157L377.601 202.129C382.051 218.645 386.447 235.207 390.826 251.76C390.969 252.289 390.656 252.845 390.137 252.981C389.752 253.082 389.358 252.945 389.125 252.653L333.645 184.318L278.38 115.81C278.057 115.419 278.093 114.835 278.433 114.471C283.385 109.348 288.355 104.225 293.351 99.1757L337.791 54.157ZM337.791 54.157L294.247 100.671C289.474 105.784 284.666 110.834 279.83 115.883L279.884 114.544L335.355 182.878L390.62 251.386L388.919 252.279C384.612 235.854 380.332 219.438 376.096 202.977L337.791 54.157Z"
            fill="white"
          />
          <path
            d="M337.791 54.157L191.596 15.1542C175.425 10.8519 159.289 6.48587 143.163 2.10158L144.04 0.369743L211.985 57.2834L279.759 114.407L278.433 114.48C283.287 109.457 288.14 104.453 293.065 99.4765L337.791 54.157ZM337.791 54.157L309.092 84.8379L294.533 100.37C289.68 105.565 284.755 110.733 279.83 115.883C279.472 116.257 278.89 116.275 278.505 115.956L210.561 59.0426L142.787 1.91017C142.366 1.5638 142.312 0.925755 142.653 0.506468C142.903 0.19656 143.306 0.0780653 143.664 0.17833C159.925 4.62642 176.195 9.10186 192.42 13.632L337.791 54.157Z"
            fill="white"
          />
          <path
            d="M1.12305 145.981L62.1188 162.47C68.8255 164.275 75.4874 166.125 82.1582 168.012L80.9763 168.622L111.608 84.6556L142.491 0.779916L144.112 1.83725L108.582 37.7957L1.12305 145.981ZM1.12305 145.981L107.105 36.8842L142.715 0.415318C143.1 0.0233756 143.727 0.0233756 144.112 0.415318C144.399 0.697881 144.47 1.12628 144.336 1.48177L113.695 85.4486L82.8119 169.315C82.6328 169.807 82.1134 170.063 81.6299 169.926C74.8337 167.975 68.0375 166.006 61.2771 163.974L1.12305 145.981Z"
            fill="white"
          />
          <path
            d="M225.407 312.639L348.67 266.307C362.289 261.176 375.9 256.117 389.537 251.076L389.116 252.653L333.636 184.318L278.371 115.81L280.081 115.437C275.604 131.816 271.118 148.178 266.56 164.548L225.407 312.639ZM225.407 312.639L264.841 164.521C269.238 147.977 273.697 131.434 278.183 114.908C278.326 114.379 278.872 114.06 279.392 114.206C279.598 114.261 279.768 114.379 279.893 114.534L335.364 182.869L390.629 251.377C390.978 251.805 390.916 252.434 390.495 252.781C390.405 252.854 390.307 252.908 390.199 252.954C376.419 258.022 362.629 263.062 348.831 268.039L225.407 312.639Z"
            fill="white"
          />
          <path
            d="M225.407 312.639L307.212 281.83L348.33 266.426C362.038 261.276 375.792 256.162 389.537 251.085C390.047 250.894 390.611 251.167 390.79 251.687C390.925 252.061 390.817 252.471 390.557 252.735L319.506 325.254L248.267 397.581C247.882 397.973 247.264 397.973 246.879 397.581C246.754 397.453 246.664 397.289 246.619 397.125C244.775 390.052 242.939 382.96 241.175 375.878L235.839 354.677C234.048 347.622 232.311 340.585 230.582 333.576L225.407 312.639ZM225.407 312.639L231.308 333.813C233.278 340.849 235.23 347.85 237.137 354.832L242.885 375.741C244.811 382.696 246.673 389.651 248.527 396.615L246.879 396.168L317.93 323.649L389.17 251.322L390.199 252.972C376.544 257.995 362.88 262.989 349.18 267.939L308.063 282.842L225.407 312.639Z"
            fill="white"
          />
          <path
            d="M53.2094 344.304C53.1557 344.304 53.093 344.295 53.0393 344.267C52.9139 344.213 52.8154 344.103 52.7796 343.967L0.69325 146.099C0.648479 145.944 0.693249 145.771 0.809653 145.662L143.1 0.816376C143.217 0.697881 143.378 0.652307 143.53 0.697881C143.682 0.743456 143.808 0.86195 143.843 1.0169L209.827 251.705C209.88 251.906 209.791 252.115 209.621 252.216L53.4333 344.24C53.3616 344.286 53.281 344.304 53.2094 344.304ZM1.62448 146.118L53.487 343.155L208.878 251.605L143.181 2.01955L1.62448 146.118Z"
            fill="white"
          />
          <path
            d="M389.877 252.471L209.406 252.279C209.2 252.279 209.03 252.143 208.976 251.942L142.984 1.25389C142.939 1.09894 142.984 0.925755 143.1 0.816376C143.217 0.697881 143.378 0.652307 143.53 0.697881L337.907 53.7104C338.059 53.756 338.185 53.8745 338.22 54.0294L390.307 251.897C390.343 252.033 390.316 252.179 390.226 252.289C390.146 252.407 390.011 252.471 389.877 252.471ZM209.746 251.368L389.286 251.559L337.423 54.5216L144.049 1.78256L209.746 251.368Z"
            fill="white"
          />
        </g>
      </svg>

      <h1 className="text-white font-bold absolute text-[25px] font-mona z-10 sm:text-[30px] md:text-[35px] lg:text-[44px] text-center transform -translate-y-1/2 top-1/2">
        PRIZES
      </h1>

    
      </div>
      <Divider heading="Top 3 Overall" mt="50px" mb="20px" />
      <div className="flex flex-row justify-center items-end md:px-12 md:gap-x-10 lg:gap-x-32 mt-[60px] mb-[60px]">
        <div className="w-[30%]">

          <div className="absolute">
            <div className="absolute top-1/3 left-1/3 w-32 h-48 md:w-64 md:h-80 rounded-full bg-slate-500 blur-3xl z-[-1] opacity-150 md:mt-[60px] md:ml-[-30px] mt-[40px] ml-[-10px]"></div> 
          </div>
          <MainPrize
            src={PrizeInfo[1].src} //bronze
            width={PrizeInfo[1].width}
            height={PrizeInfo[1].height}
            price={PrizeInfo[1].price}
            alt={PrizeInfo[1].alt}
          />
        </div>
        <div className="w-[40%]">
          <div className="absolute z-[-1] left-1/2 transform -translate-x-1/2">
            <div className="relative w-[220px] h-[300px] ml-[10px] md:w-[600px] md:h-[600px] md:mt-12">
              <Image src="/images/prizes/bg.png" fill priority alt="Background" />
            </div>
          </div>
          <div className="absolute">
          <div className="absolute top-1/3 left-1/3 w-32 h-44 md:w-96 md:h-[400px] mt-[30px] ml-[30px] rounded-full bg-[#FDDB85] blur-3xl z-[-1] opacity-70 flex items-center justify-center md:mt-[50px] md:ml-[-20px]">
            <div className="w-32 h-44 md:w-56 md:h-56 rounded-full bg-[#FFC727] blur-3xl z-[-1] opacity-100 "></div>
          </div> 
          </div>
         

          <MainPrize
            src={PrizeInfo[0].src} //gold
            width={PrizeInfo[0].width}
            height={PrizeInfo[0].height}
            price={PrizeInfo[0].price}
            alt={PrizeInfo[0].alt}
          />
        </div>
        <div className="w-[30%]">
          <div className="absolute">
          <div className="absolute top-1/3 left-1/3 w-32 h-48 ml-[-10px] mt-[40px] md:w-64 md:h-80 rounded-full bg-[#0387DA] blur-3xl z-[-1] opacity-75 md:mt-[60px]"></div>
          </div>
          <MainPrize
            src={PrizeInfo[2].src} //silver
            width={PrizeInfo[2].width}
            height={PrizeInfo[2].height}
            price={PrizeInfo[2].price}
            alt={PrizeInfo[2].alt}
          />
        </div>
      </div>

      {/* {tracks.length > 0 ? (
        <>
          <Divider heading="Special Track Prizes" mt="70px" mb="70px" />
          <div className="w-full px-12 grid grid-cols-1 gap-7 mb-4 justify-center items-center sm:grid-cols-2 sm:grid-rows-3">
            {tracks.map((track) => (
              <SpecialPrize
                key={track.trackName}
                trackName={track.trackName}
                trackLogo={track.trackLogo}
                trackText={track.trackText}
                color={track.color}
              />
            ))}
          </div>
        </>
      ) : (
        <></>
      )} */}
      {/* </div> */}
    </section>
  );
}
