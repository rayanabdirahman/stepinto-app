import { FormikProps } from "formik";
import { FormControl, Stack } from "native-base";
import React from "react";
import Button from "../../../shared/components/atoms/Button";
import Input from "../../../shared/components/atoms/Input";
import { ISignInModel } from "../../../shared/domain/interfaces/auth";
import withFormik from "../../../shared/HOC/withFormik";

type Props = {
  initialValues: ISignInModel;
  formik: FormikProps<ISignInModel>;
  onSubmit: (model: ISignInModel) => void;
};

const SignInForm: React.FC<Props> = ({ formik }) => {
  return (
    <FormControl isRequired>
      <Stack space={3}>
        <Input
          label="Email address"
          placeholder='e.g. "example@example.com"'
          isInvalid={!!formik.errors.email && formik.touched.email}
          errorMsg={formik.errors.email}
          onChangeText={formik.handleChange("email")}
        />
        <Input
          type="password"
          label="Password"
          placeholder='e.g. "John$33*68"'
          isInvalid={!!formik.errors.password && formik.touched.password}
          errorMsg={formik.errors.password}
          onChangeText={formik.handleChange("password")}
        />
        <Button
          isLoading={formik.isSubmitting}
          onPress={() => formik.handleSubmit()}
        >
          Sign in
        </Button>
      </Stack>
    </FormControl>
  );
};

export default withFormik(SignInForm);
