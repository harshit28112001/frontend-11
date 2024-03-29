import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  constructor(private http:HttpClient) { }
  generateToken(credentials:any)
  {
    localStorage.setItem("name",credentials.username)
    return this.http.post(`http://loginharshit.itcblogs.xyz/auth/login`,credentials)
  }
  loginUser(token)
  {
    localStorage.setItem("token",token)
    return true;
  }
  //to check user is logged in or not
  isLoggedIn()
  {
    let token=localStorage.getItem("token");
    if(token==undefined || token==='' || token==null)
    {
      return false;
    }
    else
    {
      return true;
      
    }
  }

  logout(){
    localStorage.removeItem('token');
    return true;
  }
  getToken()
  {
    return localStorage.getItem("token")
  }
}

