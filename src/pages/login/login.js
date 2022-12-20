import React from "react";
// import {useNavigate} from "react-router-dom";
import { API } from "../../redux/API";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import Button from "../../component/button";
import TextInput from "../../component/text-input/text-input";

import styles from "./login.module.scss";

const Login = ()=>{
      // const adminLogin = localStorage.getItem("admin") 
     // const navigate= useNavigate()
    // const { admin } = useSelector((state) => state.authorization);
    const dispatch = useDispatch();

    const { control, formState: {errors}, handleSubmit } = useForm({
      defaultValues: {email: '', password:''}
    });
    
    const onSubmit = handleSubmit((data) => {
        dispatch(API.getAuthorization(data))
    });

    return(
         <div className={styles.login}>
           <TextInput
               type="email"
               name="email"
               control={control}
               errors={errors}
               placeholder="login"
               className={styles.login_input} 
            />
           <TextInput  
               type="password"
               name="password"
               control={control}
               errors={errors}
               placeholder="password"
               className={styles.login_input}  
           />  
           <Button className={styles.btn} type="submit" onClick={onSubmit}>Login</Button>
         </div> 
    )
}
export default Login;