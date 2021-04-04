import React, { useState, useRef, useEffect } from "react";
import { useField } from "formik";
import { FormIntputsAttributes } from "../../../bin/interface/form/form-attributes.interface";
import errorInputHandler from "./validation";

const FormInputs: React.FC<FormIntputsAttributes> = (props: FormIntputsAttributes) => {
	const [field, meta] = useField(props);
	return (
		<div className="form-element">
			<input 
				className={`${errorInputHandler(meta)[0]} input-form input input-wrapper rounded-border`} 
				{...field}
				{...props}
				spellCheck="false"
				required
			/>
			<label>{props.label}</label>
			{meta.touched && meta.error ? <span className={`form-element-error ${errorInputHandler(meta)[1]}`}>{errorInputHandler(meta)[2]}</span> : null}
		</div>
	);
};
const OtherInputs: React.FC<{children: JSX.Element[] | JSX.Element}> = (props: {
	children: JSX.Element[] | JSX.Element
}) => {
	return (
		<div className="form-buttons-other flex-row justify-between">
			{React.Children.count(props.children) > 1 
				? React.Children.map(props.children, (child:JSX.Element) => {
					return child;
				})
				: props.children}
		</div>
	);
};
const CodeInput: React.FC<FormIntputsAttributes> = (props: FormIntputsAttributes) => {
	// state
	const [isValueValid, setValidValue] = useState("");
	// ref
	const InputValue= useRef<HTMLInputElement>(null);
	// life-cylce
	useEffect(() => {
		if(InputValue.current){
			const numValue = +InputValue.current.value || InputValue.current.valueAsNumber;
			if(numValue <= 9){
				return setValidValue("input-success");
			}else {
				return setValidValue("");
			}
		}
	});
	const [field, meta] = useField(props);
	return (
		<>
			<input className={`${errorInputHandler(meta)[0]} ${isValueValid} input-form input input-wrapper rounded-border input-number`} 
				{...field} 
				{...props} 
				placeholder="x" 
				type="number" 
				spellCheck="false" 
				max="9"
				min="0"
				ref={InputValue}
			/>
		</>
	);
};
export {FormInputs, OtherInputs, CodeInput};