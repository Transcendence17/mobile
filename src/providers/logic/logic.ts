import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class LogicProvider 
{
  host: string = "http://localhost:81/ipheya/core/MobileRequests/";  
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
     return this.http.get(this.host+"getRequest.php?allemployees=1").map(data=>data.json());
  }
  
  getAllTasks()
  {
    return this.http.get(this.host+"getRequest.php?alltasks=1").map(data => data.json());
  }

  getAllObsevations()
  {
      return this.http.get(this.host+"getRequest.php?allobservations=1").map((data)=> data= data.json());
  }

  updateComplete(idpar,completepar)
  {
    let data = JSON.stringify({id : idpar, complete: completepar});
    return this.http.post(this.host+"updateObsevation.php", data)
      .map( res=> res.json());
  }


  login(userpar)
  {
    let user = JSON.stringify(userpar);
    return new Promise((resolve, reject)=>{
      this.http.post(this.host+"mobile_auth",user).map(res=>res.json()).subscribe((success)=>{
        resolve(success);
        console.log(success);
      },(error)=>{
        reject(error);
      })
    });
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

