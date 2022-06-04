import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnasayfaComponent } from './anasayfa/anasayfa.component';
import { HakkimdaComponent } from './hakkimda/hakkimda.component';
import { IletisimComponent } from './iletisim/iletisim.component';
import { ProjelerComponent } from './projeler/projeler.component';

const routes: Routes = [
  {path:'' ,component:AnasayfaComponent},
  {path:'hakkimda' ,component:HakkimdaComponent},
  {path:'projeler' ,component:ProjelerComponent},
  {path:'iletişim' ,component:IletisimComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
