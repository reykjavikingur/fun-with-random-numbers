import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ScoreboardComponent} from './scoreboard/scoreboard.component';

@NgModule({
	imports: [
		CommonModule
	],
	declarations: [ScoreboardComponent],
	exports: [ScoreboardComponent]
})
export class CompsModule {
}
