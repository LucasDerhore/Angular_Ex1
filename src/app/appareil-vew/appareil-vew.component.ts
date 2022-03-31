import { Component, OnInit } from '@angular/core';
import { AppareilService } from '../services/appareil.services';

@Component({
  selector: 'app-appareil-vew',
  templateUrl: './appareil-vew.component.html',
  styleUrls: ['./appareil-vew.component.css'],
})
export class AppareilVewComponent implements OnInit {
  isAuth = false;

  lastUpdate = new Date();

  appareils: any[];

  constructor(private appareilService: AppareilService) {
    setTimeout(() => {
      this.isAuth = true;
    }, 4000);
  }

  ngOnInit() {
    this.appareils = this.appareilService.appareils;
  }

  onAllumer() {
    this.appareilService.switchOnAll();
  }

  onEteint() {
    this.appareilService.switchOffAll();
  }
}
