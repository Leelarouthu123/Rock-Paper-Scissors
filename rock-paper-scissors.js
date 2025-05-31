let score= JSON.parse(localStorage.getItem('score'))||
        {
          wins:0,
          losses:0,
          ties:0

        }
        updateScoreElement();
        
        /**if(score === null)
       {
        score={
          wins:0,
          losses:0,
          ties:0

        }
       }**/
     
      function playgame(playermove)
     {
          const computerMove=pickcomputermove();
        let result='';

        if(playermove==='rock')
        {
            if(computerMove==='rock')
          {
            result='tie';
          }
          else if(computerMove==='paper')
          {
            result='you lose';
          }
          else if(computerMove==='scissors')
          {
            result='you win';
          }
          
        }


        else if(playermove==='paper')
        {
            if(computerMove==='rock')
            {
              result='you win';
            }
            else if(computerMove==='paper')
            {
              result='tie';
            }
            else if(computerMove==='scissors')
            {
              result='you lose';
            }
       
        }

        else if(playermove ==='scissors')
        {  

            if(computerMove==='rock')
            {
              result='you lose';
            }
            else if(computerMove==='paper')
            {
              result='you win';
            }
            else if(computerMove==='scissors')
            {
              result='tie';
            }
            
        }
       

       if(result==='you win')
       {
        score.wins+=1;
       }
       else if(result==='you lose')
       {
        score.losses+=1;
       }
       else if(result==='tie')
       {
        score.ties+=1;
       }

       localStorage.setItem('score',JSON.stringify(score));
        

       updateScoreElement();
       document.querySelector('.results')
         .innerHTML=result;
        document.querySelector('.moves')
          .innerHTML=`You 
        <img src="images/${playermove}-emoji.png"
        class="move_icon">
        <img src="./images/${computerMove}-emoji.png"
        class="move_icon">Computer`;
       
      }

      function updateScoreElement()
      {
        document.querySelector('.score')
          .innerHTML=`wins:${score.wins},Losses:${score.losses}, Ties:${score.ties}`;
      }

       function pickcomputermove(){
            const randomNumber= Math.random();
            let computerMove='';
      if(randomNumber>=0&&randomNumber<=1/3)
      {
        computerMove='rock';
      }
      else if(randomNumber>1/3&&randomNumber<2/3)
      {
        computerMove='paper';
      }
      else if(randomNumber>=2/3&&randomNumber<1)
      {
        computerMove='scissors';
      }
      return computerMove ;
  }
