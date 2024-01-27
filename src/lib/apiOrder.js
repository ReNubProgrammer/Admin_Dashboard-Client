import axios from "axios";

const domain = process.env.REACT_APP_SERVICE_HOST;

const httpOrder = (url, { method = "GET", data = undefined }) => {
  return axios({
    url: `${domain}/orders${url}`,
    method,
    data,
  });

};

const get = (url, opts = {}) => httpOrder(url, { ...opts });
const post = (url, opts = {}) => httpOrder(url, { method: "POST", ...opts });
const patch = (url, opts = {}) => httpOrder(url, { method: "PATCH", ...opts });
const remove = (url, opts = {}) =>
  httpOrder(url, { method: "DELETE", ...opts });

const methods = {
  get,
  post,
  patch,
  remove,
};

export default methods;
