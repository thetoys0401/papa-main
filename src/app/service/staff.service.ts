import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})
export class StaffService {
    private url = `${environment.serviceUrl}/staff`
    constructor(private http:HttpClient) {}

    login(login: any){
        return this.http.post<any>(`${this.url}/login`, login)
        .pipe(map((res) => {
            return res;
          }));
    }
}
