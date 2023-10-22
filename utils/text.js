export const capitalizarTexto = text => {
	return text
		?.split(' ')
		?.map(word => word.charAt(0).toUpperCase() + word.slice(1))
		?.join(' ');
};

export const copiarEnPortapapeles = textToCopy => {
	navigator.clipboard
		.writeText(textToCopy)
		.then(() => {
			alert('Texto copiado al portapapeles');
		})
		.catch(error => {
			console.error('Error al copiar al portapapeles: ', error);
		});
};
