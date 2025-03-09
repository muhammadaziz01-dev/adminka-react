import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import { auth } from "../../service/auth";
import { setCookies } from "../../utils/cookie";
import "./style.scss";
function Index() {
  const navigate = useNavigate();
  const [disabled, setDisabled] =useState(false);
  const [phone_number, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const login = async (e:any) => {
    setDisabled(true);
    e.preventDefault();
    try {
      const response = await auth.signin({phone_number, password});
      if(response.status === 200){
        setCookies("access_token", response?.data?.data?.tokens?.accessToken?.token);
        setCookies("refresh_token", response?.data?.data?.tokens?.refreshToken?.token);
        toast.success("Success full login")
        setTimeout(()=>{
          setDisabled(false);
          navigate("/tour");
        }, 1500);
      }
    } catch (error:any) {
      toast.error(error.message);
      setDisabled(false);
    }
  }

  return (
    <>
      <ToastContainer autoClose={2000} />
    <div className="auth">
      <form className="auth--form" onSubmit={login}>
        <p className="auth--form-title">Login to your account</p>
        <label htmlFor="username" className="auth--form--label">
          <p className="auth--form--label-title">Username</p>
          <input
          name="password"
          value={password}
          onChange={(e:any)=>{setPassword(e.target.value)}}

            id="username"
            className="auth--form--label-input"
            type="text"
            placeholder="Username"
          />
        </label>
        <label htmlFor="phone" className="auth--form--label">
          <p className="auth--form--label-title">Phone number</p>
          <input
          name="phone_number"
            value={phone_number}
            onChange={(e:any)=>{setPhone(e.target.value)}}
            id="phone"
            className="auth--form--label-input"
            type="text"
            placeholder="+998 (__) (___) (__) (__)"
          />
        </label>

        <button className="auth--form-btn" type="submit" disabled={disabled}>
          Login now
        </button>
        <p className="auth--form--titleButton">
          Don't have an account ?<span>Sign up</span>
        </p>
      </form>
    </div>
    </>
  );
}

export default Index;
