export const capitalizarTexto = text => {
	return text
		?.split(' ')
		?.map(word => word.charAt(0).toUpperCase() + word.slice(1))
		?.join(' ');
};

export const copiarEnPortapapeles = (textToCopy, onSuccess, onError) => {
	navigator.clipboard
		.writeText(textToCopy)
		.then(() => {
			onSuccess?.();
		})
		.catch(() => {
			onError?.();
		});
};
