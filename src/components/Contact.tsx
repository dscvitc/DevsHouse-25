"use client";

import { useState } from "react";
import { toast } from "sonner"; // Import Sonner toast
import {
	Space_Grotesk,
	Hubot_Sans,
	Outfit,
} from "next/font/google";
import Image from "next/image";
import Heading from "../components/ui/Heading";
import styles from "@/styles/Contact.module.scss";

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

export default function Contact() {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		subject: "",
		message: "",
	});
	const [isSubmitting, setIsSubmitting] = useState(false);
	const TO_EMAIL = "devshouse.tech@gmail.com"; // The email where messages are sent

	const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		});
	};

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setIsSubmitting(true);

		try {
			const response = await fetch("/api/contact", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(formData),
			});

			if (!response.ok) throw new Error("Failed to send message");

			toast.success(`Message sent to ${TO_EMAIL}`);

			// Reset form fields after successful submission
			setFormData({ name: "", email: "", subject: "", message: "" });

		} catch (error) {
			console.error(error);
			toast.error("Failed to send message. Please try again.");
		} finally {
			setIsSubmitting(false);
		}
	};

	return (
		<section id="contact" className="relative py-8 md:py-12">
			<div className="flex flex-wrap justify-center content-center" style={{ height: 220 }}>
				<div className="md-108 md:pb-12">
					<Heading textClass="text-5xl md:text-6xl" title="CONTACT US" geometry="Sphereenclosed" />
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
					<h4 className="color-white text-2xl font-bold my-5" style={hubot.style}>
						Have A Question?
						<br />
						Get In Touch!
					</h4>
					<p style={hubot.style} className="my-5">
						Thank you for visiting our website! If you have any questions or queries, drop us a message, and
						we&apos;ll get back to you promptly. Your time is valuable to us!
					</p>
					<div className="my-5">
						<div className="flex my-8">
							<p style={space.style} className="ms-4 font-normal">
								<a href="tel:+918943136813">+91 89431 36813</a>
								<br />
								<a href="tel:+919339244224">+91 93392 44224</a>
							</p>
						</div>
						<div className="flex my-8">
							<p style={space.style} className="ms-4 font-normal">
								<a href="mailto:devshouse.tech@gmail.com">devshouse.tech@gmail.com</a>
							</p>
						</div>
						<div className="flex my-8">
							<p style={space.style} className="ms-4 my-auto font-normal">VIT, Chennai</p>
						</div>
					</div>
				</div>

				<div className="py-4 px-12" style={{ backgroundColor: "#F9F9F9" }}>
					<form id={styles.form} onSubmit={handleSubmit}>
						<div className="grid grid-cols-1 sm:grid-cols-2 gap-5 my-5">
							<input
								style={outfit.style}
								className="p-3 border border-gray-300 rounded w-full"
								type="text"
								name="name"
								placeholder="Your Name"
								value={formData.name}
								onChange={handleChange}
								required
							/>
							<input
								style={outfit.style}
								className="p-3 border border-gray-300 rounded w-full"
								type="email"
								name="email"
								placeholder="Your Email"
								value={formData.email}
								onChange={handleChange}
								required
							/>
						</div>

						<input
							style={outfit.style}
							className="my-5 p-3 border border-gray-300 rounded w-full"
							type="text"
							name="subject"
							placeholder="Subject"
							value={formData.subject}
							onChange={handleChange}
							required
						/>

						<textarea
							style={outfit.style}
							className="my-5 p-3 border border-gray-300 rounded w-full"
							name="message"
							placeholder="Message"
							rows={3}
							value={formData.message}
							onChange={handleChange}
							required
						/>

						<div className="text-center">
							<button
								style={space.style}
								type="submit"
								className="bg-blue-600 text-white px-6 py-2 rounded mt-3 hover:bg-blue-700 disabled:opacity-50"
								disabled={isSubmitting}
							>
								{isSubmitting ? "Sending..." : "Send"}
							</button>
						</div>
					</form>
				</div>
			</div>

			<Image
				style={{
					filter: "brightness(0.75)",
					width: "min(70vw, 120vh)",
					height: "min(70vw, 120vh)",
					position: "absolute",
					zIndex: -1,
					left: "55%",
					transform: "translate(-55%, -15%) scaleY(1.25)",
				}}
				src="contact_bg.svg"
				className="top-1/2"
				width={800}
				height={800}
				alt=""
			/>
		</section>
	);
}
