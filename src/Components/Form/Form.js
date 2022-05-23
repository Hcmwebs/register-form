import React, { useState } from 'react'
import './index.scss'
import FormInputs from '../FormInputs/FormInputs'

const Form = () => {
	const [values, setValues] = useState({
		username: '',
		email: '',
		birthday: '',
		password: '',
		confirmPassword: '',
	})

	const inputs = [
		{
			id: 1,
			name: 'username',
			type: 'text',
			placeholder: 'Username',
			errorMessage:
				'Username should be 3-16 characters and should not include any special characters!',
			label: 'Username',
			pattern: '^[A-Za-z0-9]{3,16}$',
			required: true,
		},
		{
			id: 2,
			name: 'email',
			type: 'email',
			placeholder: 'Email',
			errorMessage: 'It should be a valid email address!',
			label: 'Email',
			required: true,
		},
		{
			id: 3,
			name: 'birthday',
			type: 'date',
			placeholder: 'Birthday',
			label: 'Birthday',
		},
		{
			id: 4,
			name: 'password',
			type: 'password',
			placeholder: 'Password',
			errorMessage:
				'Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!',
			label: 'Password',
			pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
			required: true,
		},
		{
			id: 5,
			name: 'confirmPassword',
			type: 'password',
			placeholder: 'Confirm Password',
			errorMessage: 'Password do not match!',
			label: 'Confirm Password',
			pattern: values.password,
			required: true,
		},
	]

	const handleChange = (e) => {
		setValues({ ...values, [e.target.name]: e.target.value })
	}

	const handleSubmit = (e) => {
		e.preventDefault()
	}
	return (
		<>
			<form className='form' onSubmit={handleSubmit}>
				<h1>Register</h1>
				{inputs.map((input) => (
					<FormInputs
						key={input.id}
						{...input}
						value={values[input.name]}
						handleChange={handleChange}
					/>
				))}
				<button className='btn'>Submit</button>
			</form>
		</>
	)
}

export default Form
