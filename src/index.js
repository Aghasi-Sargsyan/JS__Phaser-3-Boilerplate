import "phaser";
import LobbyScene from './scenes/LobbyScene';
import LoadingScene from './scenes/LoadingScene';
import config from './config/config';
import {SCENE_TYPES} from './constants/general';

class Game extends Phaser.Game{
	constructor(){
		super(config);

		this.scene.add(SCENE_TYPES.loadingScene, LoadingScene);
		this.scene.add(SCENE_TYPES.lobbyScene, LobbyScene);

		this.scene.start(SCENE_TYPES.loadingScene);
	}

}

window.onload = function () {
	window.game = new Game();
};

