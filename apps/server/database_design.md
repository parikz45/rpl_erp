# Database Design

## Phase I

- PS: visibility tables may be redundant and need to be merged for simplicity

### Models

- authentication and authorization
    1. user
    2. sessions
    3. permissions
    4. roles
- notifications
    1. notification
    2. notification_attachments
    3. notification_visibility_user
    4. notification_visibility_role
    5. notification_read_receipts
    6. notification_priority
- documents
    1. document
    2. document_visibility_user
    3. document_visibility_role
    4. document_templates

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

### Notification Schema

| Field        | Type    | Description              |
| ------------ | ------- | ------------------------ |
| id           | UUID    | Unique ID                |
| content      | String  | Notification content     |
| priority     | UUID    | Foreign key to priority  |
| cooldown     | Integer | Cooldown of notification |
| category     | String  | Category of notification |
| sender       | String  | Sender of notification   |
| scheduled_at | Date    | Scheduled date           |
| created_at   | Date    | Creation date            |
| updated_at   | Date    | Update date              |

### Notification Attachment Schema

| Field        | Type | Description                 |
| ------------ | ---- | --------------------------- |
| id           | UUID | Unique ID                   |
| notification | UUID | Foreign key to notification |
| attachment   | UUID | Foreign key to document     |

### Notification Visibility User Schema

| Field        | Type | Description                 |
| ------------ | ---- | --------------------------- |
| id           | UUID | Unique ID                   |
| notification | UUID | Foreign key to notification |
| user         | UUID | Foreign key to user         |

### Notification Visibility Role Schema

| Field        | Type | Description                 |
| ------------ | ---- | --------------------------- |
| id           | UUID | Unique ID                   |
| notification | UUID | Foreign key to notification |
| role         | UUID | Foreign key to role         |

### Notification Read Receipt Schema

| Field        | Type | Description                 |
| ------------ | ---- | --------------------------- |
| id           | UUID | Unique ID                   |
| notification | UUID | Foreign key to notification |
| user         | UUID | Foreign key to user         |
| read_at      | Date | Read date                   |

### Notification Priority Schema

| Field     | Type     | Description               |
| --------- | -------- | ------------------------- |
| id        | UUID     | Unique ID                 |
| threshold | Interval | Threshold of notification |

### Document Schema

| Field      | Type   | Description         |
| ---------- | ------ | ------------------- |
| id         | UUID   | Unique ID           |
| type       | String | Document type       |
| title      | String | Document title      |
| created_by | UUID   | Foreign key to user |
| created_at | Date   | Creation date       |
| updated_at | Date   | Update date         |

### Document Visibility User Schema

| Field    | Type | Description             |
| -------- | ---- | ----------------------- |
| id       | UUID | Unique ID               |
| document | UUID | Foreign key to document |
| user     | UUID | Foreign key to user     |

### Document Visibility Role Schema

| Field    | Type | Description             |
| -------- | ---- | ----------------------- |
| id       | UUID | Unique ID               |
| document | UUID | Foreign key to document |
| role     | UUID | Foreign key to role     |

### Document Template Schema

| Field    | Type | Description             |
| -------- | ---- | ----------------------- |
| id       | UUID | Unique ID               |
| document | UUID | Foreign key to document |
| template | UUID | Foreign key to document |
