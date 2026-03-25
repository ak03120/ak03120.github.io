import "@material/web/all.js";
import { styles as typescaleStyles } from "@material/web/typography/md-typescale-styles.js";
import { themeFromSourceColor, applyTheme, argbFromHex } from "@material/material-color-utilities";

document.adoptedStyleSheets.push(typescaleStyles.styleSheet);

const theme = themeFromSourceColor(argbFromHex("#C0002E"));

function applyCurrentTheme() {
  applyTheme(theme, { target: document.documentElement, isDark: false });
}

const dialog = document.getElementById("demo-dialog");
document.getElementById("open-dialog").addEventListener("click", () => { dialog.open = true; });
document.getElementById("close-dialog").addEventListener("click", () => { dialog.open = false; });
document.getElementById("confirm-dialog").addEventListener("click", () => { dialog.open = false; });

const menu = document.getElementById("demo-menu");
document.getElementById("open-menu").addEventListener("click", () => { menu.open = !menu.open; });

applyCurrentTheme();
