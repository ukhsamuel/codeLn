import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';



@IonicPage()
@Component({
  selector: 'page-postdetails',
  templateUrl: 'postdetails.html',
})
export class PostdetailsPage {
	post: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  	// get post object from passed param
  	this.post = this.navParams.get('post');
  }


}
