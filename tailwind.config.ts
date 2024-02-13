import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: "#629460",
                secondary: "#243119",
                accent: "#ACECA1",
            },
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic":
                    "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
            },
            spacing: {
                '90' : '22rem',
                '100' : '26rem',
                '110' : '28rem',
                '128' : '32rem',
                '135' : '36rem',
                '180' : '40rem',
                '240' : '48rem',
                '300' : '56rem',
                '360' : '64rem',
                '420' : '72rem',
                '480' : '80rem',
                '540' : '88rem',
            }
        },
    },
    plugins: [],
};
export default config;
