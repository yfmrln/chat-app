# コーディング規約

## TypeScript

必須

- strict
<!-- - any禁止 -->
- unknown優先
- import type を利用
- Interfaceを優先

---

## React

Function Component
Hooks使用
Custom Hooksでロジック分離
PropsはInterface
useEffectの依存配列を省略しない

---

## 命名規則

### Component

```
ChatWindow.tsx
```

PascalCase

---

### Hook

```
useMessages.ts
```

useから始める

---

### Store

```
authStore.ts
```

〇〇Store

---

### 型

```
Message

Topic

UserProfile
```

PascalCase

---

### 変数

camelCase

```
messageList

userName

createdAt
```

---

### 定数

大文字

```
MAX_MESSAGE_LENGTH
```

---

## CSS

Tailwindのみ
CSSファイルは最小限

---

## Firebase

Firestore処理は firebase 配下
Hooksから直接Firestoreを書かない

---

## エラー処理

try/catchを利用
alertではなくToastへ移行予定

---

## コメント

複雑な処理のみ記述
不要なコメントは書かない

---

## ファイルサイズ

Component
200行以内
Hook
150行以内
超えたら分割を検討する

---

## Git

コミット例

feat:
fix:
refactor:
style:
docs:
test:
chore:
