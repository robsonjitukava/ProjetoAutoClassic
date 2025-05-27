import { Component, Input, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

 carros: any[] = [];

  constructor(private db:AngularFireDatabase, private router: Router) { }

  ngOnInit(): void {
    this.db.list('memorias').snapshotChanges().subscribe
    (dados =>{this.carros = dados.map(item => ({
      key: item.key,
      ...item.payload.val() as any
    }));
  });
  }

   exibirDetalhes(id: string): void {
    this.router.navigate(['/memoria', id]);
  }

}
