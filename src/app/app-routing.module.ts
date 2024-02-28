import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstpageComponent } from './firstpage/firstpage.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { CropregionComponent } from './cropregion/cropregion.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { InsertComponent } from './insert/insert.component';
import { UpdateComponent } from './update/update.component';
import { DeleteComponent } from './delete/delete.component';
import { ReadComponent } from './read/read.component';
import { ContactusComponent } from './contactus/contactus.component';
import { LogoutComponent } from './logout/logout.component';
import { Register2Component } from './register2/register2.component';
import { AdaptationComponent } from './adaptation/adaptation.component';
import { TimeperiodComponent } from './timeperiod/timeperiod.component';
import { CroprotationComponent } from './croprotation/croprotation.component';
import { SoilComponent } from './soil/soil.component';
import { SeasonalComponent } from './seasonal/seasonal.component';
import { TemperatureComponent } from './temperature/temperature.component';
import { RainfallComponent } from './rainfall/rainfall.component';
import { BenenfitsComponent } from './benenfits/benenfits.component';
import { GraphsComponent } from './graphs/graphs.component';
import { AboutComponent } from './about/about.component';
import { ImpactsComponent } from './impacts/impacts.component';
import { FrequencyComponent } from './frequency/frequency.component';
import { FertilizersComponent } from './fertilizers/fertilizers.component';
import { VideoComponent } from './video/video.component';
import { AgricultureComponent } from './agriculture/agriculture.component';
import { RecommendsComponent } from './recommends/recommends.component';
import { InvestmentsComponent } from './investments/investments.component';
import { ConstraintsComponent } from './constraints/constraints.component';
import { HabitsComponent } from './habits/habits.component';
import { CropComponent } from './crop/crop.component';
import { WrapComponent } from './wrap/wrap.component';
import { AreaComponent } from './area/area.component';
import { SuggestsComponent } from './suggests/suggests.component';

const routes: Routes = [
  {
    path:'',
    component:FirstpageComponent
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'home',
    component:HomeComponent
  },
  {
    path:"cropregion",
    component:CropregionComponent
  },
  {
    path:"feedback",
    component:FeedbackComponent
  },
  {
    path:"insert",
    component:InsertComponent
  },
  {
    path:"update",
    component:UpdateComponent
  },
  {
    path:"delete",
    component:DeleteComponent
  },
  {
    path:"read",
    component:ReadComponent
  },
  {
    path:"contactus",
    component:ContactusComponent
  },
  {
    path:'adaptation',
    component:AdaptationComponent
  },
  {
    path:'timeperiod',
    component:TimeperiodComponent
  },
  {
    path:'croprotation',
    component:CroprotationComponent
  },
  {
    path:"logout",
    component:LogoutComponent
  },
  {
    path:'register2',
    component:Register2Component
  },
  {
    path:'soil',
    component:SoilComponent
  },
  {
    path:'seasonal',
    component:SeasonalComponent
  },
  {
    path:'temperature',
    component:TemperatureComponent
  },
  {
    path:'fertilizers',
    component:FertilizersComponent
  },
  {
    path:'impacts',
    component:ImpactsComponent
  },
  {
    path:'rainfall',
    component:RainfallComponent
  },
  {
    path:'frequency',
    component:FrequencyComponent
  },
  {
    path:'graphs',
    component:GraphsComponent
  },
  {
    path:'about',
    component:AboutComponent
  },
  {
    path:'benefits',
    component:BenenfitsComponent
  },
  {
    path:"firstpage",
    component:FirstpageComponent
  },
  {
    path:'agriculture',
    component:AgricultureComponent
  },
  {
    path:'recommends',
    component:RecommendsComponent
  },
  {
    path:'habits',
    component:HabitsComponent
  },
  {
    path:'crop',
    component:CropComponent
  },
  {
    path:'wrap',
    component:WrapComponent
  },
  {
    path:'suggests',
    component:SuggestsComponent
  },
  {
    path:'area',
    component:AreaComponent
  },
  {
    path:'investments',
    component:InvestmentsComponent
  },
  {
    path:'constraints',
    component:ConstraintsComponent
  },
  {
    path: '', redirectTo: '/signin', pathMatch: 'full'
  },
  {
    path:'video',
    component:VideoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
