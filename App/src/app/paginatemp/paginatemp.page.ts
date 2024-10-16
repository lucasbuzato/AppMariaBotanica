import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-paginatemp',
  templateUrl: './paginatemp.page.html',
  styleUrls: ['./paginatemp.page.scss'],
})
export class PaginatempPage{

  voltarParaTemperos() {
    this.navCtrl.navigateBack('/tabs/temperos');
  }
  constructor(private navCtrl: NavController) { }

}
