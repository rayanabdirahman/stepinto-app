import { ISessionSlice } from "../slices/createSessionSlice";

export const getSession = (state: ISessionSlice) => state.session;

export const getUser = ({ session }: ISessionSlice) => session.user;

export const getAccessToken = ({ session }: ISessionSlice) =>
  session.accessToken;

export const getRefreshToken = ({ session }: ISessionSlice) =>
  session.refreshToken;
