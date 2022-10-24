import {
  MutationFunction,
  useMutation as useQueryMutation,
  UseMutationOptions,
  UseMutationResult,
} from "@tanstack/react-query";
import { AxiosResponse } from "axios";

export type MutaionReturnType = UseMutationResult<
  unknown,
  unknown,
  any,
  unknown
>;

export type MutaionTuple = [
  MutationFunction<AxiosResponse<any, any>, any>,
  UseMutationOptions?
];

export default function useMutation(
  method: string,
  mutationFunction: MutationFunction<AxiosResponse<any, any>, any>,
  options?: UseMutationOptions
) {
  const mutation = useQueryMutation(mutationFunction, options);
  return mutation;
}
