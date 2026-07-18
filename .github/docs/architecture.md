# アーキテクチャ設計書

## プロジェクト概要

Discord風のリアルタイムチャットアプリです。

React + TypeScript + Firebase を利用し、
ポートフォリオ公開を目的として開発します。

---

# 使用技術

## Frontend

- React
- TypeScript
- Vite
- Tailwind CSS v4
- React Router
- Zustand

## Backend

- Firebase Authentication
- Cloud Firestore
- Firebase Hosting

---

# システム構成

```
Browser
    │
    ▼
React
    │
    ▼
Firebase Authentication
    │
    ▼
Cloud Firestore
```

---

# ディレクトリ構成

```
src/

components/
    共通UI

pages/
    画面

hooks/
    カスタムHooks

firebase/
    Firebase関連

store/
    Zustand

types/
    型定義

utils/
    共通処理

assets/
    画像など
```

---

# 画面構成

```
Login

Register

↓

Chat

 ├ Sidebar
 │   ├ Topic一覧
 │   └ Topic追加
 │
 └ ChatWindow
     ├ Header
     ├ Message一覧
     └ MessageInput
```

---

# データの流れ

```
UI
↓
Hook
↓
Firebase
↓
Firestore
↓
onSnapshot()
↓
UI更新
```

---

# 設計方針

・責務を分離する
・コンポーネントは単一責任
・ロジックは Hooks
・Firebase処理は firebase 配下
・型は types に集約
・UIとデータ処理を分離する

---

# 今後追加予定

・画像投稿
・プロフィール
・既読機能
・通知
・検索
・管理者機能
