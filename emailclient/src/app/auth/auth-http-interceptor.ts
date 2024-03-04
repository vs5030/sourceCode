import { HttpEvent, HttpEventType, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, tap } from "rxjs";

@Injectable()
export class AuthHttpInterceptor implements HttpInterceptor {

intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>{
    const modifiedReq=req.clone(
        { withCredentials: true }
    );
    return next.handle(modifiedReq);
    // .pipe(
        // tap((val)=> {
        //     if (val.type === HttpEventType.Sent){
        //         console.log('request was sent', HttpEventType );
        //     }
        //     if (val.type === HttpEventType.User){
        //         console.log('event type user');
        //     }
        //     if (val.type === HttpEventType.Response){
        //         console.log('response received', HttpEventType.Response)
        //     }
        //     console.log(val);
        //     console.log(modifiedReq);
        // })
    // );
}

}
