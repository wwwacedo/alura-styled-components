import imageDefault from '../assets/images/outros.svg';

const images = { }

export default async (type) => {
	
	const imageName = type.toLowerCase();

	if(!images.imageName) {
		const image = await import(`../assets/images/${imageName}.svg`);
		images[imageName] = image;
	} 

	return images[imageName].default || imageDefault;
}

