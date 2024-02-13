"use server";
import { revalidatePath } from "next/cache";
export async function handleFormSubmit(token: string, formData: FormData) {
    try {
        const res = await fetch(
            "https://www.google.com/recaptcha/api/siteverify",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded",
                },
                body: new URLSearchParams({
                    secret: process.env["RECAPTCHA_SECRET_KEY"]!,
                    response: token,
                }).toString(),
            }
        );
        const json = await res.json();
        if (!json.success) {
            return { message: "reCAPTCHA failed" };
        }
        const FORM_FUNC_URL = `https://portfolio-email-forwarder.azurewebsites.net/api/portcontact?code=${process.env["PORTCONTACT_API_KEY"]}`;
        const rawData = {
            name: formData.get("name"),
            email: formData.get("email"),
            message: formData.get("message"),
        };

        if (rawData.name && rawData.email && rawData.message) {
            const res = await fetch(FORM_FUNC_URL, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    name: rawData.name,
                    email: rawData.email,
                    message: rawData.message,
                }),
            });

            revalidatePath("/contact");
            if (res.status === 200) {
                return { message: "message sent!" };
            } else {
                return { message: "There was an error submitting your form." };
            }
        } else {
            return { message: "Please fill out all fields." };
        }
    } catch (error) {
        console.error(error);
        return { message: "There was an error submitting your form." };
    }
}
