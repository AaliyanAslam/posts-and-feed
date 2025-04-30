import { useForm } from "react-hook-form";
import { auth } from "../lib/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import Loader from "../components/Loader";
import { useState } from "react";
import { Link } from "react-router-dom";

const Signup = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [messege , setMessege] = useState("");

  const onSubmit = async (data) => {
    try {
      setLoading(true);
      setErrorMsg("");
      const res = await createUserWithEmailAndPassword(auth, data.Email, data.Password);
      console.log("User signed up:", res.user.email);
      // alert("Signup successful!");
      setMessege("Signup successful!");
    } catch (error) {
      setErrorMsg(error.message || "Signup failed");
    } finally {
      setLoading(false);
      setMessege("");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-tr from-green-100 to-emerald-200">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md">
        <h2 className="text-3xl font-bold text-center text-emerald-600 mb-6">Sign Up</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          <div>
            <label className="block mb-1 font-medium text-gray-700">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              {...register("Email", { required: "Email is required" })}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-400"
            />
            {errors.Email && (
              <span className="text-red-500 text-sm">{errors.Email.message}</span>
            )}
          </div>

          <div>
            <label className="block mb-1 font-medium text-gray-700">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              {...register("Password", { required: "Password is required" })}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-400"
            />
            {errors.Password && (
              <span className="text-red-500 text-sm">{errors.Password.message}</span>
            )}
          </div>

          {errorMsg && <p className="text-red-600 text-sm text-center">{errorMsg}</p>}
          {messege && <p className="text-green-600 text-sm text-center">{messege}</p>}

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-emerald-600 text-white py-2 rounded-lg hover:bg-emerald-700 transition duration-200"
          >
            {loading ? <Loader /> : "Sign Up"}
          </button>
        </form>
        <Link to = "/" className="text-blue-600"> <div className="flex justify-center hover:underline cursor-pointer"><span className="text-black">Login Here :  </span> Login</div></Link>
      </div>
    </div>
  );
};

export default Signup;
