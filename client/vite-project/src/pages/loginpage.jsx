import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const { login } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const url = isLogin
      ? "http://localhost:5000/api/auth/login"
      : "http://localhost:5000/api/auth/signup";

    const body = isLogin
      ? { email, password }
      : { name, email, password };

    try {
      const res = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });

      // 🔥 Handle non-JSON responses safely
      let data;
      try {
        data = await res.json();
      } catch {
        throw new Error("Invalid server response");
      }

      console.log("API RESPONSE:", data); // ✅ debug

      if (!res.ok) {
        // backend sent error (like 400 or 500)
        throw new Error(data.msg || "Login failed");
      }

      // ✅ success
      login(data.user, data.token);
      navigate("/");

    } catch (err) {
      console.error("LOGIN ERROR:", err);
      alert(err.message || "Server error");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-full max-w-md bg-white p-8 rounded-xl shadow">

        <h2 className="text-2xl text-center mb-6">
          {isLogin ? "Login" : "Sign Up"}
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">

          {!isLogin && (
            <input
              type="text"
              placeholder="Full Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full border px-4 py-2"
            />
          )}

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border px-4 py-2"
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full border px-4 py-2"
          />

          <button
            type="submit"
            className="w-full bg-black text-white py-2"
          >
            {isLogin ? "Login" : "Sign Up"}
          </button>
        </form>

        <p className="text-center mt-4">
          {isLogin ? "No account?" : "Already have an account?"}
          <span
            onClick={() => setIsLogin(!isLogin)}
            className="ml-1 underline cursor-pointer"
          >
            {isLogin ? "Sign Up" : "Login"}
          </span>
        </p>

      </div>
    </div>
  );
};

export default Login; 