import React, { useState } from 'react'
import './index.scss'

const FormInputs = (props) => {
	const [focused, setFocused] = useState(false)
	const { label, errorMessage, onChange, id, ...inputProps } = props

	const handleFocus = (e) => {
		setFocused(true)
	}
	return (
		<div className='form-group'>
			<label>{label}</label>
			<input
				{...inputProps}
				onChange={onChange}
				onBlur={handleFocus}
				onFocus={() =>
					inputProps.name === 'confirmPassword' && setFocused(true)
				}
				focused={focused.toString()}
			/>
			<span>{errorMessage}</span>
		</div>
	)
}

export default FormInputs
