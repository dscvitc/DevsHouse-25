import { NextResponse } from "next/server";
import { Resend } from "resend";

// Load API Key from environment variables
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { name, email, subject, message } = await req.json();

    // Validate fields
    if (!name || !email || !subject || !message) {
      return NextResponse.json({ error: "All fields are required!" }, { status: 400 });
    }

    // Send Email via Resend
    const response = await resend.emails.send({
      from: "onboarding@resend.dev", // Resend verified sender
      to: "devshouse.tech@gmail.com", // Your recipient email
      replyTo: email, // Allows replies to the sender
      subject: `New Contact Form Submission: ${subject}`,
      html: `
        <h2>New Contact Message</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    if (!response) {
      throw new Error("Failed to send email");
    }

    return NextResponse.json({ success: true, message: "Email sent successfully!" }, { status: 200 });

  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json({ error: "Failed to send email!" }, { status: 500 });
  }
}
