import React from "react";
import * as Yup from "yup";
import {
  AuthScreenProps,
  AuthStackScreenNames,
} from "../../shared/navigation/types";
import AuthLayout from "../../shared/components/layout/AuthLayout";
import SignInForm from "./SignInForm";
import { ISignInModel } from "../../shared/domain/interfaces/auth";
import { FormikHelpers } from "formik";
import Link from "../../shared/components/atoms/Link";

type Props = AuthScreenProps<AuthStackScreenNames.SIGN_IN>;

const SignInValidationSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Email required"),
  password: Yup.string()
    .required("Password required")
    .min(8, "Password is too short - must be 8 characters minimum"),
});

const SignIn: React.FC<Props> = ({ navigation }) => {
  const onSubmit = (values: ISignInModel, actions: FormikHelpers<any>) => {
    try {
      console.log(values);
      actions.setSubmitting(false);
    } catch (e) {
      console.log(e);
      actions.setSubmitting(false);
    }
  };

  const goToSignUp = () => navigation.navigate("SignUp");

  return (
    <AuthLayout
      title="Welcome back!"
      subTitle="Enter your credentials to continue"
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
