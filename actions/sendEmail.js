"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmail(form) {
  const { fullName, email, budget, hearAboutUs, projectDetails } = form;

  try {
    const res =  await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>",
      to: "shohag4y@gmail.com", 
      subject: `New inquiry from ${fullName}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${fullName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Budget:</strong> ${budget}</p>
        <p><strong>How they heard about us:</strong> ${hearAboutUs}</p>
        <p><strong>Project Details:</strong></p>
        <p>${projectDetails}</p>
      `,
    });
    console.log(res)
    return { ok: true };
  } catch (error) {
    return { ok: false, error: "Failed to send email" };
  }
}
