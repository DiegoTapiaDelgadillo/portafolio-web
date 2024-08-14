import { EmailTemplate } from "@/components/email-template";
import { Resend } from "resend";

const resend = new Resend("re_ZuyXrbto_Q34SUbS5eHbWaxT2z1oRRaVx");

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json();
    const { data, error } = await resend.emails.send({
      from: "Acme <onboarding@resend.dev>",
      to: ["tapiadiego123123@gmail.com"],
      subject: "Nuevo mensaje desde tu portafolio web",
      react: EmailTemplate({ name: name, email: email, message: message }),
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json(data);
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
