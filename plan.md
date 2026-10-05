# Backend Development + Interview Preparation Plan

## Goal

Build strong, interview-ready backend engineering skills through **real projects**, while gradually moving from guided coding to independent system design and implementation.

### Primary stack

* JavaScript
* Node.js
* Express.js
* MongoDB
* Mongoose
* REST APIs
* JWT Authentication
* Docker
* Git & GitHub
* CI/CD
* Basic deployment
* System Design fundamentals

### Learning philosophy

> **Build first → understand through implementation → review → identify gaps → prepare for interviews.**

This plan intentionally avoids spending multiple days only studying theory.

---

# Overall Progression

| Stage       | Project                   | Guidance Level     | Main Goal                                        |
| ----------- | ------------------------- | ------------------ | ------------------------------------------------ |
| Project 1   | Employee Management API   | Guided             | Express + REST + CRUD foundation                 |
| Project 2   | Real-World Backend API    | Semi-guided        | MongoDB + Mongoose + Auth + business logic       |
| Project 3   | Production-Style Capstone | Mostly independent | Advanced backend engineering                     |
| Final Phase | Interview Preparation     | Targeted           | Close gaps + project explanation + system design |

### Important rule

The number of days is a **target, not a restriction**.

If a project objective is completed early, move forward.

Do **not** create unnecessary work just to fill a planned day.

---

# PROJECT 1 — Employee Management API

## Objective

Build a complete REST API while learning the fundamentals of Node.js and Express.

### Status

**COMPLETED — Express/in-memory CRUD foundation**

The project covered:

* Express setup
* Routes
* Controllers
* Middleware
* `req.params`
* `req.query`
* `req.body`
* Filtering
* Pagination
* Validation
* CRUD
* HTTP status codes
* 404 handling
* Centralized error middleware
* `next()`
* `next(error)`
* Basic project architecture
* Practical assessment

### Architecture

```text
employee-management-api/
│
├── controllers/
│   └── employeeController.js
│
├── data/
│   └── employees.js
│
├── routes/
│   └── employeeRoutes.js
│
├── app.js
└── package.json
```

### Key concepts completed

#### Express

* Express application
* `app.use()`
* Routes
* Router
* Route parameters
* Query parameters
* Request body
* JSON middleware
* Middleware order
* `next()`

#### REST API

* GET
* POST
* PUT
* DELETE
* Resource-based URLs
* HTTP status codes

#### JavaScript used in backend

* `find()`
* `filter()`
* `findIndex()`
* `splice()`
* `every()`
* `typeof`
* `trim()`
* Array manipulation
* Template literals
* CommonJS modules

#### Validation

* Required fields
* Type checking
* Empty string checking
* Pagination validation
* Invalid request handling

#### Error handling

* 404 route handling
* 404 resource handling
* Centralized error middleware
* `next(error)`
* 500 Internal Server Error
* Middleware execution flow

#### Architecture

* Routes
* Controllers
* Data layer
* Separation of concerns
* `require()`
* `module.exports`

---

# PROJECT 1 FINAL CHECKPOINT

Before considering Project 1 fully closed:

* [x] CRUD works
* [x] Filtering works
* [x] Pagination works
* [x] Validation works
* [x] 404 handling works
* [x] Error middleware works
* [x] Routes/controllers separated
* [x] Practical assessment passed
* [ ] Final Postman CRUD verification
* [ ] Clean README
* [ ] Push final version to GitHub

After this, **do not keep expanding Project 1 unnecessarily.**

---

# PROJECT 2 — Real-World Backend API

## Objective

Move from a simple in-memory API to a backend that resembles an actual company project.

This project is where we introduce:

* MongoDB
* Mongoose
* Authentication
* Authorization
* Real business logic
* Relationships
* Advanced queries
* Better architecture
* Testing
* Git/GitHub
* Basic deployment

## Guidance level

### Semi-guided

The workflow will be:

```text
Requirements
     ↓
You decide API design
     ↓
You decide folder structure
     ↓
You implement
     ↓
I review
     ↓
Fix/improve
     ↓
Interview concepts from what you built
```

I should **not give the complete solution upfront**.

---

# Project 2 Phases

## Phase 1 — Requirements & API Design

### Tasks

* Understand business requirements
* Identify resources
* Identify users/roles
* Identify relationships
* Design REST endpoints
* Decide request/response structure
* Identify validation requirements

### Interview concepts

* REST API design
* Resource-oriented URLs
* HTTP methods
* Status codes
* API design tradeoffs
* Requirement analysis
* Basic system-design thinking

---

# Phase 2 — Project Architecture

### Tasks

Create a maintainable structure such as:

```text
project-2/
│
├── controllers/
├── routes/
├── services/
├── models/
├── middleware/
├── config/
├── utils/
├── app.js
├── server.js
└── package.json
```

The exact structure will be decided during the project rather than blindly copied.

### Concepts

* Separation of concerns
* Controller vs service
* Middleware
* Configuration
* Environment variables
* CommonJS/modules
* Application startup
* Development vs production configuration

---

# Phase 3 — MongoDB + Mongoose

### Tasks

* Connect Node.js to MongoDB
* Configure environment variables
* Create schemas
* Create models
* Insert documents
* Find documents
* Update documents
* Delete documents
* Add validation
* Handle database errors

### Concepts

* SQL vs NoSQL
* Database vs application filtering
* MongoDB documents
* Collections
* `_id`
* ObjectId
* Mongoose ODM
* Schema
* Model
* Mongoose validation
* Async database operations
* Promises
* `async/await`
* Error propagation

---

# Phase 4 — Main Business Logic

Build the project's primary resource.

### Tasks

* Create
* Read
* Update
* Delete
* Validation
* Business rules
* Error handling
* Service layer
* Database operations

### Focus

Don't just make CRUD.

Implement actual business rules.

Example:

```text
Request
   ↓
Route
   ↓
Controller
   ↓
Service
   ↓
Model
   ↓
MongoDB
```

---

# Phase 5 — Authentication

Implement:

* User registration
* Password hashing
* Login
* JWT generation
* JWT verification
* Authentication middleware
* Protected routes

### Interview concepts

* Authentication vs authorization
* Password hashing
* Salt
* JWT
* Access tokens
* Stateless authentication
* Token verification
* Middleware-based authentication

---

# Phase 6 — Authorization

Implement:

* Roles
* Permissions
* Protected resources
* Role-based access
* Ownership checks

Example:

```text
Admin
 ├── Create
 ├── Update
 ├── Delete
 └── View

User
 └── View own resources
```

### Interview concepts

* RBAC
* Authentication vs authorization
* Ownership
* Permission checks
* Authorization middleware

---

# Phase 7 — Relationships & Advanced Queries

Implement where appropriate:

* Resource relationships
* Search
* Filtering
* Sorting
* Pagination
* Multiple query parameters
* Edge cases

### Interview concepts

* Query design
* Pagination strategies
* Indexes
* Query performance
* Scalability
* Database-side filtering

---

# Phase 8 — API Quality

Improve:

* Response consistency
* Validation
* Error responses
* Logging
* Edge-case handling
* Security basics
* HTTP status codes

### Goal

The API should feel like something another developer could actually consume.

---

# Phase 9 — Testing & Debugging

Use Postman and/or automated tests.

Test:

### Positive cases

* Valid registration
* Valid login
* Valid CRUD
* Valid search
* Valid pagination

### Negative cases

* Missing fields
* Invalid IDs
* Duplicate data
* Unauthorized request
* Invalid token
* Forbidden action
* Database errors
* Invalid query parameters

### Concepts

* Positive testing
* Negative testing
* Boundary testing
* Debugging
* API testing strategy

---

# Phase 10 — GitHub & Basic Deployment

### Tasks

* Clean repository
* `.gitignore`
* Environment configuration
* README
* API documentation
* Git commits
* Push to GitHub
* Basic deployment

### Concepts

* Git workflow
* Environment variables
* Production configuration
* Logs
* Deployment
* Basic CI/CD
* Production debugging

---

# PROJECT 2 CHECKPOINT

Before moving to Project 3:

* [ ] Requirements understood
* [ ] REST API designed independently
* [ ] Architecture created independently
* [ ] MongoDB integrated
* [ ] Mongoose used
* [ ] CRUD completed
* [ ] Business logic implemented
* [ ] Authentication completed
* [ ] Authorization completed
* [ ] Search/filter/sort/pagination completed
* [ ] Validation completed
* [ ] Error handling completed
* [ ] Testing completed
* [ ] GitHub repository completed
* [ ] README completed
* [ ] Basic deployment completed
* [ ] Project explanation practice completed
* [ ] Project 2 assessment passed

---

# PROJECT 3 — BIG CAPSTONE

## Objective

Build one production-style backend project that demonstrates the skills expected from a mid-level backend/full-stack engineer.

### Guidance level

**Mostly independent.**

You should make most architectural decisions.

I act as:

* Mentor
* Reviewer
* Debugging partner
* Interviewer
* Architecture reviewer

I should avoid designing the entire project for you unless you are genuinely stuck.

---

# CAPSTONE PHASE 1 — Requirements

You will define:

* Problem
* Users
* Roles
* Core features
* Business rules
* APIs
* Constraints
* Non-functional requirements

---

# CAPSTONE PHASE 2 — System & Database Design

You will design:

* Architecture
* Collections/tables
* Relationships
* Indexes
* API structure
* Authentication flow
* Authorization model

### Interview focus

* Scalability
* Availability
* Performance
* Database design
* Caching concepts
* API design
* Tradeoffs

---

# CAPSTONE PHASE 3 — Production Foundation

Implement:

* Node.js
* Express
* Configuration
* MongoDB
* Mongoose
* Structured project architecture
* Environment variables
* Logging
* Error handling

---

# CAPSTONE PHASE 4 — Authentication & Security

Implement:

* Registration
* Login
* Password hashing
* JWT
* Authentication middleware
* Authorization
* Roles/permissions
* Input validation
* Security basics

Understand:

* Authentication
* Authorization
* Token security
* Password security
* Common API vulnerabilities

---

# CAPSTONE PHASE 5 — Core Modules

Build the main business features.

Focus on:

* Service-layer business logic
* Database interactions
* Validation
* Transactions where appropriate
* Error handling
* Relationships
* Real-world edge cases

---

# CAPSTONE PHASE 6 — Advanced API

Implement:

* Search
* Filtering
* Sorting
* Pagination
* Advanced queries
* Indexing
* Performance improvements

---

# CAPSTONE PHASE 7 — Testing

Implement appropriate:

* Unit tests
* API/integration tests
* Authentication tests
* Authorization tests
* Error tests
* Edge-case tests

---

# CAPSTONE PHASE 8 — Docker & CI/CD

Learn and implement:

* Docker
* Dockerfile
* Docker Compose where appropriate
* Environment configuration
* Build process
* CI pipeline
* Basic CD/deployment workflow

---

# CAPSTONE PHASE 9 — Deployment

Deploy the project.

Understand:

```text
Code
 ↓
GitHub
 ↓
CI
 ↓
Build
 ↓
Deploy
 ↓
Application
 ↓
Database
```

Learn basic:

* Production logs
* Environment variables
* Deployment failures
* Debugging
* Health checks

---

# CAPSTONE PHASE 10 — Documentation & Interview Explanation

Create:

* README
* Architecture diagram
* API documentation
* Setup instructions
* Environment variable documentation
* Database overview
* Important design decisions

Practice explaining:

> What problem does the project solve?

> Why did you choose this architecture?

> Why MongoDB?

> Why this database structure?

> How does authentication work?

> How does authorization work?

> How does a request flow through the application?

> What happens when the database fails?

> How would you scale it?

> What would you improve with more time?

---

# INTERVIEW PREPARATION

Interview preparation will happen **alongside projects**, not only after finishing everything.

## JavaScript

Cover:

* `var`, `let`, `const`
* Scope
* Hoisting
* Closures
* `this`
* Arrow functions
* Destructuring
* Spread/rest
* Array methods
* Objects
* Promises
* Async/await
* Event loop
* Call stack
* Microtasks/macrotasks
* Error handling
* Modules
* CommonJS vs ES modules

---

# Node.js

Cover:

* Node.js runtime
* V8
* Event loop
* Non-blocking I/O
* Async operations
* Streams
* Buffers
* Modules
* `process`
* Environment variables
* File system basics
* Error handling
* Performance basics

---

# Express.js

Cover:

* Routing
* Middleware
* Request/response lifecycle
* `req.params`
* `req.query`
* `req.body`
* Router
* `app.use()`
* Error middleware
* Authentication middleware
* Validation middleware
* Middleware order
* REST API design

---

# Database

### MongoDB

* Documents
* Collections
* ObjectId
* CRUD
* Queries
* Updates
* Indexes
* Aggregation basics
* Relationships
* Performance

### Mongoose

* Schema
* Model
* Validation
* Middleware/hooks
* Population
* Queries
* ObjectId
* Error handling

### General database concepts

* SQL vs NoSQL
* Normalization
* Indexing
* Transactions
* ACID
* Query optimization
* Database scalability

---

# API & Backend Engineering

Cover:

* REST
* HTTP methods
* HTTP status codes
* Idempotency
* PUT vs PATCH
* Validation
* Error handling
* Authentication
* Authorization
* JWT
* RBAC
* API security
* Pagination
* Search
* Filtering
* Sorting
* Rate limiting concepts
* Logging

---

# System Design

Start basic and gradually increase difficulty.

### Fundamentals

* Client/server
* APIs
* Load balancing
* Caching
* Databases
* Queues
* Horizontal scaling
* Vertical scaling
* Stateless services
* Availability
* Reliability

### Later

* Redis
* Message queues
* Background jobs
* Microservices concepts
* Distributed systems basics
* Database scaling
* Caching strategies

These should be learned when they become relevant to project requirements rather than as isolated theory.

---

# DevOps

Cover:

* Git
* GitHub
* Branching
* Pull requests
* Environment variables
* Docker
* Docker Compose
* CI/CD
* Deployment
* Logs
* Monitoring basics
* Production debugging

---

# ASSESSMENT SYSTEM

Each project ends with an assessment.

## Assessment 1 — Project 1

Test:

* Express
* Routing
* Middleware
* CRUD
* Validation
* Query handling
* Error handling
* Basic architecture

**Status: PASSED**

---

## Assessment 2 — Project 2

You receive requirements without the implementation.

You must:

1. Identify resources
2. Design endpoints
3. Design folder structure
4. Explain request flow
5. Implement the feature
6. Handle errors
7. Explain design decisions

---

## Assessment 3 — Project 3

A realistic interview-style backend requirement.

You independently:

* Analyze requirements
* Design APIs
* Design database
* Design architecture
* Implement
* Test
* Explain tradeoffs

---

# FINAL INTERVIEW AUDIT

Before serious interview preparation, review:

## JavaScript

* [ ] Fundamentals
* [ ] Async programming
* [ ] Event loop
* [ ] Closures
* [ ] Array/object operations
* [ ] Error handling

## Node.js

* [ ] Runtime
* [ ] Event loop
* [ ] Async I/O
* [ ] Modules
* [ ] Streams basics
* [ ] Performance

## Express

* [ ] Routing
* [ ] Middleware
* [ ] Error handling
* [ ] REST
* [ ] Request lifecycle

## Database

* [ ] MongoDB
* [ ] Mongoose
* [ ] Indexes
* [ ] Queries
* [ ] Relationships
* [ ] Transactions
* [ ] Performance

## Backend Engineering

* [ ] Authentication
* [ ] Authorization
* [ ] JWT
* [ ] Validation
* [ ] Security
* [ ] Logging
* [ ] API design

## DevOps

* [ ] Git
* [ ] GitHub
* [ ] Docker
* [ ] CI/CD
* [ ] Deployment

## System Design

* [ ] API design
* [ ] Database design
* [ ] Caching
* [ ] Load balancing
* [ ] Queues
* [ ] Scalability
* [ ] Reliability

---

# DAILY WORKFLOW

Do not force a fixed 3–5 hour study session.

Use smaller focused sessions.

### Session 1 — Build

Work on the project.

### Session 2 — Understand

Learn only the concepts required for the current task.

### Session 3 — Review

* Test
* Debug
* Clean code
* Commit
* Explain what you built

Example:

```text
Morning
→ Implement feature

Afternoon
→ Fix/debug/test

Night
→ Review concepts + interview questions
```

---

# TRAINING RULES

### Rule 1 — Project first

Do not spend hours studying theory before implementing.

### Rule 2 — One task at a time

Don't receive the entire implementation upfront.

### Rule 3 — You write the code

I provide:

* Requirements
* Hints
* Explanations
* Reviews
* Debugging help
* Interview questions

You implement whenever possible.

### Rule 4 — No unnecessary files

Don't create tiny files just to demonstrate isolated concepts.

Concepts should be integrated into the real project whenever possible.

### Rule 5 — Don't repeat completed topics

Once a concept has been demonstrated and understood, move forward.

Review it later during interview preparation.

### Rule 6 — Don't artificially stretch projects

If the objective is achieved, move to the next stage.

### Rule 7 — Difficulty increases gradually

```text
Project 1
Guided
   ↓
Project 2
Semi-guided
   ↓
Project 3
Mostly independent
   ↓
Interview
Independent explanation
```

### Rule 8 — Interview thinking starts early

For every important feature, eventually ask:

> Why did we implement it this way?

> What could go wrong?

> How would this behave in production?

> How would you improve it?

---

# FINAL TARGET

By the end of the roadmap, the goal is **not** simply:

> "I know Node.js."

The goal is to confidently say:

> "I can design, build, debug, test, secure, deploy, and explain a backend application."

You should be able to independently:

```text
Requirement
    ↓
API Design
    ↓
Architecture
    ↓
Database Design
    ↓
Implementation
    ↓
Authentication / Authorization
    ↓
Validation / Error Handling
    ↓
Testing
    ↓
Docker / CI/CD
    ↓
Deployment
    ↓
System Design Discussion
```

This is the standard we will use to judge readiness for backend/full-stack software engineering interviews.
