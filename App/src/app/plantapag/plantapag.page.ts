import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-plantapag',
  templateUrl: './plantapag.page.html',
  styleUrls: ['./plantapag.page.scss'],
})
export class PlantapagPage {

  voltarParaTab4() {
    this.navCtrl.navigateBack('/tabs/tab4');
  }
  constructor(private navCtrl: NavController) { }


}
