# CompRank Landing

CompRank presents event-management workflows for functional fitness competitions. This context captures the product language used in landing-page demonstrations.

## Language

**Judge scoring screen**:
A mobile scoring interface used by a judge during a live heat.
_Avoid_: Generic counter, decorative phone app

**Valid rep**:
A repetition accepted by the judge and counted toward the athlete's score.
_Avoid_: Rep when the distinction from a no rep matters

**No rep**:
A repetition rejected by the judge during scoring.
_Avoid_: Failed rep, invalid count

**Heat progress**:
The judge-facing context showing where the current athlete sits in the event flow, such as lane and heat number.
_Avoid_: Schedule metadata

**Smart Planner**:
An organizer-facing planning workspace for generating and editing draft heat schedules before they become real heats.
_Avoid_: Calendar generator, automatic schedule

**Workout**:
A scored event component that defines the duration used to schedule its heats.
_Avoid_: WOD when speaking about planner inputs

**Division**:
A competition category whose registered spots determine how many heats a workout needs.
_Avoid_: Category when speaking about planner inputs

**Reference time**:
The organizer's anchor time for generation, interpreted as either the first heat start time or the final heat end time.
_Avoid_: Start time when the anchor may be backward from the end

**Lane capacity**:
The maximum number of athletes that can be assigned to one generated heat.
_Avoid_: Platform count

**Draft plan**:
A locally stored generated schedule for one competition date that can be edited before commit.
_Avoid_: Published schedule, real heats

**Committed heats**:
The real heats created from a draft plan, replacing existing heats for that date after organizer confirmation.
_Avoid_: Saved draft

## Relationships

- A **Judge scoring screen** records **Valid reps** and **No reps** for one athlete in one heat.
- **Heat progress** belongs on the **Judge scoring screen** when scoring is happening live.
- The **Smart Planner** creates a **Draft plan** from ordered **Workouts** and **Divisions**.
- A **Draft plan** contains one or more heats per **Workout** and **Division**.
- **Lane capacity** determines how many heats the **Smart Planner** creates for each **Workout** and **Division**.
- **Committed heats** are created from one **Draft plan** for one competition date.

## Example dialogue

> **Dev:** "Should the phone mockup just show a large counter?"
> **Domain expert:** "No — it should look like a **Judge scoring screen**, with **Valid rep**, **No rep**, lane, and heat progress visible."

> **Dev:** "Can the **Smart Planner** publish heats immediately after generation?"
> **Domain expert:** "No — generation creates a **Draft plan** first, and only **Committed heats** replace the date's existing heats after confirmation."

## Flagged ambiguities

- "Phone screen" was resolved to mean **Judge scoring screen**, not a generic mobile product preview.
- "Planning" was resolved to mean the **Smart Planner** draft workflow, not a static calendar view.
