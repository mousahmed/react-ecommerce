import { useState } from "react";
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from "utils/firebase.utils";

import FormInput from "components/form-input/form-input.component";

import "./sign-up-form.styles.scss";
import Button from "components/button/button.component";

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

function SignUpForm() {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      alert("Password and Confirm Password do not match");
      return;
    }
    try {
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password,
      );
      await createUserDocumentFromAuth(user, {
        displayName,
      });
      console.log("Sign up was successful");
      resetFormFields();
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        alert("Email already in use");
      } else {
        console.error("Error Signing up ", error);
      }
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <div className="sign-up-container">
      <h2>Don't have an account</h2>
      <span>Sign up with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Display Name"
          id="displayName"
          type="text"
          name="displayName"
          value={displayName}
          changeHandler={handleChange}
          isRequired
        />
        <FormInput
          label="Email"
          id="email"
          type="email"
          name="email"
          value={email}
          changeHandler={handleChange}
          isRequired
        />
        <FormInput
          label="Password"
          id="password"
          type="password"
          name="password"
          value={password}
          changeHandler={handleChange}
          isRequired
        />
        <FormInput
          label="Confirm Password"
          id="confirmPassword"
          type="password"
          name="confirmPassword"
          value={confirmPassword}
          changeHandler={handleChange}
          isRequired
        />
        <Button type="submit">Sign up</Button>
      </form>
    </div>
  );
}

export default SignUpForm;
