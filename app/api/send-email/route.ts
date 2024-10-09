import WelcomeTemplate from "@/emails/WelcomeTemplate";
import { NextResponse } from "next/server";
import { Resend } from "resend";


const resend = new Resend(process.env.RESEND_API_KEY);
export function POST() {
    // await resend.emails.send({
    //     from: '...',
    //     to: 'mail2surajmahendrakar@gmail.com',
    //     subject: '...',
    //     react: <WelcomeTemplate name="suraj"/>,
    // });

    return NextResponse.json({ message: 'Email sent successfully' });
}