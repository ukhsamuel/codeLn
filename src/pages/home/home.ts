import { Component } from '@angular/core';
import { NavController, Loading, LoadingController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { PostdetailsPage } from '../../pages/postdetails/postdetails'


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
	posts: any;
	loading: Loading;

  constructor(public navCtrl: NavController, public http: Http , public loadingCtrl : LoadingController) {

  }

  ionViewDidLoad(){
  	this.loadPosts();
  }

  // page loading indicator
  createLoader(){
  	this.loading = this.loadingCtrl.create({
  		content: 'loading...'
  	});
  	this.loading.present();
  }

	// load all posts on page start
  loadPosts(){
  	// call loader
  	this.createLoader();
  	this.http.get('https://jsonplaceholder.typicode.com/photos')
  		.map(res => res.json())
  		.subscribe(data =>{
  			// dismiss loader
  			this.loading.dismiss();
  			let p = data;
  			this.posts = p.slice(0,10);
  			// console.log(data);
  		})
  }

  // view post details
  viewPost(_post){
  	this.navCtrl.push(PostdetailsPage, {post:_post})
  }

}
