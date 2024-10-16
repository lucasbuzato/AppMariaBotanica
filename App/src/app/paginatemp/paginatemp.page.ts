import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-paginatemp',
  templateUrl: './paginatemp.page.html',
  styleUrls: ['./paginatemp.page.scss'],
})
export class PaginatempPage{

  voltarParaTab1() {
    this.navCtrl.navigateBack('/tabs/tab1');
  }
  constructor(private navCtrl: NavController) { }

}
