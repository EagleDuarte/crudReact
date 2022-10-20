import FormWrapperStyle from './FormWrapperStyle';

interface FormWrapperProps {
	children: JSX.Element | JSX.Element[]
}

function FormWrapper(props: FormWrapperProps): JSX.Element {
	return (
		<FormWrapperStyle>
			 {props.children}
		</ FormWrapperStyle>
	);
};

export default FormWrapper
