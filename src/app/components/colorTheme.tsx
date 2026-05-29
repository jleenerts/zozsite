"use client";

export default function ColorButton({ className }: { className?: string }) {
    // info about system theme https://tailwindcss.com/docs/dark-mode
    
    function handleClick() {
        if (localStorage.getItem("isDark") === "true") {
            localStorage.setItem("isDark", "false");
        }
        else {
            localStorage.setItem("isDark", "true");
            
        }
        document.body.classList.toggle("dark");
    }
    
    return (
    <button onClick={handleClick} className={className} suppressHydrationWarning>Toggle Dark Mode</button>
    );
}