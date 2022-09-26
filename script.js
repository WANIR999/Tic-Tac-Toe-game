let currentPlayer = "X"
const  doc= document.querySelectorAll(".box");

function startGame(){
    fr=document.getElementById('first').value;
    sc=document.getElementById('seconde').value;
    window.localStorage.setItem('first',fr);
    window.localStorage.setItem('seconde',sc);
    document.getElementById("container1").classList.add("d-none");
    document.getElementById("container2").classList.remove("d-none");
    document.getElementById('firstn').innerText = window.localStorage['first']
    document.getElementById('seconden').innerText = window.localStorage['seconde']
}
function clicked(id){
      if(document.getElementById(id).innerText==""){  
        document.getElementById(id).innerText = currentPlayer
        window.localStorage.setItem(id,currentPlayer)
        setTimeout(checkForWinner, 300);
        checking();
        currentPlayer = currentPlayer == "X" ? "O" : "X"

    }}

    function checkForWinner(){
        let a=window.localStorage.getItem('0');
        let b=window.localStorage.getItem('1');
        let c=window.localStorage.getItem('2');
        let d=window.localStorage.getItem('3');
        let e=window.localStorage.getItem('4');
        let f=window.localStorage.getItem('5');
        let g=window.localStorage.getItem('6');
        let h=window.localStorage.getItem('7');
        let i=window.localStorage.getItem('8');
        if(a=="X" && b=="X" && c=="X" || d=="X" && e=="X" && f=="X" || g=="X" && h=="X" && i=="X" || a=="X" && d=="X" && g=="X" ||e=="X" && b=="X" && h=="X" || c=="X" && f=="X" && i=="X" || a=="X" && e=="X" && i=="X"||c=="X" && e=="X" && g=="X" )
        {  
            winNotif();
            alert("X winner");
            block();
        }
        else if(a=="O" && b=="O" && c=="O" || d=="O" && e=="O" && f=="O" || g=="O" && h=="O" && i=="O" || a=="O" && d=="O" && g=="O" ||e=="O" && b=="O" && h=="O" || c=="O" && f=="O" && i=="O" || a=="O" && e=="O" && i=="O"||c=="O" && e=="O" && g=="O" )
        {
         winNotif();
         alert("O winner");
         block();
        }
    }
    
function restart(){
    window.localStorage.clear()
doc.forEach(e =>{
   e.innerText=""
   e.classList.remove("bg-info")
})

    }
function cleanPage(){
    window.localStorage.clear()
    location.reload();
    }
function block(){
   doc.forEach(e =>{
      setTimeout(function(){
         e.innerText=""
         e.classList.remove("bg-info")
         localStorage.clear();
   },500)
   })

}
function checking(){
   let ai=document.getElementById(0).innerText
   let bi=document.getElementById(1).innerText
   let ci=document.getElementById(2).innerText
   let di=document.getElementById(3).innerText
   let ei=document.getElementById(4).innerText
   let fi=document.getElementById(5).innerText
   let gi=document.getElementById(6).innerText
   let hi=document.getElementById(7).innerText
   let ii=document.getElementById(8).innerText
   if(ai!="" && bi!="" && ci!="" && di!="" && ei!="" && fi!="" && gi!="" && hi!="" && ii!=""){
      alert("Match null");
     setTimeout( function(){doc.forEach(e =>{
         e.classList.add("bg-info")
         e.innerText=""
         e.classList.remove("bg-info")
         localStorage.clear();
      })},500)

   }}
   

    function winNotif(){
        let a=window.localStorage.getItem('0');
        let b=window.localStorage.getItem('1');
        let c=window.localStorage.getItem('2');
        let d=window.localStorage.getItem('3');
        let e=window.localStorage.getItem('4');
        let f=window.localStorage.getItem('5');
        let g=window.localStorage.getItem('6');
        let h=window.localStorage.getItem('7');
        let i=window.localStorage.getItem('8');
        if(a=="X" && b=="X" && c=="X" || a=="O" && b=="O" && c=="O"){
         const frst=document.querySelectorAll(".firstrow")
         frst.forEach(e =>{
            e.classList.add("bg-info")
         })

        }
        else if(d=="X" && e=="X" && f=="X" || d=="O" && e=="O" && f=="O"){
         const scnd=document.querySelectorAll(".secondrow")
         scnd.forEach(e =>{
            e.classList.add("bg-info")
         })
        }
        else if(g=="X" && h=="X" && i=="X" || g=="O" && h=="O" && i=="O"){
         const thrd=document.querySelectorAll(".thirdrow")
         thrd.forEach(e =>{
            e.classList.add("bg-info")
         })
        }
        else if(a=="X" && d=="X" && g=="X" || a=="O" && d=="O" && g=="O"){
         const c1=document.querySelectorAll(".c1")
         c1.forEach(e =>{
            e.classList.add("bg-info")
         })
        }
        else if(e=="X" && b=="X" && h=="X" || e=="O" && b=="O" && h=="O"){
         const c2=document.querySelectorAll(".c2")
         c2.forEach(e =>{
            e.classList.add("bg-info")
         })
        }
        else if(c=="X" && f=="X" && i=="X" || c=="O" && f=="O" && i=="O"){
         const c3=document.querySelectorAll(".c3")
         c3.forEach(e =>{
            e.classList.add("bg-info")
         })
        }
        else if(a=="X" && e=="X" && i=="X" || a=="O" && e=="O" && i=="O"){
         const i1=document.querySelectorAll(".i1")
         i1.forEach(e =>{
            e.classList.add("bg-info")
         })
        }
        else if(c=="X" && e=="X" && g=="X" || c=="O" && e=="O" && g=="O"){
         const i2=document.querySelectorAll(".i2")
         i2.forEach(e =>{
            e.classList.add("bg-info")
         })
        }
        
    }


 