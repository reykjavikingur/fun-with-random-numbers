import {Component, OnInit} from '@angular/core';
import {Chooser} from "../../models/chooser";
import {Scoreboard} from "../../models/scoreboard";

const DICE_RESULTS = [1, 2, 3, 4, 5, 6];

@Component({
	selector: 'p01-dice-page',
	templateUrl: './dice-page.component.html',
	styleUrls: ['dice-page.component.scss']
})
export class DicePageComponent implements OnInit {

	private dice: Chooser<number>;

	private result: number;

	private scoreboard: Scoreboard;

	constructor() {
		this.initializeDice();
		this.clearTally();
	}

	ngOnInit() {
	}

	private initializeDice() {
		this.dice = new Chooser<number>(DICE_RESULTS);
		this.result = this.dice.choose();
	}

	private clearTally() {
		this.scoreboard = new Scoreboard();
		for (let r of DICE_RESULTS) {
			this.scoreboard.award(r.toString(), 0);
		}
	}

	private roll(repeats = 1) {
		for (let i = 0; i < repeats; i++) {
			this.result = this.dice.choose();
			this.scoreboard.award(this.result.toString(), 1);
		}
	}

}
