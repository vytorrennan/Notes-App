# Internal Code Documentation: Note Taking Application

## Table of Contents

* [1. Overview](#1-overview)
* [2. Data Fetching and Manipulation](#2-data-fetching-and-manipulation)
    * [2.1. Initial Data Fetch](#21-initial-data-fetch)
    * [2.2. Search Functionality](#22-search-functionality)
    * [2.3. Adding a Note](#23-adding-a-note)
    * [2.4. Updating a Note](#24-updating-a-note)
    * [2.5. Deleting a Note](#25-deleting-a-note)
* [3. Routing and Navigation](#3-routing-and-navigation)
* [4. Filtering](#4-filtering)
* [5. Authentication and Authorization](#5-authentication-and-authorization)

## 1. Overview

This document details the implementation of a React-based note-taking application.  The application utilizes `react-router-dom` for navigation, `axios` for API calls, and `react-toastify` for user feedback.  The backend API is accessed via the `api` module (not shown in provided code). The application features adding, editing, deleting, searching, and filtering notes.

## 2. Data Fetching and Manipulation

This section describes how the application interacts with the backend API to manage notes.

### 2.1. Initial Data Fetch

On component mount, the application fetches all notes from the `/notes/` API endpoint using `useEffect` hook and the `api.get()` method.

```javascript
useEffect(() => {
    setIsLoading(true);
    api.get("/notes/")
        .then((res) => {
            setNotes(res.data);
            setIsLoading(false);
        })
        .catch((err) => {
            console.log(err.message);
        });
}, []);
```

The `setIsLoading(true)` sets a loading state, providing visual feedback to the user.  The fetched data is then used to populate the `notes` state.

### 2.2. Search Functionality

The search functionality uses the `searchText` state.  Whenever the `searchText` changes and exceeds 2 characters, a request is sent to `/notes-search/?search=${searchText}`.

```javascript
useEffect(() => {
    if (searchText.length < 3) return;
    api.get(`/notes-search/?search=${searchText}`)
        .then(res => {
            setNotes(res.data)
        })
        .catch(err => console.log(err.message))
}, [searchText])
```

This triggers an API call to fetch notes matching the search term.  The results update the `notes` state.

### 2.3. Adding a Note

The `addNote` function handles adding new notes. It takes note data as input, sends a POST request to `/notes/`, and updates the `notes` state with the new note after successful submission.

```javascript
const addNote = (data) => {
    api.post("/notes/", data)
        .then((res) => {
            setNotes([...notes, data]);
            toast.success("A new note has been added");
            console.log(res.data);
            location.reload(); //Note: Using location.reload() is generally discouraged for performance reasons. Consider alternative state management solutions.
        })
        .catch((err) => {
            console.log(console.log(err.message));
        });
};
```

A success toast message is displayed to the user using `react-toastify`.  The page is reloaded to reflect the changes.

### 2.4. Updating a Note

The `updateNote` function handles updating existing notes. It takes note data and the note's slug as input, sends a PUT request to `/notes/${slug}/`, and updates the `notes` state.  Note that there is no state update in the application for updated notes.

```javascript
const updateNote = (data, slug) => {
    api.put(`/notes/${slug}/`, data)
        .then((res) => {
            console.log(res.data);
            toast.success("Note updated succesfully");
        })
        .catch((err) => console.log(err.message));
};
```

A success toast message is displayed upon successful update.

### 2.5. Deleting a Note

The `deleteNote` function handles deleting notes.  It takes the note's slug as input and sends a DELETE request to `/notes/${slug}/`.  There's no state update to remove the note from the UI after deletion.

```javascript
const deleteNote = (slug) => {
    api.delete(`/notes/${slug}/`)
        .catch((err) => console.log(err.message));
};
```


## 3. Routing and Navigation

The application uses `react-router-dom` to manage routing.  The `createBrowserRouter` function configures routes for different pages:

* `/`: Homepage (protected)
* `/add-note`: Add Note page (protected)
* `/edit-note/:slug`: Edit Note page (protected)
* `/notes/:slug`: Note Detail page (protected)
* `/login`: Login page
* `/logout`: Logout page
* `/register`: Register page
* `*`: Not Found page

Protected routes ensure that only authenticated users can access certain pages. This is handled by the `ProtectedRoute` component (not shown).


## 4. Filtering

The application allows filtering notes by category ("BUSINESS", "PERSONAL", "IMPORTANT").  A ternary operator efficiently handles this:

```javascript
const filteredNotes =
    filterText === "BUSINESS"
        ? notes.filter((note) => note.category == "BUSINESS")
        : filterText === "PERSONAL"
            ? notes.filter((note) => note.category == "PERSONAL")
            : filterText === "IMPORTANT"
                ? notes.filter((note) => note.category == "IMPORTANT")
                : notes;
```

This filters the `notes` array based on the selected filter and assigns the result to `filteredNotes`.

## 5. Authentication and Authorization

The application includes basic authentication and authorization.  The `ProtectedRoute` component (not shown) likely checks for user authentication before rendering protected routes.  Logout functionality clears local storage:

```javascript
function Logout() {
    localStorage.clear()
    return <Navigate to="/login" />
}
```

The `RegisterAndLogout` function clears local storage and redirects to the register page:

```javascript
function RegisterAndLogout() {
    localStorage.clear()
    return <Register />
}
```

This suggests a simple mechanism for managing user sessions.  The specific authentication method is not detailed in the provided code.
