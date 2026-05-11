📘 AD312 Dog Query App
A React + Vite application using TanStack Query to fetch and display dog breed data from the Dog API.

🚀 Overview
This project was built for AD312 – Advanced JavaScript.
It demonstrates:

Fetching data using TanStack Query

Managing multiple queries (list + details)

Conditional rendering

Graceful fallback handling for missing API fields

Clean UI layout with a two‑column design

The app loads a list of dog breeds, allows the user to select one, and displays detailed information about the selected breed.

🐶 Features

✔ Fetch all dog breeds
Uses TanStack Query to load the full breed list from:
https://dogapi.dog/api/v2/breeds

✔ Click a breed to view details
Selecting a breed triggers a second query to:
https://dogapi.dog/api/v2/breeds/{id}

✔ Clean two‑column UI

Left: Breed list
Right: Details panel

✔ Fallback text for missing fields
The Dog API does not provide group/coat/color/etc., so the UI displays:
Not available

✔ Fully responsive and easy to navigate
Simple, readable layout suitable for assignment demos.

📂 Project Structure
AD312_Dog_Query_App/
│
├── src/
│   ├── App.jsx
│   ├── Breeds.jsx
│   └── main.jsx
│
├── index.html
├── package.json
├── vite.config.js
└── README.md

🛠 Technologies Used
React (Vite)

TanStack Query

JavaScript (ES Modules)

Fetch API

CSS‑in‑JS (inline styles)

▶️ Running the Project
1. Install dependencies
npm install

2. Start the development server
npm run dev

3. Open in browser
Vite will show a local URL such as:
http://localhost:5173

🧪 Test Cases
This project includes six total test cases as required by the AD312 assignment:
three normal test cases and three edge test cases.
These test cases were demonstrated in the video submission.

### ✔ Normal Test Cases
1. Select a common breed (Beagle)
Action: Click “Beagle” in the breed list

Expected Result:

Details panel loads

Name: “Beagle”

Description appears

Missing fields show “Not available”

Purpose: Confirms basic list → detail functionality works.

2. Select a breed with a long description (Akita)
Action: Click “Akita”

Expected Result:

Long description renders correctly

Layout adjusts without breaking

Purpose: Ensures UI handles variable text lengths.

3. Select multiple breeds in a row
Action: Click “Pug” → “Husky” → “Chihuahua”

Expected Result:

Details update instantly

No errors

No stale data

Purpose: Confirms TanStack Query refetching works properly.

### ✔ Edge Test Cases
4. Select a breed with missing fields
Action: Click a breed where group, coat, or color is empty

Expected Result:

UI displays “Not available”

No blank lines or broken layout

Purpose: Validates fallback logic for incomplete API data.

5. Rapid clicking (stress test)
Action: Click 10+ breeds quickly

Expected Result:

No crashes

No console errors

Details panel always shows the last selected breed

Purpose: Ensures the app handles fast user interaction.

6. No breed selected
Action: Load the app and do not click anything

Expected Result:

Right panel shows: “Select a breed from the list to view details.”

No errors

Purpose: Confirms default UI state is handled gracefully.

🧪 Test Case Summary Table
| Test Case | Type | Expected Behavior |
| --- | --- | --- |
| Select Beagle | Normal | Details load correctly |
| Select Akita | Normal | Long description renders |
| Switch breeds repeatedly | Normal | Details update smoothly |
| Missing fields | Edge | Fallback text appears |
| Rapid clicking | Edge | No crashes or errors |
| No selection | Edge | Default message displays |

🎥 Video Demonstration Notes
In the video, the following were shown:

All 3 normal test cases

All 3 edge test cases

Loading states

Error handling

Fallback text

TanStack Query behavior

This satisfies the AD312 assignment requirements.
