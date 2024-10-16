import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-mudas',
  templateUrl: './mudas.page.html',
  styleUrls: ['./mudas.page.scss'],
})
export class MudasPage {

  voltarParaTab1() {
    this.navCtrl.navigateBack('/tabs/tab1');
  }
  Irpagmuda() {
    this.navCtrl.navigateBack('/tabs/paginamuda');
  }
  constructor(private navCtrl: NavController) { }
}
