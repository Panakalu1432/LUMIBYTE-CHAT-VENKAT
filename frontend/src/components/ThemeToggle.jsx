function ThemeToggle({ theme, setTheme }) {
  return (
    <button
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className="px-3 py-2 rounded bg-gray-300 dark:bg-gray-700"
    >
      {theme === "light" ? "Dark" : "Light"}
    </button>
  )
}

export default ThemeToggle;
