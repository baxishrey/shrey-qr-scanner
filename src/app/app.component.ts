import { Component, ViewChild, OnInit } from '@angular/core';
import { ZXingScannerComponent } from '@zxing/ngx-scanner';
import { Result } from '@zxing/library';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  devices: MediaDeviceInfo[];
  hasDevices: boolean;

  currentDevice: MediaDeviceInfo;
  qrResultString: string;
  qrResult: Result;

  hasPermission: boolean;

  @ViewChild('scanner') scanner: ZXingScannerComponent;

  ngOnInit(): void {
    this.scanner.camerasFound.subscribe((devices: MediaDeviceInfo[]) => {
      this.hasDevices = true;

         // selects the devices's back camera by default
      for (const device of devices) {
          if (/back|rear|environment/gi.test(device.label)) {
              this.scanner.changeDevice(device);
              this.currentDevice = device;
              break;
          }
      }
      // this.scanner.changeDevice(devices[0]);
      // this.currentDevice = devices[0];
    });

    this.scanner.camerasNotFound.subscribe(() => this.hasDevices = false);
    this.scanner.scanComplete.subscribe((result: Result) => this.qrResult = result);
    this.scanner.permissionResponse.subscribe((perm: boolean) => this.hasPermission = perm);
  }

  handleQrCodeResult(resultString: string) {
    if (this.qrResultString !== resultString) {
      this.qrResultString = resultString;
      window.open(this.qrResultString, '_blank');
    }
  }
}
