import restaurante from '../assets/images/restaurante.svg';
import outros from '../assets/images/outros.svg';
import saude from '../assets/images/saude.svg';
import transporte from '../assets/images/transporte.svg';
import utilidades from '../assets/images/utilidades.svg';

export default (type) => {
	const Images = {
		Restaurante: restaurante,
		Utilidades: utilidades,
		Saude: saude,
		Transporte: transporte,
		default: outros,
	}
	return Images[type] || Images.default;
}