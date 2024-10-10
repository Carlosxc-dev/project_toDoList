import { Conteiner, Form } from "./styled";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import { useState } from "react";
import useSignIn from "react-auth-kit/hooks/useSignIn";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [error, setError] = useState("");
  const signIn = useSignIn();
  const navigate = useNavigate();

  async function onSubmit(values: any) {
    console.log("Values: ", values);
    setError("");

    try {
      const url = import.meta.env.VITE_API_LOGIN;
      const response = await fetch(url, {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      const parseResp = await response.json();

      const sign = signIn({
        auth: {
          token: parseResp.token,
          type: "Bearer",
        },
        userState: {
          userId: parseResp.data.id,
          name: parseResp.data.name,
          email: parseResp.data.email,
          token: parseResp.token,
        },
        refresh: parseResp.token,
      });

      if (sign) {
        navigate("/home");
      } else {
        setError("Invalid credentials");
        throw new Error();
      }
    } catch (error) {
      console.log(error);
    }
  }

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit,
  });

  return (
    <Conteiner>
      <div className="content">
        <h1>| TO DO LIST</h1>
        <h3>SIGN IN</h3>
        <p>Enter your credentials to access your account</p>
        <Form onSubmit={formik.handleSubmit}>
          <label htmlFor="email">Email:</label>
          <input
            id="email"
            type="email"
            name="email"
            placeholder="Email"
            value={formik.values.email}
            onChange={formik.handleChange}
          />
          <label htmlFor="password">Password:</label>
          <input
            id="password"
            name="password"
            type="password"
            placeholder="Password"
            value={formik.values.password}
            onChange={formik.handleChange}
          />
          {<p className="erro">{error}</p>}
          <button type="submit">SING IN</button>
        </Form>
        <span>
          Don't have an account? <Link to="/register">Log In</Link>
        </span>
      </div>
    </Conteiner>
  );
}
