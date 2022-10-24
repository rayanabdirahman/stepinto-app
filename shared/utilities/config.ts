const API_URL =
  process.env.NODE_ENV === "development"
    ? "http://1184-79-67-164-76.ngrok.io/api/v1"
    : "http://www.stepinto.co/api/v1";

interface IConfig {
  API_URL: string;
}

const Config: IConfig = {
  API_URL,
};

export default Config;
