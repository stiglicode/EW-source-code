import { FieldMetaProps } from "formik";

const errorInputHandler = (err:FieldMetaProps<string>): string[] => {
	switch (err.touched && err.error) {
	// email validation
	case "email-invalid":
		return ["input-danger", "danger-100_color", "Invalid email address"];
	case "email-exist":
		return ["input-warning", "warning-100_color", "Email address already exist"];
	case "email-required":
		return ["input-danger", "danger-100_color", "Email is required!"];
	// password validation 
	case "short":
		return ["input-warning", "warning-100_color", "Password must be at least 6 characters!"];
	case "no-match":
		return ["input-warning"];
	case "password-required":
		return ["input-danger", "danger-100_color", "Password is required!"];
	// name validation 	
	case "name-required":
		return ["input-danger", "danger-100_color", "Name is required!"];
	// last name validation 	
	case "lname-required":
		return ["input-danger", "danger-100_color", "Last name is required!"];
	// code validation
	case "code-empty":
		return ["input-danger", "danger-100_color", "Code must be a number!"];
	case "code-incorrect":
		return ["input-danger", "danger-100_color", "Incorrect code!"];
	case "code-fillded":
		return ["input-success", "success-100_color", "Code is correct"];
	case "code-required":
		return ["input-danger", "danger-100_color", "Code is required!"];
	default:
		return ["input-primary"];
	}
};

export default errorInputHandler;
