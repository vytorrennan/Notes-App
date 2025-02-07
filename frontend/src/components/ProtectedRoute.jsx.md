# ProtectedRoute Component Documentation

[Linked Table of Contents](#linked-table-of-contents)

## Linked Table of Contents

* [1. Overview](#1-overview)
* [2. Component Structure](#2-component-structure)
* [3. `auth()` Function Detail](#3-auth-function-detail)
* [4. `refreshToken()` Function Detail](#4-refreshtoken-function-detail)
* [5. Usage](#5-usage)


## 1. Overview

The `ProtectedRoute` component is a higher-order component (HOC) used to protect routes in a React application that require authentication. It checks for the presence of a valid access token and, if necessary, refreshes it using a refresh token.  If the user is not authorized, it redirects them to the login page.


## 2. Component Structure

The `ProtectedRoute` component utilizes the following:

* **React Router:**  `Navigate` component for redirection.
* **JWT Decode:** `jwtDecode` library for decoding JSON Web Tokens (JWTs).
* **Custom API Client:** `api` for making requests to the backend.
* **Constants:** `REFRESH_TOKEN` and `ACCESS_TOKEN` constants for storing token keys in local storage.
* **React Hooks:** `useState` and `useEffect` for managing component state and lifecycle.


The component's core logic resides within the `auth()` and `refreshToken()` functions.


## 3. `auth()` Function Detail

The `auth()` function is the core authentication logic.  It performs the following steps:

1. **Retrieves Access Token:** It retrieves the access token from `localStorage` using the `ACCESS_TOKEN` constant.
2. **Handles Missing Token:** If no token is found, it sets `isAuthorized` to `false` and returns, indicating the user is not authenticated.
3. **Decodes JWT:** It decodes the JWT using `jwtDecode` to extract the expiration timestamp (`exp`).
4. **Checks Token Expiration:** It compares the token's expiration time (`tokenExpiration`) with the current time (`now`).
5. **Refreshes Token (if necessary):** If the token has expired (`tokenExpiration < now`), it calls the `refreshToken()` function to attempt a refresh.
6. **Sets Authorization Status:** If the token is valid or successfully refreshed, it sets `isAuthorized` to `true`.


| Step | Description | Code Snippet |
|---|---|---|
| 1 | Retrieve Access Token | `const token = localStorage.getItem(ACCESS_TOKEN);` |
| 2 | Handle Missing Token | `if (!token) { setIsAuthorized(false); return; }` |
| 3 | Decode JWT | `const decoded = jwtDecode(token)` |
| 4 | Check Expiration | `if (tokenExpiration < now)` |
| 5 | Refresh Token | `await refreshToken();` |
| 6 | Set Status | `setIsAuthorized(true);` |


## 4. `refreshToken()` Function Detail

The `refreshToken()` function handles the refresh token process:

1. **Retrieves Refresh Token:** It retrieves the refresh token from `localStorage` using the `REFRESH_TOKEN` constant.
2. **Sends Refresh Request:** It sends a POST request to the `/api/token/refresh/` endpoint with the refresh token.
3. **Handles Response:** If the request is successful (status code 200), it updates the access token in `localStorage` with the new token received from the server and sets `isAuthorized` to `true`.  Otherwise, it sets `isAuthorized` to `false`.
4. **Handles Errors:** It catches any errors during the refresh process and sets `isAuthorized` to `false`, logging the error to the console.


| Step | Description | Code Snippet |
|---|---|---|
| 1 | Retrieve Refresh Token | `const refreshToken = localStorage.getItem(REFRESH_TOKEN);` |
| 2 | Send Refresh Request | `const res = await api.post("/api/token/refresh/", { refresh: refreshToken });` |
| 3 | Handle Response | `if (res.status === 200) { localStorage.setItem(ACCESS_TOKEN, res.data.access); setIsAuthorized(true) } else { setIsAuthorized(false) }` |
| 4 | Handle Errors | `catch (error) { console.log(error); setIsAuthorized(false); }` |


## 5. Usage

The `ProtectedRoute` component is used to wrap routes that should only be accessible to authenticated users:

```jsx
<ProtectedRoute>
    <MyProtectedComponent />
</ProtectedRoute>
```

`MyProtectedComponent` will only render if the user is authenticated.  Otherwise, the user will be redirected to `/login`.  While loading, a "Loading..." message will be displayed.
