import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Blogs';
  show=true;

  ChangeShow()
  {
    alert(this.show);
    this.show=!this.show;
  }

  color='blue1';
  data=[1,2,3,4,5];
  names=['push','raj','sonu','mishra'];
  userDetails=[
{
  name:'push',
  age:25
},
{
  name:'mishra',
  age:20
}

  ];









userData=[
  {name:'a',age:10,accounts:['fb','insta','gmail']},
  {name:'b',age:11,accounts:['locobuzz','linkedin','gmail']}
];














}
