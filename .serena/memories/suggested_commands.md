# 開発コマンド

## ビルド・バンドル
不要。CDN を使用した静的サイトのため、ビルドステップなし。

## プレビュー
ブラウザで `index.html` を直接開くか、ローカルサーバーを立てる:
```bash
# Python を使う場合
python -m http.server 8080

# Node.js を使う場合 (npx)
npx serve .
```

## デプロイ
GitHub Pages へのデプロイは `main` ブランチへの push で自動反映。
```bash
git push origin main
```

## Git
```bash
git status
git diff
git add <file>
git commit -S -m "message"  # GPG署名付きコミット（署名は ak03120 として行うこと）
```

## システムコマンド (Windows)
- ディレクトリ一覧: `ls` または `dir`
- ファイル検索: `find` / `Get-ChildItem`
- テキスト検索: `grep` (Git Bash) / `Select-String` (PowerShell)
