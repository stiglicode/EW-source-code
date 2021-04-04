import React from "react";
import LoginUI from "./../login/login.index";
import RegisterUI from "./../register/register.index";
import ResetPasswordUI from "../reset-pass/res-pass.index";

// style
import "./css/auth.style.css";

interface AuthContainer{
	LoginUI: React.FC,
	RegisterUI: React.FC,
	ResetPasswordUI: React.FC
}

const AuthContainer: AuthContainer =  {
	LoginUI: LoginUI,
	RegisterUI: RegisterUI,
	ResetPasswordUI: ResetPasswordUI
};


export {AuthContainer};