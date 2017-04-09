export class Chooser<T> {

	private choices:T[];

	constructor(choices:T[]) {
		this.choices = choices;
	}

	public choose():T {
		let i = Math.floor(Math.random() * this.choices.length);
		return this.choices[i];
	}

}
