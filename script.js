let currentPlayer = "X"


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
        checkForWinner()
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
            alert(currentPlayer+" winner");
            restart();
        }
        else if(a=="O" && b=="O" && c=="O" || d=="O" && e=="O" && f=="O" || g=="O" && h=="O" && i=="O" || a=="O" && d=="O" && g=="O" ||e=="O" && b=="O" && h=="O" || c=="O" && f=="O" && i=="O" || a=="O" && e=="O" && i=="O"||c=="O" && e=="O" && g=="O" )
        {
         alert(currentPlayer+" winner");
            restart();
        }
    }
    
function restart(){
    window.localStorage.clear()
    location.reload()

    }


 