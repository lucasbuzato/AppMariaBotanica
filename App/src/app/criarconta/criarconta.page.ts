import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-criarconta',
  templateUrl: './criarconta.page.html',
  styleUrls: ['./criarconta.page.scss'],
})
export class CriarcontaPage{

  constructor(private navCtrl: NavController) {}

  irParaPerfil() {
    this.navCtrl.navigateForward('/tabs/perfil');
  }
}
