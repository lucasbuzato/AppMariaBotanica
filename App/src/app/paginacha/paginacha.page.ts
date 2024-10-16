import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-paginacha',
  templateUrl: './paginacha.page.html',
  styleUrls: ['./paginacha.page.scss'],
})
export class PaginachaPage {

  voltarParaChas() {
    this.navCtrl.navigateBack('/tabs/chas');
  }
  constructor(private navCtrl: NavController) { }
}
