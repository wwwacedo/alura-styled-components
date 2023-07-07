// import styled from 'styled-components';
import { Box, Botao } from '../../Components/UI'
import Items from '../../Components/Items';
import { extratoLista } from '../../../info.js';

const Extrato = () => {
	return (
		<Box>
			{

				extratoLista.updates.map(({id, type, from, value, date}) => {
					return (
			
						<Items key={id} type={type} from={from} value={value} date={date}/>
		
					)
				})

			}
			<Botao>Ver Mais</Botao>
		</Box>
	)
}

export default Extrato;