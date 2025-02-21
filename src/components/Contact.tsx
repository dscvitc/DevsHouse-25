import {
	Space_Grotesk,
	Hubot_Sans,
	Outfit,
} from "next/font/google";
import Image from "next/image";
import Heading from "../components/ui/Heading";
// import BG_Image from "@/../public/contact_bg.svg";

// const mona = Mona_Sans({ subsets: ["latin"], weight: ["800"] });
const space = Space_Grotesk({
	subsets: ["latin"],
	weight: ["400", "700"],
});
const hubot = Hubot_Sans({
	subsets: ["latin"],
	weight: ["400", "700"],
});
const outfit = Outfit({
	subsets: ["latin"],
	weight: ["400"],
});

import styles from "@/styles/Contact.module.scss";

export default function Contact() {
	return (
		<section
			id="contact"
			className="relative py-8 md:py-12"
		>
			<div
				className="flex flex-wrap justify-center content-center"
				style={{ height: 220 }}
			>
				<div className="md-108 md:pb-12">
					<Heading textClass="text-5xl md:text-6xl"
						title="CONTACT US"
						geometry="Sphereenclosed"
					/>{" "}
					{/* Add margin-bottom here */}
				</div>
			</div>

			<div className="relative grid grid-cols-1 md:grid-cols-2 border-2 border-white my-12">
				<div
					style={{
						position: "absolute",
						left: "calc(50% - 15px)",
						top: "calc(10% - 15px)",
						clipPath: "polygon(100% 100%, 0 50%, 100% 0)",
						width: 30,
						height: 60,
						backgroundColor: "#F9F9F9",
					}}
					className="hidden md:inline-block"
				/>
				<div className="py-4 px-12 md:px-24">
					<h4
						className="color-white text-2xl font-bold my-5"
						style={hubot.style}
					>
						Have A Question?
						<br />
						Get In Touch!
					</h4>
					<p style={hubot.style} className="my-5">
						Thank you for visiting our website! If you have
						any questions or queries, drop us a message, and
						we&apos;ll get back to you promptly. Your time
						is valuable to us!
					</p>
					<div className="my-5">
						<div className="flex my-8">
							<svg
								className="my-auto"
								width="30"
								height="30"
								viewBox="0 0 47 47"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M42.8902 45.1814C10.5111 44.126 2.19695 18.4544 2.00348 4.21451C1.99162 3.34155 2.58344 2.57888 3.44687 2.44964C6.19456 2.03836 9.91251 2.23776 12.5464 2.51261C13.6185 2.62449 14.3678 3.60204 14.3985 4.67959C14.4834 7.6688 15.2802 11.3322 15.8874 13.5802C16.047 14.1713 15.946 14.8034 15.5943 15.3045L11.9831 20.4496C11.5957 21.0016 11.5064 21.715 11.7891 22.3273C14.8276 28.9075 21.1503 33.4578 24.8098 35.3812C25.4298 35.707 26.1731 35.6359 26.7507 35.2397L32.4857 31.3057C33.0245 30.936 33.7101 30.8553 34.3249 31.0765C38.4183 32.5494 40.8686 32.9754 43.2056 33.1438C44.1547 33.2122 44.9282 33.9064 44.9627 34.8573C45.0429 37.0645 44.9802 40.6116 44.9024 43.287C44.8711 44.3636 43.9667 45.2165 42.8902 45.1814Z"
									stroke="white"
									strokeWidth="2.6"
								/>
							</svg>
							<p
								style={space.style}
								className="ms-4 font-normal"
							>
								<a href="tel:+918943136813">
									+91 89431 36813
								</a>
								<br />
								<a href="tel:+919339244224">
									+91 93392 44224
								</a>
							</p>
						</div>
						<div className="flex my-8">
							<svg
								className="my-auto"
								width="30"
								height="23.3"
								viewBox="0 0 42 33"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									fillRule="evenodd"
									clipRule="evenodd"
									d="M20.8333 3.48722C16.1158 3.48722 9.69016 3.87547 5.60974 4.16095C4.25463 4.25576 3.20513 5.28556 3.20513 6.54335V7.96469L19.5362 16.1995C20.3429 16.6063 21.3238 16.6063 22.1305 16.1995L38.4615 7.96469V6.54335C38.4615 5.28556 37.412 4.25576 36.0569 4.16095C31.9765 3.87547 25.5509 3.48722 20.8333 3.48722ZM38.4615 11.2926L23.687 18.7425C21.9123 19.6374 19.7544 19.6374 17.9797 18.7425L3.20513 11.2926V26.6129C3.20513 27.8707 4.25463 28.9005 5.60974 28.9953C9.69016 29.2808 16.1158 29.669 20.8333 29.669C25.5509 29.669 31.9765 29.2808 36.0569 28.9953C37.412 28.9005 38.4615 27.8707 38.4615 26.6129V11.2926ZM5.36341 1.26046C9.44627 0.974808 15.9806 0.578125 20.8333 0.578125C25.6861 0.578125 32.2204 0.974807 36.3033 1.26046C39.3545 1.47395 41.6667 3.78989 41.6667 6.54335V26.6129C41.6667 29.3664 39.3545 31.6823 36.3033 31.8958C32.2204 32.1814 25.6861 32.5781 20.8333 32.5781C15.9806 32.5781 9.44627 32.1814 5.36341 31.8958C2.31213 31.6823 0 29.3664 0 26.6129V6.54335C0 3.7899 2.31213 1.47395 5.36341 1.26046Z"
									fill="white"
								/>
							</svg>
							<p
								style={space.style}
								className="ms-4 font-normal"
							>
								<a href="mailto:devshouse.tech@gmail.com">
									devshouse.tech@gmail.com
								</a>
							</p>
						</div>
						<div className="flex my-8">
							<svg
								width="30"
								height="33.94"
								viewBox="0 0 38 43"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									fillRule="evenodd"
									clipRule="evenodd"
									d="M18.75 3.66014C10.0267 3.66014 2.66808 9.99755 3.26744 17.89C3.3534 19.022 3.4819 20.0073 3.65699 20.7892C4.54032 24.734 7.31305 28.6528 10.4361 31.9794C13.5326 35.2777 16.8295 37.8437 18.5331 39.0882C18.6693 39.1876 18.8307 39.1876 18.9669 39.0882C20.6705 37.8437 23.9674 35.2777 27.0639 31.9794C30.187 28.6528 32.9597 24.734 33.843 20.7892C34.0181 20.0073 34.1466 19.022 34.2326 17.89C34.8319 9.99755 27.4733 3.66014 18.75 3.66014ZM0.044053 18.1126C-0.720649 8.04292 8.58874 0.578125 18.75 0.578125C28.9113 0.578125 38.2206 8.04292 37.4559 18.1126C37.3643 19.3187 37.2217 20.4589 37.0036 21.4329C35.9446 26.1621 32.7268 30.5679 29.4717 34.0352C26.1901 37.5308 22.7212 40.228 20.9321 41.5349C19.6363 42.4814 17.8637 42.4814 16.5679 41.5349C14.7788 40.228 11.3099 37.5308 8.02828 34.0352C4.77321 30.5679 1.5554 26.1621 0.496419 21.4329C0.27832 20.4589 0.135647 19.3187 0.044053 18.1126Z"
									fill="white"
								/>
								<path
									fillRule="evenodd"
									clipRule="evenodd"
									d="M18.75 15.9882C17.2626 15.9882 16.0568 17.1381 16.0568 18.5566C16.0568 19.975 17.2626 21.1249 18.75 21.1249C20.2374 21.1249 21.4432 19.975 21.4432 18.5566C21.4432 17.1381 20.2374 15.9882 18.75 15.9882ZM12.825 18.5566C12.825 15.436 15.4777 12.9062 18.75 12.9062C22.0223 12.9062 24.675 15.436 24.675 18.5566C24.675 21.6772 22.0223 24.2069 18.75 24.2069C15.4777 24.2069 12.825 21.6772 12.825 18.5566Z"
									fill="white"
								/>
							</svg>
							<p
								style={space.style}
								className="ms-4 my-auto font-normal"
							>
								VIT, Chennai
							</p>
						</div>
					</div>
				</div>
				<div
					className="py-4 px-12"
					style={{ backgroundColor: "#F9F9F9" }}
				>
					<form id={styles.form} action="" method="post">
						<div className="grid grid-cols-1 sm:grid-cols-2 gap-5 my-5">
							<input
								style={outfit.style}
								className="p-3"
								type="text"
								name="name"
								placeholder="Your Name"
							/>
							<input
								style={outfit.style}
								className="p-3"
								type="email"
								name="email"
								placeholder="Your Email"
							/>
						</div>

						<input
							style={outfit.style}
							className="my-5 p-3"
							type="text"
							name="subject"
							placeholder="Subject"
						/>

						<textarea
							style={outfit.style}
							className="my-5 p-3"
							name="message"
							placeholder="Message"
							rows={3}
						/>

						<div className="text-center">
							<button style={space.style} type="submit">
								Send
							</button>
						</div>
					</form>
				</div>
			</div>
			<Image
				style={{
					filter: "brightness(0.75)",
					width: "min(70vw, 75vh)",
					height: "min(70vw, 75vh)",
					position: "absolute",
					zIndex: -1,
					left: "55%",
					transform: "translate(-55%, -15%) scaleY(1.25)",
				}}
				// src={BG_Image}
				src="contact_bg.svg"
				className="top-1/2"
				width={800}
				height={800}
				alt=""
			/>
		</section>
	);
}
