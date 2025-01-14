import nodemailer from "nodemailer";

export default async function handler(req, res) {
    if (req.method === "POST") {
        const { name, email, message } = req.body;

        // Create a Nodemailer transporter
        const transporter = nodemailer.createTransport({
            service: "gmail", // Use your email service (e.g., Gmail, Outlook)
            auth: {
                user: process.env.EMAIL_USER, // Your email
                pass: process.env.EMAIL_PASS, // Your email password or app-specific password
            },
        });

        // Email options
        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: "heba96@yahoo.com", // Replace with your email
            subject: `New Message from ${name}`,
            text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
        };

        try {
            // Send the email
            await transporter.sendMail(mailOptions);
            res.status(200).json({ message: "Email sent successfully" });
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: "Error sending email" });
        }
    } else {
        res.status(405).json({ message: "Method not allowed" });
    }
}