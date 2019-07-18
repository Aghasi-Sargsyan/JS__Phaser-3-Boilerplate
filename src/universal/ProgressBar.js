import Phaser from 'phaser'

export default class ProgressBar extends Phaser.GameObjects.Container {
	constructor(props = {}, scene) {
		super(scene, props.x = 0, props.y = 0, props.children = []);

		this.boxWidth = props.boxWidth || 320;
		this.boxHeight = props.boxHeight || 50;
		this.diff = props.diff || 14;

		this.onCreate();
		scene.add.existing(this);
	}


	onCreate()  {

		this.barWidth = this.boxWidth - this.diff;
		this.barHeight = this.boxHeight - this.diff;

		const progressBox = this.scene.add.graphics();
		progressBox.fillStyle(0x222222, 0.8);
		progressBox.fillRect(0,0 ,this.boxWidth, this.boxHeight);

		this.progressBar = this.scene.add.graphics();
		this.progressBar.fillStyle(0xffffff, 1);

		this.add(progressBox);
		this.add(this.progressBar);
	}

	loadProgress(progressValue = 1) {

		this.progressBar.fillRect(
			this.diff / 2,
			this.diff / 2,
			this.barWidth * progressValue,
			this.barHeight
		);
	}

	get height(){
		return this.boxHeight;
	}

	get width(){
		return this.boxWidth;
	}
}