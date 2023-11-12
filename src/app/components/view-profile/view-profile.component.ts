import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SharingService } from 'src/app/services/sharingSerivec.service';

@Component({
  selector: 'app-view-profile',
  templateUrl: './view-profile.component.html',
  styleUrls: ['./view-profile.component.css']
})
export class ViewProfileComponent {

  userDetails: any;
  constructor(private sharingSharive: SharingService, private router: Router){
    this.sharingSharive.getuserLoginDetails().subscribe((res:any)=>{
      this.userDetails = res;
    })
  }

  changePassword(){
    this.router.navigate(['/change-password']);
  }

  logout(){
    this.router.navigate(['/login']);
  }
}
