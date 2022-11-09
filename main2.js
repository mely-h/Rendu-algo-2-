let Tueur  = { 
    name : "jason",
    hp : 100,
    
    }


   class surviv { 
    constructor(name , caracteristique ){
        this.name =name , 
        this.caracteristique=caracteristique
    }
    

   }
     
   const Caract = [
    "blond",
    "nerveux(se)",
    "grand(e) ",
    "sportif(ve)",
    "bavard",
    "peureux(se)", 
     ]
   

    const Prenoms =[ 
        "lea", 
        "mel",
        "popi ",
        "alex",
        "sam",
        "olivia",
        "prisca", 
        "antonie", 
    ] 


 let surviv1=new surviv
( 
 Prenoms[Math.floor(Math.random()* Prenoms.length)], 
 Caract[Math.floor(Math.random()* Caract.length)] 

)    

console.log(surviv1)  

function attaquer (Tueur , surviv){ 
                    if (Tueur>0 && surviv>0)  { 
                     console.log("une attaque peutetre faite") 
                    } 
                    else {
                    let damage=this.attack-pokemon.defense 
                    pokemon.hp -= damages
                    console.log(this.nam+'a attaquer'+pokemon.name+'et lui a infligé'+damages+'il lui reste '+'pokemon.hp'+'hp')
}

  

 function DEAD (Tueur ,surviv ) { 
         while(Tueur>0 ){
          Tueur.attaquer(surviv1)
             if (surviv>0) {
                 console.log(surviv.name +' meurt ')
             } 
             else { 
                 console.log(surviv.Prenoms+"esquive et inflige 10 pde de degats")            } 
          }

         }
                     

 DEAD(Tueur , surviv)
