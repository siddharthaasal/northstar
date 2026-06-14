# Architecture Rules

Everything is an event.

Do not create:

* expenses table
* water_logs table
* gym_logs table
* medicine_logs table

Use:

TrackerType

and

Entry

Every tracked item must be representable as:

{
type: string,
timestamp: Date,
metadata: JSON
}

The system must support new tracker types without schema changes.

All analytics should derive from Entry data.

The application should be event-driven.