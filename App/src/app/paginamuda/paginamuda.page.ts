import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-paginamuda',
  templateUrl: './paginamuda.page.html',
  styleUrls: ['./paginamuda.page.scss'],
})
export class PaginamudaPage {

  voltarParaMuda() {
    this.navCtrl.navigateBack('/tabs/mudas');
  }
  constructor(private navCtrl: NavController) { }

}
