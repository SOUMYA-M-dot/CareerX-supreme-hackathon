import axios from "axios";

export const signup = async (name, email, password) => {
  const res = await axios.post("http://127.0.0.1:5000/signup", {
    name,
    email,
    password,
  });
  return res.data;
};
