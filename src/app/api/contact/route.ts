import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { firstName, lastName, email, phone, message } = await req.json();

    // transporter using your SMTP (e.g. Gmail, Outlook, or company mail server)
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT) || 587,
      secure: false, 
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: `"Website Contact" <${process.env.SMTP_USER}>`,
      to: "richdimensionsauctioneers@gmail.com",
      subject: `New Enquiry from ${firstName} ${lastName}`,
      text: `
        Name: ${firstName} ${lastName}
        Email: ${email}
        Phone: ${phone}
        
        Message:
        ${message}
      `,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Email send error:", err);
    return NextResponse.json(
      { success: false, error: "Failed to send message" },
      { status: 500 }
    );
  }
}
