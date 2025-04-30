import { useForm } from "react-hook-form";
import { auth } from "../lib/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../config/redux/reducers/authSlice";
import Loader from "../components/Loader";
import { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      setLoading(true);
      setError(false);
      const res = await signInWithEmailAndPassword(auth, data.Email, data.Password);
      dispatch(addUser(res.user.email));
      // alert("Login successful");
      navigate("/dashboard");
    } catch {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-tr from-blue-100 to-indigo-200">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md">
        <h2 className="text-3xl font-bold text-center text-indigo-600 mb-6">Login</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          <div>
            <label className="block mb-1 font-medium text-gray-700">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              {...register("Email", { required: "Email is required" })}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
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
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
            {errors.Password && (
              <span className="text-red-500 text-sm">{errors.Password.message}</span>
            )}
          </div>

          {error && <p className="text-red-600 text-sm text-center">Invalid email or password</p>}

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition duration-200"
          >
            {loading ? <Loader /> : "Login"}
          </button>
        </form>
        <Link to = "/signup" className="text-blue-600"> <div className="flex justify-center hover:underline cursor-pointer"><span className="text-black">Don't have an account :</span>  Signup</div></Link>

      </div>
    </div>
  );
};

export default Login;
