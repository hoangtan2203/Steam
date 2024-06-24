import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { URL_API } from "../../config";

// get cookie
export function getCookie(cname) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(';');
  for (let i = 0; i < ca.length; i++){
    let c = ca[i];
    while (c.charAt(0) == ' '){
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
};
// set Cookie`
export function setCookie(cname, cvalue, exdays) {
  const d = new Date();
  d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
  let expires = "expires=" + d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}
export const fetchUsers = createAsyncThunk(
  'users/fetchUsers',
  async (thunkAPI) => {
    // Get token from cookie
    const token = getCookie('token');
    const response = await axios.get(URL_API + "/api/user/users",{
      headers:{'authorization':`Bearer ${token}`}
    })
    return response.data
  }
);

export const deleteUserById = createAsyncThunk(
  'users/deleteUserById',
  async (id, thunkAPI) => {
    const response = await axios.delete(URL_API + "/api/user/" + id);
    return response.data
  }
);

export const registerUser = createAsyncThunk(
  'users/registerUser',
  async (user) => {
    const response = await axios.post(URL_API + '/api/user/register', user)
    return response.data
  }
);
export const loginUser = createAsyncThunk(
  'users/loginUser',
  async (user, thunkAPI) => {
    try {
      const response = await axios.post(URL_API + '/api/user/login', user);
      // Save token to cookie
      setCookie('token', response.data.token, 1);
      console.log("response", response.data);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const userLogout = createAsyncThunk(
  'user/userLogout',
  async(thunkAPI)=>{
    const response = await axios.post(URL_API + '/api/user/logout');
    return response.data
  }
)