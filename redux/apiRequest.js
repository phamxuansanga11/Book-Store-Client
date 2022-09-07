import { getStarted, getError, listBook, sliderBook } from "./bookSlice";
import { login, clearAccessToken } from "./userSlice";
import axios from "axios";
import { toast } from "react-toastify";

export const fetchApiGetAllBooks = async (dispatch) => {
  dispatch(getStarted());
  try {
    const res = await axios.get("http://localhost:8000/v1/book");
    dispatch(listBook(res.data));
    dispatch(sliderBook(res.data.slice(0, 3)));
  } catch (error) {
    console.log(error);
    dispatch(getError());
  }
};

export const fetchApiLogin = async (dispatch, data, router) => {
  try {
    const res = await axios.post("http://localhost:8000/v1/user/login", data);
    dispatch(login(res.data));
    // console.log(res.data, "login...");
    toast.success("Đăng nhập thành công..!!");
    router.push("/");
  } catch (error) {
    switch (error.response.data) {
      case "Wrong userName...!":
        toast.error("Sai tài khoản hoặc mật khẩu");
        break;
      default:
        break;
    }
    console.log(error);
  }
};

export const fetchApiLogout = async (dispatch, accessToken) => {
  try {
    const res = await axios({
      method: "POST",
      url: "http://localhost:8000/v1/user/logout",
      headers: {
        token: `Bearer ${accessToken}`,
      },
    });
    dispatch(clearAccessToken());
    toast.success("Đăng xuất thành công.!");
  } catch (error) {
    console.log(error);
  }
};
