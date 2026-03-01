# Calorie Tracker
**A Precision-Driven Nutritional Monitoring Dashboard**

---

## Contributors
 Gitau Willy
 ---


## Project Overview
**Calorie Tracker** is a lightweight, high-performance web application designed for users who require a streamlined, professional interface to manage daily caloric intake. Unlike cluttered fitness apps, this project focuses on **immediacy** and **data integrity**, providing a clean workspace to log food items, calculate totals in real-time, and ensure data persists across browser sessions.

---

## Tech Stack & Dependencies
The project follows a modern philosophy, leveraging powerful utilities without the overhead of heavy frameworks.

| Technology | Role |
| :--- | :--- | 
| **HTML5** | Semantic Structure & Accessibility |
| **Tailwind CSS** | Utility-First Styling & Layout |
| **JavaScript** | Logic, State, and DOM Manipulation |
| **Fetch API** | Asynchronous Server Communication | Native |
| **Cookies** | Local Data Persistence |

---

## Functional Workflow
1.  **Initialization:** On page load, the script audits the browser cookies. If `calorieData` exists, it is parsed and rendered immediately.
2.  **User Input:** The user provides a string (Food Name) and an integer (Calories). 
3.  **Processing:** * The engine validates that `calories > 0`.
    * An object `{name, calories}` is pushed to the global state array.
4.  **Persistence & Sync:** * The state is stringified and saved to a **7-day cookie**.
    * An asynchronous `POST` request is dispatched via **Fetch** to simulate a cloud backup.
5.  **View Update:** The UI recalculates the total sum and regenerates the list items instantly.

---

## Installation & Setup
To deploy this project locally, follow these steps:

1.  **Clone the Repository:**
    ```bash
    git clone [https://github.com/gitauwilly1/calorie-counter.git](https://github.com/gitauwilly1/calorie-counter.git)
    ```
2.  **File Structure:** Ensure the following files are in the same directory:
    * `index.html`
    * `styles.css`
    * `script.js`
3.  **Execution:** Open `index.html` in any modern web browser (Chrome, Firefox, Safari, or Edge). 

---

## Known Bugs
There are no known bugs 

---

## License
* **License:** MIT License.

---

## Support and Information
**email** gitauwilly254@gmail.com
**phone number:** 07....