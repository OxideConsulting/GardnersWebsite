export async function onRequestPost({ request, env }) {
    try {
        // Assuming the form submits data as JSON
        const formData = await request.json();
        const { name, email, phone, "find-us": findUs, message } = formData;

        // Construct your email content using the form data
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
            // Change these fields according to Mailchannels API requirements
            from: "no-reply@gardnersdigital.com", // Use a valid sender email for your domain
            to: "no-reply@gardnersdigital.com",  // Replace with your email
            subject: "New Contact Form Submission",
            text: emailContent,
        };

        // Retrieve your Mailchannels API key from environment variables
        const apiKey = env.MAILCHANNELS_API_KEY;

        // Send the email via Mailchannels API endpoint (adjust the URL and headers if necessary)
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