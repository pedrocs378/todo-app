import { InputHTMLAttributes } from 'react'
import { FaCheck } from 'react-icons/fa'

import { Container } from './styles'

interface RadioButtonProps extends InputHTMLAttributes<HTMLInputElement> {
	isSelected: boolean
	id?: string | undefined
}

export function RadioButton({ isSelected, id, ...rest }: RadioButtonProps) {

	return (
		<Container htmlFor={id} isSelected={isSelected}>
			<input
				id={id}
				type="radio"
				{...rest}
			/>
			<FaCheck />
		</Container>
	)
}