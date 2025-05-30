Projeto AutoClassic

O AutoClassic é uma aplicação web desenvolvida com Angular e integrada ao Firebase Realtime Database. O objetivo é permitir o cadastro, visualização, edição, exclusão e busca de memórias automotivas, incluindo veículos clássicos, com informações detalhadas como modelo, ano, motor e autor da lembrança.

Tecnologias utilizadas
Angular 14+
- Firebase (Realtime Database)
- TypeScript
- HTML5
- CSS

Instalação e execução local

1. Clone o repositório
   
  git clone https://github.com/robsonjitukava/ProjetoAutoClassic.git
   
2.Acesse o diretório do projeto

  cd ProjetoAutoClassic
  
3.Instale as dependências do Angular

  npm install
  
4.Execute o servidor

  ng serve
  
Acesse a aplicação em: http://localhost:4200

Estrutura das pastas
src/
├── app/
│   ├── componentes/
│   │   ├── card/               → Lista os cards com os carros
│   │   ├── memoria-especifica/→ Exibe detalhes de uma memória
│   │   ├── formulario/         → Criação/edição de memórias
│   ├── app-routing.module.ts  → Define as rotas da aplicação
│   ├── app.module.ts          → Configurações principais do app
├── assets/                    → Imagens e ícones


Funcionalidades
✅ Cadastro de novas memórias (formulário)

✅ Listagem de memórias em forma de cards

✅ Visualização detalhada da memória

✅ Edição e exclusão de registros



