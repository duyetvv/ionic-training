import { NgModule } from '@angular/core';
import { DetailComponent } from './detail/detail';
import { HeroComponent } from './hero/hero';

@NgModule({
	imports: [
		HeroComponent,
		DetailComponent
	],
})
export class ComponentsModule {}
