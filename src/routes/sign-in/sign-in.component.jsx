import SignUpForm from "../../components/sign-up-form/sign-up-form.components";
import Button from "../../components/button/button.component";

import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";

const SignIn = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  };

  return (
    <div>
      <h1>Sign In</h1>
      <Button buttonType="google" onClick={logGoogleUser}>
        Sign in with Google
      </Button>
      <SignUpForm />
    </div>
  );
};

export default SignIn;
