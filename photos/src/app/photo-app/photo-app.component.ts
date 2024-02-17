import { Component} from '@angular/core';
import { GetPhotoService } from '../get-photo.service';

@Component({
  selector: 'app-photo-app',
  templateUrl: './photo-app.component.html',
  styleUrl: './photo-app.component.css'
})
export class PhotoAppComponent {

  results:string = '';

  constructor(private photoService: GetPhotoService){} 

  getPhotoFromUnSplash(){
    return this.photoService.getPhoto().subscribe((res) => {
      console.log(res);
      this.results = res;

    });

  }

}
