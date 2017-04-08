import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {DicePageComponent} from "./pages/dice-page/dice-page.component";

const routes: Routes = [
	{
		path: '',
		children: []
	},
	{
		path: 'dice',
		component: DicePageComponent
	}
];

@NgModule({
	imports: [RouterModule.forRoot(routes, {useHash: true})],
	exports: [RouterModule],
	providers: []
})
export class AppRoutingModule {
}
