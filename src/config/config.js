import Phaser from "phaser";

export default {
	scale:{
		mode: Phaser.Scale.FIT,
	},
	autoCenter: Phaser.Scale.CENTER_BOTH,
	type: Phaser.AUTO,
	parent: "phaser-example",
	width: 1280,
	height: 720,
};