import React, { useState } from "react";
import * as Yup from "yup";
// components
import FormBox, { FormInputs, OtherInputs, CodeInput } from "../../../components/aut/form/Form.index";
import StepProgress from "../../../components/aut/progress-idicator/step-progress.index";
import TopNav from "../../../components/aut/top-nav/top-nav.index";
import Footer from "../../../components/aut/footer/footer.index";
// interface
import { FormVal } from "../../../bin/interface/form/values.interface";
import { Link } from "react-router-dom";
import { ProgressCallBack } from "../../../bin/interface/step-progress.interface";

const EmailAuthentication: React.FC<ProgressCallBack> = (props: ProgressCallBack) => {
	// event handler
	const formSubmitHandler = (v: FormVal) => {
		console.log(JSON.stringify(v, null, 2));
		return props.progress([2,1,0]);
	};
	// redner
	return (
		<FormBox 
			title={{
				bold: "Can’t sign in",
				light: "an account ?"
			}}
			initValues={{
				email: ""
			}}
			validSchema={Yup.object({
				email: Yup.string()
					.email("email-invalid")
					.required("email-required"),
			})}
			submitHandler={formSubmitHandler}
			buttonTitle="Send"
		>
			<div className="form-row-1">
				<FormInputs id="email" name="email" type="text" label="Email"/>
			</div>
			<OtherInputs>
				<span className="primary-50_color">The code will be sent to your e-mail</span>
			</OtherInputs>
		</FormBox>
	);
};
const CodeVerification: React.FC<ProgressCallBack> = (props: ProgressCallBack) => {
	const formSubmitHandler = (v: FormVal) => {
		const code = Object.values(v);
		console.log(code);
		return props.progress([2,2,1]);
	};
	const codeValid = Yup.number()
		.integer("code-incorrect")
		.max(9, "short")
		.min(0, "short")
		
		.required("code-empty");
	return (
		<FormBox 
			title={{
				bold: "Enter your personal code",
				light: "here"
			}}
			initValues={{
				dig1: "",
				dig2: "",
				dig3: "",
				dig4: "",
				dig5: "",
				dig6: "",
			}}
			validSchema={Yup.object({
				dig1: codeValid,
				dig2: codeValid,
				dig3: codeValid,
				dig4: codeValid,
				dig5: codeValid,
				dig6: codeValid,
			})}
			submitHandler={formSubmitHandler}
			buttonTitle="Save"
		>
			<div className="form-row-1">
				<div className="form-element">
					<CodeInput id="dig1" name="dig1"/>
					<CodeInput id="dig2" name="dig2"/>
					<CodeInput id="dig3" name="dig3"/>
					<CodeInput id="dig4" name="dig4"/>
					<CodeInput id="dig5" name="dig5"/>
					<CodeInput id="dig6" name="dig6"/>
				</div>
			</div>
			<OtherInputs>
				<Link className="primary-100_color a-link" to="/reset-password-form">Send a code again</Link>
			</OtherInputs>
		</FormBox>
	);
};
const NewPassword: React.FC<ProgressCallBack> = (props: ProgressCallBack) => {
	const formSubmitHandler = (v: FormVal) => {
		console.log(JSON.stringify(v, null, 2));
		return props.progress([2,2,2]);
	};
	return (
		<FormBox 
			title={{
				bold: "Fresh new",
				light: "password"
			}}
			initValues={{
				pass: "",
				re_pass: "",
				rermeber_me: false
			}}
			validSchema={Yup.object({
				pass: Yup.string()
					.min(6, "short")
					.required("password-required"),
				remember_me: Yup.boolean()
			})}
			submitHandler={formSubmitHandler}
			buttonTitle="Save"
		>
			<div className="form-row-1">
				<FormInputs id="pass" name="pass" type="password" label="New password"/>
			</div>
			<div className="form-row-1">
				<FormInputs id="re_pass" name="re_pass" type="password" label="Re-password"/>
			</div>
			<OtherInputs>
				<label className="checkbox-container">
					<input type="checkbox" name="rermeber_me" id="rermeber_me"/>
					<span className="checkmark"></span>
							Remeber&nbsp;me
				</label>
			</OtherInputs>
		</FormBox>
	);
};


const ResetPasswordUI: React.FC = () => {
	// state
	const [progressStatus, setProgressStatus] = useState([1,0,0]);
	// callback
	const setterProgress = (callback: number[]) => {
		return setProgressStatus(callback);
	};
	// render
	return (
		<div className="auth-container">
			<TopNav />
			<div className="auth-content">
				<StepProgress title={["Email authentication", "Code verification", "New password"]} progress={progressStatus}/>
				{progressStatus[0] === 1 
					? <EmailAuthentication progress={setterProgress}/> :
					progressStatus[1] === 1
						? <CodeVerification progress={setterProgress}/> :
						progressStatus[2] === 1
							? <NewPassword progress={setterProgress}/> : null
				}
			</div>
			<Footer />
		</div>
	);
};

export default ResetPasswordUI;
