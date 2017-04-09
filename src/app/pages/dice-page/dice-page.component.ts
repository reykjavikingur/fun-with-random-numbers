import {Component, OnInit} from '@angular/core';
import {Chooser} from "../../models/chooser";
import {Scoreboard} from "../../models/scoreboard";

@Component({
	selector: 'p01-dice-page',
	templateUrl: './dice-page.component.html',
	styleUrls: ['dice-page.component.scss']
})
export class DicePageComponent implements OnInit {

	private possibleResults: number[];

	private result: number;

	private tally: Object;

	private dice:Chooser<number>;

	private scoreboard:Scoreboard;

	constructor() {
		this.possibleResults = [1, 2, 3, 4, 5, 6];
		this.dice = new Chooser<number>(this.possibleResults);
		this.result = this.dice.choose();
		this.clearTally();
	}

	ngOnInit() {
	}

	private roll(repeats = 1) {
		for (let i = 0; i < repeats; i++) {
			this.result = this.dice.choose();
			this.scoreboard.award(this.result.toString(), 1);
			this.tally[this.result]++;
		}
	}

	private clearTally() {
		this.scoreboard = new Scoreboard();
		if (!this.tally) {
			this.tally = {};
		}
		for (let possibleResult of this.possibleResults) {
			this.tally[possibleResult] = 0;
		}
	}

	private getScale() {
		let max = Math.max(1, this.scoreboard.maxPoints());
		let power = Math.floor(Math.log(max) / Math.log(10));
		return 1 / Math.pow(10, power);
	}

}
