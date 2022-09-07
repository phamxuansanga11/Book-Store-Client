import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { fetchApiLogin } from "../../redux/apiRequest";
import { useDispatch } from "react-redux";
import { useRouter } from "next/router";

function FormLogin(props) {
  const router = useRouter();
  // console.log("router ne...", router);
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleSubmitLogin = (data) => {
    console.log("submit", data);
    fetchApiLogin(dispatch, data, router);
  };

  return (
    <section className="login__form">
      <div className="color"></div>
      <div className="color"></div>
      <div className="color"></div>
      <div className="box__form">
        {/* <div className="square" style={{ "--i": 0 }}></div>
        <div className="square" style={{ "--i": 1 }}></div>
        <div className="square" style={{ "--i": 2 }}></div>
        <div className="square" style={{ "--i": 3 }}></div>
        <div className="square" style={{ "--i": 4 }}></div> */}
        <div className="container --container__form-login">
          <div className="form">
            <h2>Login form</h2>
            <form
              className="form__login"
              onSubmit={handleSubmit(handleSubmitLogin)}
            >
              <div className="inputBox">
                <input
                  {...register("username", { required: true })}
                  type="text"
                  placeholder="Username"
                />
              </div>
              <div className="inputBox">
                <input
                  {...register("password", { required: true })}
                  type="password"
                  placeholder="Password"
                />
              </div>
              <div className="inputBox">
                <input
                  className="btn__submit-input"
                  type="submit"
                  value="Login"
                />
              </div>
              <p className="forget">
                Forgot Password ? <a href="#">Click here!</a>
              </p>
              <div className="btn__register">Đăng kí tài khoản.</div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FormLogin;
