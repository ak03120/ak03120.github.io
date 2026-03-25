import "@material/web/all.js";
import { styles as typescaleStyles } from "@material/web/typography/md-typescale-styles.js";
document.adoptedStyleSheets.push(typescaleStyles.styleSheet);

const dialog = document.getElementById("demo-dialog");
document.getElementById("open-dialog").addEventListener("click", () => {
  dialog.open = true;
});
document.getElementById("close-dialog").addEventListener("click", () => {
  dialog.open = false;
});
document.getElementById("confirm-dialog").addEventListener("click", () => {
  dialog.open = false;
});

const menu = document.getElementById("demo-menu");
document.getElementById("open-menu").addEventListener("click", () => {
  menu.open = !menu.open;
});

const html = document.documentElement;
const icon = document.getElementById("theme-icon");
const isDark = () => html.classList.contains("dark");

document.getElementById("theme-toggle").addEventListener("click", () => {
  html.classList.toggle("dark");
  icon.textContent = isDark() ? "light_mode" : "dark_mode";
  localStorage.setItem("theme", isDark() ? "dark" : "light");
});

if (localStorage.getItem("theme") === "dark" || (!localStorage.getItem("theme") && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
  html.classList.add("dark");
  icon.textContent = "light_mode";
}
