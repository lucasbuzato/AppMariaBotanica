import { Component} from '@angular/core';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-tab5',
  templateUrl: './tab5.page.html',
  styleUrls: ['./tab5.page.scss'],
})
export class Tab5Page{

  CriarConta() {
    this.navCtrl.navigateBack('/tabs/criarconta');
  }
  irParaPerfil() {
    this.navCtrl.navigateForward('/tabs/perfil');
  }
  constructor(private navCtrl: NavController) { }

}
