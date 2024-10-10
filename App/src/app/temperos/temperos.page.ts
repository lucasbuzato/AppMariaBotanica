import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-temperos',
  templateUrl: './temperos.page.html',
  styleUrls: ['./temperos.page.scss'],
})
export class TemperosPage {

  voltarParaTab1() {
    this.navCtrl.navigateBack('/tabs/tab1');
  }
  constructor(private navCtrl: NavController) { }

}
