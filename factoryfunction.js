/* Factory Function Lord of the Rings */

function createCharacter(name,nickName, race, origin, attack, defense) {
    return{
       name, 
       nickName,
       race,
       origin,
       attack,
       defense,
       describe: function(){
            console.log(`${this.name} is a ${this.race} from ${this.origin}.`);
       }
    }
}  
 
     
        // ,
        // evaluateFight: function(character){
        //     let x = this.attack - character.defense;
        //     let y = character.attack - this.defense;
        //     if(x < 0){
        //         let x = 0;
        //   }else if(y < 0){
        //       let y = 0; 
        //     }
        //     console.log(`Your opponent takes ${x} damage and you receive ${y} damage`)
        // } 
   
  



let character1 = createCharacter('Gandalf the White', 'gandalf', 'Wizard', 'Middle Earth', 10, 6)

console.log(character1.describe);
character1.describe();