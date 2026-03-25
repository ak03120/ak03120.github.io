import "@material/web/all.js";
import { styles as typescaleStyles } from "@material/web/typography/md-typescale-styles.js";
import { themeFromSourceColor, applyTheme, argbFromHex } from "@material/material-color-utilities";

document.adoptedStyleSheets.push(typescaleStyles.styleSheet);

const theme = themeFromSourceColor(argbFromHex("#C0002E"));
const html = document.documentElement;
const icon = document.getElementById("theme-icon");
const isDark = () => html.classList.contains("dark");

function applyCurrentTheme() {
  applyTheme(theme, { target: html, isDark: isDark() });
}

const dialog = document.getElementById("demo-dialog");
document.getElementById("open-dialog").addEventListener("click", () => { dialog.open = true; });
document.getElementById("close-dialog").addEventListener("click", () => { dialog.open = false; });
document.getElementById("confirm-dialog").addEventListener("click", () => { dialog.open = false; });

const menu = document.getElementById("demo-menu");
document.getElementById("open-menu").addEventListener("click", () => { menu.open = !menu.open; });

document.getElementById("theme-toggle").addEventListener("click", () => {
  html.classList.toggle("dark");
  icon.textContent = isDark() ? "light_mode" : "dark_mode";
  localStorage.setItem("theme", isDark() ? "dark" : "light");
  applyCurrentTheme();
});

if (localStorage.getItem("theme") === "dark" || (!localStorage.getItem("theme") && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
  html.classList.add("dark");
  icon.textContent = "light_mode";
}

applyCurrentTheme();
