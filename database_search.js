const HEROES = [
    { id: 1, name: 'Captain America', squad: 'Avengers' },
    { id: 2, name: 'Iron Man', squad: 'Avengers' },
    { id: 3, name: 'Spiderman', squad: 'Avengers' },
    { id: 4, name: 'Superman', squad: 'Justice League' },
    { id: 5, name: 'Wonder Woman', squad: 'Justice League' },
    { id: 6, name: 'Aquaman', squad: 'Justice League' },
    { id: 7, name: 'Hulk', squad: 'Avengers' },
  ];
  
  const findOne = function(arr, query){
      for(const hero of arr){
        let match = true;
        for(const key in query){
            if(query[key] !== hero[key]){
            match = false;
            break;
            }
         }  
         if(!match) continue;
         return hero;
       }
         return null;
    }

console.log(findOne(HEROES, { id: 1 }));