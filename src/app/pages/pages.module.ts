import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DicePageComponent} from './dice-page/dice-page.component';

@NgModule({
	imports: [
		CommonModule
	],
	declarations: [DicePageComponent, DicePageComponent],
	exports: [DicePageComponent]
})
export class PagesModule {
}
