(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["app"] = factory();
	else
		root["app"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "./dev/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/phaser/src/phaser.js":
/*!*******************************************!*\
  !*** ./node_modules/phaser/src/phaser.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/smurf/Documents/GitHub/fame/node_modules/phaser/src/phaser.js'");

/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! phaser */ "./node_modules/phaser/src/phaser.js");
/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(phaser__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _scenes_GameScene__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scenes/GameScene */ "./src/scenes/GameScene.js");
/* harmony import */ var _scenes_MainMenu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scenes/MainMenu */ "./src/scenes/MainMenu.js");
/* harmony import */ var _scenes_Restart__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./scenes/Restart */ "./src/scenes/Restart.js");




var config = {
  // For more settings see <https://github.com/photonstorm/phaser/blob/master/src/boot/Config.js>
  type: Phaser.WEBGL,
  pixelArt: true,
  roundPixels: true,
  parent: 'content',
  width: 600,
  height: 900,
  physics: {
    "default": 'arcade',
    arcade: {
      debug: false,
      gravity: {
        y: 0
      }
    }
  },
  scene: [_scenes_MainMenu__WEBPACK_IMPORTED_MODULE_2__["default"], _scenes_GameScene__WEBPACK_IMPORTED_MODULE_1__["default"], _scenes_Restart__WEBPACK_IMPORTED_MODULE_3__["default"]]
};
var game = new Phaser.Game(config);

/***/ }),

/***/ "./src/scenes/GameScene.js":
/*!*********************************!*\
  !*** ./src/scenes/GameScene.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var bg;
var player;
var monster;
var cursor;
var monsters;
var bullet;
var bullets;
var health = 5;
var hp;
var normal;
var spread;
var shootStatus = 1; // 0คือสถานะระหว่างยิงลูกพิเศษ 1ลูกธรรมดา 2ลูกกระจาย 3ลูกเร็ว

var fast;
var monsterSpawn;
var spreadCount = 0;
var fastCount = 0;
var fastbullets;
var fires;
var fastbullet;
var enemyFire;
var enemyBullet;
var leftSpreadBullets;
var middleSpreadBullets;
var rightSpreadBullets;
var item;
var items;
var cloudSpawn;
var clouds;
var cloud;
var bigFires;
var bigFire;
var scoreText;
var score = 0;
var seaAndItemSpawn;
var sea;
var seas;
var bush;
var bushs;
var randomBush;
var fired = false;
var checkAmount;

var GameScene =
/*#__PURE__*/
function (_Phaser$Scene) {
  _inherits(GameScene, _Phaser$Scene);

  function GameScene(test) {
    _classCallCheck(this, GameScene);

    return _possibleConstructorReturn(this, _getPrototypeOf(GameScene).call(this, {
      key: 'GameScene'
    }));
  }

  _createClass(GameScene, [{
    key: "preload",
    value: function preload() {
      this.load.spritesheet('player', 'src/image/player.png', {
        frameWidth: 410,
        frameHeight: 310
      });
      this.load.image('bg', 'src/image/background.png');
      this.load.image('bullet', 'src/image/Bullet.png');
      this.load.spritesheet('monster', 'src/image/botSpriteSheet.png', {
        frameWidth: 2232,
        frameHeight: 2232
      });
      this.load.spritesheet('hp', 'src/image/HP.png', {
        frameWidth: 2510,
        frameHeight: 1510
      });
      this.load.spritesheet('fire', 'src/image/Fire.png', {
        frameWidth: 492,
        frameHeight: 703
      });
      this.load.image('cloud1', 'src/image/cloud1.png');
      this.load.image('cloud2', 'src/image/cloud2.png');
      this.load.image('cloud3', 'src/image/cloud3.png');
      this.load.image('cloud4', 'src/image/cloud4.png');
      this.load.image('cloud5', 'src/image/cloud5.png');
      this.load.image('bigFire', 'src/image/bigfire.png');
      this.load.image('sea1', 'src/image/Sea-1.png');
      this.load.image('sea2', 'src/image/Sea-2.png');
      this.load.image('bush1', 'src/image/bush-1.png');
      this.load.image('bush2', 'src/image/bush-2.png');
      this.load.image('bush3', 'src/image/bush-3.png');
      this.load.image('separate', 'src/image/Separate.png');
      this.load.image('rapid', 'src/image/Rapid.png');
    }
  }, {
    key: "create",
    value: function create() {
      var _this = this;

      bg = this.add.tileSprite(0, 0, 600, 900, 'bg').setOrigin(0, 0);
      player = this.physics.add.sprite(300, 850, 'player').setCollideWorldBounds(true).setDepth(10).setScale(0.4);
      hp = this.physics.add.sprite(450, 50, 'hp').setScale(0.1).setDepth(10);
      var style = {
        font: '32px Arial',
        fill: '#FFFFFF'
      };
      scoreText = this.add.text(16, 16, "Score : 0", style).setDepth(10);
      cursor = this.input.keyboard.createCursorKeys();
      monsters = this.physics.add.group();
      bullets = this.physics.add.group();
      leftSpreadBullets = this.physics.add.group();
      middleSpreadBullets = this.physics.add.group();
      rightSpreadBullets = this.physics.add.group();
      fastbullets = this.physics.add.group();
      fires = this.physics.add.group();
      items = this.physics.add.group();
      clouds = this.physics.add.group();
      bigFires = this.physics.add.group();
      seas = this.physics.add.group();
      bushs = this.physics.add.group();
      this.anims.create({
        key: 'playerAni',
        frames: this.anims.generateFrameNumbers('player', {
          start: 0,
          end: 7
        }),
        framerate: 10,
        repeat: -1
      });
      this.anims.create({
        key: 'fly',
        frames: this.anims.generateFrameNumbers('monster', {
          start: 0,
          end: 2
        }),
        framerate: 5,
        repeat: -1
      });
      this.anims.create({
        key: 'fireAni',
        frames: this.anims.generateFrameNumbers('fire', {
          start: 0,
          end: 2
        }),
        framerate: 10,
        repeat: -1
      });
      cloudSpawn = this.time.addEvent({
        delay: 4500,
        callback: function callback() {
          var whichCloud = 'cloud' + Phaser.Math.Between(1, 5);
          cloud = this.physics.add.sprite(Phaser.Math.Between(0, this.game.config.width), -100, whichCloud).setScale(0.2).setDepth(11);
          clouds.add(cloud);
          clouds.setVelocityY(150);
        },
        callbackScope: this,
        loop: true
      });
      monsterSpawn = this.time.addEvent({
        delay: 1500 - score * 0.7,
        callback: function callback() {
          monster = this.physics.add.sprite(Phaser.Math.Between(50, this.game.config.width - 50), -50, 'monster').setScale(0.05).setDepth(5);
          monsters.add(monster);
          monsters.setVelocityY(200);
        },
        callbackScope: this,
        loop: true
      });
      enemyFire = this.time.addEvent({
        delay: 2500 - score * 0.7,
        callback: function callback() {
          var position = monsters.getLength();

          for (var i = 0; i < position; i++) {
            if (!(monsters.getChildren()[i].y >= 650)) {
              enemyBullet = this.physics.add.sprite(monsters.getChildren()[i].x, monsters.getChildren()[i].y + 50, 'fire').setScale(0.08).setDepth(5);
              fires.add(enemyBullet);
            }
          }

          fires.setVelocityY(300);
        },
        callbackScope: this,
        loop: true,
        paused: false
      });
      normal = this.time.addEvent({
        delay: 1000,
        callback: function callback() {
          bullet = this.physics.add.image(player.x, player.y - 50, 'bullet').setScale(0.2).setDepth(5);
          bullets.add(bullet);
          bullets.setVelocityY(-200);
        },
        callbackScope: this,
        loop: true,
        paused: false
      });
      spreadCount = 0;
      spread = this.time.addEvent({
        delay: 1000,
        callback: function callback() {
          var bullet1 = this.physics.add.image(player.x - 30, player.y - 100, 'bullet').setScale(0.2).setDepth(5);
          var bullet2 = this.physics.add.image(player.x, player.y - 100, 'bullet').setScale(0.2).setDepth(5);
          var bullet3 = this.physics.add.image(player.x + 30, player.y - 100, 'bullet').setScale(0.2).setDepth(5);
          leftSpreadBullets.add(bullet1);
          middleSpreadBullets.add(bullet2);
          rightSpreadBullets.add(bullet3);
          leftSpreadBullets.setVelocity(-120, -150);
          middleSpreadBullets.setVelocity(0, -150);
          rightSpreadBullets.setVelocity(120, -150);
          spreadCount++;

          if (spreadCount >= 10) {
            shootStatus = 1;
            spread.paused = true;
          }
        },
        callbackScope: this,
        paused: true,
        loop: true
      });
      fastCount = 0;
      fast = this.time.addEvent({
        delay: 300,
        callback: function callback() {
          fastbullet = this.physics.add.image(player.x, player.y - 100, 'bullet').setScale(0.2).setDepth(5);
          fastbullets.add(fastbullet);
          fastbullets.setVelocityY(-300);
          fastCount++;

          if (fastCount == 25) {
            shootStatus = 1;
            fast.paused = true;
          }
        },
        callbackScope: this,
        paused: true,
        loop: true
      });
      seaAndItemSpawn = this.time.addEvent({
        delay: 30000,
        callback: function callback() {
          if (seas.getLength() < 1) {
            var whichSea = 'sea' + Phaser.Math.Between(1, 2);

            if (whichSea == 'sea1') {
              sea = this.physics.add.image(300, -1700, whichSea).setScale(0.33).setDepth(1);
            } else {
              sea = this.physics.add.image(300, -1200, whichSea).setScale(0.33).setDepth(1);
            }

            seas.add(sea);
            seas.setVelocityY(100);
            var itemSpawn = Phaser.Math.Between(0, 1); // 0 is item will not spawn, 1 is spawn.

            if (itemSpawn == 1) {
              var which = Phaser.Math.Between(1, 2);

              if (which == 1) {
                if (whichSea == 'sea1') {
                  item = this.physics.add.image(sea.x, sea.y + 100, 'separate').setDepth(2).setScale(0.2);
                  item.setData('type', 'spread');
                  items.add(item);
                  items.setVelocityY(100);
                } else {
                  item = this.physics.add.image(sea.x, sea.y - 100, 'separate').setDepth(2).setScale(0.2);
                  item.setData('type', 'spread');
                  items.add(item);
                  items.setVelocityY(100);
                }
              } else {
                if (whichSea == 'sea1') {
                  item = this.physics.add.image(sea.x, sea.y + 100, 'rapid').setDepth(2).setScale(0.2);
                  item.setData('type', 'fast');
                  items.add(item);
                  items.setVelocityY(100);
                } else {
                  item = this.physics.add.image(sea.x, sea.y - 100, 'rapid').setDepth(2).setScale(0.2);
                  item.setData('type', 'fast');
                  items.add(item);
                  items.setVelocityY(100);
                }
              }
            }
          }
        },
        callbackScope: this,
        loop: true
      });
      randomBush = this.time.addEvent({
        delay: 14000 - score * 0.8,
        callback: function callback() {
          var whichBush = Phaser.Math.Between(1, 3);

          if (whichBush == 1) {
            bush = this.physics.add.image(465, -100, 'bush1').setScale(0.8).setDepth(1);
            bushs.add(bush);
          } else if (whichBush == 2) {
            bush = this.physics.add.image(135, -100, 'bush2').setScale(0.3).setDepth(1);
            bushs.add(bush);
          } else {
            bush = this.physics.add.image(465, -100, 'bush3').setScale(0.3).setDepth(1);
            bushs.add(bush);
          }

          bushs.setVelocityY(100);
        },
        callbackScope: this,
        loop: true
      });
      checkAmount = this.time.addEvent({
        delay: 1000,
        callback: function callback() {
          /* console.log('number of monsters ' + monsters.getLength())
           console.log('number of fires ' + fires.getLength())
           console.log('number of bullets ' + bullets.getLength())
           console.log('number of fastbullets ' + fastbullets.getLength())
           console.log('number of leftspreadbullets ' + leftSpreadBullets.getLength())
           console.log('number of middlespreadbullets ' + middleSpreadBullets.getLength())
           console.log('number of rightspreadbullets ' + rightSpreadBullets.getLength())
           console.log('shoot status ' + shootStatus)
           console.log('amount of items ' + items.getLength())
           console.log('cloud amount ' + clouds.getLength())
           console.log('bigfire amount ' + bigFires.getLength())
           console.log('sea amount ' + seas.getLength())
           console.log('bush amount ' + bushs.getLength())
           console.log('-----------------------------------------------')*/
        },
        callbackScope: this,
        loop: true
      });
      this.physics.add.overlap(bullets, monsters, this.kill);
      this.physics.add.overlap(leftSpreadBullets, monsters, this.kill);
      this.physics.add.overlap(middleSpreadBullets, monsters, this.kill);
      this.physics.add.overlap(rightSpreadBullets, monsters, this.kill);
      this.physics.add.overlap(fastbullets, monsters, this.kill);
      this.physics.add.overlap(player, monsters, this.monsterHit);
      this.physics.add.overlap(bullets, bigFires, this.killBigFire.bind(this));
      this.physics.add.overlap(leftSpreadBullets, bigFires, this.killBigFire.bind(this));
      this.physics.add.overlap(middleSpreadBullets, bigFires, this.killBigFire.bind(this));
      this.physics.add.overlap(rightSpreadBullets, bigFires, this.killBigFire.bind(this));
      this.physics.add.overlap(fastbullets, bigFires, this.killBigFire.bind(this));
      this.physics.add.overlap(player, bigFires, this.bigFireHit);
      this.physics.add.overlap(player, fires, this.firesHit);
      this.physics.add.overlap(player, items, this.getItem);
      this.physics.add.overlap(bushs, seas, this.checkSeaAndBush);
      this.physics.add.overlap(fires, bushs, function (fire, forest) {
        if (Phaser.Math.Between(1, 70) == 1) {
          //random bigFire spawn 
          if (!fired) {
            if (forest.y <= 450) {
              fire.destroy(true);
              fired = true;
              bigFire = _this.physics.add.image(forest.x, forest.y - 25, 'bigFire').setScale(0.06).setDepth(4);
              bigFire.setData('health', '3');
              bigFires.add(bigFire);
              bigFires.setVelocityY(100);
            }
          }
        }
      });
    }
  }, {
    key: "update",
    value: function update() {
      bg.tilePositionY -= 1.65;
      monsters.playAnimation('fly', '0');
      fires.playAnimation('fireAni', '0');
      player.anims.play('playerAni', true);

      for (var i = 0; i < clouds.getLength(); i++) {
        var cloud = clouds.getChildren()[i];

        if (cloud.y > this.game.config.height + 100) {
          cloud.destroy(true);
        }
      }

      for (var i = 0; i < fires.getLength(); i++) {
        var fire = fires.getChildren()[i];

        if (fire.y > this.game.config.height + 100) {
          fire.destroy(true);
        }
      }

      for (var i = 0; i < bullets.getLength(); i++) {
        /*var bullet = bullets.getChildren()[i]
        if (bullet.y <= -100) {
            bullet.destroy(true)
        }*/
        var bull = bullets.getChildren()[0];

        if (bull.y <= -50) {
          bull.destroy(true);
        }
      }

      for (var i = 0; i < fastbullets.getLength(); i++) {
        var fastBul = fastbullets.getChildren()[i];

        if (fastBul.y <= -100) {
          fastBul.destroy(true);
        }
      }

      for (var i = 0; i < leftSpreadBullets.getLength(); i++) {
        var left = leftSpreadBullets.getChildren()[i];

        if (left.y <= -100) {
          left.destroy(true);
        }
      }

      for (var i = 0; i < middleSpreadBullets.getLength(); i++) {
        var mid = middleSpreadBullets.getChildren()[i];

        if (mid.y <= -100) {
          mid.destroy(true);
        }
      }

      for (var i = 0; i < rightSpreadBullets.getLength(); i++) {
        var right = rightSpreadBullets.getChildren()[i];

        if (right.y <= -100) {
          right.destroy(true);
        }
      }

      for (var i = 0; i < items.getLength(); i++) {
        var item = items.getChildren()[i];

        if (item.y > this.game.config.height + 100) {
          item.destroy(true);
        }
      }

      for (var i = 0; i < seas.getLength(); i++) {
        var sea = seas.getChildren()[i];

        if (sea.y > this.game.config.height + 500) {
          sea.destroy(true);
        }
      }

      for (var i = 0; i < monsters.getLength(); i++) {
        var mons = monsters.getChildren()[i];

        if (mons.y > this.game.config.height + 100) {
          mons.destroy(true);
          score -= 50;
          scoreText.setText('Score: ' + score);
        }
      }

      for (var i = 0; i < bigFires.getLength(); i++) {
        var bigFi = bigFires.getChildren()[i];

        if (bigFi.y > this.game.config.height + 100) {
          bigFi.destroy(true);
          fired = false;
          score -= 150;
          scoreText.setText('Score: ' + score);
        }
      }

      for (var i = 0; i < bushs.getLength(); i++) {
        var bush = bushs.getChildren()[i];

        if (bush.y > this.game.config.height + 100) {
          bush.destroy(true);
        }
      }

      if (health <= 0) {
        this.gameOver();
      }

      if (score < -500) {
        this.gameOver();
      }

      if (monsterSpawn.delay < 500) {
        monsterSpawn.delay = 500;
      }

      if (enemyFire.delay < 800) {
        enemyFire.delay = 800;
      }

      if (randomBush.delay < 700) {
        enemyFire.delay = 700;
      }

      if (cursor.left.isDown) {
        player.setVelocityX(-400);
      } else if (cursor.right.isDown) {
        player.setVelocityX(400);
      } else {
        player.setVelocityX(0);
      }

      if (shootStatus == 1) {
        fast.paused = true;
        spread.paused = true;
        normal.paused = false;
      }

      if (shootStatus == 2) {
        shootStatus = 0;
        spreadCount = 0;
        normal.paused = true;
        fast.paused = true;
        spread.paused = false;
      }

      if (shootStatus == 3) {
        shootStatus = 0;
        fastCount = 0;
        normal.paused = true;
        spread.paused = true;
        fast.paused = false;
      }
    }
  }, {
    key: "gameOver",
    value: function gameOver() {
      this.scene.start('Restart');
      console.log('Game Over');
    }
  }, {
    key: "kill",
    value: function kill(bullet, monster) {
      bullet.destroy(true);
      monster.destroy(true);
      score += 100;
      scoreText.setText('Score: ' + score);
    }
  }, {
    key: "killBigFire",
    value: function killBigFire(bullet, bigFire) {
      bullet.destroy(true);
      var health = bigFire.getData('health');

      if (health == 1) {
        bigFire.destroy(true);
        fired = false;
        score += 300;
        scoreText.setText('Score: ' + score);

        if (Phaser.Math.Between(1, 3) == 1) {
          //random item spawn 
          if (Phaser.Math.Between(1, 2) == 1) {
            //random item type
            item = this.physics.add.image(bigFire.x, bigFire.y, 'separate').setDepth(2).setScale(0.2);
            item.setData('type', 'spread');
            items.add(item);
            items.setVelocityY(100);
          } else {
            item = this.physics.add.image(bigFire.x, bigFire.y, 'rapid').setDepth(2).setScale(0.2);
            item.setData('type', 'fast');
            items.add(item);
            items.setVelocityY(100);
          }
        }
      } else if (health == 3) {
        bigFire.setData('health', '2');
      } else {
        bigFire.setData('health', '1');
      }
    }
  }, {
    key: "monsterHit",
    value: function monsterHit(player, monster) {
      monster.destroy(true);
      hp.setFrame(5);
      health = 0;
    }
  }, {
    key: "bigFireHit",
    value: function bigFireHit(player, bigFire) {
      bigFire.destroy(true);
      fired = false;
      hp.setFrame(5);
      health = 0;
    }
  }, {
    key: "firesHit",
    value: function firesHit(player, fire) {
      switch (health) {
        case 5:
          hp.setFrame(1);
          break;

        case 4:
          hp.setFrame(2);
          break;

        case 3:
          hp.setFrame(3);
          break;

        case 2:
          hp.setFrame(4);
          break;

        case 1:
          hp.setFrame(5);
          break;

        case 0:
          break;
      }

      health -= 1;
      fire.destroy(true);
    }
  }, {
    key: "getItem",
    value: function getItem(player, item) {
      var which = item.getData('type');
      item.destroy(true);

      switch (which) {
        case 'spread':
          normal.paused = true;
          fast.paused = true;
          spread.paused = true;
          shootStatus = 2;
          break;

        case 'fast':
          normal.paused = true;
          fast.paused = true;
          spread.paused = true;
          shootStatus = 3;
          break;
      }
    }
  }, {
    key: "checkSeaAndBush",
    value: function checkSeaAndBush(bush, sea) {
      bush.destroy(true);
    }
  }]);

  return GameScene;
}(Phaser.Scene);

/* harmony default export */ __webpack_exports__["default"] = (GameScene);

/***/ }),

/***/ "./src/scenes/MainMenu.js":
/*!********************************!*\
  !*** ./src/scenes/MainMenu.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var bg01;
var sign01;
var sign02;
var sign03;
var sign04;
var Mtext;
var Stext01;
var Stext02;
var Stext03;
var Stext04;
var signP;
var con01;
var con02;
var con03;
var con04;
var grass;
var mountain;
var tree;
var ground;
var fullButton;

var MainMenu =
/*#__PURE__*/
function (_Phaser$Scene) {
  _inherits(MainMenu, _Phaser$Scene);

  function MainMenu(test) {
    _classCallCheck(this, MainMenu);

    return _possibleConstructorReturn(this, _getPrototypeOf(MainMenu).call(this, {
      key: 'MainMenu'
    }));
  }

  _createClass(MainMenu, [{
    key: "preload",
    value: function preload() {
      this.load.image('bg01', './src/image/BGMenu1.png');
      this.load.image('sign1', './src/image/Sign1.png');
      this.load.image('sign2', './src/image/Sign2.png');
      this.load.image('sign3', './src/image/Sign3.png');
      this.load.image('sign4', './src/image/Sign4.png');
      this.load.image('grass', './src/image/Grass.png');
      this.load.image('ground', './src/image/Ground.png');
      this.load.image('mountain', './src/image/Mountain.png');
      this.load.image('tree', './src/image/Tree.png');
    }
  }, {
    key: "create",
    value: function create() {
      bg01 = this.add.image(0, 0, 'bg01').setOrigin(0);
      grass = this.add.image(-30, 65, 'grass').setScale(0.45).setOrigin(0);
      ground = this.add.image(100, 0, 'ground');
      mountain = this.add.image(200, 1000, 'mountain');
      tree = this.add.image(0, 0, 'tree').setScale(0.5).setOrigin(0, 0);
      sign01 = this.add.image(0, 0, 'sign3').setScale(0.4);
      sign02 = this.add.image(0, 0, 'sign1').setScale(0.25);
      sign03 = this.add.image(0, 0, 'sign2').setScale(0.25);
      sign04 = this.add.image(0, 0, 'sign4').setScale(0.25);
      Mtext = this.add.text(0, 0, 'Name', {
        fontFamily: 'font1',
        fill: '#ffffff',
        align: 'center'
      }).setOrigin(0.5).setFontSize(100);
      Stext01 = this.add.text(0, 0, 'Play', {
        fontFamily: 'font1',
        fill: '#ffffff',
        align: 'center'
      }).setOrigin(0.5).setFontSize(60);
      Stext02 = this.add.text(0, 0, 'Setting', {
        fontFamily: 'font1',
        fill: '#ffffff',
        align: 'center'
      }).setOrigin(0.5).setFontSize(60);
      Stext03 = this.add.text(0, 0, 'Quit', {
        fontFamily: 'font1',
        fill: '#ffffff',
        align: 'center'
      }).setOrigin(0.5).setFontSize(60);
      con01 = this.add.container(300, -100, [sign01, Mtext]).setScale(1);
      con02 = this.add.container(300, -100, [sign02, Stext01]).setScale(1);
      con03 = this.add.container(300, -100, [sign03, Stext02]).setScale(1);
      con04 = this.add.container(300, -100, [sign04, Stext03]).setScale(1);
      console.log('con01.x: ' + con01.x + ', con01.y: ' + con01.y); //Change text to sign0x next commit 

      Stext01.setInteractive();
      Stext01.on('clicked', function () {
        this.scene.start('GameScene');
      }, this);
      this.input.on('gameobjectup', function (pointer, gameObject) {
        gameObject.emit('clicked', gameObject);
      }, this);

      var _this = this;

      _this.tweens.add({
        targets: con01,
        delay: 1500,
        props: {
          y: {
            value: 200,
            duration: 1500
          }
        }
      });

      _this.tweens.add({
        targets: con02,
        delay: 1500,
        props: {
          y: {
            value: 400,
            duration: 1500
          }
        }
      });

      _this.tweens.add({
        targets: con03,
        delay: 1500,
        props: {
          y: {
            value: 550,
            duration: 1500
          }
        }
      });

      _this.tweens.add({
        targets: con04,
        delay: 1500,
        props: {
          y: {
            value: 700,
            duration: 1500
          }
        }
      });

      _this.tweens.add({
        targets: grass,
        props: {
          y: {
            value: -65,
            duration: 1500
          }
        }
      });

      _this.tweens.add({
        targets: ground,
        props: {
          y: {
            value: 100,
            duration: 1500
          }
        }
      });

      _this.tweens.add({
        targets: mountain,
        props: {
          y: {
            value: -10,
            duration: 1500
          }
        }
      });

      _this.tweens.add({
        targets: tree,
        props: {
          y: {
            value: -100,
            duration: 1500
          }
        }
      }); // fullButton = this.add.sprite(100, 100, 'full', 0).setOrigin(1, 0).setInteractive()
      // fullButton.setFrame(0)
      // fullButton.setTint(0xff0000)
      // fullButton.on('clicked', function () {
      //     var i = 0;
      //     if (i = 0) {
      //         fullButton.setFrame(0)
      //         this.scale.stopFullscreen()
      //         i = 1;
      //     }else{
      //         fullButton.setFrame(1)
      //         this.scale.startFullscreen()
      //     }
      // }, this)


      con01.setDepth(1);
      grass.setDepth(1);
      tree.setDepth(0);
    }
  }]);

  return MainMenu;
}(Phaser.Scene);

/* harmony default export */ __webpack_exports__["default"] = (MainMenu);

/***/ }),

/***/ "./src/scenes/Restart.js":
/*!*******************************!*\
  !*** ./src/scenes/Restart.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var bg;
var cloudSpawn;
var clouds;
var cloud;

var Restart =
/*#__PURE__*/
function (_Phaser$Scene) {
  _inherits(Restart, _Phaser$Scene);

  function Restart(test) {
    _classCallCheck(this, Restart);

    return _possibleConstructorReturn(this, _getPrototypeOf(Restart).call(this, {
      key: 'Restart'
    }));
  }

  _createClass(Restart, [{
    key: "preload",
    value: function preload() {
      this.load.image('bg', 'src/image/background.png');
      this.load.image('cloud1', 'src/image/cloud1.png');
      this.load.image('cloud2', 'src/image/cloud2.png');
      this.load.image('cloud3', 'src/image/cloud3.png');
      this.load.image('cloud4', 'src/image/cloud4.png');
      this.load.image('cloud5', 'src/image/cloud5.png');
    }
  }, {
    key: "create",
    value: function create() {
      bg = this.add.tileSprite(0, 0, 600, 900, 'bg').setOrigin(0, 0);
      var style = {
        fontFamily: 'font1',
        fill: '#ffffff'
      };
      this.text1 = this.add.text(this.game.config.width * 0.5, this.game.config.height * 0.5, 'Click to Restart', style).setOrigin(0.5).setFontSize(40);
      this.text1.setInteractive();
      this.text1.on('pointerdown', function () {
        this.scene.scene.start('GameScene');
      });
      this.text2 = this.add.text(this.game.config.width * 0.5, this.game.config.height * 0.5 + 60, 'Click to Exit', style).setOrigin(0.5).setFontSize(40);
      this.text2.setInteractive();
      this.text2.on('pointerdown', function () {
        this.scene.scene.start('MainMenu');
      });
      clouds = this.physics.add.group();
      cloudSpawn = this.time.addEvent({
        delay: 4500,
        callback: function callback() {
          var whichCloud = 'cloud' + Phaser.Math.Between(1, 5);
          cloud = this.physics.add.sprite(Phaser.Math.Between(0, this.game.config.width), -100, whichCloud).setScale(0.2).setDepth(11);
          clouds.add(cloud);
          clouds.setVelocityY(150);
        },
        callbackScope: this,
        loop: true
      });
    }
  }, {
    key: "update",
    value: function update() {
      bg.tilePositionY -= 1.65;

      for (var i = 0; i < clouds.getLength(); i++) {
        var cloud = clouds.getChildren()[i];

        if (cloud.y > this.game.config.height + 100) {
          cloud.destroy(true);
        }
      }
    }
  }]);

  return Restart;
}(Phaser.Scene);

/* harmony default export */ __webpack_exports__["default"] = (Restart);

/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/smurf/Documents/GitHub/fame/src/main.js */"./src/main.js");


/***/ })

/******/ });
});
//# sourceMappingURL=app.js.map