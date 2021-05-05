import { InputHTMLAttributes } from 'react'
import { FaCheck } from 'react-icons/fa'

import { Container } from './styles'

interface RadioButtonProps extends InputHTMLAttributes<HTMLInputElement> {
	checked: boolean
}

export function RadioButton({ checked, ...rest }: RadioButtonProps) {

	return (
		<Container isSelected={checked}>
			<input
				type="radio"
				checked={checked}
				{...rest}
			/>
			<span>
				<FaCheck />
			</span>
		</Container>
	)
}