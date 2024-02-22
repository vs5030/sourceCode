import { FormControl } from "@angular/forms";

export class SecurityFormControl extends FormControl {

override setValue(value: string | null, options: any){
    if(value===null){
        super.setValue(null, {...options, emitModelToViewChange: true});
        return;
    }
    if (value.match(/[^0-9]/gi)){
        super.setValue(this.value, {...options, emitModelToViewChange: true});
        // console.log('valuealpha:', value);
        // console.log('this.valuealpha:', this.value);
        return;
    }
    if(value.length===4){
        super.setValue(this.value, {...options, emitModelToViewChange: true});
        return;
    }
    super.setValue(value, {...options, emitModelToViewChange: true});

}

}
