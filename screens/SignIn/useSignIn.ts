import { useNavigation } from "@react-navigation/native";
import { FormikHelpers } from "formik";
import { ISignInModel } from "../../shared/domain/interfaces/auth";
import useApi from "../../shared/hooks/useApi";
import axiosHelper from "../../shared/utilities/axiosHelper";

type ReturnType = {
  errorMessage: string;
  onSubmit: (values: ISignInModel, actions: FormikHelpers<any>) => void;
};

export default function useSignIn(): ReturnType {
  const navigation = useNavigation();
  const { mutate, error } = useApi.post(
    (model: ISignInModel) => axiosHelper.post("/accounts/auth/signin", model),
    // { onSuccess: () => navigation.navigate() }
    {
      onSuccess: () => console.log("Logged in successfully"),
      onError: (error) => console.log("Error when logginin: ", error),
    }
  );

  const onSubmit = (values: ISignInModel, actions: FormikHelpers<any>) => {
    try {
      console.log("running submit");
      mutate(values);
      actions.setSubmitting(false);
    } catch (e) {
      console.log("catch error: ", e);
      actions.setSubmitting(false);
    }
  };

  return { errorMessage: error as string, onSubmit };
}
