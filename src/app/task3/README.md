# Task 3: Route Protection Based on Data

**User Story**

> As a user of this application,
> I want certain areas of the application to be accessible only when my list of items is not empty,
> so that I can ensure data integrity in those areas.

**Notes**:

- Implement route protection for a new component using Angular routing guards
  - Access to the route should be allowed only when the list of items in the Data Service is not empty
  - If the list is empty, navigation to the route should be prevented

**Routing Details**:

To implement routing for this task, follow these steps:

1. Configure a new route for Task 3 in the routing module, pointing to the `Task3Component`.
2. Update the navigation menu to include a link to Task 3 that navigates to the route for `Task3Component`.

**When finished**:

Proceed to [Task 4](../task4/README.md)
