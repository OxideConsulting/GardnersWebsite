export async function onRequestPost({ request, env }) {
    try {
        // Parse the incoming form data
        const formData = await request.formData();
        const name = formData.get("name");
        const email = formData.get("email");
        const phone = formData.get("phone");
        const findUs = formData.get("find-us"); // field name in your form is "find-us"
        const message = formData.get("Message");

        // Construct the email content
        const emailContent = `
      You have a new contact form submission:
      
      Name: ${name}
      Email: ${email}
      Phone: ${phone}
      Referred By: ${findUs || "N/A"}
      
      Message:
      ${message}
    `;

        // Prepare the Mailchannels API payload
        const payload = {
            from: "no-reply@gardnersdigital.com", // Ensure this is a valid sender email for your domain
            to: "no-reply@gardnersdigital.com",  // Replace with your email
            subject: "New Contact Form Submission",
            text: emailContent,
        };

        // Retrieve your Mailchannels API key from environment variables
        const apiKey = env.MAILCHANNELS_API_KEY;

        // Send the email via Mailchannels API endpoint
        const response = await fetch("https://api.mailchannels.net/tx/v1/send", {
            method: "POST",
            headers: {
                "Authorization": `Bearer ${apiKey}`,
                "Content-Type": "application/json",
            },
            body: JSON.stringify(payload),
        });

        if (!response.ok) {
            const errorText = await response.text();
            return new Response(`Error sending email: ${errorText}`, { status: 500 });
        }

        return new Response("Form submitted successfully.", { status: 200 });
    } catch (error) {
        return new Response(`Unexpected error: ${error.message}`, { status: 500 });
    }
}