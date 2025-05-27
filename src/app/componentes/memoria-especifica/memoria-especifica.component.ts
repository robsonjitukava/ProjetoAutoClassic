import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-memoria-especifica',
  templateUrl: './memoria-especifica.component.html',
  styleUrls: ['./memoria-especifica.component.css']
})
export class MemoriaEspecificaComponent implements OnInit {
  id: string ='';
  memoria: any = null;


  constructor(private route: ActivatedRoute, private db: AngularFireDatabase, private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id')!;
    this.db.object(`memorias/${this.id}`).valueChanges().subscribe(mem =>{
      this.memoria = mem;
  });

  }

   excluirMemoria() {
    if (confirm('Tem certeza que deseja excluir esta memória?')) {
      this.db.object(`memorias/${this.id}`).remove().then(() => {
        alert('Memória excluída com sucesso!');
        this.router.navigate(['/']);
      });
    }
  }

  editarMemoria(){
    this.router.navigate(['/formulario', this.id]);
  }

  voltarPagina(){
    this.router.navigate(['/']);
  }



}
