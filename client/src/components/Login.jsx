import React, { useEffect, useState } from "react";
import { useDispatch, useSelector, useStore } from "react-redux";
import { login, register } from "../action/auth.action";
import styles from "./login.module.css";
const Login = () => {
  const initial = {
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    cpassword: "",
  };
  const [status, setStatus] = useState(false);
  const [isSignUP, setSignUp] = useState(false);
  const [formData, setFormData] = useState(initial);
  const [statusContent, setStatusContent] = useState("");

  const dispatch = useDispatch();
  const authData = useSelector((state) => state.authData);

  useEffect(() => {
    if (authData?.data) {
      if (isSignUP) setStatusContent("User Registered ");
      else setStatusContent("Successfully logged in ");
    } else {
      setStatusContent(authData?.message);
    }

    console.log("yaay", statusContent);
  }, [authData, status, isSignUP]);
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    if (!isSignUP) dispatch(login(formData));
    else dispatch(register(formData));

    setStatus(true);
    setTimeout(() => {
      setStatus(false);
    }, 5000);
  };

  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <div className={styles.body_grid}>
          <div className={styles.head}>
            <div
              className={`${styles.head_btn}  ${!isSignUP && styles.active}`}
              onClick={() => setSignUp(false)}
            >
              SignIn
            </div>
            <div
              className={`${styles.head_btn} ${isSignUP && styles.active}`}
              onClick={() => setSignUp(true)}
            >
              SignUp
            </div>
          </div>
          <div className={styles.form}>
            <div className={styles.formBody}>
              {status && (
                <div className={styles.status}>{statusContent} HI</div>
              )}
              {isSignUP && (
                <div className={styles.input_split}>
                  <div>
                    <input
                      className={styles.inputhalf}
                      type="text"
                      name="firstname"
                      value={formData.firstname}
                      placeholder="First Name"
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div>
                    <input
                      className={styles.inputhalf}
                      type="text"
                      name="lastname"
                      value={formData.lastname}
                      placeholder="Last Name"
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
              )}

              <div>
                <input
                  className={styles.inputfull}
                  type="email"
                  name="email"
                  value={formData.email}
                  placeholder="Email Id"
                  onChange={handleChange}
                  required
                />
              </div>

              <div>
                <input
                  className={styles.inputfull}
                  type="password"
                  name="password"
                  value={formData.password}
                  placeholder="Password"
                  onChange={handleChange}
                  required
                />
              </div>

              {isSignUP && (
                <div>
                  <input
                    className={styles.inputfull}
                    type="cpassword"
                    name="cpassword"
                    value={formData.cpassword}
                    placeholder="Confirm Password"
                    onChange={handleChange}
                    required
                  />
                </div>
              )}
            </div>

            <div>
              <button className={styles.submit_btn} onClick={handleSubmit}>
                {isSignUP ? "SignUp" : "SignIn"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
