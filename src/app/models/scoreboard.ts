class Scoreboard {

	private pointMap:Object;

	constructor() {
		this.pointMap = {};
	}

	public award(player:string, points:number) {
		if (!this.pointMap.hasOwnProperty(player)) {
			this.pointMap[player] = 0;
		}
		this.pointMap[player] += points;
	}

	public players():string[] {
		let list = [];
		for (let player in this.pointMap) {
			list.push(player);
		}
		return list;
	}

	public maxPoints():number {
		let scores = this.players().map((player) => this.pointMap[player]);
		return Math.max.apply(Math, scores);
	}

}