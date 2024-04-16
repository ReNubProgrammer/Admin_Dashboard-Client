import axios from "axios";

const domain = process.env.REACT_APP_SERVICE_HOST;

const httpAgenda = (url, { method = "GET", data = undefined }) => {
  return axios({
    url: `${domain}/agenda${url}`,
    method,
    data,
  });
};

const get = (url, opts = {}) => httpAgenda(url, { ...opts });
const post = (url, opts = {}) => httpAgenda(url, { method: "POST", ...opts });
const patch = (url, opts = {}) => httpAgenda(url, { method: "PATCH", ...opts });
const remove = (url, opts = {}) =>
  httpAgenda(url, { method: "DELETE", ...opts });

const methods = {
  get,
  post,
  remove,
};

export default methods;
