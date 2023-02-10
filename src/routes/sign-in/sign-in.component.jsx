import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from "utils/firebase.utils";
import SignUpForm from "components/sign-up-form/sign-up-form.component";


function SignIn() {
  const logGoogleUser = async () => {
    try {
      const { user } = await signInWithGooglePopup();
      const userDocRef = await createUserDocumentFromAuth(user);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div>
      Sign in Page
      <h1>Sign In Page</h1>
      <button onClick={logGoogleUser}>Sign in with Google Popup</button>
      <SignUpForm />
    </div>
  );
}

export default SignIn;
