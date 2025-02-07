# API Client Documentation

[Linked Table of Contents](#table-of-contents)

## Table of Contents <a name="table-of-contents"></a>

* [1. Overview](#overview)
* [2. API Client Setup](#api-client-setup)
* [3. Request Interceptors](#request-interceptors)
    * [3.1. Authentication Token Handling](#authentication-token-handling)
    * [3.2. Error Handling](#error-handling)
* [4. Usage Example](#usage-example)


## 1. Overview <a name="overview"></a>

This document describes the `api` client, a wrapper around the Axios HTTP client library, used for making requests to the backend API located at `http://127.0.0.1:8000`.  The client automatically includes authentication tokens in requests where available and handles basic error propagation.


## 2. API Client Setup <a name="api-client-setup"></a>

The `api` client is initialized using `axios.create()`, setting the base URL to `http://127.0.0.1:8000`. This simplifies making requests, as only the endpoint needs to be specified in subsequent API calls.  The `ACCESS_TOKEN` constant (defined elsewhere, likely in a `constants.js` file) is used for authentication.

```javascript
import axios from "axios";
import { ACCESS_TOKEN } from "./constants";

const api = axios.create({
    baseURL: "http://127.0.0.1:8000"
});
```

## 3. Request Interceptors <a name="request-interceptors"></a>

Axios request interceptors are used to modify requests before they are sent and handle responses before they are processed.  This client utilizes both request and error interceptors.

### 3.1. Authentication Token Handling <a name="authentication-token-handling"></a>

The `request` interceptor adds an `Authorization` header to each outgoing request if an access token is found in local storage using `localStorage.getItem(ACCESS_TOKEN)`.  The token is formatted as a `Bearer` token, a standard approach for authentication.

```javascript
api.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem(ACCESS_TOKEN);
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);
```

This ensures that all requests are automatically authenticated if the user is logged in.


### 3.2. Error Handling <a name="error-handling"></a>

The `request` interceptor includes a basic error handling mechanism. If an error occurs during the request process (e.g., network error), the error is propagated using `Promise.reject(error)`.  This allows for centralized error handling in the components consuming the `api` client.  More sophisticated error handling (e.g., specific error codes) could be added here.



## 4. Usage Example <a name="usage-example"></a>

The `api` client is exported as the default export, making it readily available for use throughout the application. A simple GET request would look like this:

```javascript
import api from './api';

api.get('/users')
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    console.error(error);
  });
```

This makes a GET request to `/users` endpoint.  The response data is then accessible in the `.then` block, while errors are handled in the `.catch` block.  Other HTTP methods (POST, PUT, DELETE, etc.) can be used similarly.
