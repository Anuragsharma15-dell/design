// components/SignIn.jsx

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { GoogleLogin } from "@react-oauth/google";
import axios from "axios";

export default function SignIn() {

  const handleSuccess = async (credentialResponse) => {
    try {
      const googleToken = credentialResponse.credential;

      const response = await axios.post(
        "http://localhost:5000/api/auth/google",
        {
          token: googleToken,
        }
      );

      console.log("LOGIN SUCCESS:", response.data);

      // Save JWT
      localStorage.setItem("token", response.data.token);

      // Save user
      localStorage.setItem(
        "user",
        JSON.stringify(response.data.user)
      );

      // Redirect
      window.location.href = "/dashboard";

    } catch (error) {
      console.error("SIGN IN ERROR:", error);
    }
  };

  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-black px-6">

      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(120,119,198,0.15),transparent_35%)]" />

      {/* Blur Balls */}
      <div className="absolute left-10 top-20 h-72 w-72 rounded-full bg-violet-500/20 blur-3xl" />
      <div className="absolute bottom-10 right-10 h-72 w-72 rounded-full bg-fuchsia-500/20 blur-3xl" />

      {/* Card */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative z-10 w-full max-w-md rounded-3xl border border-white/10 bg-white/5 p-8 shadow-2xl backdrop-blur-2xl"
      >

        {/* Logo */}
        <div className="mb-8 flex flex-col items-center">

          <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-3xl bg-gradient-to-br from-violet-500 to-fuchsia-500 shadow-lg shadow-violet-500/30">
            <Sparkles className="h-8 w-8 text-white" />
          </div>

          <h1 className="text-3xl font-bold tracking-tight text-white">
            Welcome Back
          </h1>

          <p className="mt-2 text-center text-sm text-zinc-400">
            Sign in to continue building AI-powered websites
          </p>
        </div>

        {/* Google Login */}
        <div className="flex justify-center">
          <GoogleLogin
            onSuccess={handleSuccess}
            onError={() => {
              console.log("Google Login Failed");
            }}
            theme="filled_black"
            shape="pill"
            size="large"
            text="continue_with"
            width="320"
          />
        </div>

        {/* Footer */}
        <p className="mt-8 text-center text-xs text-zinc-500">
          By continuing, you agree to our Terms and Privacy Policy.
        </p>
      </motion.div>
    </div>
  );
}
