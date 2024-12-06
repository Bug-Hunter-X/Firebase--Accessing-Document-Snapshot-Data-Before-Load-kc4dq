# Firebase Data Access Before Load
This repository demonstrates a common error in Firebase applications: attempting to access data from a document snapshot before the data has finished loading.  This can lead to unexpected errors and crashes.

The `bug.js` file shows the problematic code, while `bugSolution.js` provides a corrected implementation.

## Bug
The bug stems from accessing the `myField` property of the document snapshot before the asynchronous `get()` operation has completed. This results in undefined behavior.

## Solution
The solution uses `async/await` to ensure the data is fully loaded before attempting to access it.  This avoids the error.

## How to Run
1.  Ensure you have Node.js and npm installed.
2.  Install Firebase:
   ```bash
npm install firebase
```
3.  Set up your Firebase project and configuration. Replace placeholders with your project details.
4.  Run the files using Node.js.