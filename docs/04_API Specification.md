04_API_SPECIFICATION.md

API Specification

Sistem Pakar Diagnosa Penyakit Tanaman Cabai Menggunakan

Forward Chaining dan Certainty Factor

Version: 1.0

Status: Final

Backend: Next.js Route Handlers

Database: PostgreSQL

Authentication: Custom Auth (JWT / Session)
Deployment: Vercel

1. API Overview

Base URL:

Production:

https://api.domainanda.com/api

Development:

http://localhost:3000/api

Format Response:

{

}

"success": true,

"message": "Request successful",

"data": {}

Format Error:

{

"success": false,

"message": "Validation error",

1

"errors": []

}

Pagination: Semua endpoint list mendukung query params `?page=1&limit=20`.

2. Authentication API

Login

POST

/api/auth/login

Request

{

}

"email": "admin@example.com",

"password": "password123"

Response

{

"success": true,

"data": {

"access_token": "jwt-token",

"user": {

"id": "uuid",

"name": "Admin",

"role": "admin"

}

}

}

Logout

POST

/api/auth/logout

Response

{

}

"success": true

Current User

GET

/api/auth/me

Response

{

"success": true,

3

"data": {

"id": "uuid",

"name": "User",

"role": "user"

}

}

3. Disease API

Get All Diseases

GET

/api/diseases

Response

{

"success": true,

"data": [

{

"id": "P001",

"name": "Antraknosa",

"description": "...",

"solution": "..."

}

]

}

Get Disease Detail

GET

/api/diseases/{id}

Response

4

{

"success": true,

"data": {

"id": "P001",

"name": "Antraknosa",

"description": "...",

"cause": "...",

"solution": "..."

}

}

Create Disease

POST

/api/admin/diseases

Role:

Admin Only

Request

{

}

"code": "P001",

"name": "Antraknosa",

"description": "...",

"cause": "...",
"solution": "..."

Update Disease

PUT

/api/admin/diseases/{id}

5

Delete Disease

DELETE

/api/admin/diseases/{id}

4. Symptom API

Get All Symptoms

GET

/api/symptoms

Response

{

"success": true,

"data": [

"id": "G001",

"code": "G001",

"name": "Daun Menguning"

{

}

]

}

Get Symptom Detail

GET

/api/symptoms/{id}

6

Create Symptom

POST

/api/admin/symptoms

Update Symptom

PUT

/api/admin/symptoms/{id}

Delete Symptom

DELETE

/api/admin/symptoms/{id}

5. Knowledge Base API

Knowledge Base bersifat dinamis dan dapat dikelola admin.

Get Knowledge Base

GET

/api/admin/kb

Response

{

"success": true,

7

"data": []

}

Create Rule

POST

/api/admin/kb/rules

Request

{

}

"disease_id": "P001",

"symptom_id": "G001",

"phase_id": "F01",

"mb": 0.8,

"md": 0.2

Response

{

}

"success": true

Update Rule

PUT

/api/admin/kb/rules/{id}

Delete Rule

DELETE

/api/admin/kb/rules/{id}

8

6. Forward Chaining API

Preview Rule Evaluation

POST

/api/admin/fc/test

Request

{

"symptoms": [

"G001",

"G002"

]

}

Response

{

"candidate_diseases": [

"P001",

"P002"

]

}

7. Diagnosis API

Submit Diagnosis

POST

/api/diagnosis

Auth: Optional (guest dapat mengakses)

Request

9

{

"symptoms": [

"symptom_id": "G001",

"user_cf": 0.8

"symptom_id": "G002",

"user_cf": 0.6

{

},

{

}

]

}

Response

{

"success": true,

"data": {

"diagnosis_id": "uuid",

"disease": {

"id": "P001",

"name": "Antraknosa"

},

"confidence": 92.35,

"solution": "..."

}

}

Get Diagnosis History

GET

/api/diagnosis/history

Response

{

}

"success": true,

"data": []

10

Get Diagnosis Detail

GET

/api/diagnosis/{id}

Response

{

"success": true,

"data": {

"diagnosis": {},
"result": {}

}

}

8. Dashboard API

User Dashboard

GET

/api/dashboard/user

Response

{

}

"total_consultation": 24,

"last_diagnosis": {}

11

Admin Dashboard

GET

/api/admin/dashboard

Response

{

}

"total_users": 150,

"total_diagnosis": 2100,

"total_diseases": 18,

"total_symptoms": 65

9. User Management API

Get Users

GET

/api/admin/users

Role:

Admin Only

User Detail

GET

/api/admin/users/{id}

Role:

Admin Only

10. Settings API

Get Settings

GET

/api/admin/settings

Update Settings

PUT

/api/admin/settings

Request

{

}

"site_name": "Sistem Pakar Cabai"

11. Audit Log API

Get Audit Logs

GET

/api/admin/audit-logs

13

Response

{

}

"success": true,

"data": []

12. Role Permission Matrix

Endpoint | Guest | Admin
---|---|---
Login | ✗ | ✓
Diagnosis | ✓ | ✓
History | ✓ | ✓
Disease List | ✓ | ✓
Symptom List | ✓ | ✓
Dashboard | ✗ | ✓
Disease CRUD | ✗ | ✓
Symptom CRUD | ✗ | ✓
Knowledge Base CRUD | ✗ | ✓
Rule CRUD | ✗ | ✓
User Management (view) | ✗ | ✓
Audit Logs | ✗ | ✓
Settings | ✗ | ✓

13. HTTP Status Code

Code

Description

200

Success

201

Created

14

Code

Description

400

Bad Request

401

Unauthorized

403

Forbidden

404

Not Found

422

Validation Error

500

Internal Server Error

14. Security

Authentication:

JWT Token

Authorization:

Role Based Access Control (RBAC)

Additional Security:

HTTPS Only

Rate Limiting

Input Validation

XSS Protection

CSRF Protection

SQL Injection Protection

Audit Logging

15. API Versioning

Current Version

v1

15

Example

/api/v1/diagnosis

/api/v1/diseases

/api/v1/symptoms

END OF DOCUMENT

16

