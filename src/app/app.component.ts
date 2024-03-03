import { Component } from '@angular/core';
import { FormControl , FormGroup, Validators , ReactiveFormsModule} from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'qrcodegenerator';
  qrData = "";
  message = "Please enter some content to generate QR code";
  qrCodeDownloadLink: SafeUrl = '';
  constructor(public snackBar:MatSnackBar) {}
  
  generateQR = new FormGroup({
    qrcodeString: new FormControl('',Validators.required)
  });
  generate(){
  
    if(this.generateQR.controls['qrcodeString'].value != ""){
      this.qrData = this.generateQR.value['qrcodeString'];
    }

  }

  onChangeURL(url: SafeUrl){
    this.qrCodeDownloadLink= url;
  }
}
