# Syntaxium

Syntaxium is a web-based code editor and execution platform that allows users to write, run, and share code snippets in multiple languages. It features a Monaco-powered editor with syntax highlighting, customizable themes, and seamless code execution via the Piston API.

## Features

- **Multi-language Support**: Write and execute code in popular programming languages such as JavaScript, Python, Java, and more.
- **User Authentication**: Secure login with Clerk for personalized experience and snippet storage.
- **Real-time Code Execution**: Execute code instantly using the Piston API with feedback on code output or errors.
- **Snippet Management**: Create, save, and manage your code snippets with easy access and sharing.
- **Editor Themes**: Customize the editor theme for an optimal coding environment.
- **Code Snippet Star Rating**: Star your favorite snippets and view their popularity.

## Tech Stack

- **Frontend**:  
  - **[React.js](https://react.dev/)**: A powerful JavaScript library for building user interfaces.
  - **[Next.js](https://nextjs.org/)**: A React framework for building server-side rendered applications.
  - **[Monaco Editor](https://www.npmjs.com/package/@monaco-editor/react)**: A lightweight code editor for syntax highlighting and code completion.
  - **[Tailwind CSS](https://tailwindcss.com/)**: A utility-first CSS framework for fast and responsive UI design.

- **Backend**:  
  - **[Convex](https://www.convex.dev/)**: A serverless database platform for handling data and real-time operations.
  - **[Piston API](https://emkc.org/)**: Executes code in various programming languages, providing real-time code execution and feedback.

- **State Management**:  
  - **[Zustand](https://github.com/pmndrs/zustand)**: A lightweight state management solution for React with minimal boilerplate.
  
- **Authentication**:  
  - **[Clerk](https://clerk.dev/)**: Secure, user-friendly authentication with built-in features for managing user sessions and permissions.

- **Deployment**:  
  - **[Vercel](https://vercel.com/)**: Cloud platform for deploying and hosting Next.js applications with automatic scaling.


## Usage

1. **Sign Up / Log In**  
   Use Clerk to sign up or log in to your account.

2. **Create & Run Snippets**  
   - Select a language from the editor.  
   - Write your code in the Monaco editor.  
   - Click on the "Run" button to execute the code and view the output or error in real time.

3. **Save & Manage Snippets**  
   - Save your snippets to access them later.  
   - View your saved snippets on the "Snippets" page.

4. **Star Snippets**  
   - Star snippets to mark your favorites for quick access.

5. **Customize the Editor**  
   - Change the editor theme (Light/Dark mode) from the settings.  
   - Adjust the font size to fit your preference.
  





