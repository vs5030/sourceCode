import { FormControl } from "@angular/forms";

export class SecurityFormControl extends FormControl {

override setValue(value: string, options: any){
    if(value.length===4){
        super.setValue(this.value, {...options, emitModelToViewChange: true});
        return;
    }
    super.setValue(value, {...options, emitModelToViewChange: true});

}

}
