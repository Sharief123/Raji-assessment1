import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class SharingService {
    private data: any;

    private userLoginDetails$: BehaviorSubject<any> = new BehaviorSubject(null);

    setuserLoginDetails(details: any) {
        this.userLoginDetails$.next(details);
    }

    getuserLoginDetails(): Observable<any> {
        return this.userLoginDetails$.asObservable();
    }

}