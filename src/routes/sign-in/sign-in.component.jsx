import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from "utils/firebase.utils";

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
    </div>
  );
}

export default SignIn;
