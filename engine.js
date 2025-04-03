// Definindo o canvas e contexto
const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

// Definir o tamanho do canvas
canvas.width = 800;
canvas.height = 600;

// Definir o tamanho do cenário
const levelWidth = 3000;
const levelHeight = 1000;

// Variáveis de jogo
let cameraX = 0; // Posição da câmera no eixo X
let cameraY = 0; // Posição da câmera no eixo Y
const gravity = 0.5; // Gravidade para o personagem

// Definindo o personagem
const player = {
    x: 100, // Posição inicial no eixo X
    y: 500, // Posição inicial no eixo Y
    width: 50,
    height: 50,
    speed: 5,
    dx: 0, // Velocidade horizontal
    dy: 0, // Velocidade vertical
    jumping: false,
    life: 100, // Vida do jogador
	vivo: true
};

// Definindo as plataformas no cenário maior
const platforms = [
    { x: 1, y: canvas.height - 1, width: levelWidth, height: 2, cor:"black" }, // Chão
	{ x: 300, y: canvas.height - 100, width: levelWidth, height: 100 , cor:"menuiniciar" }, // Menu
	{ x: 0, y: canvas.height - 100, width: 300, height: 100 , cor:"botaoiniciar" },
    { x: 150, y: canvas.height - 200, width: 200, height: 20, cor:'green' },
    { x: 100, y: canvas.height - 300, width: 200, height: 20, cor:'green' },
    { x: 399, y: canvas.height - 400, width: 200, height: 20, cor:'green' },  // Exemplo de plataforma no meio do cenário
    { x: 2500, y: canvas.height - 150, width: 200, height: 20, cor:'green' }   // Outra plataforma mais à direita
];

// Definindo inimigos
const enemies = [
    { x: 600, y: canvas.height - 300, width: 50, height: 50, type: 'damage', grav:true },  // Inimigo que causa dano
    { x: 1200, y: canvas.height - 300, width: 50, height: 50, type: 'kill', grav:true },   // Inimigo que morre ao ser saltado
    { x: 170, y: canvas.height - 500, width: 50, height: 50, type: 'kill', grav:true }    // Inimigo que morre ao ser saltado
];

// Função para desenhar o personagem
function drawPlayer() {
    ctx.fillStyle = 'white';
    ctx.fillRect(player.x - cameraX, player.y - cameraY, player.width, player.height);
}

// Função para desenhar as plataformas
function drawPlatforms() {
    platforms.forEach(platform => { 
	
	if (platform.cor == 'menuiniciar') {
		
		
    //a: A coordenada x do ponto inicial do gradiente.
    //b: A coordenada y do ponto inicial do gradiente.
    //c: A coordenada x do ponto final do gradiente.
    //d: A coordenada y do ponto final do gradiente.
    //ctx.createLinearGradient(a, b, c, d)
		
				
	//var gradient = ctx.createLinearGradient(platform.x, (platform.y - cameraY), platform.x, (platform.y + cameraY));
	pcamLev = cameraY/levelHeight;
	pplatLev = platform.y/levelHeight;
	ypcam = (pplatLev - pcamLev)*levelHeight;
	var gradient = ctx.createLinearGradient(0, ypcam, 0, ypcam+platform.height);
	
    // Adiciona cores ao gradiente
    gradient.addColorStop(0, "#4590F5");    // Cor no início do gradiente
	gradient.addColorStop(0.2, "#2255D4");
	gradient.addColorStop(0.9, "#2461DE");
    gradient.addColorStop(1, "#1045AF");  // Cor no fim do gradiente


    // Define o estilo de preenchimento como o gradiente
    ctx.fillStyle = gradient;
		
		
	}
	
	if (platform.cor == 'botaoiniciar') {
		
	pcamLev = cameraY/levelHeight;
	pplatLev = platform.y/levelHeight;
	ypcam = (pplatLev - pcamLev)*levelHeight;
	var gradient = ctx.createLinearGradient(0, ypcam, 0, ypcam+platform.height);
	
    // Adiciona cores ao gradiente
    gradient.addColorStop(0, "#4AC27A");    // Cor no início do gradiente
	gradient.addColorStop(0.2, "#009942");
	gradient.addColorStop(0.9, "#019644");
    gradient.addColorStop(1, "#2C7130");  // Cor no fim do gradiente

    // Define o estilo de preenchimento como o gradiente
    ctx.fillStyle = gradient;
		
			
		
	}
	
	else {ctx.fillStyle = platform.cor}
	
    ctx.fillRect(platform.x - cameraX, platform.y - cameraY, platform.width, platform.height);
    });
}

// Função para desenhar os inimigos
function drawEnemies() {
    enemies.forEach(enemy => {
        ctx.fillStyle = enemy.type === 'damage' ? '#CDC9DA' : 'pink';
        ctx.fillRect(enemy.x - cameraX, enemy.y - cameraY, enemy.width, enemy.height);
    });
}

// Função para atualizar a física do personagem
function updatePlayer() {
    // Atualizando a posição do personagem
    player.x += player.dx;
    player.y += player.dy;

    // Gravidade
    if (player.y + player.height < canvas.height) {
        player.dy += gravity; // Aplica a gravidade
    } else {
        player.dy = 0;
        player.jumping = false;
        player.y = canvas.height - player.height; // Para ele não cair fora da tela
    }
	
	

	// Gravidade para inimigos

    enemies.forEach(enemy => {
  
	  if (enemy.y + enemy.height < canvas.height) {		  
    

      platforms.forEach(c => { 
	  
	  console.log(enemy,c);	
	  
	  } )

	enemy.y += gravity*2;
	
	} else {
        enemy.y = canvas.height - enemy.height; // Para ele não cair fora da tela
    }
    })	

	
	
	
	
	
	


    // Movimentação lateral
    if (player.x < 0) player.x = 0;
    if (player.x + player.width > levelWidth) player.x = levelWidth - player.width;
}

// Função para atualizar a posição da câmera
function updateCamera() {
    // A câmera segue o jogador, mas dentro do limite do cenário
    cameraX = player.x - canvas.width / 2 + player.width / 2;
    cameraY = player.y - canvas.height / 2 + player.height / 2;

    // Limitar a câmera para não sair do cenário
    if (cameraX < 0) cameraX = 0; // Câmera não pode sair para a esquerda
    if (cameraY < 0) cameraY = 0; // Câmera não pode sair para cima
    if (cameraX > levelWidth - canvas.width) cameraX = levelWidth - canvas.width; // Limite à direita
    if (cameraY > levelHeight - canvas.height) cameraY = levelHeight - canvas.height; // Limite para baixo
}

// Função para verificar colisões com plataformas
function checkCollisions() {
    platforms.forEach(platform => {
        if (
            player.x + player.width > platform.x &&
            player.x < platform.x + platform.width &&
            player.y + player.height <= platform.y &&
            player.y + player.height + player.dy >= platform.y
        ) {
            player.y = platform.y - player.height;
            player.dy = 0;
            player.jumping = false;
        }
	
	
	});
}

// Função para verificar colisões com inimigos
function checkEnemyCollisions() {
    enemies.forEach((enemy, index) => {
        // Inimigo que causa dano (tipo 'damage')
        if (
            player.x + player.width > enemy.x &&
            player.x < enemy.x + enemy.width &&
            player.y + player.height > enemy.y && 
            player.y < enemy.y + enemy.height
        ) {
            if (enemy.type === 'damage') {
                player.life--; // Reduz a vida do jogador
                //console.log('Vida do jogador:', player.life);
				
				player.x += player.dx + 10
				
				if(player.x < enemy.x) { player.x = enemy.x - enemy.height; }
				if(player.x > enemy.x) { player.x = enemy.x + enemy.height; }

                // Resetando a posição do jogador após o dano
                //player.x = 100; // Volta para o início
                //player.y = 500;
            }
			


            // Inimigo que morre quando o jogador pula sobre ele (tipo 'kill')
            if (enemy.type === 'kill' && (player.y+2) <= enemy.y) {
                // "Matar" o inimigo
                enemies.splice(index, 1); // Remove o inimigo da lista
                //console.log('Inimigo morto!');
            }
			
			
			else {
				
				player.life--; // Reduz a vida do jogador
                //console.log('Vida do jogador:', player.life);
				
				player.x += player.dx + 10
				if(player.x < enemy.x) { player.x = enemy.x - enemy.height; }
				if(player.x > enemy.x) { player.x = enemy.x + enemy.height; }

			}
			
			
			
			
        }
    });
}


function drawVida(vida) {
	
	


ctx.font = "20px Georgia";
ctx.font = "30px Verdana";

// Create gradient
var gradient = ctx.createLinearGradient(0, 0, canvas.width, 0);
gradient.addColorStop("0", "red");
gradient.addColorStop("0.3", "red");
gradient.addColorStop("1.0", "blue");

// Fill with gradient
ctx.fillStyle = gradient;
ctx.fillText(vida, 10, 90);


}



function drawBVida(vida) {
    // Limpa o canvas antes de desenhar
    //ctx.clearRect(0, 0, canvas.width, canvas.height);
	
	if(vida<=0){vida = 0; player.vivo=false;}

    // Define a largura e altura da barra de vida
    var barWidth = 200; // Largura da barra
    var barHeight = 30; // Altura da barra

    // Calcula a largura da barra com base na vida
    var vidaWidth = (vida / 100) * barWidth;

    // Desenha a barra de fundo (opcional)
    ctx.fillStyle = "lightgray"; // Cor de fundo da barra
    ctx.fillRect(10, 20, barWidth, barHeight);

    // Cria um gradiente para a barra de vida
    var gradient = ctx.createLinearGradient(10, 50, 10 + vidaWidth, 50);
    gradient.addColorStop(0, "blue");
    gradient.addColorStop(0.25, "red");
	gradient.addColorStop(0.5, "red");
    gradient.addColorStop(1.0, "red");

    // Preenche a barra de vida com o gradiente
    ctx.fillStyle = gradient;
    ctx.fillRect(10, 20, vidaWidth, barHeight);

    // Define a fonte e exibe o percentual
    ctx.font = "20px Verdana";
    ctx.fillStyle = "black"; // Cor do texto
    ctx.fillText(vida + "%", 30 + vidaWidth - 15, 42); // Exibe o percentual na barra
}





// Variáveis para controle
let rightPressed = false;
let leftPressed = false;
let upPressed = false;

// Detectando teclas pressionadas
document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight') rightPressed = true;
    if (e.key === 'ArrowLeft') leftPressed = true;
    if (((e.key === 'ArrowUp') || (e.key === ' ')) && (!player.jumping)) {
        player.dy = -10; // Força para pular
        player.jumping = true;
    }
});

document.addEventListener('keyup', (e) => {
    if (e.key === 'ArrowRight') rightPressed = false;
    if (e.key === 'ArrowLeft') leftPressed = false;
});

// Atualizar movimento do personagem
function updateMovement() {
    if (rightPressed) player.dx = player.speed;
    else if (leftPressed) player.dx = -player.speed;
    else player.dx = 0;
}

// Função principal do jogo
function gameLoop() {
    // Limpar a tela
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Atualizar jogador e câmera
    updateMovement();
    if(player.vivo) {updatePlayer();}
    checkCollisions();
    checkEnemyCollisions();
    updateCamera();

    // Desenhar elementos
    drawPlatforms();
    if(player.vivo) {drawPlayer();}
    drawEnemies();
	drawBVida(player['life']);

    // Repetir o loop
    requestAnimationFrame(gameLoop);
}

// Iniciar o jogo
gameLoop();