let cells = document.querySelectorAll('.box')
cells = Array.from(cells)

let currentPlayer = "X"

let winningCombinations = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]

function checkWinner(){
    winningCombinations.forEach(function(combination){
        let check = combination.every(idx => cells[idx].innerText.trim() == currentPlayer)
        if(check){
            alert(currentPlayer+" won");
                    location.reload();
        }
    })
}

cells.forEach(function(cell){
    cell.addEventListener('click', function(){
        cell.innerText = currentPlayer
        checkWinner()
        currentPlayer = currentPlayer == "X" ? "O" : "X"
    })
}) 