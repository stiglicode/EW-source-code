import React from "react";
import { Formik, Form, FormikHelpers} from "formik";
import { FormVal } from "../../../bin/interface/form/values.interface";
import { FormAttributes} from "../../../bin/interface/form/form-attributes.interface";

import { FormInputs, OtherInputs, CodeInput } from "./FormInputs";

import "./css/form.style.css";

const FormBox:React.FC<FormAttributes> = (props: FormAttributes) => {
	const formSubmitHandler = (values: FormVal, {setSubmitting}: FormikHelpers<FormVal>) => {
		props.submitHandler(values);
		return setSubmitting(false);
	};
	return (
		<div className="form-wrapper init-border primary-50_border soft-border contrast-adapt" style={{width: "25%"}}>
			<div className="form-title line-bottom primary-20_border">
				<h3 className="bold">{props.title.bold}&nbsp;</h3>
				<h3 className="regular">{props.title.light}</h3>
			</div>
			<Formik 
				initialValues={props.initValues}
				validationSchema={props.validSchema}
				onSubmit={formSubmitHandler}>
				<Form className="form-container">
					{props.children.map((child: JSX.Element) => {
						if(child.type.name !== "OtherInputs") {
							return child;
						}
					})}
					<div className="line-top form-buttons primary-20_border flex-column align-center">
						{props.children.map((child: JSX.Element) => {
							if(child.type.name === "OtherInputs") {
								return child;
							}
						})}
						<div className="btn btn-primary btn-half-inline soft-border">
							<button className="btn-title" type="submit">{props.buttonTitle}</button>
						</div>
					</div>
				</Form>
			</Formik>
		</div>
	);
};

export default FormBox;
export { FormInputs, OtherInputs, CodeInput };
