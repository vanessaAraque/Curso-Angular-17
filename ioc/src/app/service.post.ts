import { HttpClient } from "@angular/common/http";
import { lastValueFrom } from "rxjs";

export class ServicePost<Req,Res>{
    constructor(private url:string, private path:string, private http:HttpClient){

    }

    save(entity:Req):Promise<Res>{
        const _url = `${this.url}/${this.path}`
        return lastValueFrom(this.http.post<Res>(_url, entity))
    }
}