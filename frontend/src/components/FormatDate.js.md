# FormatDate Function Documentation

[Linked Table of Contents](#linked-table-of-contents)

## Linked Table of Contents

* [1. Overview](#1-overview)
* [2. Function Signature](#2-function-signature)
* [3. Algorithm Description](#3-algorithm-description)
* [4. Example Usage](#4-example-usage)


## 1. Overview

The `FormatDate` function converts an ISO 8601 formatted date string into a human-readable date and time string using the `en-GB` locale (British English).  The output string is customized to display the date and time in a specific format and removes the comma separating the date and time components.


## 2. Function Signature

```javascript
export function FormatDate(isoString) {
    // ... function body ...
}
```

**Parameter:**

| Parameter Name | Type          | Description                                      |
|-----------------|-----------------|--------------------------------------------------|
| `isoString`     | String         | An ISO 8601 formatted date string (e.g., "2024-03-08T14:30:00"). |


**Return Value:**

* **Type:** `String`
* **Description:** A formatted date and time string in the format "dd Month yyyy hh:mm:ss AM/PM" (e.g., "08 March 2024 02:30:00 PM").


## 3. Algorithm Description

The `FormatDate` function utilizes the JavaScript `Date` object and its `toLocaleString` method to achieve the date formatting.  The algorithm can be broken down into these steps:

1. **Date Object Creation:** The input `isoString` is parsed to create a `Date` object. This object internally represents the date and time according to the provided ISO 8601 string.

2. **Locale-Specific Formatting:** The `toLocaleString` method is called with the `'en-GB'` locale to ensure the date and time are formatted according to British English conventions.  Specific options are provided to control the output format:
    * `year: 'numeric'`: Displays the year as a four-digit number.
    * `month: 'long'`: Displays the month name in full (e.g., "March").
    * `day: '2-digit'`: Displays the day as a two-digit number (e.g., "08").
    * `hour: '2-digit'`: Displays the hour as a two-digit number (e.g., "02").
    * `minute: '2-digit'`: Displays the minute as a two-digit number (e.g., "30").
    * `second: '2-digit'`: Displays the second as a two-digit number (e.g., "00").
    * `hour12: true`: Uses a 12-hour clock format (AM/PM).

3. **Comma Removal:** The `replace(',', '')` method removes the comma that `toLocaleString` might insert to separate the date and time parts, resulting in a cleaner, single-line output.

4. **Return Value:** The formatted date and time string is returned.


## 4. Example Usage

```javascript
const isoDate = "2024-03-08T14:30:00";
const formattedDate = FormatDate(isoDate); 
console.log(formattedDate); // Output: 08 March 2024 02:30:00 PM
```
