import React, { useState } from 'react'
import './index.scss'

const FormInputs = (props) => {
	const [isFocused, setIsFocused] = useState(false)
	const { label, errorMessage, handleChange, id, ...inputProps } = props

	const handleFocus = (e) => {
		setIsFocused(true)
	}
	return (
		<div className='form-group'>
			<label>{label}</label>
			<input
				{...inputProps}
				onChange={handleChange}
				onBlur={handleFocus}
				onFocus={() =>
					inputProps.name === 'confirmPassword' && setIsFocused(true)
				}
				isFocused={isFocused.toString()}
			/>
			<span>{errorMessage}</span>
		</div>
	)
}

export default FormInputs
