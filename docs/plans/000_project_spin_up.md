# Personal Life OS

## Goal

Build a personal web application that acts as a centralized life operating system.

This application is intended for a single user initially and should prioritize:

* Fast data entry
* Flexibility
* Long-term maintainability
* Extensibility
* Mobile-first usage

The application should allow tracking of:

* Expenses
* Food and nutrition
* Water intake
* Gym workouts
* Medicines
* Skincare
* Daily routines
* Future custom trackers

The system should be designed so that new tracker types can be added without major database schema changes.

---

# Technology Stack

Frontend:

* Next.js 15
* TypeScript
* Tailwind CSS
* shadcn/ui

Backend:

* Next.js Server Actions
* Next.js Route Handlers

Database:

* PostgreSQL
* Drizzle ORM

Authentication:

* Auth.js

Hosting:

* Vercel

Database Hosting:

* Neon

---

# Core Product Concept

Everything in the application should be treated as a log entry.

Examples:

Expense:

* amount
* category
* note

Food:

* food item
* quantity

Water:

* quantity

Gym:

* exercise
* sets
* reps
* weight

Medicine:

* medicine
* dosage

Skincare:

* routine item

Instead of creating separate database tables for every tracker type, create a generic tracker architecture.

---

# Database Design

## users

Standard user table.

Fields:

* id
* email
* password hash
* created_at

---

## tracker_types

Represents a type of tracker.

Examples:

* Expense
* Food
* Water
* Gym
* Medicine
* Skincare

Fields:

* id
* name
* icon
* color
* active
* created_at

---

## entries

Stores all logs.

Fields:

* id
* user_id
* tracker_type_id
* entry_date
* metadata (JSONB)
* created_at

Examples:

Expense:

{
"amount": 250,
"category": "Coffee",
"note": "Blue Tokai"
}

Water:

{
"quantity_ml": 500
}

Gym:

{
"exercise": "Bench Press",
"sets": 3,
"reps": 8,
"weight": 70
}

Food:

{
"food_id": "food_x",
"servings": 2
}

---

## food_catalog

Stores reusable foods.

Fields:

* id
* name
* serving_size
* calories
* protein
* carbs
* fat
* fiber
* micronutrients (JSONB)

Example:

Banana:

* calories
* protein
* carbs
* fats

Chicken Breast:

* calories
* protein
* carbs
* fats

Users should create foods once and reuse them.

---

## routines

A reusable group of actions.

Examples:

Morning Routine:

* Water
* Vitamins
* Face Wash
* Sunscreen

Night Routine:

* Medicine
* Moisturizer

Fields:

* id
* name
* description

---

## routine_items

Fields:

* id
* routine_id
* tracker_type_id
* default_metadata

Example:

Morning Water:
{
"quantity_ml": 500
}

---

# MVP Features

## Dashboard

Show today's progress.

Cards:

Calories
Protein
Water
Workout Status
Routine Completion
Expenses

---

## Quick Add

The most important feature.

User should be able to log anything within a few seconds.

Examples:

* Water
* Expense
* Food
* Workout

---

## Expenses

Track:

* Amount
* Category
* Notes

Provide:

* Daily total
* Weekly total
* Monthly total

---

## Nutrition

Track:

* Calories
* Protein
* Carbs
* Fat

Generate:

* Daily totals
* Weekly averages

---

## Water

Track:

* Quantity
* Daily goal progress

---

## Gym

Track:

* Exercise
* Sets
* Reps
* Weight

Generate:

* Workout history
* Personal bests

---

## Medicines

Track:

* Medicine
* Dosage
* Time

---

## Skincare

Track:

* Routine completion

---

# UI Requirements

Mobile-first.

Primary screens:

1. Dashboard
2. Add Entry
3. History
4. Food Catalog
5. Routines
6. Settings

Navigation:

* Bottom navigation on mobile
* Sidebar on desktop

---

# Future Features

Do not implement yet, but design with these in mind.

* Habit streaks
* Sleep tracking
* Mood tracking
* Body measurements
* AI insights
* Weekly reviews
* CSV export
* Calendar view
* Notifications
* Progressive Web App support

---

# Development Plan

Phase 1:

* Authentication
* Database setup
* Generic tracker system
* Expense tracking
* Water tracking

Phase 2:

* Food catalog
* Nutrition tracking
* Dashboard metrics

Phase 3:

* Gym tracking
* Medicines
* Skincare

Phase 4:

* Routines
* Analytics
* Weekly review system

Build production-quality code with strict TypeScript, reusable components, server actions, and responsive UI.
