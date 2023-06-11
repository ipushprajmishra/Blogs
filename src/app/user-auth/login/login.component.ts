import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
 counter=0;
  IncreaseCounter()
  {
    this.counter++;
  }

  DecreaseCounter()
  {
    this.counter--;
  }

  GetCounter(type:string='sub')
  {

    type==='add'?this.counter++:this.counter--;

  }

GetLoginPassword()
{

  return "This is login compoenent";
}

// NewFunction(name:string)
// {
//   alert("function called :" + name);
// }

// SetData(data:any)
// {
//   console.log(data);
// }

// NewFunction1()
// {
//   alert("function called alert");
// }
// displayValue='';
// GetText(name:any)
// {
//   this.displayValue=name;
// }
}
