import {Component, OnInit} from "@angular/core";
import {Router} from '@angular/router';

@Component({
    selector: "app",
    templateUrl: "./app/app.html",
    styleUrls : ["./app/app.css"]
})
export class AppComponent implements OnInit {
	toggle:boolean;

	constructor(private router:Router){}

	navToggle(){
		if(this.toggle){
			document.getElementById("mySidenav").style.width = "300px";
			document.getElementById("menu").style.marginRight = "305px";
			this.toggle = false;
		}else{
			document.getElementById("mySidenav").style.width = "0";
			document.getElementById("menu").style.marginRight = "10";
			this.toggle = true;
		}	
	}

	navgiation(menu:String){
		if(menu==='list'){
			this.router.navigate(['/listusers']);
		}else{
			this.router.navigate(['/adduser']);
		}
	}

    ngOnInit() {
        console.log("Application component initialized ...");
        this.toggle = true;
    }
}