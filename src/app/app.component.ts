import { Component, ViewChild, OnInit } from '@angular/core';
import { ZXingScannerComponent } from '@zxing/ngx-scanner';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  devices: MediaDeviceInfo[];
  hasDevices: boolean;

  @ViewChild('scanner') scanner: ZXingScannerComponent;
  @ViewChild('video') videoPlayer: HTMLVideoElement;

  ngOnInit(): void {
    const browser = <any>navigator;
    browser.mediaDevices.getUserMedia = (browser.getUserMedia ||
      browser.webkitGetUserMedia ||
      browser.mozGetUserMedia ||
      browser.msGetUserMedia);

      navigator.mediaDevices.getUserMedia({video: true, audio: false}).then(stream => {
        this.videoPlayer.srcObject = stream;

      });
  }
}
