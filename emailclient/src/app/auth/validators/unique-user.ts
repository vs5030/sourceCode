import { Injectable } from "@angular/core";
import { AbstractControl, AsyncValidator } from "@angular/forms";
import { catchError, map, of } from "rxjs";
import { AuthService } from "../auth.service";

@Injectable({ providedIn: 'root' })
export class UniqueUser implements AsyncValidator {

    constructor(private authService: AuthService) {
    }
    validate = (control: AbstractControl): any => {
        //console.log(this);
        return this.authService.usernameAvailable(control.value)
            .pipe(
                map(value => {
                    if (value.available) {
                        return null;
                    }
                    else {
                        return { nonUniqueUser: true }
                    }
                }),
                catchError(
                    (err) => {
                        //console.log(err);
                        if (err.error.username) {
                            return of({ nonUniqueUser: true })
                        }
                        else {
                            return of({ connectionError: true })
                        }

                    }
                )
            );
    }
}
