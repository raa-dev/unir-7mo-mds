// variables
const calculadora = document.getElementById('calculadora')
const resultado = document.getElementById('resultado')

// eventos
calculadora.addEventListener('click', añadirNumeros)

// Operaciones
let operaciones = []

var tipo = '';
var base;
var exponente;
var valResultado;

// añadirNumeros
function añadirNumeros(e) {


	if (e.target.getAttribute('type') === 'button') {
		if (e.target.className != 'operacion') {
			resultado.value += e.target.innerText
		}
		if (e.target.id === 'sumar') {
			tipo = 'suma';

			operaciones.push(resultado.value)
			operaciones.push('+')
			calculadora.reset()			
		}

		if (e.target.id === 'igual') {


			if (tipo != 'exponencial') {
				operaciones.push(resultado.value)
				calculadora.reset()

				const resultadoOperacion = eval(operaciones.join(''))
				resultado.value = resultadoOperacion
				operaciones = []
			}
			else
			{
				
				exponente = resultado.value;

				let valResultado = 1;

				for (let i = 0; i < exponente; i++) {
					valResultado *= base;
				}


				resultado.value = valResultado;
				operaciones = []
      }

		}
		if (e.target.id === 'restar') {
			tipo = 'resta';

			operaciones.push(resultado.value)
			operaciones.push('-')
			calculadora.reset()
			
		}
		if (e.target.id === 'multiplicar') {
			tipo = 'multiplicar';

			operaciones.push(resultado.value)
			operaciones.push('*')
			calculadora.reset()
		}
		if (e.target.id === 'dividir') {
			tipo = 'dividir';

			operaciones.push(resultado.value)
			operaciones.push('/')
			calculadora.reset()
		}

		if (e.target.id === 'raizcuadrada') {
			tipo = 'raizcuadrada';

			var number = 0;

			number = resultado.value;

			if (number < 0) return NaN;

			let guess = number / 2;
			let epsilon = 0.01; // Precisión deseada

			while (Math.abs(guess * guess - number) >= epsilon) {
				guess = (guess + number / guess) / 2;
			}

			resultado.value = guess
			operaciones = []
		}

		if (e.target.id === 'exponencial') {
			tipo = 'exponencial';

			operaciones.push(resultado.value)
			base = resultado.value;

			operaciones.push('')
			calculadora.reset()
		}

		if (e.target.id === 'clear') {
			operaciones = []
			calculadora.reset()
		}
	}
}