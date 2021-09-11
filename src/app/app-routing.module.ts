import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AssetsDataComponent } from './assets-data/assets-data.component';
import { GetDataComponent } from './get-data/get-data.component';
import { PostDataComponent } from './post-data/post-data.component';

const routes: Routes =
[
  {
    path:"",redirectTo:"postdata",pathMatch:"full"
  },
  {
    path:"postdata",component:PostDataComponent
  },
  // {
    {
    path:"getdata",component:GetDataComponent
  },
  {
    path:"assetsdata",component:AssetsDataComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponent = [PostDataComponent,GetDataComponent,AssetsDataComponent]