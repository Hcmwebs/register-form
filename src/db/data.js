

 const inputs = [
	{
		id: 1,
		name: 'username',
		type: 'text',
		placeHolder: 'Username',
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
		placeHolder: 'Email',
		errorMessage: 'It should be a valid email address!',
		label: 'Email',
		required: true,
	},
	{
		id: 3,
		name: 'birthday',
		type: 'date',
		placeHolder: 'Birthday',
		label: 'Birthday',
	},
	{
		id: 4,
		name: 'password',
		type: 'password',
		placeHolder: 'Password',
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
		placeHolder: 'Confirm Password',
		errorMessage: 'Password do not match!',
		label: 'Confirm Password',
    pattern: '',
		required: true,
	},
]

export default inputs
