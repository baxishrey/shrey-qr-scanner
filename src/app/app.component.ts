import { Component, ViewChild, OnInit } from '@angular/core';
import { ZXingScannerComponent } from '@zxing/ngx-scanner';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  @ViewChild('scanner') scanner: ZXingScannerComponent;

  ngOnInit(): void {
    this.scanner.camerasFound.subscribe(res => console.log(res));
  }
}
