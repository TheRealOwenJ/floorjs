# Dark/Light Mode Handler

Detect when the root `<html>` tag has a `dark` or `light` class and modify your theme colors accordingly! The theme automatically updates when the user's desktop does and is automatically saved. Your side of the implementation can actually be written only in a CSS file.

---

Examples:

```javascript
// Theme toggle button
function themeToggleButton() {
    window.setTheme(window.getTheme() === "dark" ? "light" : "dark")
    window.saveTheme() // Persistent theme storage
}

// Light mode warning
function lightModeWarning() {
    if (window.getTheme() === "light") {
        alert("Warning! You are using light mode! It is DANGEROUS!!!")
    } else {
        alert("Nice job! You are using dark mode like a real human...")
    }
}
```

---

Optional types: [./darklight.d.ts](./darklight.d.ts)  
(next to this file)
