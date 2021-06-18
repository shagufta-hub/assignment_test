import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'assignment';
  hexavalue:string;
  myhexacode:string;
  errovalue:string;
  isError:boolean=false;
  bordercolor:string;
  getValue(value){
    if(value==''){
      this.bordercolor='blue';
      this.myhexacode='blue;'
      this.isError=false;
      this.errovalue='';
    }
    else if(this.isValidcolor(value)){
      this.bordercolor='blue';
      this.hexavalue=value;
      this.myhexacode=this.hexavalue;
      this.isError=false;
      this.errovalue='';
      

    }else {
      this.bordercolor='red';
      this.isError=true;
      this.myhexacode=''
      this.errovalue="Invalid hex code";
    }

  }
 
 isValidcolor(color: string): boolean {
		if (color != null) {
			if ((color.length > 2 && color.length < 9)) {
				const namePattern = '#+([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$'
				if (color.match(namePattern)) {
					return true;
				}
				else {
					return false;
				}
			} else {
				return false;
			}
		} else {
			return false;
		}

	}
}
