import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient,HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { LandingComponent } from './landing/landing.component';
import { FooterComponent } from './footer/footer.component';
import { FirstpageComponent } from './firstpage/firstpage.component';
import { InsertComponent } from './insert/insert.component';
import { DeleteComponent } from './delete/delete.component';
import { UpdateComponent } from './update/update.component';
import { ReadComponent } from './read/read.component';
import { FormsModule } from '@angular/forms';
import { CropregionComponent } from './cropregion/cropregion.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { ContactusComponent } from './contactus/contactus.component';
import { AboutComponent } from './about/about.component';
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
import { FertilizersComponent } from './fertilizers/fertilizers.component';
import { ImpactsComponent } from './impacts/impacts.component';
import { GraphsComponent } from './graphs/graphs.component';
import { FrequencyComponent } from './frequency/frequency.component';
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

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    LandingComponent,
    FooterComponent,
    FirstpageComponent,
    InsertComponent,
    DeleteComponent,
    UpdateComponent,
    ReadComponent,
    CropregionComponent,
    FeedbackComponent,
    ContactusComponent,
    AboutComponent,
    LogoutComponent,
    Register2Component,
    AdaptationComponent,
    TimeperiodComponent,
    CroprotationComponent,
    SoilComponent,
    SeasonalComponent,
    TemperatureComponent,
    RainfallComponent,
    BenenfitsComponent,
    FertilizersComponent,
    ImpactsComponent,
    GraphsComponent,
    FrequencyComponent,
    VideoComponent,
    AgricultureComponent,
    RecommendsComponent,
    InvestmentsComponent,
    ConstraintsComponent,
    HabitsComponent,
    CropComponent,
    WrapComponent,
    AreaComponent,
    SuggestsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
