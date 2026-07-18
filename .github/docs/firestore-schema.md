# Firestore設計書

## コレクション構成

```
users

topics
    └ messages
```

---

# users

```
users

uid
```

フィールド

| 項目      | 型        |
| --------- | --------- |
| uid       | string    |
| name      | string    |
| email     | string    |
| anonymous | boolean   |
| photoURL  | string    |
| createdAt | Timestamp |

---

# topics

```
topics

topicId
```

| 項目      | 型        |
| --------- | --------- |
| title     | string    |
| createdBy | string    |
| createdAt | Timestamp |

---

# messages

```
topics

└ topicId

    └ messages

        └ messageId
```

| 項目      | 型        |
| --------- | --------- |
| text      | string    |
| userId    | string    |
| username  | string    |
| createdAt | Timestamp |

---

# リレーション

```
users
↓
topics.createdBy
↓
messages.userId
```

---

# インデックス

使用予定

・createdAt
・userId
・createdBy

---

# Firestore Rules

## users

本人のみ更新可能

## topics

ログインユーザーのみ作成

作成者のみ編集・削除

## messages

投稿者のみ編集・削除

ログイン済みのみ閲覧
