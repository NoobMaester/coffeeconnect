
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
    try {
        const { name, email, message } = await request.json();

        if (!name || !email || !message) {
            return Response.json(
                { error: "All fields are required." },
                { status: 400 }
            );
        }

        const { data, error } = await resend.emails.send({
            from: "CoffeeConnect <onboarding@resend.dev>",
            to: [process.env.CONTACT_EMAIL!],
            replyTo: email,
            subject: `New form submission from ${name}`,
            html: `
                <div style="font-family: Arial, sans-serif; line-height: 1.6;">
                    <h2>Submission Message</h2>

                    <p><strong>Name:</strong> ${name}</p>
                    <p><strong>Email:</strong> ${email}</p>

                    <h3>Message</h3>
                    <p>${message}</p>
                </div>
            `,
        });

        if (error) {
            console.error("Resend error:", error);

            return Response.json(
                { error: error.message || "Failed to send email." },
                { status: 500 }
            );
        }

        return Response.json({ success: true, data });
    } catch (error) {
        console.error("Contact API error:", error);

        return Response.json(
            { error: error instanceof Error ? error.message : "Something went wrong." },
            { status: 500 }
        );
    }
}
