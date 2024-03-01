import { configureStore } from "@reduxjs/toolkit";
//const reduxLogger = require("redux-logger");
import cakeReducer from "../features/cake/cakeSlice";
import cookieReducer from "../features/cookie/cookieSlice";
import userReducer from "../features/user/userSlice";

//const logger = reduxLogger.createLogger();

const store = configureStore({
  reducer: {
    cake: cakeReducer,
    cookie: cookieReducer,
    user: userReducer,
  },
  //middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
