import { AbstractControl } from "@angular/forms";

export class CustomValidator {

    static addition(target: string, sourceOne: string, sourceTwo: string) {
        return (form: AbstractControl) => {
            //const { a, b, answer } = form.value;
            const valueOne = form.value[sourceOne];
            const valueTwo = form.value[sourceTwo];
            const sum = form.value[target];
            if (valueOne + valueTwo === parseInt(sum)) {
                return null;
            }
            return {
                addition: true
            };
        }
}


}
