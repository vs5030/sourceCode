import { Injectable } from "@angular/core";
import { AbstractControl, FormGroup, Validator } from "@angular/forms";

@Injectable({
    providedIn: 'root'
})
export class MatchPassword implements Validator {

    validate(formGroup: AbstractControl) {
        if (formGroup.get('password')?.value === formGroup.get('confirmPassword')?.value) {
            return null;
        }
        else {
            return { passwordDoesNotMatch: true }
        }
    }

}
