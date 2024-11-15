import { Injectable,inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
   private baseUrl=environment.urlServidor
   private http=inject(HttpClient)
  
   constructor() { }
   loginConNest(credenciales:any){
    return this.http.get<any>(`${this.baseUrl}/todos`);
   }
   registroConNest(datos:any){
    return this.http.post<any>(`${this.baseUrl}/register`,datos);
   }
}
