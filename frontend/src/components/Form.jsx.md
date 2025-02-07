# Form Component Documentation

[Linked Table of Contents](#linked-table-of-contents)

## Linked Table of Contents

* [1. Overview](#1-overview)
* [2. Component Props](#2-component-props)
* [3. Internal State](#3-internal-state)
* [4. `handleSubmit` Function Details](#4-handlesubmit-function-details)
* [5. Usage Example](#5-usage-example)


## 1. Overview

The `Form` component is a reusable React component designed for handling both user login and registration. It dynamically adapts its behavior based on the provided `method` prop, allowing it to function as either a login or registration form.  The component interacts with a backend API (`api.post`) for authentication and utilizes React Router's `useNavigate` hook for navigation.


## 2. Component Props

| Prop Name | Data Type | Description | Required |
|---|---|---|---|
| `route` | String | The API endpoint for the form submission (e.g., `/login`, `/register`). | Yes |
| `method` | String |  Specifies the form's functionality: `"login"` or `"register"`. | Yes |


## 3. Internal State

The component uses the following internal state variables managed by React's `useState` hook:

| State Variable | Data Type | Description |
|---|---|---|
| `username` | String | Stores the user's entered username. |
| `password` | String | Stores the user's entered password. |
| `loading` | Boolean |  Indicates whether the form is currently submitting, used to display a loading indicator. |


## 4. `handleSubmit` Function Details

The `handleSubmit` function is the core logic of the component. It's an asynchronous function triggered when the form is submitted.  Here's a breakdown of its functionality:

1. **Set Loading State:** Sets the `loading` state to `true` to display the loading indicator.

2. **Prevent Default Behavior:** Prevents the default form submission behavior using `e.preventDefault()`.

3. **API Call:** Makes a POST request to the specified API endpoint (`route`) using the `api.post` function, sending the `username` and `password`.

4. **Response Handling (Login):** If the `method` is "login":
    * Stores the received `access` and `refresh` tokens in local storage using `localStorage.setItem`.
    * Navigates to the homepage ("/") using `navigate("/")`.
    * Reloads the page using `location.reload()`.

5. **Response Handling (Register):** If the `method` is "register":
    * Navigates to the login page ("/login") using `navigate("/login")`.

6. **Error Handling:** Catches any errors during the API call and displays an alert message.

7. **Finally Block:**  Resets the `loading` state to `false` regardless of success or failure, hiding the loading indicator.


The algorithm used is a standard request-response pattern. The complexity lies in handling different responses based on the `method` and managing the loading state to provide user feedback.  Error handling is implemented using a `try...catch` block to gracefully handle potential issues during API communication.


## 5. Usage Example

```javascript
<Form route="/login" method="login" />
<Form route="/register" method="register" />
```

This shows how to use the component for login and registration by providing the appropriate route and method.  Remember to define appropriate API routes and handling on your backend.
