// Definindo o canvas e contexto
const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

// Definir o tamanho do canvas
canvas.width = 800;
canvas.height = 600;

// Carregar imagem
const backgroundImage = new Image();

// Definir o tamanho do cenário
const levelWidth = 3000;
const levelHeight = 3000;

// Variáveis de jogo
let cameraX = 0; // Posição da câmera no eixo X
let cameraY = 0; // Posição da câmera no eixo Y
const gravity = 0.5; // Gravidade para o personagem

// Definindo o personagem
const player = {
    x: 100, // Posição inicial no eixo X
    y: -500, //500, // Posição inicial no eixo Y
    width: 50,
    height: 50,
    speed: 5,
    dx: 0, // Velocidade horizontal
    dy: 0, // Velocidade vertical
    jumping: false,
    life: 100, // Vida do jogador
	vivo: true
};

