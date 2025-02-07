# NoteCard Component Documentation

## Table of Contents

* [1. Overview](#1-overview)
* [2. Component Props](#2-component-props)
* [3. Function Details](#3-function-details)
    * [3.1 `body` Variable Creation](#3.1-body-variable-creation)
    * [3.2 `color` Variable Assignment](#3.2-color-variable-assignment)
* [4. JSX Structure](#4-jsx-structure)


## 1. Overview

The `NoteCard` component renders a single note in a card format.  It displays key information about the note, including the title, a truncated body, date updated, category, and an unread indicator. The styling leverages a color-coding system based on the note's category.


## 2. Component Props

The `NoteCard` component accepts a single prop:

| Prop Name | Data Type | Description |
|---|---|---|
| `note` | Object | An object containing note data.  Expected fields include `body`, `category`, `slug`, `title`, and `updated`. |


## 3. Function Details

### 3.1 `body` Variable Creation

This line truncates the note body to display only the first 20 words, followed by an ellipsis:

```javascript
const body = `${note.body.split(" ").slice(0, 20).join(" ")} ...`
```

The algorithm works as follows:

1. **`note.body.split(" ")`**: The note body string is split into an array of words using space as a delimiter.
2. **`.slice(0, 20)`**:  This method extracts a portion of the array, starting from index 0 (the first element) and including up to, but not including, index 20. This effectively selects the first 20 words.
3. **`.join(" ")`**: The sliced array of words is joined back into a single string with spaces between each word.
4. **`${...}` ...`**:  A template literal is used to concatenate the resulting string with an ellipsis ("...") to indicate truncation.


### 3.2 `color` Variable Assignment

This line assigns a background color based on the note's category:

```javascript
const color = note.category == "BUSINESS" ? "blue" : note.category == "PERSONAL" ? "green" : "purple"
```

This uses a ternary operator for concise conditional assignment. The logic is:

* If `note.category` is "BUSINESS", `color` is set to "blue".
* Otherwise, if `note.category` is "PERSONAL", `color` is set to "green".
* Otherwise (for any other category), `color` is set to "purple".


## 4. JSX Structure

The `NoteCard` component renders the following JSX structure:

A `div` with class `col-md-4 single-note-item all-category` acts as the container. Inside, a `card` and `card-body` provide Bootstrap styling.  Key elements include:

* A colored side stick (`<span className="side-stick">`) using the dynamically assigned `color` variable.
* A sticky note icon (`<FaNoteSticky />`) with color matching the category.
* A link to the note detail page (`<Link to={`/notes/${note.slug}`}>`) displaying the note title (`<h3>`).
* The updated date (`<p className="note-date">`) formatted using the `FormatDate` component.
* A truncated note body (`<p className="note-inner-content">`).
* An unread indicator icon (`<MdMarkunread />`) and the note category.


The structure is designed for clear visual presentation of note information within a card-like layout, enhancing readability and user experience.
