# MainLayout Component Documentation

[Linked Table of Contents](#table-of-contents)

## Table of Contents

* [1. Overview](#1-overview)
* [2. Component Structure](#2-component-structure)
* [3. Props](#3-props)
* [4. Function Details](#4-function-details)


<a name="1-overview"></a>
## 1. Overview

The `MainLayout` component serves as the primary layout template for the application. It provides a consistent structure across all application routes by incorporating a navigation bar, a toast notification container, and an outlet for dynamically rendering route components.  This ensures a unified user experience regardless of the active page.


<a name="2-component-structure"></a>
## 2. Component Structure

The `MainLayout` component is a functional React component. Its structure is straightforward, encompassing three key elements:

1. **Navigation Bar (`NavBar`):** A reusable component responsible for displaying navigation links and a search bar. It is passed props to manage the search functionality.

2. **Toast Notification Container (`ToastContainer`):**  This provides a centralized location for displaying transient, non-blocking notifications to the user (using `react-toastify`).

3. **Outlet (`Outlet`):** This React Router component acts as a placeholder for the content of the currently active route.  This allows different components to be rendered based on the URL.

The component renders these elements within a single React fragment (`<> </>`).


<a name="3-props"></a>
## 3. Props

The `MainLayout` component accepts two props:

| Prop Name         | Data Type    | Description                                                              |
|----------------------|----------------|--------------------------------------------------------------------------|
| `searchText`       | String         | The current text entered in the search bar.                            |
| `handelSearchText` | Function       | A function to handle changes in the search text input.  This function is likely responsible for updating the application state. |


<a name="4-function-details"></a>
## 4. Function Details

The `MainLayout` component is a simple functional component that returns JSX.  No complex algorithms or functions are implemented within this component itself; its primary role is to compose other components.  The complexity lies within the `NavBar` component (not shown) which handles search functionality and the potentially complex routing logic controlled by `react-router-dom`.  The `MainLayout` acts as a container and orchestrator of these other components.
