# 🔐 React Password Generator

This is a simple web application built with React that allows users to generate strong, random passwords. You can customize the password length and choose to include numbers and special characters to meet your security needs.

---

## Table of Contents

- [Live Website](#live-website)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [How It Works](#how-it-works)
- [Installation](#installation)
- [Contributions](#contributions)
- [Author](#author)

---

## Live Website

> 🔗 [View Live Project](https://vanshmistry602.github.io/react-password-generator)

---

## Features

- Customizable Length: Adjust the password length from 6 to 64 characters using a slider.
- Character Options: Easily include or exclude numbers and special characters with checkboxes.
- One-Click Copy: Instantly copy the generated password to your clipboard with a single click.
- Responsive Design: A clean and modern user interface built with Tailwind CSS that works on all screen sizes.
- Built with React Hooks: Utilizes useState, useEffect, useCallback, and useRef for efficient state management and performance.

---

## Technologies Used

- **React**
- **Vite**
- **Tailwind CSS**

---

## How It Works

The application's logic is centered around a few key React hooks to manage state and side effects efficiently:

- **\`useState\`**: Manages the state for the password's \`length\`, and booleans for \`numberAllowed\` and \`symbolAllowed\`. The UI elements (slider, checkboxes) update these state variables.
- **\`useCallback\`**: The core \`passwordGenerator\` function is wrapped in \`useCallback\` to memoize the function. This ensures that the function is only re-created when its dependencies (\`length\`, \`numberAllowed\`, \`symbolAllowed\`) change, preventing unnecessary re-renders.
- **\`useEffect\`**: This hook calls the \`passwordGenerator\` function whenever any of the dependencies in its dependency array (\`length\`, \`numberAllowed\`, \`symbolAllowed\`) are updated by the user. This makes the password generation reactive to user input.
- **\`useRef\`**: The \`passwordRef\` is used to hold a reference to the password input field. This allows the \`copyPasswordToClipboard\` function to select the text content of the input field to copy it to the user's clipboard.

---

## Installation

1. **Clone the Repository:**
   First, clone the repository to your local machine using Git. This command downloads the project files from GitHub. Remember to replace \`your-username\` with the actual GitHub username if you forked the repository.

   ```
   git clone https://github.com/vanshmistry602/react-password-generator.git
   ```

2. **Navigate to the Project Directory:**
   Once the cloning is complete, you need to move into the project's root folder. All subsequent commands must be run from this directory.

   ```
   cd react-password-generator
   ```

3. **Install Dependencies:**
   Next, install all the required npm packages as defined in the \`package.json\` file. This command downloads libraries like React and Tailwind CSS into a \`node_modules\` folder.

   ```
   npm install
   ```

4. **Run the Development Server:**
   Finally, start the Vite development server. This command compiles the application and makes it available in your browser, usually with features like Hot-Module-Replacement (HMR) enabled for a smooth development experience.
   ```
   npm run dev
   ```
   Once the server is running, open your web browser and navigate to \`http://localhost:5173\` to see the application live.

---

## Contributions

Contributions are welcome!

Feel free to fork the repository and submit a pull request with your improvements — whether it's UI tweaks, code optimizations, bug fixes, or new features.

---

## Author

**Vansh Mistry**

For any questions or feedback, feel free to contact me at:

- **Email**: [officialvanshmistry@gmail.com](mailto:officialvanshmistry@gmail.com)
- **LinkedIn**: [linkedin.com/in/vanshmistry/](https://www.linkedin.com/in/vanshmistry/)
- **GitHub**: [github.com/vanshmistry602](https://github.com/vanshmistry602)
