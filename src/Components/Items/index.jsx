/* eslint-disable react/prop-types */
import styled from 'styled-components';
import Item from '../Item';
import ImageFilter from '../ImageFilterAlternative';
import { Icone } from '../UI';
import { useEffect, useState } from 'react';

const StyledItems = styled.div`
	box-shadow: 4px 4px 20px 0px rgba(0, 0, 0, 0.1);
	border-radius: 10px;
	margin: 2px 0;
	display: flex;
	align-items: center;
	justify-content: space-around;
	padding: 10px;
	font-size: 12px;
`

export default function Items(props) {

	// necessary only for ImageFilterAlternative
	// - - - - - - -

	const [icone, setIcone] = useState('');

	useEffect(() => {
		async function getIcone() {
			setIcone(await ImageFilter(props.type))
		}
		getIcone()
	}, [props.type])

	// - - - - - - -

	return (
		<StyledItems>
			<Icone src={icone} alt={props.type}/>
			<Item {...props}/>
			<span>{props.date}</span>
		</StyledItems>
	)
}