const cards = document.querySelectorAll(".cards");
const card_container = document.querySelector(".card");
const timer = document.querySelector("span");
const nav = document.querySelectorAll("nav");
const menu = document.querySelectorAll(".menu");
let card1;
let card2;
let x = 0;
let x2;


RandomCards();
Click(Matching);

menu.forEach( item =>{ 
    item.addEventListener("click",e=>{
        nav[2].style.display = "none";
        nav[1].style.display = "none";
        nav[0].style.display = "flex";
        });
        
});
document.querySelectorAll(".play").forEach( play =>{ 
    play.addEventListener("click",ShowCards);
});

    function RandomCards(){
    cards.forEach(card => 
    {

        let n = Math.round(Math.random()*12);
        card.style.order =  n;  
        card.classList.add("event");

    });
            
    }

function ShowCards(e){
    e.stopPropagation();

        x2  = 0;

    nav.forEach( n =>{ 
        n.style.display = "none";
    });
    
timer.innerHTML="00";
    
cards.forEach(card =>{

    setTimeout(() => {
    card.style.transition = `all 0.5s ease-in-out`;
    card.style.transform = `rotateY( 0deg )`;
    card.classList.remove("event");
    card.style.pointerEvents = "";

    TimeOut();

    }, 1500);

card.style.transition = `all 0.5s ease-in-out`;
card.style.transform = `rotateY( 180deg )`;

                       
});
 
        
        


}

function Click(callback)
{
   
  
cards.forEach(
    card =>{
        card.addEventListener("click", e=>{
 
        e.target.style.transition = `all 0.5s ease-in-out`;
        e.target.style.transform = `rotateY( 180deg )`;
        
        fillCards(e,callback);
        
        

            });

        });

};

function Matching()
{
setTimeout( ()=>{

    Run();

    if (card2 != null)
    {
        if(card1.dataset.key != card2.dataset.key)
        {
        
            card1.style.transform = `rotateY( 0deg )`;
            card2.style.transform = `rotateY( 0deg )`;
            
            card1 = null;
            card2 = null;
        
        }

    }

},1000);

Freeze();


    if (card1.dataset.key == card2.dataset.key)
    {   
        if (card1.id == card2.id)
        {
            card1.style.transform = `rotateY( 0deg )`;

        }

        else if (card1.id != card2.id)
        {
            card1.classList.add("event");
            card2.classList.add("event");
            x++;
        }
            card1 = null;
            card2 = null;

    }    
}

function fillCards(e,callback){

    if (card1 != null && card2 == null)
    {
        card2 =e.currentTarget;
        
    }

    if (card1 == null)
    {
        card1 =e.currentTarget;
        
    }
    if(card2 != null)
    {
    callback();
    }
}

function Freeze()
{
    cards.forEach( 
        card =>{
         card.style.pointerEvents = "none";
    
          });


}

function Run()
{
        
    cards.forEach( 
        card =>{
     if (!card.classList.contains("event"))
        {
      
         card.style.pointerEvents = "";
    
    
        }

    });

}

function TimeOut()
{  

    
    let count = 30; 
    timer.innerHTML= "30";
       let clear = setInterval(() => {
            if(count <= 0)
            {
                document.querySelector(".Loser").style.display=`flex`; 

                cards.forEach(card =>{
                    card.classList.remove("event");
                    card.style.transition = `all 1s ease-in-out`;
                    card.style.transform = `rotateY( 0deg )`;

                timer.innerHTML= count +"0";
                document.querySelector(".left").innerHTML = `00:0${count}`;
                RandomCards();
                clearInterval(clear);

                x = 0;
            });
                
            }



            else if( count > 0 && count < 10)
                {  
            timer.innerHTML= "0"+count;
        
                if (x === 6)
                {
                    document.querySelector(".Winner").style.display=`flex`; 


                    cards.forEach(card =>{
                    card.style.transform = `rotateY( 0deg )`;    
                    card.style.transition = `all 0.5s ease-in-out`;   
                
                    RandomCards();  
                    });
                
                    x = 0;
                    x2 = 1;
                }

                if (x2 == 1)
                {
                    clearInterval(clear);
                    document.querySelector(".left").innerHTML = `00:0${count}`;


                }
                
                }
         
   
            

            else if (count >= 10)
            {
           
            timer.innerHTML= count;
        
            if (x === 6)
            {
                document.querySelector(".Winner").style.display=`flex`; 


                cards.forEach(card =>{
                card.style.transform = `rotateY( 0deg )`;    
                card.style.transition = `all 0.5s ease-in-out`;   
            
                RandomCards();  
                });
            
                x = 0;
                x2 = 1;
            }

            if (x2 == 1)
            {
                console.log(x2);
                clearInterval(clear);
                document.querySelector(".left").innerHTML = `00:${count}`;

            }
        
          
                }

    
            

            
                if (x2 != 1)
                {

            count--;
                }
         }, 1000);   
        

}
