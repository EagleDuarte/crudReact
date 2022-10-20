import InputFormStyle from "./InputFormStyle";

interface InputFormProps {
	type: string;
	placeholder: string;
}

function InputForm(props: InputFormProps): JSX.Element {
	return <InputFormStyle type={props.type} placeholder={props.placeholder} />
}

export default InputForm;