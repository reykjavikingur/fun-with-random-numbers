import {Component, OnInit} from '@angular/core';

@Component({
	selector: 'p01-dice-page',
	templateUrl: './dice-page.component.html',
	styleUrls: ['dice-page.component.scss']
})
export class DicePageComponent implements OnInit {

	private possibleResults: number[];

	private result: number;

	private tally: Object;

	constructor() {
		this.possibleResults = [1, 2, 3, 4, 5, 6];
		this.result = this.createDiceResult();
		this.clearTally();
	}

	ngOnInit() {
	}

	private roll(repeats = 1) {
		for (let i = 0; i < repeats; i++) {
			this.result = this.createDiceResult();
			this.tally[this.result]++;
		}
	}

	private createDiceResult(): number {
		return Math.floor(Math.random() * 6) + 1;
	}

	private clearTally() {
		if (!this.tally) {
			this.tally = {};
		}
		for (let possibleResult of this.possibleResults) {
			this.tally[possibleResult] = 0;
		}
	}

	private getScale() {
		let max = Math.max(1, this.getMaxTally());
		let power = Math.floor(Math.log(max) / Math.log(10));
		return 1 / Math.pow(10, power);
	}

	private getMaxTally() {
		let max = 0;
		for (let result in this.tally) {
			let x = this.tally[result];
			if (x > max) {
				max = x;
			}
		}
		return max;
	}

}
