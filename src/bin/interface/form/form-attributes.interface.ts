import { OptionalObjectSchema } from "yup/lib/object";
import { FormVal } from "../../../bin/interface/form/values.interface";
interface FormAttributes{
    title: {
        light: string,
        bold: string
    },
    // eslint-disable-next-line
    validSchema: OptionalObjectSchema<any>,
    initValues: {
        [key: string]: string | number | boolean | FormVal
    },
    submitHandler: (value: FormVal) => void,
    children: JSX.Element[],
    buttonTitle: string
}
interface FormIntputsAttributes {
    id: string,
	type?: string,
	label?: string,
	name: string
}
export type {FormAttributes, FormIntputsAttributes};