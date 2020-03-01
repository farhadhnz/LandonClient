import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  url = "https://localhost:5001/rooms";
  rooms;

  constructor(private http: HttpClient) {

   }

   getRooms()  {
     this.rooms = this.http.get(this.url);
     return this.rooms;
   }
}

export class Room{
  name: string;
  rate: number;
}