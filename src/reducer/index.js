import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "../slicers/authSlice";
import profileReducer from "../slicers/profileSlice";
import cartReducer from "../slicers/profileSlice";
import courseReducer from "../slicers/courseSlice"
import viewCourseReducer from "../slicers/viewCourseSlice"

const rootReducer = combineReducers({
    auth:authReducer,
    profile:profileReducer,
    cart:cartReducer,
    course: courseReducer,
    viewCourse: viewCourseReducer,
})

export default rootReducer;