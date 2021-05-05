import { InputHTMLAttributes } from 'react'
import { FaCheck } from 'react-icons/fa'

import { Container } from './styles'

interface RadioButtonProps extends InputHTMLAttributes<HTMLInputElement> {
	isSelected: boolean
}

export function RadioButton({ isSelected, ...rest }: RadioButtonProps) {

	return (
		<Container isSelected={isSelected}>
			<input
				type="radio"
				{...rest}
			/>
			<span>
				<FaCheck />
			</span>
		</Container>
	)
}