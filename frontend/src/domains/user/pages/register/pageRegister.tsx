import { Conteiner, Form } from "./styled";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { useState } from "react";

export default function Register() {
  const [erro, setError] = useState("");
  const navegate = useNavigate();

  async function onSubmit(values: any) {
    console.log("Values: ", values);
    setError("");

    try {
      const url = import.meta.env.VITE_API_REGISTER;
      const response = await fetch(url, {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      if (response.status === 201) {
        navegate("/");
      }
    } catch (error) {
      if ((error as any).status === 400) {
        setError("Invalid credentials");
      } else {
        console.log(error);
      }
    }
  }

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },
    onSubmit,
  });

  return (
    <Conteiner>
      <div className="content">
        <h1>| TO DO LIST</h1>
        <h3>LOG IN</h3>
        <p>Enter your credentials to create your account</p>

        <Form onSubmit={formik.handleSubmit}>
          <label>Name</label>
          <input
            name="name"
            type="text"
            placeholder="Name"
            value={formik.values.name}
            onChange={formik.handleChange}
          />
          <label>Email: </label>
          <input
            type="email"
            placeholder="Email"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
          />
          <label>Password</label>
          <input
            type="password"
            placeholder="Password"
            name="password"
            value={formik.values.password}
            onChange={formik.handleChange}
          />
          <p>{erro}</p>
          <button type="submit">LOG IN</button>
        </Form>

        <span>
          Already have an account? <Link to="/">Sing In</Link>
        </span>
      </div>
    </Conteiner>
  );
}
