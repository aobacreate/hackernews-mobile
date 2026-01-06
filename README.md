# Hacker News | Mobile版

Hacker News API を利用し、記事データを取得・表示する**モバイル向け Web アプリケーション**です。

Figma での画面設計をもとに、デザインから実装までの流れを意識して制作しました。

## 🔗 Demo

- [Webサイト（Vercel）](https://hackernews-mobile.vercel.app)
- [制作ログ（ブログ）](https://aobacreate.net/hacker-news-mobile-complete/)

## 🛠 使用技術

- Next.js（App Router）
- TypeScript
- Tailwind CSS
- Hacker News API
- Vercel（デプロイ）

## 📱 アプリ概要

- Hacker News の記事一覧を取得・表示
- モバイル画面を主軸にした UI 設計
- 読みやすさを重視したシンプルなレイアウト
- 「Top / New / Best」の切り替え表示
- 「Read More」による追加読み込み

## 🎨 デザイン

- Figma にてモバイル版 UI を設計
- フォントサイズ、行間、余白を意識した設計
- 実装時は Figma の設計に極力沿う形で反映
- [Figma](https://www.figma.com/design/gIRIASEH8Rx7Lyx1qVd8pD/-%E5%85%AC%E9%96%8B%E7%94%A8-HackerNews?node-id=2-2&t=BqBdxQvmv1OqlMb3-1)

## 🚀 ローカルでの起動方法

```bash
npm install
npm run dev
```
ブラウザで以下にアクセスしてください。

`http://localhost:3000`

## 備考
- 本プロジェクトはcreate-next-appを使用して作成しています。
- スマートフォン表示(幅393px基準)を起点として設計しています。