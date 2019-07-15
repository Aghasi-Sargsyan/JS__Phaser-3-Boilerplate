import "phaser";
import {SCENE_TYPES} from '../constants/general';
import logoImg from '../assets/images/logo.png';
import config from '../config/config';

export default class LoadingScene extends Phaser.Scene{
	constructor() {
		super(SCENE_TYPES.loadingScene);
	}

	preload(){
		this.loadImages();

		this.load.on('progress', (value) => {

			this.createLoadingText();

			const progressBar = this.createProgressBar();
			this.fillProgressbar(progressBar, value);
		});

		this.load.on('fileprogress', (file) => {
			console.log(file.src);
		});

		this.load.on('complete', ()=> {
			this.goToGameScene()
		});
	}

	loadImages(){
		this.load.image("logo", logoImg);
	}

	goToGameScene(){
		this.scene.start(SCENE_TYPES.gameScene);
	}

	createProgressBar(){

		const progressBox = this.add.graphics();
		const progressBar = this.add.graphics();
		const boxWidth = 320;
		progressBox.fillStyle(0x222222, 0.8);
		progressBox.fillRect(config.width/2, config.height/2, boxWidth, 50);

		return progressBar;
	}

	fillProgressbar(progressBar, value){
		progressBar.clear();
		progressBar.fillStyle(0xffffff, 1);
		progressBar.fillRect(config.width/2, config.height/2, 300 * value, 30);
	}

	createLoadingText(){
		const width = this.cameras.main.width;
		const height = this.cameras.main.height;
		const loadingText = this.make.text({
			x: width / 2,
			y: height / 2 - 50,
			text: 'Loading...',
			style: {
				font: '20px monospace',
				fill: '#ffffff'
			}
		});
	}

}