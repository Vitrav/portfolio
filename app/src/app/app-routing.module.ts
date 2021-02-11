import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//pages
import { LayoutComponent } from '../app/core/layout/layout.component';
import { HomeComponent } from '../app/pages/home/home.component';
import { AboutComponent } from '../app/pages/about/about.component';
import { KitchensinkComponent } from '../app/pages/kitchensink/kitchensink.component';

const routes: Routes = [
  { path: '', component: LayoutComponent,
  children: [
    {
      path: '',
      redirectTo: 'home',
      pathMatch: 'full'
    },
    {
      path: 'home',
      //TODO: Create childrens if needed 
      // loadChildren: () =>
      //   import('./pages/home/home.component').then(
      //     (m) => m.HomeComponent
      //   )
      component : HomeComponent
    },
    { path: 'about', component: AboutComponent},
    { path: 'kitchensink', component: KitchensinkComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
