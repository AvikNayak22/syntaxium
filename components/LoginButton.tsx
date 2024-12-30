import { SignInButton } from "@clerk/nextjs";
import React from "react";

const LoginButton = () => {
  return (
    <div>
      <SignInButton mode="modal">
        <button
          className="inline-flex items-center gap-2 px-4 py-2 rounded-lg overflow-hidden bg-gradient-to-r
               from-blue-500 to-blue-600 opacity-90 hover:opacity-100 transition-opacity"
        >
          Sign In
        </button>
      </SignInButton>
    </div>
  );
};

export default LoginButton;
