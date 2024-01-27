import axios from "axios";

const domain = process.env.REACT_APP_SERVICE_HOST;

const httpTeam = (url, { method = "GET", data = undefined }) => {
  return axios({
    url: `${domain}/team${url}`,
    method,
    data,
  });
};

const get = (url, opts = {}) => httpTeam(url, { ...opts });
const post = (url, opts = {}) => httpTeam(url, { method: "POST", ...opts });
const patch = (url, opts = {}) =>
  httpTeam(url, { method: "PATCH", ...opts });
const remove = (url, opts = {}) =>
  httpTeam(url, { method: "DELETE", ...opts });

const methods = {
  get,
  post,
  patch,
  remove,
};

export default methods;