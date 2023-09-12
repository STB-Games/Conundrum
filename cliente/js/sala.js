export default class sala extends Phaser.Scene {
    constructor () {
        super('sala')
    }

    preload () {
        this.load.spritesheet('fundopreto', '../assets/fundopreto.png', {
            frameWidth: 800,
            frameHeight: 450,
        })

    }

    create () {

        this.imagem = this.add.image(225, 400, 'fundo-preto')
        this.mensagem = this.add.text(85, 100, 'Escolha uma sala para entrar:', {
            fontFamily: 'monospace',
            font: '16px Courier',
            fill: '#cccccc'
        })
        this.salas = [
            {
                numero: '0',
                x: 75,
                y: 150,
                botao: undefined
            },
            {
                numero: '1',
                x: 75,
                y: 200,
                botao: undefined
            },
            {
                numero: '2',
                x: 75,
                y: 250,
                botao: undefined
            },
            {
                numero: '3',
                x: 75,
                y: 300,
                botao: undefined
            },
            {
                numero: '4',
                x: 75,
                y: 350,
                botao: undefined
            },
            {
                numero: '5',
                x: 300,
                y: 150,
                botao: undefined
            },
            {
                numero: '6',
                x: 300,
                y: 200,
                botao: undefined
            },
            {
                numero: '7',
                x: 300,
                y: 250,
                botao: undefined
            },
            {
                numero: '8',
                x: 300,
                y: 300,
                botao: undefined
            },
            {
                numero: '9',
                x: 300,
                y: 350,
                botao: undefined
            }
        ]

        this.salas.forEach((item) => {
            item.botao = this.add
                .text(item.x, item.y, '[Sala ' + item.numero + ']', {
                    fontFamily: 'monospace',
                    font: '16px Courier',
                    fill: '#cccccc'
                })
                .setInteractive()
                .on('pointerdown', () => {
                    this.salas.forEach((item) => {
                        item.botao.destroy()
                        this.game.scene.stop('sala')
                        this.game.scene.start('personagem')
                    })
                })
        })
    }
}
