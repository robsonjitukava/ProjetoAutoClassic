// Importa o módulo de formulários do Angular, usado para trabalhar com formulários (template-driven)
import { FormsModule } from '@angular/forms';

// Importa o decorador NgModule, que define um módulo Angular
import { NgModule } from '@angular/core';

// Importa o BrowserModule, necessário para qualquer aplicação Angular que rode no navegador
import { BrowserModule } from '@angular/platform-browser';

// Importa o módulo de rotas definido na aplicação (geralmente criado com Angular CLI)
import { AppRoutingModule } from './app-routing.module';

// Importa o componente principal da aplicação
import { AppComponent } from './app.component';

// Importa os componentes personalizados (cabeçalho e rodapé, neste caso)
import { CabecalhoComponent } from './componentes/cabecalho/cabecalho.component';
import { RodapeComponent } from './componentes/rodape/rodape.component';
import { FormularioComponent } from './componentes/formulario/formulario.component';
import { CardComponent } from './componentes/card/card.component';

import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { environment } from '../environments/environment';
import { MemoriaEspecificaComponent } from './componentes/memoria-especifica/memoria-especifica.component';

// Decorador que define este arquivo como um módulo Angular
@NgModule({
  // Declara os componentes que pertencem a este módulo
  declarations: [
    AppComponent,
    CabecalhoComponent,
    RodapeComponent,
    FormularioComponent,
    CardComponent,
    MemoriaEspecificaComponent
  ],
  // Importa outros módulos necessários para este funcionar corretamente
  imports: [
    BrowserModule,      // Módulo padrão para rodar Angular no navegador
    AppRoutingModule,   // Módulo de rotas (definido separadamente)
    FormsModule,       // Módulo para usar formulários com [(ngModel)]
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule  
  ],
  // Define os serviços (providers) disponíveis no escopo deste módulo
  providers: [],
  // Define qual componente será carregado inicialmente ao iniciar o app
  bootstrap: [AppComponent]
})
// Exporta a classe do módulo para ser usada na aplicação
export class AppModule { }
