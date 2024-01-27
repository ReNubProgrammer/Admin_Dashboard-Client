import axios from "axios";

const domain = process.env.REACT_APP_SERVICE_HOST;

const httpProduct = (url, { method = "GET", data = undefined }) => {
  return axios({
    url: `${domain}/products${url}`,
    method,
    data,
  });

};

const get = (url, opts = {}) => httpProduct(url, { ...opts });
const post = (url, opts = {}) => httpProduct(url, { method: "POST", ...opts });
const patch = (url, opts = {}) => httpProduct(url, { method: "PATCH", ...opts });
const remove = (url, opts = {}) => httpProduct(url, { method: "DELETE", ...opts });

const methods = {
  get,
  post,
  patch,
  remove,
};

export default methods;
