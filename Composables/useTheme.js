export const useTheme = () => {
    const theme = useState("theme", () => "light");

    const applyTheme = (value) => {
        document.documentElement.classList.toggle("dark", value === "dark");
    };

    const setTheme = (value) => {
        theme.value = value;

        if (import.meta.client) {
            applyTheme(value);
            localStorage.setItem("theme", value);
        }
    };

    const toggleDarkTheme = () => {
        setTheme("dark");
    };

    const toggleLightTheme = () => {
        setTheme("light");
    };

    // Load saved theme (client only)
    if (import.meta.client) {
        const saved = localStorage.getItem("theme");
        if (saved === "dark" || saved === "light") {
            setTheme(saved);
        } else {
            // If no saved theme, use light by default
            applyTheme("light");
        }
    }

    return { theme, toggleDarkTheme, toggleLightTheme };
};
