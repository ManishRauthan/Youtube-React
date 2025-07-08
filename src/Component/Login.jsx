import { useState } from "react";

function Login({ onClose, onLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullname, setFullname] = useState("");
  const [signup, setSignup] = useState(false);

  function handleRegister() {
    if (!fullname || !email || !password) {
      alert("Please fill all fields");
      return;
    }
    fetch("http://localhost:5100/api/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ fullname, email: email.toLowerCase(), password }),
    })
      .then((res) => res.json())
      .then((data) => {
        alert("Registration Successful ✅");
        setFullname("");
        setEmail("");
        setPassword("");
        setSignup(true); //  Move to login mode after registration
      })
      .catch((err) => console.error("Error:", err));
  }

  function handleLogin() {
    fetch("http://localhost:5100/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: email.toLowerCase(), password }),
    })
      .then((res) => res.json())
      .then((data) => {
        alert("Login Successful ✅");
        setEmail("");
        setPassword("");
        onLogin(data.user); //  Pass user back to Header
      })
      .catch((err) => console.error("Error:", err));
  }

  return (
    <div className="bg-white text-black w-[400px] p-6 rounded-xl shadow-lg">
      <h2 className="text-2xl font-bold mb-4 text-center text-red-600">
        {signup ? "Login to YouTube" : "Register on YouTube"}
      </h2>

      {!signup && (
        <div className="mb-3">
          <label className="block text-sm">Full Name</label>
          <input
            type="text"
            value={fullname}
            onChange={(e) => setFullname(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
            placeholder="Your name"
          />
        </div>
      )}

      <div className="mb-3">
        <label className="block text-sm">Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded"
          placeholder="you@company.com"
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm">Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded"
          placeholder="••••••"
        />
      </div>

      <button
        onClick={signup ? handleLogin : handleRegister}
        className="w-full bg-blue-600 text-white py-2 rounded"
      >
        {signup ? "Login" : "Register"}
      </button>

      <p className="text-center mt-4 text-sm text-gray-600">
        {signup ? "Don't have an account?" : "Already have an account?"}
        <span
          onClick={() => setSignup((prev) => !prev)}
          className="text-blue-600 cursor-pointer ml-2"
        >
          {signup ? "Register" : "Login"}
        </span>
      </p>

      {/* Close Button */}
      <div className="text-center mt-3">
        <button onClick={onClose} className="text-sm text-gray-500">
          Close
        </button>
      </div>
    </div>
  );
}

export default Login;
