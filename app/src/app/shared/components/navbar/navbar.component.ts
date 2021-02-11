import { Component, OnInit } from "@angular/core";

@Component({
    selector: "navbar",
    styleUrls: ["./navbar.component.scss"],
    templateUrl: "./navbar.component.html",
  })

  export class NavbarComponent implements OnInit {
      constructor(){}

      ngOnInit(){
   
      }
      
      toggle(){
        var x = document.getElementById("navigation");
        var bar1 = document.getElementsByClassName('bar1');
        var bar2 = document.getElementsByClassName('bar2');
        x.classList.toggle("openMenu");
    
        if(x.classList.contains("openMenu")){
          x.style.left = "0";
          bar1[0].classList.add("change");
          bar2[0].classList.add("change");
        }
        else{
            x.style.left = "100%"
            bar1[0].classList.remove("change");
            bar2[0].classList.remove("change");
        }
      }
  }

