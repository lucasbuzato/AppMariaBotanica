import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-chas',
  templateUrl: './chas.page.html',
  styleUrls: ['./chas.page.scss'],
})
export class ChasPage{

  voltarParaTab1() {
    this.navCtrl.navigateBack('/tabs/tab1');
  }
  constructor(private navCtrl: NavController) { }

}


