let bg
let player
let monster
let cursor
let monsters
let bullet
let bullets
let health = 5
let hp
let normal
let spread
let shootStatus = 1 // 0คือสถานะระหว่างยิงลูกพิเศษ 1ลูกธรรมดา 2ลูกกระจาย 3ลูกเร็ว
let fast
let monsterSpawn
let spreadCount = 0
let fastCount = 0
let fastbullets
let fires
let fastbullet
let enemyFire
let enemyBullet
let leftSpreadBullets
let middleSpreadBullets
let rightSpreadBullets
let item
let items
let cloudSpawn
let clouds
let cloud
let bigFires
let bigFire
let scoreText
let score = 0
let seaAndItemSpawn
let sea
let seas
let bush
let bushs
let randomBush
let fired = false
let checkAmount
let ever = 0
class GameScene extends Phaser.Scene {
    constructor(test) {
        super({
            key: 'GameScene'
        });

    }

    init(data) {
        this.name = data.Player_Name
        score = 0
        this.userId = data.userId
        this.verifyCode = data.verifyCode
        this.timeStart = data.timeStart
    }

    preload() {
        this.load.spritesheet('player', '../../images/player.png', {
            frameWidth: 410,
            frameHeight: 310
        })
        this.load.image('bg', '../../images/background.png')
        this.load.image('bullet', '../../images/Bullet.png')
        this.load.spritesheet('monster', '../../images/Botspritesheet.png', {
            frameWidth: 2232,
            frameHeight: 2232
        })
        this.load.spritesheet('hp', '../../images/HP.png', {
            frameWidth: 2510,
            frameHeight: 1510
        })
        this.load.spritesheet('fire', '../../images/fire.png', {
            frameWidth: 492,
            frameHeight: 703
        })
        this.load.image('cloud1', '../../images/Cloud1.png')
        this.load.image('cloud2', '../../images/Cloud2.png')
        this.load.image('cloud3', '../../images/Cloud3.png')
        this.load.image('cloud4', '../../images/Cloud4.png')
        this.load.image('cloud5', '../../images/Cloud5.png')
        this.load.image('bigFire', '../../images/bigfire.png')
        this.load.image('sea1', '../../images/Sea-1.png')
        this.load.image('sea2', '../../images/Sea-2.png')
        this.load.image('bush1', '../../images/Bush-1.png')
        this.load.image('bush2', '../../images/Bush-2.png')
        this.load.image('bush3', '../../images/Bush-3.png')
        this.load.image('separate', '../../images/Separate.png')
        this.load.image('rapid', '../../images/Rapid.png')
    }

    create() {
        bg = this.add.tileSprite(0, 0, 600, 900, 'bg').setOrigin(0, 0)
        player = this.physics.add.sprite(300, 850, 'player').setCollideWorldBounds(true).setDepth(10).setScale(0.4).setSize(310, 110).setOffset(60, 80)
        hp = this.physics.add.sprite(450, 50, 'hp').setScale(0.1).setDepth(10)
        var style = {
            font: '32px Arial',
            fill: '#FFFFFF'
        };
        scoreText = this.add.text(16, 16, "Score : 0", style).setDepth(10)

        cursor = this.input.keyboard.createCursorKeys()
        monsters = this.physics.add.group()
        bullets = this.physics.add.group()
        leftSpreadBullets = this.physics.add.group()
        middleSpreadBullets = this.physics.add.group()
        rightSpreadBullets = this.physics.add.group()
        fastbullets = this.physics.add.group()
        fires = this.physics.add.group()
        items = this.physics.add.group()
        clouds = this.physics.add.group()
        bigFires = this.physics.add.group()
        seas = this.physics.add.group()
        bushs = this.physics.add.group()


        if (bullets.getLength() > 0) {
            let bullet = bullets.getChildren()[0]
            if (bullet.y < - 50) {
                bullet.destroy(true)
            }
        }
        if (fastbullets.getLength() > 0) {
            let fast = fastbullets.getChildren()[0]
            if (fast.y < -50) {
                fast.destroy(true)
            }
        }
        if (leftSpreadBullets.getLength() > 0) {
            let left = leftSpreadBullets.getChildren()[0]
            if (left.y < -50) {
                left.destroy(true)
            }
        }
        if (middleSpreadBullets.getLength() > 0) {
            let mid = middleSpreadBullets.getChildren()[0]
            if (mid.y < -50) {
                mid.destroy(true)
            }
        }
        if (rightSpreadBullets.getLength() > 0) {
            let right = rightSpreadBullets.getChildren()[0]
            if (right.y < -50) {
                right.destroy(true)
            }
        }
        if (items.getLength() > 0) {
            let item = items.getChildren()[0]
            if (item.y > this.game.config.height + 50) {
                item.destroy(true)
            }
        }
        if (seas.getLength() > 0) {
            let sea = seas.getChildren()[0]
            if (sea.y > this.game.config.height + 700) {
                sea.destroy(true)
            }
        }
        if (monsters.getLength() > 0) {
            let monster = monsters.getChildren()[0]
            if (monster.y > this.game.config.height + 50) {
                monster.destroy(true)
            }
        }
        if (bigFires.getLength() > 0) {
            let bigFire = bigFires.getChildren()[0]
            if (bigFire.y > this.game.config.height + 100) {
                bigFire.destroy(true)
            }
        }
        if (bushs.getLength() > 0) {
            let bush = bushs.getChildren()[0]
            if (bush.y > this.game.config.height + 100) {
                bush.destroy(true)
            }
        }



        if (health <= 0) {
            this.gameOver()
        }

        if (score < -500) {
            this.gameOver()
        }

        if (monsterSpawn.delay < 500) {
            monsterSpawn.delay = 500
        }
        if (enemyFire.delay < 800) {
            enemyFire.delay = 800
        }
        if (randomBush.delay < 700) {
            randomBush.delay = 700
        }



        if (cursor.left.isDown) {
            player.setVelocityX(-400)
        } else if (cursor.right.isDown) {
            player.setVelocityX(400)
        } else {
            player.setVelocityX(0)
        }


        if (shootStatus == 1) {
            fast.paused = true
            spread.paused = true
            normal.paused = false
        }

        if (shootStatus == 2) {
            shootStatus = 0
            spreadCount = 0
            normal.paused = true
            fast.paused = true
            spread.paused = false
        }

        if (shootStatus == 3) {
            shootStatus = 0
            fastCount = 0
            normal.paused = true
            spread.paused = true
            fast.paused = false
        }



    }



    gameOver() {
        this.scene.start('Restart', {
            Player_Name: this.name,
            Player_Score: score,
            userId : this.userId,
            verifyCode : this.verifyCode,
            timeStart : this.timeStart
        })
        console.log('Game Over')
        health = 5
    }

    kill(bullet, monster) {
        bullet.destroy(true)
        monster.destroy(true)
        score += 100;
        scoreText.setText('Score: ' + score);
    }

killBigFire(bullet, bigFire) {
        bullet.destroy(true)
        var health = bigFire.getData('health')
        if (health == 1) {
            bigFire.destroy(true)
            fired = false
            score += 300;
            scoreText.setText('Score: ' + score);
            if (Phaser.Math.Between(1, 3) == 1) { //random item spawn 
                if (Phaser.Math.Between(1, 2) == 1) { //random item type
                    item = this.physics.add.image(bigFire.x, bigFire.y, 'separate').setDepth(2).setScale(0.2)
                    item.setData('type', 'spread')
                    items.add(item)
                    items.setVelocityY(100)
                } else {
                    item = this.physics.add.image(bigFire.x, bigFire.y, 'rapid').setDepth(2).setScale(0.2)
                    item.setData('type', 'fast')
                    items.add(item)
                    items.setVelocityY(100)
                }
            }
        } else if (health == 3) {
            bigFire.setData('health', '2')
        } else {
            bigFire.setData('health', '1')
        }
    }

    monsterHit(player, monster) {
        monster.destroy(true)
        hp.setFrame(5)
        health = 0
    }


    bigFireHit(player, bigFire) {
        bigFire.destroy(true)
        fired = false
        hp.setFrame(5)
        health = 0
    }

    firesHit(player, fire) {
        switch (health) {
            case 5:
                hp.setFrame(1)
                break;
            case 4:
                hp.setFrame(2)
                break;
            case 3:
                hp.setFrame(3)
                break;
            case 2:
                hp.setFrame(4)
                break;
            case 1:
                hp.setFrame(5)
                break;
            case 0:
                break;
        }
        health -= 1
        fire.destroy(true)
    }

    getItem(player, item) {
        var which = item.getData('type')
        item.destroy(true)
        switch (which) {
            case 'spread':
                normal.paused = true
                fast.paused = true
                spread.paused = true
                shootStatus = 2
                break;
            case 'fast':
                normal.paused = true
                fast.paused = true
                spread.paused = true
                shootStatus = 3;
                break;
        }
    }



    checkSeaAndBush(bush, sea) {
        bush.destroy(true)
    }
}







export default GameScene;