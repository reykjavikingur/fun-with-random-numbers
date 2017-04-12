import {Component, OnInit, Input} from '@angular/core';
import {Scoreboard} from "../../models/scoreboard";

@Component({
	selector: 'p01-scoreboard',
	templateUrl: './scoreboard.component.html',
	styleUrls: ['./scoreboard.component.scss']
})
export class ScoreboardComponent implements OnInit {

	@Input()
	public scoreboard: Scoreboard;

	constructor() {
	}

	ngOnInit() {
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

}
