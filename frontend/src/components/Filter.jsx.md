# Filter Component Documentation

[Linked Table of Contents](#table-of-contents)

## Table of Contents <a name="table-of-contents"></a>

* [1. Overview](#overview)
* [2. Component Structure](#component-structure)
* [3. Functionality](#functionality)
* [4. Props](#props)
* [5. Usage Example](#usage-example)


## 1. Overview <a name="overview"></a>

The `Filter` component is a React component responsible for providing a dropdown menu to filter notes based on their category.  It allows the user to select between viewing all notes, or notes categorized as "Business," "Personal," or "Important." The selected filter criteria is passed to a parent component via a callback function.


## 2. Component Structure <a name="component-structure"></a>

The component utilizes a simple HTML `<select>` element styled with CSS to create a visually appealing dropdown menu. The styling is inline within the JSX for brevity, but could be extracted to a separate CSS file for larger projects.

The component's structure is straightforward:

* A `div` container for styling and layout.
* A `select` element that handles user input.
* `option` elements representing the filter choices.


## 3. Functionality <a name="functionality"></a>

The `Filter` component's core functionality is centered around the `onChange` event handler of the `<select>` element.  When the user selects an option from the dropdown:

1. The `onChange` event triggers.
2. The event handler calls the `handleFilterText` prop, passing the selected value (e.g., "BUSINESS", "PERSONAL", or "").


## 4. Props <a name="props"></a>

The `Filter` component accepts one prop:

| Prop Name        | Type     | Description                                                              |
|-----------------|----------|--------------------------------------------------------------------------|
| `handleFilterText` | Function | A callback function that receives the selected filter text as an argument. This function is responsible for updating the note display based on the selected filter.  It is expected to accept a string as input. |


## 5. Usage Example <a name="usage-example"></a>

```javascript
import Filter from './Filter';

const MyComponent = () => {
  const handleFilterChange = (filterText) => {
    // Update the application state and re-render the note list based on filterText
    console.log("Selected filter:", filterText);
  };

  return (
    <div>
      <Filter handleFilterText={handleFilterChange} />
      {/* ... rest of your component ... */}
    </div>
  );
};

export default MyComponent;
```

This example shows how to use the `Filter` component. The `handleFilterChange` function is passed as the `handleFilterText` prop.  This function would typically update the application's state to reflect the selected filter and trigger a re-rendering of the note list.
