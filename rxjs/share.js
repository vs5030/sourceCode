//multicast observable
const { Observable } = Rx;
const { tap, share } = RxOperators; 


const observable = new Observable( (subscriber) => {
    subscriber.next(1);
    subscriber.next(2);
    subscriber.next(3);

  	setTimeout( () => {
    	subscriber.next(4);
    }, 500   );
    //subscriber.complete();

    //subscriber.error(new Error('bad entry.'));

}).pipe(
    tap( (value) => console.log('tap value: ', value)),
  	share()
);

observable.subscribe( 
    (value => console.log('next value is: ', value)), 
    (err => console.log('error', err.message)),
    () => console.log('complete')  
);

observable.subscribe (
    (value => console.log('subscribe 2 value is: ', value)), 
    (err => console.log('error', err.message)),
    () => console.log('complete')  

)

new Observable ( () => {} );