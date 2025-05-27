import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormularioComponent } from './componentes/formulario/formulario.component';
import { CardComponent } from './componentes/card/card.component';
import { MemoriaEspecificaComponent } from './componentes/memoria-especifica/memoria-especifica.component';

const routes: Routes = [
  { path: '', component: CardComponent },
  { path: 'formulario', component: FormularioComponent },
  { path: 'memoria/:id', component: MemoriaEspecificaComponent },
  { path: 'formulario/:id', component: FormularioComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
