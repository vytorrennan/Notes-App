# AddNotePage Component Documentation

## Table of Contents

* [1. Overview](#1-overview)
* [2. Component Props](#2-component-props)
* [3. Component State](#3-component-state)
* [4. `handleSubmit` Function](#4-handlesubmit-function)
* [5. UI Rendering](#5-ui-rendering)


## 1. Overview

The `AddNotePage` component is a React functional component responsible for creating and submitting new note entries. It utilizes controlled form inputs to manage user input and integrates with a parent component via the `addNote` prop to persist the new note.  Navigation to the home page after successful submission is handled using `react-router-dom`.

## 2. Component Props

| Prop Name | Data Type | Description | Required |
|---|---|---|---|
| `addNote` | Function | A function passed from a parent component. This function is responsible for handling the addition of the new note to the application's state or data store. It accepts a single argument: an object representing the new note. | Yes |


## 3. Component State

The component maintains the following state variables using the `useState` hook:

| State Variable | Data Type | Initial Value | Description |
|---|---|---|---|
| `title` | String | `""` | Stores the title of the new note entered by the user. |
| `body` | String | `""` | Stores the main content (body) of the new note. |
| `category` | String | `""` | Stores the category assigned to the new note. |


## 4. `handleSubmit` Function

The `handleSubmit` function is the event handler for the form's submission.  It performs the following actions:

1. **Prevents default form submission behavior:** `e.preventDefault()` prevents the page from automatically refreshing upon form submission.

2. **Input Validation:** It checks if all input fields (`title`, `body`, and `category`) are empty. If all are empty, it returns early, preventing submission of an empty note.

3. **Note Creation and Submission:** If at least one field has input, it calls the `addNote` prop, passing the `newNote` object (containing the current values of `title`, `body`, and `category`) as an argument. This triggers the note creation process in the parent component.

4. **Navigation:** After successful submission, it uses `navigate("/")` from `react-router-dom` to redirect the user back to the home page ("/").

5. **Logging:** It logs the `newNote` object to the console for debugging purposes.  This is helpful during development but should ideally be removed in a production environment.


The Algorithm for `handleSubmit` can be summarized as:

```
IF (title == "" AND body == "" AND category == "") THEN
  RETURN // Do nothing, prevent submission
ELSE
  addNote(newNote) // Call the parent's addNote function
  navigate("/") // Navigate to the home page
  console.log(newNote) // Log the new note (for debugging)
ENDIF
```

## 5. UI Rendering

The `AddNotePage` component renders a form containing input fields for title, body, and category selection.  The form elements are styled using Bootstrap classes (`mb-3`, `form-label`, `form-control`, `form-select`, `btn btn-primary`, `d-flex`, `justify-content-center`).  The values of these input fields are dynamically bound to the component's state using the `value` attribute and updated using the `onChange` event handlers.  The form's `onSubmit` event is handled by the `handleSubmit` function.  A select element provides a dropdown for choosing a note category from "Business", "Personal", and "Important", with an initial "Pick a category" option.
