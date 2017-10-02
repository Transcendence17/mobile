import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class LogicProvider 
{
  host: string = "http://localhost:81/ipheya/core/MobileRequests/getRequest.php?";  
  constructor(public http: Http) 
  {
    console.log('Hello LogicProvider Provider');
  }

  //th make sure eventy component use one local host.
  getHost()
  {
    return this.host;
  }

  getAllEmployees()
  {
     return this.http.get(this.host+"allemployees=1").map(data=>data.json());
  }
  
  getAllTasks()
  {
    return this.http.get(this.host+"alltasks=1").map(data => data.json());
  }

  getAllObsevations()
  {
      return this.http.get(this.host+"allobservations=1").map((data)=> data= data.json());
  }

  authUser()
  {
    return new Promise ((resolve)=>{
      if(localStorage.getItem('id')!=null)
      {
        resolve(true);
      }
      else
      {
        resolve(false);
      }
    });
  }

  logout()
  {
    return new Promise((resolve)=>
    {
      localStorage.setItem('id',null);
      resolve(false);
    });
  } 
}

