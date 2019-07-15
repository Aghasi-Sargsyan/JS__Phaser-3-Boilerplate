import "phaser";
import {SCENE_TYPES, WORLD_POS} from '../constants/general';
import logoImg from '../assets/images/logo.png';

export default class LoadingScene extends Phaser.Scene{
	constructor() {
		super(SCENE_TYPES.loadingScene);
	}

	preload(){
		this.loadImages();

		this.load.on('progress', (value) => {

			this.createProgressBar(value);

		});

		this.load.on('fileprogress', (file) => console.log(file.src));

		this.load.on('complete', ()=> this.goToGameScene());
	}

	loadImages(){
		this.load.image("logo", logoImg);
	}

	goToGameScene(){
		this.scene.start(SCENE_TYPES.gameScene);
	}

	createProgressBar(progressValue){

		const boxWidth = 320;
		const boxHeight = 50;
		const diff = 20;
		const barWidth = boxWidth - diff;
		const barHeight = boxHeight - diff;

		const box_x = WORLD_POS.center_x - boxWidth / 2;
		const box_y = WORLD_POS.center_y - boxHeight / 2;
		const bar_x = box_x + diff / 2;
		const bar_y = box_y + diff / 2;

		const progressBox = this.add.graphics();
		progressBox.fillStyle(0x222222, 0.8);
		progressBox.fillRect(box_x, box_y, boxWidth, boxHeight);

		const progressBar = this.add.graphics();
		progressBar.fillStyle(0xffffff, 1);
		progressBar.fillRect(bar_x, bar_y, barWidth * progressValue, barHeight);


		const loadingText = this.make.text({
			x: WORLD_POS.center_x,
			y: box_y - 20,
			text: 'Loading...',
			style: {
				font: '20px monospace',
				fill: '#ffffff'
			}
		});

			loadingText.setOrigin(0.5, 0.5);
		}
}