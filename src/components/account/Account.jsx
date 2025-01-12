import Modal from "react-bootstrap/Modal";

import { ToastContainer, toast } from "react-toastify";

import DotLoader from "react-spinners/DotLoader";

import "./account.css";
import { useContext, useState } from "react";
import { request } from "../utils/Request";
import { useCookies } from "react-cookie";
import { AuthContext } from "../context/Auth";
import { useNavigate } from "react-router-dom";

function MyVerticallyCenteredModal(props) {
  const override = {
    position: "absolute",
    inset: "50%",
  };
  const [cookies, setCookie] = useCookies(["user"]);

  const { dispatch } = useContext(AuthContext);

  const [accountType, setAccountType] = useState("register");
  const [err, setErr] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;
    try {
      setLoading(true);
      const { data } = await request({
        url: `/api/UsersController/login?Email=${email}&password=${password}`,
      });
      setCookie("user", data[0].token, { path: "/" });
      dispatch({ type: "login", payload: data[0] });
      // toast.success("You have been logged in successfully");
      setLoading(false);
      props.onHide();
      setErr(null);
      e.target.reset();
    } catch (err) {
      setLoading(false);
      setErr(err.response.data.message);
    }
  };
  const handleRsgister = async (e) => {
    e.preventDefault();
    const name = e.target[0].value;
    const email = e.target[1].value;
    const phone = e.target[2].value;
    const password = e.target[3].value;
    try {
      setLoading(true);
      const { data } = await request({
        url: "/api/UsersController/register",
        method: "post",
        data: {
          name,
          email,
          mobile: phone,
          password,
          otp: "string",
          userPhoto: "string",
          rol: "string",
          active: true,
        },
      });
      toast.success("You have been registerde in successfully");
      setLoading(false);
      setAccountType("login");
      setErr(null);
      e.target.reset();
    } catch (err) {
      setLoading(false);
      setErr(err.response.data.message);
    }
  };
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Body>
        <Modal.Header closeButton></Modal.Header>
        <form
          onSubmit={accountType == "register" ? handleRsgister : handleLogin}
        >
          <div className="wrapper">
            <img src="/user.svg" alt="" />
            <h2>تسجيل الدخول</h2>
            {accountType === "register" ? (
              <>
                <label htmlFor="name"> الاسم</label>
                <input required name="name" type="text" placeholder="الاسم" />
                <label htmlFor="email"> البريد الالكتروني</label>
                <input
                  required
                  name="email"
                  type="email"
                  placeholder="your@email.com"
                />
                <label htmlFor="phone"> رقم الجوال</label>
                <input
                  required
                  name="phone"
                  type="number"
                  placeholder="010 01234567"
                />
                <label htmlFor="pass"> الرقم السري</label>
                <input
                  required
                  name="pass"
                  type="number"
                  placeholder="**********"
                />
              </>
            ) : (
              <>
                <label htmlFor="email">البريد الإلكتروني</label>
                <input
                  required
                  name="email"
                  type="email"
                  placeholder="your@email.com"
                />
                <label htmlFor="password">الرقم السري </label>
                <input
                  required
                  name="password"
                  type="password"
                  placeholder="Password"
                />
                {err && <span className="error">{err}</span>}
              </>
            )}

            <button type="submit">دخول</button>
            {accountType === "register" ? (
              <span onClick={() => setAccountType("login")}>
                لدي حساب بالفعل
              </span>
            ) : (
              <span onClick={() => setAccountType("register")}>
                {" "}
                انشاء حساب جديد{" "}
              </span>
            )}
          </div>
          {err && <span className="error">{err}</span>}
        </form>

        <DotLoader
          color="#2ffff3"
          size={60}
          cssOverride={override}
          loading={loading}
        />
      </Modal.Body>
    </Modal>
  );
}

function Account({ modalShow, setModalShow }) {
  return (
    <>
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        rtl={false}
        pauseOnFocusLoss
        pauseOnHover
        transition:Bounce
      />
    </>
  );
}
export default Account;
