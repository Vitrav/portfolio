import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-switch-button',
  templateUrl: './switch-button.component.html',
  styleUrls: ['./switch-button.component.scss']
})
export class SwitchButtonComponent implements OnInit {
  @Input() isChecked = false;
  constructor() { }

  ngOnInit(): void {
   
  }

  checkMode(event: any){
    console.log(event);
 }
//  {
// //     var mode = <HTMLInputElement>document.getElementById("color-scheme");
// //     console.log("test");
// //   if (mode.checked) {
// //   console.log("DARKMODE")
// // } else {
// //  console.log("LIGHTMODE")
// }
//   }
  

}
