# Task 1: List Management Interface

**User Story**

> As a user of this application,
> I want to enter items into a list, one at a time,
> so that I can manage my collection of items.

**Notes**:

- Create a form with 1 field
  - The form should not submit unless the field/input value length is > 2
  - The field should show invalid if it has been interacted with and field/input value length is <= 2
  - Store list of items in the provided Data Service
  - After an item is created, it should appear in a list on the screen
    - Each item in the list should appear on its own line with a clickable 'x' or 'remove' button
      - When clicked, the corresponding item is removed from the list in real-time

**Routing Details**:

To implement routing for this task, follow these steps:

1. Configure a new route for Task 1 in the routing module, pointing to the `Task1Component`.
2. Update the navigation menu to include a link to Task 1 that navigates to the route for `Task1Component`.

**When finished**:

Proceed to [Task 2](../task2/README.md)
