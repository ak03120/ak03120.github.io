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

const tagChipSet = document.getElementById("tag-chip-set");
const tagInput = document.getElementById("tag-input");

function createTagChip(label) {
  const chip = document.createElement("md-filter-chip");
  chip.label = label;
  chip.removable = true;
  chip.ariaLabelRemove = `${label} を削除`;
  chip.addEventListener("remove", () => chip.remove());
  return chip;
}

function addTag() {
  const label = tagInput.value.trim();
  if (!label) return;
  const exists = Array.from(tagChipSet.querySelectorAll("md-filter-chip")).some((chip) => chip.label === label);
  if (exists) {
    tagInput.value = "";
    tagInput.focus();
    return;
  }
  tagChipSet.appendChild(createTagChip(label));
  tagInput.value = "";
  tagInput.focus();
}

document.getElementById("tag-add-btn").addEventListener("click", addTag);
tagInput.addEventListener("keydown", (e) => {
  if (e.key !== "Enter") return;
  e.preventDefault();
  addTag();
});
tagChipSet.querySelectorAll("md-filter-chip").forEach((chip) => {
  chip.removable = true;
  chip.ariaLabelRemove = `${chip.label} を削除`;
  chip.addEventListener("remove", () => chip.remove());
});

document.getElementById("ripple-surface").attach(document.getElementById("ripple-surface-control"));

applyCurrentTheme();
