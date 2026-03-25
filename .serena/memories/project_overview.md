# プロジェクト概要

## 目的
Material Design 3 のデモサイト。Google の最新デザインシステムのコンポーネントを紹介する静的 Web サイト。

## GitHub Pages
- リポジトリ: ak03120.github.io
- URL: https://ak03120.github.io

## 構成
- ファイルは `index.html` 1ファイルのみ
- 全 HTML/CSS/JS を1ファイルに集約した静的サイト

## テックスタック
- HTML5
- Tailwind CSS (CDN: `https://cdn.tailwindcss.com`)
- Material Web Components (`@material/web` via esm.run CDN)
- Google Fonts: Roboto, Material Symbols Outlined
- ダークモード対応 (class ベース: `html.dark`)

## カラースキーム
- Red-Pink テーマ
- CSS カスタムプロパティで定義 (`:root` と `html.dark`)
- プライマリカラー: `#C0002E` (light) / `#FFB3BE` (dark)
