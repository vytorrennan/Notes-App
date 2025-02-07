# EditNotePage Component Documentation

[Linked Table of Contents](#linked-table-of-contents)


## Linked Table of Contents

* [1. Overview](#1-overview)
* [2. Component Props](#2-component-props)
* [3. State Variables](#3-state-variables)
* [4. `useEffect` Hook](#4-useeffect-hook)
* [5. `handleSubmit` Function](#5-handsubmit-function)
* [6. JSX Structure](#6-jsx-structure)


## 1. Overview

The `EditNotePage` component is a React component responsible for allowing users to update existing notes. It fetches the note data based on the URL parameter `slug`, populates the form fields, and updates the note upon submission.  The updated data is passed to a parent component via a callback prop.

## 2. Component Props

| Prop Name      | Data Type | Description                                         |
|-----------------|------------|-----------------------------------------------------|
| `updateNote` | Function   | A callback function that takes the updated note object and slug as arguments and handles the update request on the backend. |


## 3. State Variables

The component uses the following state variables managed by React's `useState` hook:

| State Variable | Data Type | Description                                    |
|-----------------|------------|------------------------------------------------|
| `title`         | String     | Stores the title of the note.                  |
| `body`          | String     | Stores the body (content) of the note.          |
| `category`      | String     | Stores the category of the note.                |


## 4. `useEffect` Hook

The `useEffect` hook fetches the note data from the backend API when the component mounts or when the `slug` parameter changes.

The `useEffect` hook uses the `api.get` function (presumably a custom Axios instance) to make a GET request to the `/notes/${slug}` endpoint.

* **Success:** If the request is successful (`then` block), the response data (containing the note's title, body, and category) is used to update the component's state variables using `setTitle`, `setBody`, and `setCategory`.

* **Failure:** If the request fails (`catch` block), the error message is logged to the console.

The `[slug]` dependency array ensures that the effect runs only when the `slug` changes.

## 5. `handleSubmit` Function

The `handleSubmit` function handles the form submission.

1. **Prevention of default behavior:** It prevents the default form submission behavior using `e.preventDefault()`.

2. **Empty Field Check:** It checks if all fields (`title`, `body`, `category`) are empty. If they are, it returns early preventing empty note update.

3. **Update Note:** If at least one field has data, it calls the `updateNote` prop, passing the `updateNoteObject` (containing the updated note data) and the `slug`.

4. **Navigation:** After a successful update, it navigates the user to the note's detail page using `navigate(`/notes/${slug}`)`.


## 6. JSX Structure

The JSX structure renders a form with input fields for title, body, and category.  These fields are bound to the component's state variables using the `value` attribute and updated using the `onChange` event handlers. A select dropdown provides options for the note's category. A button triggers the `handleSubmit` function on click. The form uses Bootstrap styling classes for layout and appearance (e.g., `.mb-3`, `.form-control`, `.btn`).
