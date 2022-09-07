import "../styles/globals.scss";
import "@fortawesome/fontawesome-free/css/all.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import store from "../redux/store";
import { Provider } from "react-redux";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <ToastContainer
        position="bottom-right"
        autoClose={1000}
        pauseOnHover={false}
      />
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
