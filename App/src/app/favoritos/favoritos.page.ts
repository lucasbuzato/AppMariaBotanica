import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-favoritos',
  templateUrl: './favoritos.page.html',
  styleUrls: ['./favoritos.page.scss'],
})
export class FavoritosPage {
  voltarParaTab1() {
    this.navCtrl.navigateBack('/tabs/tab1');
  }
  constructor(private navCtrl: NavController) { }

}
