# Password Generator 🔐

Generate strong, secure passwords with ease! This React application allows you to customize password length and include numbers and symbols for enhanced security.

## ✨ Demo

[[]](https://password-generator-mu-pearl.vercel.app/)

## 🚀 Features

*   **Customizable Length:** Set the password length from 6 to 100 characters.
*   **Include Numbers:** Add numeric characters for extra complexity.
*   **Include Symbols:** Incorporate special characters for maximum security.
*   **Copy to Clipboard:** Easily copy the generated password with a single click.
*   **Visually Appealing:** A clean and modern user interface.

## 🛠️ Built With

[![React](https://img.shields.io/badge/React-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)](https://reactjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Vite](https://img.shields.io/badge/Vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)

## 💻 Code Overview

The application is built using React and styled with Tailwind CSS. Here's a brief overview of the key components:

*   **`App.jsx`:** The main component that manages the application state, generates the password, and handles user interactions. It uses the `useState`, `useCallback`, `useEffect`, and `useRef` hooks.
*   **Password Generation Logic:** The `passwordGenerator` function uses `useCallback` to efficiently generate a random password based on the selected criteria (length, numbers, symbols).
*   **Copy to Clipboard:** The `copyPasswordtoClipboard` function uses `useCallback` and `useRef` to copy the generated password to the clipboard.

## ⚙️ Setup

1.  Clone the repository:

    ```bash
    git clone <repository-url>
    ```

2.  Navigate to the project directory:

    ```bash
    cd 05passwordGenerator
    ```

3.  Install dependencies:

    ```bash
    npm install
    ```

4.  Start the development server:

    ```bash
    npm run dev
    ```

    Open your browser and navigate to `http://localhost:5173` (or the port Vite assigns).

## 📁 Project Structure

```
05passwordGenerator
├── public
│   ├── favicon.svg
│   └── vite.svg
└── src
    ├── assets
    │   └── vite.svg
    ├── components
    │   ├── Button.jsx
    │   ├── Checkbox.jsx
    │   ├── Input.jsx
    │   └── PasswordDisplay.jsx
    ├── App.css
    ├── App.jsx
    ├── main.jsx
    └── utils
        └── passwordGenerator.js
```

-   **`public/`:** Contains static assets like icons and the Vite logo.
-   **`src/`:** Contains the source code of the application.
    -   **`assets/`:** Stores image assets.
    -   **`components/`:** Contains reusable components like buttons, checkboxes, and the password display.
    -   **`utils/`:** Contains utility functions like the password generator logic.
    -   **`App.css`:** The main CSS file for styling the application.
    -   **`App.jsx`:** The root component that ties everything together.
    -   **`main.jsx`:** The entry point of the React application.

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1.  Fork the repository.
2.  Create a new branch (`git checkout -b feature/YourFeature`).
3.  Make your changes.
4.  Commit your changes (`git commit -m 'Add some feature'`).
5.  Push to the branch (`git push origin feature/YourFeature`).
6.  Open a pull request.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

Made with ❤️ by [Akash](https://github.com/akashsingh-hash)
