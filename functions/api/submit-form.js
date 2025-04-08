export async function onRequestPost({ request, env }) {
    try {
        // Parse the incoming form data
        const formData = await request.formData();
        const name = formData.get("name");
        const email = formData.get("email");
        const phone = formData.get("phone");
        const findUs = formData.get("find-us");
        const message = formData.get("Message");

        // Construct the Formspree payload
        const payload = {
            name: name,
            email: email,
            phone: phone,
            findUs: findUs || "N/A",
            message: message
        };

        // Send the email via Formspree API endpoint
        const response = await fetch("https://formspree.io/f/<yourFormID>", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
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