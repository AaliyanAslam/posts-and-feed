import { useForm } from "react-hook-form";
import {auth} from "../lib/firebase"
import { createUserWithEmailAndPassword } from "firebase/auth";

const Signup= ()=>  {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = async (data) => {
    const res = await createUserWithEmailAndPassword(auth, data.Email, data.Password)
    console.log(res.user.email);
  }

  return (
    <>
    SIGN UP
    
    
    <form onSubmit={handleSubmit(onSubmit)}>
      <input defaultValue="" placeholder="Email"{...register("Email")} />
      
      <input placeholder="Password"{...register("Password", { required: true })} />
      {errors.exampleRequired && <span>This field is required</span>}
      
      <input type="submit" />
    </form>
    </>
  );
}
export default Signup