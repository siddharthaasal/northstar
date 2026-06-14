# UI Rules

Use shadcn/ui exclusively for primitives.

Allowed:

* Button
* Input
* Dialog
* Drawer
* Sheet
* Popover
* Command
* Calendar
* Table
* Badge
* Tooltip
* Tabs
* Dropdown Menu
* Select

Avoid creating custom primitives.

Spacing:

* 4px base scale
* Consistent padding
* No arbitrary spacing values

Typography:

* Geist
* Maximum 3 text sizes per screen

Colors:

* Use semantic tokens only
* No hardcoded colors
* No Tailwind color classes in components

Charts:

* Recharts only

Icons:

* Lucide only

Animations:

* Framer Motion only
* Maximum duration 200ms

Loading States:

* Skeletons
* Optimistic updates

Never use:

* Alert()
* Confirm()
* Browser prompts

Always use:

* Dialog
* Toast
* Sheet

Forms:

* React Hook Form
* Zod validation

Every screen must have:

* Empty state
* Loading state
* Error state
