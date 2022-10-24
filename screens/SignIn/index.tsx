import React from "react";
import * as Yup from "yup";
import {
  AuthScreenProps,
  AuthStackScreenNames,
} from "../../shared/navigation/types";
import AuthLayout from "../../shared/components/layout/AuthLayout";
import SignInForm from "./SignInForm";
import Link from "../../shared/components/atoms/Link";
import useSignIn from "./useSignIn";

type Props = AuthScreenProps<AuthStackScreenNames.SIGN_IN>;

const SignInValidationSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Email required"),
  password: Yup.string()
    .required("Password required")
    .min(8, "Password is too short - must be 8 characters minimum"),
});

const SignIn: React.FC<Props> = ({ navigation }) => {
  const { onSubmit, errorMessage } = useSignIn();

  const goToSignUp = () => navigation.navigate("SignUp");

  return (
    <AuthLayout
      title="Welcome back!"
      subTitle="Enter your credentials to continue"
      errorMessage={errorMessage}
    >
      <SignInForm
        initialValues={{ email: "", password: "" }}
        validationSchema={SignInValidationSchema}
        onSubmit={onSubmit}
      />

      <Link onPress={goToSignUp}>Don't have an account? Sign up</Link>
    </AuthLayout>
  );
};

export default SignIn;
