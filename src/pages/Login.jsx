import { useForm } from "react-hook-form";
import {auth} from "../lib/firebase"
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../config/redux/reducers/authSlice"


const Login= ()=>  {
const dispatch = useDispatch();
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate();
  const onSubmit = async (data) => {
    try{
        const res = await signInWithEmailAndPassword(auth, data.Email, data.Password)
        console.log(res.user.email);
     dispatch(addUser(res.user.email))
        alert("Login successful")
        navigate("/dashboard")
    }catch{
        alert("Invalid email or password")
    }
  
 



  }

  return (
  <>LOGIN
    <form onSubmit={handleSubmit(onSubmit)}>
      <input defaultValue="" placeholder="Email"{...register("Email")} />
      
      <input placeholder="Password"{...register("Password", { required: true })} />
      {errors.exampleRequired && <span>This field is required</span>}
      
      <input type="submit" />
    </form>
  </>
  );
}
export default Login