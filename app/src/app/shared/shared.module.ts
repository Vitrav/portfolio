import { NgModule,ModuleWithProviders } from '@angular/core';

//components
import{ NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { ButtonComponent } from './components/button/button.component';
import { BasicFormComponent } from './components/basic-form/basic-form.component';
import { AccordionComponent } from './components/accordion/accordion.component';
import { CarrouselComponent } from './components/carrousel/carrousel.component';
import { HeroComponent } from './components/hero/hero.component';
import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';

@NgModule({
    declarations: [
        NavbarComponent,
        FooterComponent,
        ButtonComponent,
        BasicFormComponent,
        AccordionComponent,
        CarrouselComponent,
        HeroComponent,
        BreadcrumbComponent
    ],
    imports: [

    ],
    exports: [
        NavbarComponent,
        FooterComponent,
        ButtonComponent,
        BasicFormComponent,
        AccordionComponent,
        CarrouselComponent,
        HeroComponent,
        BreadcrumbComponent
    ],
    providers: [],

  })
  export class SharedModule { 
      public static forRoot(): ModuleWithProviders<SharedModule>{
          return {
              ngModule: SharedModule};
          }
      }
  