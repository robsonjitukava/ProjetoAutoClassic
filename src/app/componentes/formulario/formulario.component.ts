import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  titulo: string = '';
  desc: string = '';
  modelo: string = '';
  ano: number | null = null;
  motor: string = '';
  conservacao: string = '';
  data: string = '';
  autor: string = '';
  img: string = '';
  carroId: string | null = null;

  constructor(private db: AngularFireDatabase, private router:Router, private route: ActivatedRoute) { }

    ngOnInit(): void {
      const id = this.route.snapshot.paramMap.get('id');
      if(id){
        this.carroId =id;
        this.db.object(`memorias/${id}`).valueChanges().subscribe((dados: any) => {
        if (dados) {
         this.titulo = dados.titulo;
          this.desc = dados.desc;
          this.modelo = dados.modelo;
          this.ano = dados.ano;
          this.motor = dados.motor;
          this.conservacao = dados.conservacao;
          this.data = dados.data;
          this.autor = dados.autor;
          this.img = dados.img;
      }
    });
    
  }
}

  async arquivoSelecionado(event:any){
    const file = event.target.files[0];
    if(file){
      const leitor = new FileReader
      leitor.onload = () => this.img = leitor.result as string;
      leitor.readAsDataURL(file);
    }
  }

  SalvarFormulario(formulario: NgForm){
    if (!this.titulo || !this.desc || !this.modelo || !this.ano || !this.motor || !this.conservacao || !this.data || !this.autor || !this.img) {
    alert('Por favor, preencha todos os campos obrigatórios.');
    return; }

    const memoria = {
      titulo: this.titulo,
      modelo: this.modelo,
      ano: this.ano,
      desc: this.desc,
      autor: this.autor,
      img: this.img,
      motor: this.motor,
      conservacao: this.conservacao,
      data: this.data
  };

   if (this.carroId) {
      this.db.object(`memorias/${this.carroId}`).update(memoria)
        .then(() => {
          alert('Memória atualizada com sucesso!');
          formulario.reset();
          this.router.navigate(['/']);
        })
        .catch((error: any) => {
          console.error('Erro ao atualizar:', error);
          alert('Erro ao atualizar a memória.');
        });
    } else {
      this.db.list('memorias').push(memoria)
        .then(() => {
          alert('Memória salva com sucesso!');
          formulario.reset();
          this.router.navigate(['/']);
        })
        .catch((error: any) => {
          console.error('Erro ao salvar:', error);
          alert('Erro ao salvar a memória.');
        });
    }
  }
}

