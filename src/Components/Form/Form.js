import React, { useState } from 'react'
import './index.scss'
import inputs from '../../db/data'
import FormInputs from '../FormInputs/FormInputs'

const Form = () => {
	const [values, setValues] = useState({
		username: '',
		email: '',
		birthday: '',
		password: '',
		confirmPassword: '',
	})
	const handleChange = (e) => {
		setValues({ ...values, [e.target.name]: e.target.value })
	}

	const handleSubmit = (e) => {
		e.preventDefault()
	}
	return (
		<>
			<form className='form' onSubmit={handleSubmit}>
				{inputs.map((input) => (
					<FormInputs
						key={input.id}
						{...input}
						value={values[input.name]}
						onChange={handleChange}
					/>
				))}
				<button className='btn'>Submit</button>
			</form>
		</>
	)
}

export default Form
