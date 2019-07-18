import 'phaser'
import {SCENE_TYPES} from '../constants/general';

export default class LobbyScene extends Phaser.Scene {
	constructor(){
		super(SCENE_TYPES.lobbyScene);
	}

	preload(){

		if (this.scene.get(SCENE_TYPES.loadingScene)){
			this.scene.remove(SCENE_TYPES.loadingScene);
		}
	}

	create() {
		const logo = this.add.image(400, 150, "logo");

		this.tweens.add({
			targets: logo,
			y: 450,
			duration: 2000,
			ease: "Power2",
			yoyo: true,
			loop: -1
		});
	}
}