import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  public add(key: string, data: any): void {
    localStorage.setItem(key, JSON.stringify(data));
  }

  public get(key: string): any {
    const data: string | null = localStorage.getItem(key);

    if (data) {
      return JSON.parse(data);
    }

    return null;
  }

  public remove(key: string): void {
    localStorage.removeItem(key);
  }

  public getData(): any {
    return this.get('sb-jzfegpsbaxtsanqvzcid-auth-token') || {};
  }

  public getToken(): any {
    return this.getData().access_token || "";
  }

  public getUserNameOrEmail(): any {
    console.log(this.getData());
    return this.getData().user.user_metadata.user_name || this.getData().user.email || "";
  }




}
