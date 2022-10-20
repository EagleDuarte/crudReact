import FormWrapper from '../../shared/components/form-wrapper/FormWrapper'
import InputForm from '../../shared/components/input-form/InputForm'

function Login(): JSX.Element {
	return(
		<>
		<FormWrapper>
			<InputForm type="text" placeholder="Digite seu e-mail"/>
			<InputForm type="password" placeholder="Digite sua senha"/>
		</FormWrapper>
		</>
	)
}

export default Login
