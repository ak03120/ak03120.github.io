import "@material/web/all.js";
import { styles as typescaleStyles } from "@material/web/typography/md-typescale-styles.js";
import { themeFromSourceColor, applyTheme, argbFromHex } from "@material/material-color-utilities";

document.adoptedStyleSheets.push(typescaleStyles.styleSheet);

const theme = themeFromSourceColor(argbFromHex("#C0002E"));
const html = document.documentElement;
const icon = document.getElementById("theme-icon");
const isDark = () => html.classList.contains("dark");
const lightOverrides = {
  "--color-hero-gradient-to": "#ffb3be",
  "--md-filled-button-disabled-container-color": "#eadfe2",
  "--md-filled-button-disabled-label-text-color": "#8a7d81",
  "--md-filled-tonal-button-disabled-container-color": "#eadfe2",
  "--md-filled-tonal-button-disabled-label-text-color": "#8a7d81",
  "--md-outlined-button-disabled-label-text-color": "#8a7d81",
  "--md-outlined-button-disabled-outline-color": "#b4a7ab",
  "--md-text-button-disabled-label-text-color": "#8a7d81",
  "--md-elevated-button-disabled-container-color": "#f1e5e9",
  "--md-elevated-button-disabled-label-text-color": "#8a7d81",
  "--md-fab-container-color": "#f9dce3",
  "--md-fab-icon-color": "#8f1140",
  "--md-fab-branded-container-color": "#f9dce3"
};
const darkOverrides = {
  "--color-hero-gradient-to": "#5b142a",
  "--md-sys-color-primary": "#ffb2c8",
  "--md-sys-color-on-primary": "#670023",
  "--md-sys-color-primary-container": "#8f1140",
  "--md-sys-color-on-primary-container": "#ffd9e3",
  "--md-sys-color-secondary": "#f3b7c8",
  "--md-sys-color-on-secondary": "#4c1128",
  "--md-sys-color-secondary-container": "#673041",
  "--md-sys-color-on-secondary-container": "#ffd9e3",
  "--md-sys-color-surface": "#181113",
  "--md-sys-color-surface-dim": "#181113",
  "--md-sys-color-surface-bright": "#43373b",
  "--md-sys-color-surface-container-lowest": "#120c0e",
  "--md-sys-color-surface-container-low": "#21181b",
  "--md-sys-color-surface-container": "#281d21",
  "--md-sys-color-surface-container-high": "#33262b",
  "--md-sys-color-surface-container-highest": "#3f3137",
  "--md-sys-color-on-surface": "#f7dfe5",
  "--md-sys-color-on-surface-variant": "#dcbfc7",
  "--md-sys-color-outline": "#b3969f",
  "--md-sys-color-outline-variant": "#5d454d",
  "--md-filled-button-disabled-container-color": "#4f4046",
  "--md-filled-button-disabled-label-text-color": "#f2d5dd",
  "--md-filled-tonal-button-disabled-container-color": "#5a4248",
  "--md-filled-tonal-button-disabled-label-text-color": "#ffe8ee",
  "--md-outlined-button-disabled-label-text-color": "#f2d7de",
  "--md-outlined-button-disabled-outline-color": "#9d8088",
  "--md-text-button-disabled-label-text-color": "#f2d7de",
  "--md-elevated-button-disabled-container-color": "#4b3d43",
  "--md-elevated-button-disabled-label-text-color": "#f2d5dd",
  "--md-fab-container-color": "#f3dfe5",
  "--md-fab-icon-color": "#8f1140",
  "--md-fab-branded-container-color": "#f3dfe5"
};

function applyCurrentTheme() {
  applyTheme(theme, { target: html, isDark: isDark() });
  const overrides = isDark() ? darkOverrides : lightOverrides;
  for (const [key, value] of Object.entries(overrides)) {
    html.style.setProperty(key, value);
  }
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
