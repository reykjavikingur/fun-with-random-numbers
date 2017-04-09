export class Scoreboard {

	private pointMap: Object;

	constructor() {
		this.pointMap = {};
	}

	public award(player: string, points: number) {
		if (!this.pointMap.hasOwnProperty(player)) {
			this.pointMap[player] = 0;
		}
		this.pointMap[player] += points;
	}

	public points(player: string): number {
		if (this.pointMap.hasOwnProperty(player)) {
			return this.pointMap[player];
		}
		else {
			return 0;
		}
	}

	public players(): string[] {
		let list = [];
		for (let player in this.pointMap) {
			list.push(player);
		}
		return list;
	}

	public maxPoints(): number {
		let scores = this.players().map((player) => this.pointMap[player]);
		if (scores.length > 0) {
			return Math.max.apply(Math, scores);
		}
		else {
			return 0;
		}
	}

}