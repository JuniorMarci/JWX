backgroundImage01 = './TESTE.png' //'./3.png';

// Definindo as plataformas no cenário maior
const platforms01 = [
	{ x:0, y: -2500, width: levelWidth, height:levelHeight, cor:"papelDeParede"},
    { x: 1, y: canvas.height - 1, width: levelWidth, height: 2, cor:"black" }, // Chão
	{ x: 300, y: canvas.height - 100, width: levelWidth, height: 100 , cor:"menuiniciar" }, // Menu
	{ x: 0, y: canvas.height - 100, width: 300, height: 100 , cor:"botaoiniciar" },
    { x: 150, y: canvas.height - 200, width: 200, height: 20, cor:'green' },
    { x: 100, y: canvas.height - 300, width: 200, height: 20, cor:'green' },
    { x: 399, y: canvas.height - 400, width: 200, height: 20, cor:'green' },  // Exemplo de plataforma no meio do cenário
    { x: 2500, y: canvas.height - 150, width: 200, height: 20, cor:'green' }   // Outra plataforma mais à direita
];

const icones01 = [
	{ x: 100, y: canvas.height - 550, width: 100, height: 100, img:'meusdocumentos.png', aFase: 'fase01' },
	{ x: 100, y: canvas.height - 750, width: 100, height: 100, img:'meuComputador.png', aFase: 'fase02' },
	{ x: 100, y: canvas.height - 950, width: 100, height: 100, img:'JabelaX.png', aFase: 'fase03' },
	{ x: 100, y: canvas.height - 1150, width: 100, height: 100, img:'Jorx.png', aFase: 'fase04' },
	{ x: 250, y: canvas.height - 1150, width: 100, height: 100, img:'JouwerXont.png', aFase: 'fase04' },
];

icones01.forEach ( icone =>
icones01.push(
		{ x: icone.x, y: icone.y + icone.height, width: icone.width, height: 2, img:'base', aFase: icone.aFase }
		))

// Definindo inimigos
const enemies01 = [
    { x: 600, y: canvas.height - 300, width: 50, height: 50, type: 'damage', grav:true },  // Inimigo que causa dano
    { x: 1200, y: canvas.height - 300, width: 50, height: 50, type: 'kill', grav:true },   // Inimigo que morre ao ser saltado
    { x: 170, y: canvas.height - 500, width: 50, height: 50, type: 'kill', grav:true }    // Inimigo que morre ao ser saltado
];

fase01 = [platforms01,enemies01,icones01,backgroundImage01]
