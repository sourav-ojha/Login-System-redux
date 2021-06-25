import * as api from "../api/index";

export const login = (formData) => async (dispatch) => {
  const { data } = await api.login(formData);
  console.log("data---------", data);
  dispatch({ type: "AUTH", payload: data });
  console.log("dispatch success---------");
};

export const register = (formData) => async (dispatch) => {
  const { data } = await api.register(formData);
  dispatch({ type: "AUTH", payload: data });
};
