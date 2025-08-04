import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TiffinsComponent } from './tiffins/tiffins.component';
import { LunchComponent } from './lunch/lunch.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { authServiceGuard } from './guards/auth-service.guard';
import { SnacksComponent } from './snacks/snacks.component';
import { DinnerComponent } from './dinner/dinner.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
export const routes: Routes = [
    { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    {
      path:'dashboard',
      component:DashboardComponent,
      canActivate:[authServiceGuard]
    },
    {
      path:'tiffins',
      component:TiffinsComponent,
      canActivate:[authServiceGuard]
    },{
      path: 'lunch',
      component: LunchComponent,
      canActivate:[authServiceGuard]
    },{
      path:'login',
      component:LoginPageComponent
    },{
      path:'snacks',
      component:SnacksComponent,
      canActivate:[authServiceGuard]
    },{
      path:'dinner',
      component:DinnerComponent,
      canActivate:[authServiceGuard]
    },{
      path:'404',
      component: PageNotFoundComponent
    },{
      path:'**',
      redirectTo: '404'
    }
     ];
