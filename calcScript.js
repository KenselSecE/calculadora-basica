document.getElementById('calculadora-form').addEventListener('submit', function(event) {
	event.preventDefault()

	const num1 = parseFloat(document.getElementById('numero1').value);
	const num2 = parseFloat(document.getElementById('numero2').value);
	const resultadoDiv = document.getElementById('resultado');

	if (!isNaN(num1) && !isNaN(num2)) {
		const resultado = num1 + num2;
		resultadoDiv.textContent = `Resultado: ${resultado}`;
		resultadoDiv.classList.remove('error');
	}
	else {
		resultadoDiv.textContent = `Por favor ingrese numeros validos`;
		resultadoDiv.classList.add('error');
	}
});