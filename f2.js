backgroundImage02 = './4.png' //'./3.png';

// Definindo as plataformas no cenário maior
const platforms02 = [
	{ x:0, y: -2500, width: levelWidth, height:levelHeight, cor:"papelDeParede"},
    { x: 1, y: canvas.height - 1, width: levelWidth, height: 2, cor:"black" }, // Chão
	{ x: 300, y: canvas.height - 100, width: levelWidth, height: 100 , cor:"menuiniciar" }, // Menu
	{ x: 0, y: canvas.height - 50, width: 300, height: 100 , cor:"botaoiniciar" },
    { x: 150, y: canvas.height - 100, width: 200, height: 20, cor:'green' },
    { x: 100, y: canvas.height - 200, width: 200, height: 20, cor:'green' },
    { x: 399, y: canvas.height - 100, width: 200, height: 20, cor:'green' },  // Exemplo de plataforma no meio do cenário
    { x: 2500, y: canvas.height - 0, width: 200, height: 20, cor:'green' }   // Outra plataforma mais à direita
];

const icones02 = [
	{ x: 100, y: canvas.height - 350, width: 100, height: 100, img:'meuComputador.png', aFase: 'fase01' },
	{ x: 100, y: canvas.height - 550, width: 100, height: 100, img:'meuComputador.png', aFase: 'fase02' },
	{ x: 100, y: canvas.height - 750, width: 100, height: 100, img:'meuComputador.png', aFase: 'fase03' },
	{ x: 100, y: canvas.height - 1050, width: 100, height: 100, img:'meuComputador.png', aFase: 'fase04' },
];

icones02.forEach ( icone =>
icones02.push(
		{ x: icone.x, y: icone.y + icone.height, width: icone.width, height: 2, img:'base', aFase: icone.aFase }
		))

// Definindo inimigos
const enemies02 = [
    { x: 400, y: canvas.height - 100, width: 50, height: 50, type: 'damage', grav:true },  // Inimigo que causa dano
    { x: 1000, y: canvas.height - 100, width: 50, height: 50, type: 'kill', grav:true },   // Inimigo que morre ao ser saltado
    { x: 1, y: canvas.height - 300, width: 50, height: 500, type: 'barra', grav:true }    // Inimigo que morre ao ser saltado
];

fase02 = [platforms02,enemies02,icones02,backgroundImage02]
