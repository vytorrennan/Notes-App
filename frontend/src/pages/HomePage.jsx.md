# HomePage Component Documentation

[Linked Table of Contents](#linked-table-of-contents)

## Linked Table of Contents

* [1. Overview](#1-overview)
* [2. Component Structure](#2-component-structure)
* [3. Props](#3-props)
* [4. Conditional Rendering](#4-conditional-rendering)
* [5. Child Components](#5-child-components)


## 1. Overview

The `HomePage` component is a React functional component responsible for displaying a list of notes. It conditionally renders either a "no notes found" message or a filter component and a note card container, depending on the presence of notes.


## 2. Component Structure

The `HomePage` component utilizes a simple functional structure leveraging JSX for rendering.  It receives props and returns a JSX fragment (`<> </>`).  The core logic lies in the conditional rendering based on the `notes` prop.


## 3. Props

The `HomePage` component accepts the following props:

| Prop Name        | Type          | Description                                                                   |
|-----------------|-----------------|-------------------------------------------------------------------------------|
| `notes`          | Array          | An array of note objects.  Empty array indicates no notes.                   |
| `loading`        | Boolean        | A boolean indicating whether the notes are currently loading.                 |
| `handleFilterText` | Function       | A function to handle changes in the filter text input.  Passed to the `Filter` component. |


## 4. Conditional Rendering

The component employs a ternary operator (`condition ? true : false`) for conditional rendering:

```javascript
{notes.length < 1 ? (
  // Render "no notes found" message if notes array is empty
  <h4 style={{ textAlign: "center", marginTop: "10px" }}>
    There is no note found with the search phrase above
  </h4>
) : (
  // Render Filter component and NoteCardContainer if notes exist
  <Filter handleFilterText={handleFilterText} />
)}
```

This efficiently determines whether to display a "no notes found" message or the filter and note card components based on the number of notes present.  If the `notes` array's length is less than 1, the "no notes found" message is displayed. Otherwise, the `Filter` component and the `NoteCardContainer` are rendered.  This improves user experience by providing clear feedback when no notes match the search criteria.


## 5. Child Components

The `HomePage` component utilizes two child components:

* **`Filter`**:  A component responsible for handling user input for filtering notes (passed `handleFilterText` prop).
* **`NoteCardContainer`**: A component responsible for displaying the notes (passed `notes` and `loading` props).

These components encapsulate their respective functionalities, promoting modularity and maintainability.
