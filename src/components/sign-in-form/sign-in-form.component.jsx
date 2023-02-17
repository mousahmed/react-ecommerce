// React
import { useState } from "react";
// Utils
import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
  signInAuthWithEmailAndPassword,
} from "utils/firebase.utils";

// Components
import FormInput from "components/form-input/form-input.component";
import Button from "components/button/button.component";

// Styles
import "./sign-in-form.styles.scss";

const defaultFormFields = {
  email: "",
  password: "",
};

function SignInForm() {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;
  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const { user } = await signInAuthWithEmailAndPassword(email, password);
      console.log("Sign in was successful", user);
      resetFormFields();
    } catch (error) {
      switch (error.code) {
        case "auth/wrong-password":
          alert("Wrong Credentials");
          break;
        case "auth/user-not-found":
          alert("Wrong Credentials");
          break;
        default:
          alert("Error Signing In");
      }
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const signInWithGoogle = async () => {
    try {
      await signInWithGooglePopup();
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div className="sign-in-container">
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Email"
          id="sign-in-email"
          type="email"
          name="email"
          value={email}
          changeHandler={handleChange}
          isRequired
        />
        <FormInput
          label="Password"
          id="sign-in-password"
          type="password"
          name="password"
          value={password}
          changeHandler={handleChange}
          isRequired
        />

        <div className="buttons-container">
          <Button type="submit">Sign In</Button>
          <Button type="button" buttonType="google" onClick={signInWithGoogle}>
            Google Sign In
          </Button>
        </div>
      </form>
    </div>
  );
}

export default SignInForm;
