# GitHub Copilot カスタム指示

## プロジェクト概要

このプロジェクトはリアルタイムチャットアプリです。
目的は個人開発ポートフォリオとして公開し、実務レベルのコード品質を維持することです。

---

## 使用技術

- React
- TypeScript
- Vite
- Tailwind CSS v4
- Firebase Authentication
- Cloud Firestore
- Firebase Hosting

---

## 基本方針

コードは「読みやすさ」と「保守性」を最優先にしてください。
以下を必ず守ってください。

- TypeScript strict を前提にする
- any を使用しない
- import type を使用する
- async/await を使用する
- 関数コンポーネントを使用する
- React Hooks のルールを守る
- コンポーネントは単一責任にする
- 共通処理は hooks に分離する

---

## ディレクトリ構成

src/
components/
pages/
hooks/
firebase/
store/
types/
utils/

---

## Firebase

Authentication
・メールログイン
・匿名ログイン
Firestore
users
topics
messages
Realtime は onSnapshot を利用する

---

## UI

Discord風デザインを意識する
・ダークテーマ
・レスポンシブ対応
・シンプル
・角丸
・Tailwind CSS v4

---

## セキュリティ

Firebase Config は環境変数を利用する
import.meta.env を使用する
Firestore Rules を考慮してコードを書く
本人以外が編集・削除できるコードは生成しない

---

## コード生成時

新しいコードを書く場合は
① ファイル構成
② 完全コード
③ 変更点
④ 解説
まで出力してください。

途中だけのコードではなく、そのまま貼り付けられる完全コードを生成してください。
