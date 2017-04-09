import {Component, OnInit} from '@angular/core';
import {Chooser} from "../../models/chooser";
import {Scoreboard} from "../../models/scoreboard";

const NUM_DICE = 4;
const DICE_RESULTS = [1, 2, 3, 4, 5, 6];

@Component({
	selector: 'p01-mark-page',
	templateUrl: './mark-page.component.html',
	styleUrls: ['./mark-page.component.scss']
})
export class MarkPageComponent implements OnInit {

	private possibleResults: number[];

	private dice: Chooser<number>[];

	private results: number[];

	private scoreboard: Scoreboard;

	constructor() {
		this.initializeDice();
		this.clearTally();
	}

	ngOnInit() {
	}

	private initializeDice() {
		this.dice = [];
		this.results = [];
		while (this.dice.length < NUM_DICE) {
			let d = new Chooser<number>(DICE_RESULTS);
			this.results.push(d.choose());
			this.dice.push(d);
		}
	}

	private clearTally() {
		this.scoreboard = new Scoreboard();
		let minResult = NUM_DICE * DICE_RESULTS[0];
		let maxResult = NUM_DICE * DICE_RESULTS[DICE_RESULTS.length - 1];
		for (let r = minResult; r <= maxResult; r++) {
			this.scoreboard.award(r.toString(), 0);
		}
	}

	private roll(repeats = 1) {
		for (let n = 0; n < repeats; n++) {
			let sum = 0;
			for (let i in this.dice) {
				let r = this.dice[i].choose();
				this.results[i] = r;
				sum += r;
			}
			this.scoreboard.award(sum.toString(), 1);
		}
	}

	private proportion(player: number): number {
		let max = this.scoreboard.maxPoints();
		let points = this.scoreboard.points(player.toString());
		if (max === 0) {
			return 0;
		}
		else {
			return points / max;
		}
	}

	private getScale() {
		let base = 25;
		let max = Math.max(1, this.scoreboard.maxPoints());
		let power = Math.floor(Math.log(max) / Math.log(base));
		return 1 / Math.pow(base, power);
	}

}
