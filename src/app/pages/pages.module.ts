import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DicePageComponent} from './dice-page/dice-page.component';
import { MarkPageComponent } from './mark-page/mark-page.component';

@NgModule({
	imports: [
		CommonModule
	],
	declarations: [DicePageComponent, DicePageComponent, MarkPageComponent],
	exports: [DicePageComponent]
})
export class PagesModule {
}
