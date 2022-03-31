import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppareilService } from '../services/appareil.services';

@Component({
  selector: 'app-single-appareil',
  templateUrl: './single-appareil.component.html',
  styleUrls: ['./single-appareil.component.css'],
})
export class SingleAppareilComponent implements OnInit {
  name: string = 'Appareil';
  status: string = 'Statut';

  constructor(
    private appareilService: AppareilService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.params['id'];
    this.name = this.appareilService.getAppareilById(+id)?.name ?? 'undefined';
    this.status =
      this.appareilService.getAppareilById(+id)?.status ?? 'undefined';
  }
}
