"use client";
import { ReCaptchaProvider } from "next-recaptcha-v3";

export function ReCaptchaProviderWrapper({
    children,
}: {
    children: JSX.Element;
}) {
    return (
        <ReCaptchaProvider
            useEnterprise={true}
        >
            {children}
        </ReCaptchaProvider>
    );
}
