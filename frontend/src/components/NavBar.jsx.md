# NavBar Component Documentation

[TOC](#toc)

## Table of Contents

<a name="toc"></a>

- [1. Overview](#overview)
- [2. Component Structure](#structure)
- [3. Props](#props)
- [4. Conditional Rendering Logic](#conditional-rendering)
- [5.  Search Functionality](#search-functionality)


## 1. Overview

The `NavBar` component renders a navigation bar at the top of the application.  It conditionally displays a search bar, "Add Notes" button, and logout button depending on the current route.  The styling leverages Bootstrap classes for consistent appearance.


## 2. Component Structure

The `NavBar` component is a functional React component. It utilizes several React features, including:

* **`useLocation` hook:**  Obtains the current location from `react-router-dom` to determine which navigation elements to display.
* **Conditional rendering:**  The search bar, "Add Notes" button, and logout button are rendered only on routes other than `/login` and `/register`.
* **JSX:**  The component's structure is defined using JSX, a syntax extension to JavaScript.
* **Bootstrap classes:**  Bootstrap classes are used for styling the component elements (e.g., `navbar`, `container`, `btn`).


## 3. Props

The `NavBar` component accepts the following props:

| Prop Name          | Type     | Description                                           |
|----------------------|-----------|-------------------------------------------------------|
| `searchText`        | `string` | The current text in the search input field.           |
| `handelSearchText` | `function`| A function to update the `searchText` state.  It receives the new search text as an argument. |


## 4. Conditional Rendering Logic

The component uses the `noNavbarRoutes` array and the `location.pathname` property to control which elements are rendered.  The logic is as follows:

*   The `noNavbarRoutes` array contains routes (`/login`, `/register`) where the search bar, "Add Notes" button, and logout button should *not* be displayed.
*   The `!noNavbarRoutes.includes(location.pathname)` condition checks if the current route is *not* included in `noNavbarRoutes`.
*   If the condition is true (the current route is *not* `/login` or `/register`), the JSX within the `<> </>` fragment is rendered, showing the search bar, buttons, and logout link. Otherwise, only the website title is displayed.


## 5. Search Functionality

The search functionality is implemented through a controlled input component.

*   The `value` attribute of the search input is bound to the `searchText` prop.
*   The `onChange` event handler calls the `handelSearchText` prop, passing the new value of the input field. This allows parent components to manage and update the search state.  The search itself is handled externally by the component calling `NavBar`.
