const nodemailer = require("nodemailer");

module.exports = async (req, res) => {
    if (req.method === "POST") {
        const { name, email, message } = req.body;

        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.EMAIL_USER, // Store email credentials in environment variables
                pass: process.env.EMAIL_PASS,
            },
        });

        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: "heba96@yahoo.com", // Replace with your email
            subject: `New Message from ${name}`,
            text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
        };

        try {
            await transporter.sendMail(mailOptions);
            res.status(200).json({ message: "Email sent successfully" });
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: "Error sending email" });
        }
    } else {
        res.status(405).json({ message: "Method not allowed" });
    }
};