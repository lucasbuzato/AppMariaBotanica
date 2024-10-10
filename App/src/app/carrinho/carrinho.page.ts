import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.page.html',
  styleUrls: ['./carrinho.page.scss'],
})
export class CarrinhoPage {

  voltarParaTab1() {
    this.navCtrl.navigateBack('/tabs/tab1');
  }
  constructor(private navCtrl: NavController) { }

}
