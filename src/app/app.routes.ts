import { Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ModifyListItemComponent } from './modify-list-item/modify-list-item.component';

let HomeComponent;
export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'modify-list-item', component: ModifyListItemComponent },
  { path: '**', component: PageNotFoundComponent }
];
