import { FormControl } from "@angular/forms";

export class DateFormControl extends FormControl {
    override setValue(value:string | null, options: any){
        // console.log('valueInitial:', value);
        // console.log('this.valueInitial:', this.value);
        if(value===null){
            super.setValue(null, {...options, emitModelToViewChange: true});
            return;
        }
        if (value.match(/[^0-9|\/]/gi)){
            super.setValue(this.value, {...options, emitModelToViewChange: true});
            // console.log('valuealpha:', value);
            // console.log('this.valuealpha:', this.value);
            return;
        }
        if (value.length>5){
            super.setValue(this.value, {...options, emitModelToViewChange: true});
            // console.log('value55:', value);
            // console.log('this.value55:', this.value);
            return;
        }
        if(value.length===2 && this.value.length===3) {
            super.setValue(value, {...options, emitModelToViewChange: true});
            // console.log('value23:', value);
            // console.log('this.value23:', this.value);
            return;
        }
        if(value.length===2) {
            super.setValue(value + '/', {...options, emitModelToViewChange:true});
            // console.log('this.value22:', this.value);
            // console.log('value22:', value);

            return;
        }
        if(value.length === 3) {
            super.setValue(value.slice(0, -1), {...options, emitModelToViewChange: true});
            // console.log('valueAfterSlice:', value);
            // console.log('this.valueAfterSlice:', this.value);
            return
        }
        
        super.setValue(value, {...options, emitModelToViewChange: true});
        // console.log('valueLast:', value);
        // console.log('this.valueLast:', this.value);

}

}