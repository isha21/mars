import {Routes} from '@angular/router';
import {WelcomeComponent} from './components/welcome/welcome.component';
import {RegisterComponent} from './components/register/register.component';
import {EncounterComponent} from './components/encounter/encounter.component';
import {ReportComponent} from './components/report/report.component';
import {NotFoundComponent} from './components/not-found/not-found.component';



export const appRoutes: Routes = [
  {path: '', component: WelcomeComponent},
  {path: 'register', component:RegisterComponent},
  {path: 'encounters',component:EncounterComponent},
  {path: 'report', component:NotFoundComponent},
];