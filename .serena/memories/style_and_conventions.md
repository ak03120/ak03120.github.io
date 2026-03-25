# コードスタイルと規約

## HTML
- インデント: 2スペース
- 言語: `lang="ja"` (日本語 UI)
- セマンティック HTML を使用 (`<header>`, `<main>`, `<section>` 等)

## CSS
- Tailwind CSS クラスを主に使用
- Material Design トークンは CSS カスタムプロパティ (`--md-sys-color-*`) で定義
- カスタムカラーは `tailwind.config` で Tailwind に登録 (`md-primary`, `md-surface` 等)
- インラインスタイルは最小限（グラデーションなど Tailwind で表現困難な場合のみ）

## コンポーネント
- Material Web Components タグを使用 (`md-filled-button`, `md-fab`, `md-icon` 等)
- アイコンは Material Symbols Outlined

## コメント
- コード中のコメントは書かない（既存コメントは保持）

## ダークモード
- `html.dark` クラスで切り替え
- JS で `localStorage` に保存
