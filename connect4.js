function display_board(game_board){
  for (let i = 0 ; i < 6 ; i++){
    let line = "";
    for (let j = 0 ; j < 7 ; j++){
      /*TEST PROCESS.STDOUT.WRITE STP */
      /*process.stdout.write("| "+game_board[i][j] + " ")*/
      line += "| "+game_board[i][j] + " "
    }
    line += "|"
    console.log(line)
  }

  /*intToChar(0)*/
  let chr = 97
  let line = ""
  for (let k = 0 ; k < 7 ; k++){
      line+="  "+String.fromCharCode(65+k)+" "
  }
  console.log(line)
}

function update_board(game_board,wanted_X,turn){
  let c = wanted_X.toUpperCase()
  let sign;
  let x_axis = parseInt(c.charCodeAt(0))-65;
  if (turn==p1){ sign = "O"}
  else if (turn==p2) { sign = "X"}
  for (let i = 5 ; i >= 0 ; i--){
      /**/
      if (game_board[i][x_axis] == '_'){
          game_board[i][x_axis] = sign;
          return "Success"
      }
      
  }
  return "failure"
}
/*const names = ["Infinit", "Bility", "Infinitbility", "Welcome"];
console.log(names[3]);  // Welcome
console.log(names[4]);  // undefined
if (!(names[4])){
  console.log("Exist");
} else {
  console.log("Not Exist");
}
*/

function check_win(game_board){
    //approche horizontale
    for (let i = 5; i > -1 ; i--){
        let current = game_board[i][0]
        let count = 1
        for (let j = 0 ; j < 7; j++){
            if (game_board[i][j] != "_" && j != 0 && game_board[i][j] == current){
                count += 1;
            }
            else{
                current = game_board[i][j]
                count = 1
            }
            if (count == 4 && current!="_"){
                //console.log("1")
                if (current == "O"){return "Gagnant: player 1"}
                else{
                    return "Gagnant: player 2"
                }
            }
        }
        
    }

    //Aproche verticale
    for (let j = 0 ; j < 7 ; j++){
        let current = game_board[5][j]
        let count = 1
        for (let i = 5 ; i > -1 ; i--){
            if (game_board[i][j] != "_" && game_board[i][j] == current){
                count+=1;
            }
            else{
                current = game_board[i][j]
                count = 1
            }
            if (count == 5){
                //console.log("2")
                if (current == "O"){return "Gagnant: player 1"}
                else{
                    return "Gagnant: player 2"
                }
            }
        }
    }
    
    //Approche horizontale
    for (let i = 0; i < 6 ; i++){
        for (let j = 0; j < 7 ; j++){
            let actual = game_board[i][j]
            if (game_board[i][j]!="_" && (i+1)<6 && (j+1)<7){
                if(game_board[i+1][j+1] == actual && (i+2)<6 && (j+2)<7){
                    if(game_board[i+2][j+2] == actual && (i+3)<6 && (j+3)<7){
                        if (game_board[i+3][j+3] == actual){
                            if (actual == "O"){return "Gagnant: player 1"}
                            else{
                                return "Gagnant: player 2"
                            }
                        }
                            
                    }
                }
            }
            if (game_board[i][j]!="_" && (i+1) < 6 && (j-1)>-1){
                if(game_board[i+1][j-1] == actual && (i+2) < 6 && (j-2)>-1){
                    if(game_board[i+2][j-2] == actual && (i+3) < 6 && (j-3)>-1){
                        if(game_board[i+3][j-3] == actual){
                            if (actual == "O"){return "Gagnant: player 1"}
                            else{
                                return "Gagnant: player 2"
                            }
                        }
                            
                    }
                }
            }
        }
    }
    
    
    return "Pas de vainqueurs"
}

let game_board = [
  [["_"],["_"],["_"],["_"],["_"],["_"],["_"]],
  [["_"],["_"],["_"],["_"],["_"],["_"],["_"]],
  [["_"],["_"],["_"],["_"],["_"],["_"],["_"]],
  [["_"],["_"],["_"],["_"],["_"],["_"],["_"]],
  [["_"],["_"],["_"],["_"],["_"],["_"],["_"]],
  [["_"],["_"],["_"],["_"],["_"],["_"],["_"]]
]


var new_game = true;
var player_1 = false; //tour
var player_2 = false; //tour
const p1 = "0"
const p2 = "X"

display_board(game_board);
/*EXAMPLES*/
update_board(game_board,"C",p2)
console.log(check_win(game_board))
update_board(game_board,"D",p1)
console.log(check_win(game_board))
update_board(game_board,"D",p2)
console.log(check_win(game_board))
update_board(game_board,"E",p1)
console.log(check_win(game_board))
update_board(game_board,"E",p1)
console.log(check_win(game_board))
update_board(game_board,"E",p2)
console.log(check_win(game_board))
update_board(game_board,"F",p1)
console.log(check_win(game_board))
update_board(game_board,"F",p1)
console.log(check_win(game_board))
update_board(game_board,"F",p1)
console.log(check_win(game_board))
update_board(game_board,"F",p2)
console.log(check_win(game_board))

/*EXAMPLE SYNTAXE POUR GERER LES ERREURS:
while, demande pour ton entrée user
utiliser une valeure booléenne:
let g = false
while g == false
demande d'entrée user
setup le bool a true si c'est good*/
/*while (update_board(game_board,"B",p1) == "failure"){
    console.log("fail")
}*/
/*clear()*/ /* marche que sur Node => utile pour garder le truc joli (cls)*/
display_board(game_board);
/*
while (new_game){
    display_board(game_board)
    Etant donné que flemme d'installer node, 
    Il reste a faire:
    l'appel de l'entrée user => prompt()
    switch de tour
    appel de la fonction update board
    appel de la fonction check_win
    ça devrait pas etre trop compliqué
}
*/
