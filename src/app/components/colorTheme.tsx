"use client";

export default function ColorButton({ className }: { className?: string }) {
    // info about system theme https://tailwindcss.com/docs/dark-mode#with-system-theme-support
    // first check is to stop localStorage running before hydration,
    // second check is for if color theme is stored
    if (typeof window !== "undefined" && !localStorage.getItem("theme")) {
        if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
        localStorage.setItem("theme", "dark");
        }
        else localStorage.setItem("theme", "light");;
    }

    function handleClick() {
        console.log(localStorage);
        console.log(localStorage.theme);
        if (localStorage.getItem("theme") === "light") localStorage.setItem("theme", "dark");
        else localStorage.setItem("theme", "light");
    }
    
    return (
    <button onClick={handleClick} className={className} suppressHydrationWarning>Toggle Dark Mode</button>
    );
}