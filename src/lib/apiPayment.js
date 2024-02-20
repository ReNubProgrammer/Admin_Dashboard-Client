import axios from "axios";

const domain = process.env.REACT_APP_SERVICE_HOST;

const httpPayment = (url, { method = "GET", data = undefined }) => {
  return axios({
    url: `${domain}/payment${url}`,
    method,
    data,
  });
};

const get = (url, opts = {}) => httpPayment(url, { ...opts });
const post = (url, opts = {}) => httpPayment(url, { method: "POST", ...opts });
const remove = (url, opts = {}) =>
  httpPayment(url, { method: "DELETE", ...opts });

const methods = {
  get,
  post,
  remove,
};

export default methods;
