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

- **Frontend**: React.js, Monaco Editor, Next.js, Zustand, Tailwind CSS
- **Backend**: Convex (Database & Serverless Functions), Clerk (Authentication), Piston API (Code Execution)

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
  
## Acknowledgements

- **[Monaco Editor](https://www.npmjs.com/package/@monaco-editor/react)**: Used for code editing with syntax highlighting and error checking.
- **[Clerk](https://clerk.dev/)**: Handles user authentication and identity management.
- **[Convex](https://www.convex.dev/)**: Serverless database for managing user data and snippets.
- **[Piston API](https://emkc.org/)**: Executes code in multiple languages in real-time.
- **[Tailwind CSS](https://tailwindcss.com/)**: For building a responsive UI with utility-first CSS.
- **[Zustand](https://github.com/pmndrs/zustand)**: State management solution for React.




