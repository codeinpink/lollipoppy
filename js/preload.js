var Preload = function(game) {

};

Preload.prototype = {

	preload: function() { 
		this.game.load.tilemap('tilemap', 'assets/level1.json', null, Phaser.Tilemap.TILED_JSON);
		this.game.load.image('tiles', 'assets/art-candy/sheet.png');
		this.game.load.spritesheet('player', 'assets/Poppy-sheet.png', 32, 32, 6);
		this.game.load.image('cherry', 'assets/art-candy/Tiles/cherry.png');
		this.game.load.image('heart', 'assets/art-candy/Tiles/heart.png');
		this.game.load.image('candyBlue', 'assets/art-candy/Tiles/candyBlue.png');
		this.game.load.image('candyGreen', 'assets/art-candy/Tiles/candyGreen.png');
		this.game.load.image('candyYellow', 'assets/art-candy/Tiles/candyYellow.png');
		this.game.load.image('candyRed', 'assets/art-candy/Tiles/candyRed.png');
		this.game.load.image('creamVanilla', 'assets/art-candy/Tiles/creamVanilla.png');
		this.game.load.image('creamChoco', 'assets/art-candy/Tiles/creamChoco.png');
		this.game.load.image('creamMocca', 'assets/art-candy/Tiles/creamMocca.png');
		this.game.load.image('lollipopGreen', 'assets/art-candy/Tiles/lollipopGreen.png');
		this.game.load.image('lollipopBasePink', 'assets/art-candy/Tiles/lollipopBasePink.png');
		this.game.load.image('gummyWormRedDoor', 'assets/art-candy/Tiles/gummyWormRedDoor.png');

		this.game.load.audio('oompa-loompa', ['assets/Oompa Loompa.mp3', 'assets/Oompa Loompa.ogg']);
		this.game.load.audio('oompa-loompa-reverse', ['assets/Oompa Loompa Reverse.mp3', 'assets/Oompa Loompa Reverse.ogg']);
	},

	create: function() {
		this.game.state.start("Main");
	}
}