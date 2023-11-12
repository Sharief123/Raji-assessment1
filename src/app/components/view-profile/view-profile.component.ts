import { Component } from '@angular/core';
import { SharingService } from 'src/app/services/sharingSerivec.service';

@Component({
  selector: 'app-view-profile',
  templateUrl: './view-profile.component.html',
  styleUrls: ['./view-profile.component.css']
})
export class ViewProfileComponent {

  userDetails: any;
  constructor(private sharingSharive: SharingService){
    this.sharingSharive.getuserLoginDetails().subscribe((res:any)=>{
      this.userDetails = res;
    })
  }
}
