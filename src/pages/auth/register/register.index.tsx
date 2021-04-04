import React from "react";
import * as Yup from "yup";
import { Link } from "react-router-dom";
// components
import TopNav from "../../../components/aut/top-nav/top-nav.index";
import FormBox, { FormInputs, OtherInputs } from "../../../components/aut/form/Form.index";
import Footer from "../../../components/aut/footer/footer.index";
// interface
import { FormVal } from "../../../bin/interface/form/values.interface";

const RegisterUI:React.FC = () => {
	const formSubmitHandler = (v: FormVal) => {
		console.log(JSON.stringify(v, null, 2));
	};
	return (
		<div className="auth-container">
			<TopNav />
			<div className="auth-content">
				<FormBox 
					title={{
						bold: "Now, your're creating",
						light: "an account"
					}}
					initValues={{
						firstName: "",
						lastName: "",
						email: "",
						pass: "",
						re_pass: "",
						show_pass: false
					}}
					validSchema={Yup.object({
						firstName: Yup.string()
							.required("name-required"),
						lastName: Yup.string()
							.required("lname-required"),
						email: Yup.string()
							.email("email-invalid")
							.required("email-required"),
						pass: Yup.string()
							.min(6, "short")
							.required("password-required"),
						re_pass: Yup.string()
							.min(6, "short")
							.required("password-required"),
						show_pass: Yup.boolean()
					})}
					submitHandler={formSubmitHandler}
					buttonTitle="Sign up"
				>
					<div className="form-row-2">
						<FormInputs id="firstName" name="firstName" type="text" label="First Name"/>
						<FormInputs id="lastName" name="lastName" type="text" label="Last name"/>
					</div>
					<div className="form-row-1">
						<FormInputs id="email" name="email" type="text" label="Email"/>
					</div>
					<div className="form-row-1">
						<FormInputs id="pass" name="pass" type="password" label="Password"/>
					</div>
					<div className="form-row-1">
						<FormInputs id="re_pass" name="re_pass" type="password" label="Re-password"/>
					</div>
					
					<OtherInputs>
						<label className="checkbox-container">
							<input type="checkbox" name="show_pass" id="show_pass"/>
							<span className="checkmark"></span>
							Show&nbsp;password
						</label>
						<Link className="primary-100_color a-link" to="/reset-password-form">Forgot password ?</Link>
					</OtherInputs>
				</FormBox>
			</div>
			<Footer />
		</div>
	);
};

export default RegisterUI;
