let score = [0,0];

function updateplayerscore(){
    score[0] = score[0] + 1 ;
    document.querySelector('.score').innerHTML =  `Scores are You - ${score[0]} and Computer -${score[1]}`;
}

function updatecompscore(){
    score[1]= score[1] + 1;
    document.querySelector('.score').innerHTML =  `Scores are You - ${score[0]} and Computer -${score[1]}`;
}



document.getElementById('buttonR').addEventListener('click',chooseRock );

function chooseRock(){

    document.querySelector('.youimage').src = "rock.png"

 let playerchoice = 'Rock'   

let computerchoice = ['Rock','Paper','Sciscoors', 'Lizard', 'Spock']

let compchoice = Math.floor(Math.random()*5);

if(computerchoice[compchoice]==='Rock'   ){
    document.querySelector('.compimage').src = "rock.png"
    document.querySelector('.yourchoice').innerHTML = `Your Choice is Rock---- Computer chose ${computerchoice[compchoice]}`
document.querySelector('.message').innerHTML = `THIS IS A DRAW`;
    console.log(`THIS IS A DRAWW`)
}else if (computerchoice[compchoice] === 'Paper'){
    document.querySelector('.compimage').src = "paper.png"
    document.querySelector('.yourchoice').innerHTML = `Your Choice is Rock---- Computer chose ${computerchoice[compchoice]}`
    document.querySelector('.message').innerHTML = 'Computer wins';
    console.log('Computer wins')
    updatecompscore()


}else if ([compchoice]==='Sciscoors' ) {
    document.querySelector('.compimage').src ="Sciscors.png"
    document.querySelector('.yourchoice').innerHTML = `Your Choice is Rock---- Computer chose ${computerchoice[compchoice]}`
    document.querySelector('.message').innerHTML = 'You win';
    console.log('You win')
    updateplayerscore()
}
else if ( [compchoice]==='Lizard'){
    document.querySelector('.compimage').src ="lizard.png"
    document.querySelector('.yourchoice').innerHTML = `Your Choice is Rock---- Computer chose ${computerchoice[compchoice]}`
    document.querySelector('.message').innerHTML = 'You win';
    console.log('You win')
    updateplayerscore()

}
else{

    document.querySelector('.compimage').src ="Spock.png"
    document.querySelector('.yourchoice').innerHTML = `Your Choice is Rock---- Computer chose ${computerchoice[compchoice]}`
    document.querySelector('.message').innerHTML = 'You win';
    console.log('You win')
    updateplayerscore()


}

}

document.getElementById('buttonP').addEventListener('click',choosePaper);

function choosePaper(){
    document.querySelector('.youimage').src = "paper.png"

 let playerchoice = 'Paper'   

let computerchoice = ['Rock','Paper','Sciscoors','Lizard', 'Spock']

let compchoice = Math.floor(Math.random()*5);

if(computerchoice[compchoice]==='Rock'   ){
    document.querySelector('.compimage').src = "rock.png"
    document.querySelector('.yourchoice').innerHTML = `Your Choice is Paper---- Computer chose ${computerchoice[compchoice]}`
document.querySelector('.message').innerHTML = `You win`;

    console.log(`You win`)
    updateplayerscore()
}
else if (computerchoice[compchoice] === 'Paper'){
    document.querySelector('.compimage').src = "paper.png"
    document.querySelector('.yourchoice').innerHTML = `Your Choice is Paper---- Computer chose ${computerchoice[compchoice]}`
    document.querySelector('.message').innerHTML = 'THis is a draw';
    console.log('This is a draw')
}
else if (computerchoice[compchoice]==='Lizard'){
    document.querySelector('.compimage').src = "lizard.png"
    document.querySelector('.yourchoice').innerHTML = `Your Choice is Paper---- Computer chose ${computerchoice[compchoice]}`
    document.querySelector('.message').innerHTML = 'Computer wins';
    updatecompscore();
    console.log('This is a draw')


}
else if(computerchoice[compchoice]==='Spock'){
    document.querySelector('.compimage').src = "paper.png"
    document.querySelector('.yourchoice').innerHTML = `Your Choice is Paper---- Computer chose ${computerchoice[compchoice]}`
    document.querySelector('.message').innerHTML = 'YOU win';
    console.log('YOu win')
    updateplayerscore();


}


else {
    document.querySelector('.compimage').src = "Sciscors.png"
    document.querySelector('.yourchoice').innerHTML = `Your Choice is Paper---- Computer chose ${computerchoice[compchoice]}`
    document.querySelector('.message').innerHTML = 'Computer wins';
        console.log('Computer wins')
    updatecompscore()
}


}

document.getElementById('buttonS').addEventListener('click', chooseSciss);

function chooseSciss(){
    document.querySelector('.youimage').src = "Sciscors.png"

 let playerchoice = 'Scisscors'   

let computerchoice = ['Rock','Paper','Scisscors', 'Lizard', 'Spock']

let compchoice = Math.floor(Math.random()*5);

if(computerchoice[compchoice]==='Rock' ){
    document.querySelector('.compimage').src = "rock.png"
    document.querySelector('.yourchoice').innerHTML = `Your Choice is Scisscors---- Computer chose ${computerchoice[compchoice]}`
document.querySelector('.message').innerHTML = `Computer wins`;

    console.log(`Computer wins`)
    updatecompscore()
}else if (computerchoice[compchoice] === 'Paper'){
    document.querySelector('.compimage').src = "paper.png"
    document.querySelector('.yourchoice').innerHTML = `Your Choice is Scisscors---- Computer chose ${computerchoice[compchoice]}`
    document.querySelector('.message').innerHTML = 'You win';
  
    console.log('You win')
    updateplayerscore()
}
else if (computerchoice[compchoice]==='Lizard'){

    document.querySelector('.compimage').src = "lizard.png"
    document.querySelector('.yourchoice').innerHTML = `Your Choice is Scissors---- Computer chose ${computerchoice[compchoice]}`
    document.querySelector('.message').innerHTML = 'You win';
    console.log('You win')
updateplayerscore();
}

else if(computerchoice[compchoice]==='Spock'){

    document.querySelector('.compimage').src = "spock.png"
    document.querySelector('.yourchoice').innerHTML = `Your Choice is Scisscors---- Computer chose ${computerchoice[compchoice]}`
document.querySelector('.message').innerHTML = `Computer wins`;

    console.log(`Computer wins`)
    updatecompscore()
    
}


else {
    document.querySelector('.compimage').src = "Sciscors.png"
    document.querySelector('.yourchoice').innerHTML = `Your Choice is Scisscors---- Computer chose ${computerchoice[compchoice]}`
    document.querySelector('.message').innerHTML = 'This is a draw';
    console.log('Draw')
}


}
document.getElementById('buttonSpock').addEventListener('click', chooseSpock);

function chooseSpock(){

    document.querySelector('.youimage').src = "spock.png"

    let playerchoice = 'Spock'   
   
   let computerchoice = ['Rock','Paper','Scisscors', 'Lizard', 'Spock']
   
   let compchoice = Math.floor(Math.random()*5);

   if( computerchoice[compchoice]==='Rock'){
    document.querySelector('.compimage').src = "Rock.png"
    document.querySelector('.yourchoice').innerHTML = `Your Choice is Spock---- Computer chose ${computerchoice[compchoice]}`
    document.querySelector('.message').innerHTML = 'You win';
    console.log('You win')
updateplayerscore();

   }
else if( computerchoice[compchoice]==='Scisscors'){

    document.querySelector('.compimage').src = "Sciscors.png"
    document.querySelector('.yourchoice').innerHTML = `Your Choice is Spock---- Computer chose ${computerchoice[compchoice]}`
    document.querySelector('.message').innerHTML = 'You win';
    console.log('You win')
updateplayerscore();
}

else if(computerchoice[compchoice]==='Lizard'){
    document.querySelector('.compimage').src = "lizard.png"
    document.querySelector('.yourchoice').innerHTML = `Your Choice is Spock---- Computer chose ${computerchoice[compchoice]}`
document.querySelector('.message').innerHTML = `Computer wins`;

    console.log(`Computer wins`)
    updatecompscore()



}
else if(computerchoice[compchoice]==='Paper'){

    document.querySelector('.compimage').src = "paper.png"
    document.querySelector('.yourchoice').innerHTML = `Your Choice is Spock---- Computer chose ${computerchoice[compchoice]}`
document.querySelector('.message').innerHTML = `Computer wins`;

    console.log(`Computer wins`)
    updatecompscore()

}
else{

    document.querySelector('.compimage').src = "spock.png"
    document.querySelector('.yourchoice').innerHTML = `Your Choice is Spock---- Computer chose ${computerchoice[compchoice]}`
    document.querySelector('.message').innerHTML = 'This is a draw';
    console.log('Draw')


}

}

document.getElementById('buttonL').addEventListener('click', chooseLizard);

function chooseLizard(){

    document.querySelector('.youimage').src = "Lizard.png"

    let playerchoice = 'Lizard'   
   
   let computerchoice = ['Rock','Paper','Scisscors', 'Lizard', 'Spock']
   
   let compchoice = Math.floor(Math.random()*5);

if(computerchoice[compchoice]=== 'Spock'){

    document.querySelector('.compimage').src = "Spock.png"
    document.querySelector('.yourchoice').innerHTML = `Your Choice is Lizard---- Computer chose ${computerchoice[compchoice]}`
    document.querySelector('.message').innerHTML = 'You win';
    console.log('You win')
updateplayerscore();

}
else if (computerchoice[compchoice]==='Paper'){

    document.querySelector('.compimage').src = "Paper.png"
    document.querySelector('.yourchoice').innerHTML = `Your Choice is Lizard---- Computer chose ${computerchoice[compchoice]}`
    document.querySelector('.message').innerHTML = 'You win';
    console.log('You win')
updateplayerscore();

}
else  if(computerchoice[compchoice]==='Rock'){

    document.querySelector('.compimage').src = "rock.png"
    document.querySelector('.yourchoice').innerHTML = `Your Choice is Lizard---- Computer chose ${computerchoice[compchoice]}`
document.querySelector('.message').innerHTML = `Computer wins`;

    console.log(`Computer wins`)
    updatecompscore()
}
else if (computerchoice[compchoice]==='Scisscors'){

    document.querySelector('.compimage').src = "Sciscors.png"
    document.querySelector('.yourchoice').innerHTML = `Your Choice is Lizard---- Computer chose ${computerchoice[compchoice]}`
document.querySelector('.message').innerHTML = `Computer wins`;

    console.log(`Computer wins`)
    updatecompscore()

}
else{
    document.querySelector('.compimage').src = "lizard.png"
    document.querySelector('.yourchoice').innerHTML = `Your Choice is Lizard---- Computer chose ${computerchoice[compchoice]}`
    document.querySelector('.message').innerHTML = 'This is a draw';
    console.log('Draw')


}

}