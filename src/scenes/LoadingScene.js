import 'phaser';
import {SCENE_TYPES, WORLD_POS} from '../constants/general';
import logoImg from '../assets/images/logo.png';
import ProgressBar from '../universal/ProgressBar';

export default class LoadingScene extends Phaser.Scene {
	constructor() {
		super(SCENE_TYPES.loadingScene);
	}

	preload() {
		const {center_x, center_y} = WORLD_POS;

		this.loadImages();

		const progressBar = new ProgressBar({}, this);

		progressBar.setPosition(center_x - progressBar.width/2, center_y - progressBar.height /2);

		this.createLoadingText(progressBar.x + progressBar.width / 2, progressBar.y - 20);

		this.load.on('progress', (value) => progressBar.loadProgress(value));
		this.load.on('fileprogress', (file) => console.log(file.src));
		this.load.on('complete', ()=> this.scene.start(SCENE_TYPES.lobbyScene));
	}

	loadImages() {
		this.load.image('logo', logoImg);
	}

	createLoadingText(x, y){
		return this.make.text({
			x, y, text: 'Loading...',
			style: {
				font: '20px monospace',
				fill: '#ffffff'
			}}).setOrigin(0.5, 0.5);
	}
}