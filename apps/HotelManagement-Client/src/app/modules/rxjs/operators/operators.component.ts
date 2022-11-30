import { Component, OnInit } from '@angular/core';
import { from, map, of, take ,tap, mergeMap, forkJoin, filter,catchError,
  takeUntil, interval, share, shareReplay,fromEvent ,merge, last, Subject,first} from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { concat, pluck, takeWhile } from 'rxjs/operators'; 


@Component({
  selector: 'app-operators',
  templateUrl: './operators.component.html',
  styleUrls: ['./operators.component.css'],
})
export class OperatorsComponent implements OnInit {
  source=[1,2,3,4,5,6,7,8,9,10]
  NOTIFIER = new Subject();


  constructor() { }
  StopObs(){
    this.NOTIFIER.next(1);
  }

  ngOnInit(): void {

    //   Of converts the arguments to observable sequences
    of(1,2,3,4,5,6,7,8,9,10,11,12,13,14,15).pipe(take(5)).subscribe(x=> console.log(x));

    // from creates a observable sequence from an array
    from([1,2,3,4,5]).pipe(

      // take only take two value from above observables
    take(2),

      // maps observables from one type to another
    map(x=>x*x)
    ).subscribe(x=> console.log(x));
    
     // when we want to call our APIs in parallel and do some operations after all responses are received
     forkJoin(
         
      {
        google: ajax.getJSON('https://api.github.com/users/google'),

        microsoft: ajax.getJSON('https://api.github.com/users/microsoft'),

        users: ajax.getJSON('https://api.github.com/users'),

        data:of(1,2,3,4,5).pipe(take(2))
      }

    ).subscribe(x=> console.log(x));
    /**

     * The filter operator will filter the values from source Observable based on

     * the predicate function given

     */
    from(this.source).pipe(

      filter(x=>x%2 ===0)

    ).subscribe(x=> console.log("filter ",x));
    
    //Ajax operator:to fetch the response object that is being returned from API
    //It creates an observable for an Ajax request with either a request object with url, 
    //headers, etc or a string for a URL.

    const obs$ = ajax('https://api.github.com/users?per_page=5').pipe(
     map(userResponse => console.log('users: ', userResponse)),
     catchError(error => {
     console.log('error: ', error);
     return of(error);
    })
   );
 
    obs$.subscribe({
     next: value => console.log(value),
     error: err => console.log(err)
     });

     //share operator :Generate new multicast Observable from the source Observable value
     //in this past data cannot be access by observer 2, its time start after 3 sec

    const observableOne = interval(1000).pipe(share());

      observableOne.subscribe((emittedData) =>
      console.log(`observer 1: ${emittedData}`)
     );

      setTimeout(() => {
      observableOne.subscribe((emittedData) =>
      console.log(`observer 2: ${emittedData}`)
       );
    }, 3000);

    //share-replay operator:every observer will start with 0 sec
    

    const observablethis = interval(1000).pipe(share());

      observablethis.subscribe((emittedData) =>
      console.log(`observer 1: ${emittedData}`)
     );

      setTimeout(() => {
      observablethis.subscribe((emittedData) =>
      console.log(`observer 2: ${emittedData}`)
       );
    }, 3000);
     
    // Converts the arguments to an observable sequence
    of(10, 20, 30)
   .subscribe({
    next: value => console.log('next:', value),
    error: err => console.log('error:', err),
    complete: () => console.log('the end'),
  });

  // Merge() operator is a join operator that is used to turn
  // multiple observables into a single observable
  let list1 = of(1, 2, 3, 4, 5);  
  let list2 = of(6, 7, 8, 9, 10)  
  let final_val = merge(list1, list2);  
  final_val.subscribe(x => console.log(x));  

  //take until
  const obs1=interval(500).pipe(takeUntil(this.NOTIFIER));
  const obs2=interval(500).pipe(takeUntil(this.NOTIFIER));
  const newobs=merge(obs1,obs2).subscribe(x => console.log(x));
  

   of(1, 2, 3, 4, 5)
   .pipe(  
    tap(x=> console.log(x)),  
     map(n => {  
       if (n === 4) {   
         throw 'four!';  
       }  
       return n;  
     }),
     catchError(err => {   
       throw 'error in source. Details: ' + err;  
     })  
   )
   
   .subscribe({
     next: x => console.log(x),  
     error: err => console.log(err)   
   });

   // Merge-map
   const letters = of('a', 'b', 'c');
   const result = letters.pipe(
  mergeMap(x => interval(1000).pipe(map(i => x + i)))
  );
  //concat
  concat(
    of(1, 2, 3),
    of(4, 5, 6),
    of(7, 8, 9)
  )

  //pluck
  const source = from([
    { name: 'Joe', age: 30, job: { title: 'Developer', language: 'JavaScript' } },
  //will return undefined when no job is found
    { name: 'Sarah', age: 35 }
  ]);
  const example = source.pipe(pluck('job', 'title'));
  const subscribe1 = example.subscribe(val => console.log(val));

  //takeWhile
const source$ = of(1, 2, 3, 4, 5);
//allow values until value from source is greater than 4, then complete
source$
  .pipe(takeWhile(val => val <= 4))
  .subscribe(val => console.log(val));

// First
const arr = from([1, 2, 3, 4, 5]);
//no arguments, emit first value
const x = arr.pipe(first());
//output: "First value: 1"
const subscribe = x.subscribe(val => console.log(`First value: ${val}`));

//last
const var1 = from([1, 2, 3, 4, 5]);
//no arguments, emit last value
const y = var1.pipe(last());
//output: "Last value: 5"
const subscribe2 = y.subscribe(val => console.log(`Last value: ${val}`));
}
}


