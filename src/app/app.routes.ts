import { Routes } from '@angular/router';
import { LandingPageComponent } from './components/LandingPage/LandingPage.component';
import { FormComponent } from './components/Form/Form.component';
import { PageNotFoundComponent } from './components/PageNotFound/PageNotFound.component';

export const routes: Routes = [
  { path: '', component: LandingPageComponent},
  { path: 'app-form', component: FormComponent },
  { path: '**', component: PageNotFoundComponent}
];
