# Modal Component Documentation

[Linked Table of Contents](#linked-table-of-contents)

## Linked Table of Contents

* [1. Overview](#1-overview)
* [2. Component Structure](#2-component-structure)
* [3. Props](#3-props)
* [4. Functions](#4-functions)
    * [4.1 `handleDeleteNote()`](#41-handledeletenote)
* [5. Usage Example](#5-usage-example)


## 1. Overview

The `Modal` component is a React component that displays a confirmation modal to the user before deleting a note.  It provides buttons to confirm deletion or cancel the operation. Upon successful deletion, it redirects the user to the home page and displays a success toast notification.


## 2. Component Structure

The `Modal` component renders a modal overlay with a modal containing:

* A close button (`<button className="close-button">`) that closes the modal.
* A heading (`<h2>Delete Note</h2>`) indicating the purpose of the modal.
* A confirmation message (`<p>Are you you want to Delete this note?</p>`).
* Two buttons:
    * A "Delete" button (`<button className="btn btn-danger me-3">`) that triggers the note deletion.
    * A "Cancel" button (`<button className="btn btn-primary">`) that closes the modal without deleting the note.


## 3. Props

The `Modal` component accepts the following props:

| Prop Name      | Type          | Description                                                              |
|-----------------|-----------------|--------------------------------------------------------------------------|
| `handleIsOpen` | Function       | A function to close the modal.  It's called by both the close button and the Cancel button. |
| `deleteNote`   | Function       | A function to handle the deletion of the note.                            |


## 4. Functions

### 4.1 `handleDeleteNote()`

This function is responsible for handling the deletion of a note.  Its functionality is as follows:

1. **Calls `deleteNote()`:** It executes the `deleteNote` prop, which is assumed to handle the backend logic of removing the note.
2. **Redirects to Home:** It redirects the user to the root URL ("/") using `window.location.href = "/"`. This provides immediate visual feedback that the action completed.  Note that this method directly manipulates the browser's location, which might be considered less React-idiomatic than using `useNavigate` for navigation within the application.  However, given that the primary goal is to send the user out of the modal context, it's acceptable here.
3. **Displays Success Toast:** It uses `react-toastify` to display a success message ("Note deleted successfully!") to the user, providing confirmation of the deletion.


## 5. Usage Example

```javascript
import Modal from './Modal';

// ... other code ...

const [isModalOpen, setIsModalOpen] = useState(false);

const handleDelete = () => {
  // Your delete logic here...
};

return (
  <>
    {/* ... other components ... */}
    {isModalOpen && (
      <Modal handleIsOpen={() => setIsModalOpen(false)} deleteNote={handleDelete} />
    )}
    {/* ... other components ... */}
  </>
);

```
