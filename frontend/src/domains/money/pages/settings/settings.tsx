import { Conteiner, StyledErrorMessage } from "./styled";
import { Field, Form, Formik } from "formik";
import useAuthUser from "react-auth-kit/hooks/useAuthUser";
import useSignOut from "react-auth-kit/hooks/useSignOut";
import { useNavigate } from "react-router-dom";

interface FormValues {
  id: number;
  name: string;
  password: string;
}

const initialValues: FormValues = {
  id: 999,
  name: "",
  password: "",
};

export default function Settings() {
  const navigate = useNavigate();
  const auth: any = useAuthUser();
  const SignOut: any = useSignOut();

  async function handleSubmitAlter(values: FormValues) {
    values.id = auth.userId;
    console.log(values);
    const url = import.meta.env.VITE_API_ALTER_USERS;
    const response = await fetch(url, {
      method: "PUT",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    });

    if (response.status === 200) {
      alert("User altered");
    } else {
      alert("Error");
    }
  }

  async function handleSubmitDelete() {
    const values = { id: auth.userId };

    console.log(values);

    const url = import.meta.env.VITE_API_DELETE_USERS;
    const response = await fetch(url, {
      method: "DELETE",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    });

    if (response.status === 200) {
      console.log("User deleted");
      SignOut();
      navigate("/");
    } else {
      alert("Error");
    }
  }

  return (
    <Conteiner>
      <h1>Settings</h1>

      <h3>Alter User</h3>
      <Formik initialValues={initialValues} onSubmit={handleSubmitAlter}>
        <Form className="form">
          <label htmlFor="name">Name</label>
          <Field name="name" type="text" />
          <StyledErrorMessage name="name" component="div" />

          <label htmlFor="value">Password: </label>
          <Field name="password" type="password" />
          <StyledErrorMessage name="password" component="div" />

          <button type="submit">Submit</button>
        </Form>
      </Formik>

      <h3>Delete User</h3>
      <Formik initialValues={initialValues} onSubmit={handleSubmitDelete}>
        <Form className="form">
          <label className="info">This action is inversible</label>
          <button type="submit" className="delete">
            Delete
          </button>
        </Form>
      </Formik>
    </Conteiner>
  );
}
