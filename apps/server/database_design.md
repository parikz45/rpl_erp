# Database Design

## Phase I

### Models

- authentication and authorization
    1. user
    2. sessions
    3. permissions
    4. roles
- notifications
    1. notification (id, content, priority, cooldown, timestamps, category, sender)
    2. notification_attachments (id, notification_id, attachment_id)
    3. notification_visibility_user (id, notification_id, user_id, role_id)
    4. notification_visibility_role (id, notification_id, role_id)
    5. notification_read_receipts (id, notification_id, user_id)
- documents
    1. document (id, type, title, createdBy, timestamps)
    2. document_visibility_user (id, document_id, user_id)
    3. document_visibility_role (id, document_id, role_id)
    4. document_templates (id, document_id, timestamps)

1.  sender, priority, message, attachments, read receipts, cooldowns, timestamps, contact details (email, phone), category

### User Schema

| Field    | Type   | Description   |
| -------- | ------ | ------------- |
| id       | UUID   | Unique ID     |
| email    | String | Email address |
| password | String | Password hash |

### Session Schema

| Field         | Type   | Description               |
| ------------- | ------ | ------------------------- |
| id            | UUID   | Unique ID                 |
| user_id       | UUID   | Foreign key to user       |
| refresh_token | String | JWT token (refresh token) |
| expires       | Date   | Expiration date           |

### Permission Schema

| Field | Type   | Description     |
| ----- | ------ | --------------- |
| id    | UUID   | Unique ID       |
| name  | String | Permission name |

### Role Schema

| Field    | Type    | Description      |
| -------- | ------- | ---------------- |
| id       | UUID    | Unique ID        |
| name     | String  | Role name        |
| priority | Integer | Priority of role |

### Permissions & Roles (Join Table)

| Field         | Type | Description               |
| ------------- | ---- | ------------------------- |
| id            | UUID | Unique ID                 |
| role_id       | UUID | Foreign key to role       |
| permission_id | UUID | Foreign key to permission |

### User & Role (Join Table)

| Field    | Type    | Description         |
| -------- | ------- | ------------------- |
| id       | UUID    | Unique ID           |
| user_id  | UUID    | Foreign key to user |
| role_id  | UUID    | Foreign key to role |
| priority | Integer | Priority of role    |
