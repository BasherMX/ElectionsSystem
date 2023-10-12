import { NgModule, NgForm } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ControlComponent } from './control/control.component';
import { NewComponent } from './new/new.component';
import { EditComponent } from './edit/edit.component';
import { RouterModule, Routes } from '@angular/router';
import { BotonComponent } from 'src/app/commonComponents/boton/boton.component';
import { AppModule } from 'src/app/app.module';
import { NgxPaginationModule } from 'ngx-pagination';

const rts: Routes = [
  { path: '', redirectTo: 'control', pathMatch: 'full'},
  { path: 'control', component: ControlComponent, pathMatch: 'full' },
  { path: 'edit/:id', component: EditComponent, pathMatch: 'full' },
  { path: 'new', component: NewComponent, pathMatch: 'full' },
];

@NgModule({
  declarations: [
    ControlComponent,
    NewComponent,
    EditComponent
  ],
  imports: [
    CommonModule,
    NgxPaginationModule,
    RouterModule.forChild(rts),
  ]
})
export class PartyesModule { }
