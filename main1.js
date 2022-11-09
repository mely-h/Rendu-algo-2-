// // int
// let age =21
// // bigint 
// let etoile =10000n 
// // float 
// let price=19.99
// // boolean 
// let faceid=true 
// //array 
// const nains=["simplet","dormeur","grincheux"] 
// //objet 
// let rasoir ={ 
//     nom :"rasoir", 
//     price:2  
// } 
// let number1 =2 
// let number2 =3 
//  if(number1==number2)
//  { 
//     console.log("cest bon ! le nombre 1 est" + number2 + "et le nombre 2 est " + number2)
//  }
//  else {
//     console.log("cestpas bon ! le nombre 1 est" + number2 + "et le nombre 2 est " + number2) 

//  }
// //init 
// let a =4
// let b =4 
// let c =3
// if(c<b && a+b!=3) {
//     console.log("ok")
// }
// else {
//     console.log("raté")
// }


 
// switch (a) {
//   case b:
//     console.log('egal a b');
//     break;
//   case c:
//     console.log('egal a c');
//     break;
//   default:
//     console.log(`egal a rien `);
// }
// let a =24
// for (let  i=0 ; i<a; i++ ) {
//     console.log('oklm')

// }


// let f=0 
// while(f <= 10){
//     f++ 
//     if (a==5){ 
//         continue
//     }
    

//      if(a==8){
//     break
//     }
//     console.log(f)
//  }


//  let s=6
//  let g=3 
//  function addition(numero1 , numero2){
//     console.log(numero1 + numero2)
//  }
//  addition(s,g) 

 
// let x="jean"
// let q="paul"
// let result=''

// function vraii(prenom1 , prenom2) {
//    if (prenom1==prenom2) { 
//     return true ; 
//    } else {
//    return false
//     }
// }
// console.log(vraii(x , q))

//let names=[]  
   // names.push("vincent" , "paul" , "arthur")
   // names.forEach ((name ) => { 
     //   name=name+" vas a la peche"
      //  console.log(name)
   // })


//    class eleve { 
//     constructor (nom , matiere1 , matiere2 ) { 
//         this.nom=nom 
//         this.matiere2=matiere2 
//         this.matiere1=matiere1
    
//     }
//     getmatiere1(){
//        // console.log(this.matiere1)  // si on met return this.defense sa remplace le console.Log et cest mieux psk on peux interagir avec lelement 
//         return this.matiere1
//     } 
//     getmatiere2() {
//         return this.matiere2 

//     }

//    }
//   let mely= new eleve('mely','css','francais ')
//   let alexis= new eleve ('alexis', 'math','physique')
// //   console.log(mely)


// //mely.getmatiere1() 
// console.log(mely.getmatiere2 () , alexis.getmatiere1()) 









//     class pokemon {
//         consructor (name , attack , defense , hp , luck) {
//             this.name=name 
//             this.attack=attack 
//             this.defense=defense 
//             this.luck=luck 
//             this.hp=hp 
//         } 

//         islucky(){              
//         return this.luck > Math.random()
//         } 
//         attackpokemon(pokemon){
//            if(pokemon.isluchy() ) { 
//             console.log(pokemon.name + 'a esquiver') 
//            } 
//            else {
//             let damage=this.attack-pokemon.defense 
//             pokemon.hp -= damages
//             console.log(this.nam+'a attaquer'+pokemon.name+'et lui a infligé'+damages+'il lui reste '+'pokemon.hp'+'hp')
//            }
//         }
//      } 



//  let pokemon1=new pokemon('magmar', 70 , 60 , 5 , 0.7)
//  let pokemon2 =new pokemon ('matchup' , 80 , 65 , 5,0.6) 

//  while (pokemon1.hp>0 && pokemon2.hp>0){ 
//     pokemon1.attackpokemon(pokemon2) 
//     if(pokemon2.hp<=0){
//         console.log(pokemon2.name + 'est mort ')
//         break 
//     }
//     pokemon2.attackpokemon(pokemon1)
//     if(pokemon1.hp<=0){
//         console.log(pokemon1.name+'est mort')
//     }
//  }  


let person  = { 
name : "john",
hp : 10,

}
let trajet={
    changes:0,
    redlights:30, 
}
const musics =[ 
    "wejdene-anissa", 
    "keenv-rien qu'une vie",
    "m.pokora-a no cates ",
    "lartiste-mon pays",
    "Morose de Damso",
] 

// playMusic = une fonction qui genere un chiffre entre 0 et 4 et stocké le résultat  


function playmusic()
{
 return Math.floor(Math.random() * (5 - 0 + 1)) + 0;
}

console.log(playmusic())

function taxi(person,trajet){ 
    while(trajet.redlights>0){
        if(person.hp > 0 ) {
            if(playmusic()==0 ){
                person.hp -=1
                trajet.redLights-=1
                console.log(person.name + ' mins cest anissa de wejwejjj , john chnage de taxi ')
            } 
            else  { 
                console.log('la musique est ' + musics[playmusic()+ 'redlights'])

            }

            
            // si playMusic = 0, on retire un point de vie
            // sinon tu dis quel music passe
            // retire 1 feu a redlight
            
        } 
        else if (trajet.redLights==0) { 
            console.log(john +'est arriver chez lui')

        } else if (person.hp==0) { 
            console.log(person.name +'explose') 
        } 
    } 
} 

taxi(person, trajet)