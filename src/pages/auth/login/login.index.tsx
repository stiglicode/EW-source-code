import React from "react";
import { Link } from "react-router-dom";
import * as Yup from "yup";
// components
import TopNav from "../../../components/aut/top-nav/top-nav.index";
import FormBox, { FormInputs, OtherInputs } from "../../../components/aut/form/Form.index";
import Footer from "../../../components/aut/footer/footer.index";
// interface
import { FormVal } from "../../../bin/interface/form/values.interface";

const LoginUI:React.FC = () => {
	const formSubmitHandler = (v: FormVal) => {
		console.log(JSON.stringify(v, null, 2));
	};
	return (
		<div className="auth-container">
			<TopNav />
			<div className="auth-content">
				<FormBox 
					title={{
						bold: "Hi,",
						light: "welcome back"
					}}
					initValues={{
						email: "",
						pass: "",
						rermeber_me: false
					}}
					validSchema={Yup.object({
						email: Yup.string()
							.email("email-invalid")
							.required("email-required"),
						pass: Yup.string()
							.min(6, "short")
							.required("password-required"),
						remember_me: Yup.boolean()
					})}
					submitHandler={formSubmitHandler}
					buttonTitle="Sign in"
				>
					<div className="form-row-1">
						<FormInputs id="email" name="email" type="text" label="Email"/>
					</div>
					<div className="form-row-1">
						<FormInputs id="pass" name="pass" type="password" label="Password"/>
					</div>
					<OtherInputs>
						<label className="checkbox-container">
							<input type="checkbox" name="rermeber_me" id="rermeber_me"/>
							<span className="checkmark"></span>
							Remeber&nbsp;me
						</label>
						<Link className="primary-100_color a-link" to="/reset-password-form">Forgot password ?</Link>
					</OtherInputs>
				</FormBox>
			</div>
			<Footer />
		</div>
	);
};

export default LoginUI;
