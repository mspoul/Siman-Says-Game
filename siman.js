    let gameseq=[];
        let userseq=[];
        let highscore=0;

        let started =false;
        let level=0;
        let btns=["red","green","yellow","blue"]
        
        document.addEventListener("keypress",function(){
            console.log("started");
            if(started == false){
                started=true;
                
                levelUp();
            }

        });

        function flashbtn(btn){
            btn.classList.add("white");
            setTimeout(function(){
                btn.classList.remove("white");
            },250)

        }
        function userflashbtn(btn){
            btn.classList.add("black");
            setTimeout(function(){
                btn.classList.remove("black");
            },250)


        }

        function levelUp(){
            userseq=[];
            level++;
           let h2=document.querySelector("h2");
            h2.innerText=`level ${level}`;
            indes=Math.floor(Math.random()*3);
            rdm=btns[indes];
            ele=document.querySelector(`.${rdm}`);
            
            flashbtn(ele);
            gameseq.push(rdm);

        }

        function checkans(index){
             

            if(userseq[index]===gameseq[index]){
                if(userseq.length==gameseq.length){
                    setTimeout(levelUp,1000);
                }
            }
            else{
                let h2=document.querySelector("h2");
                if(highscore<level){
                    highscore=level;
                     
                }

                h2.innerHTML=`<b>Highest Score ${highscore}</b><br>Game over! your score was <b>${level}</b> <br> Press any key to start a game again`;

                let body=document.querySelector("body");
                body.style.backgroundColor="red";
                setTimeout(function(){
                    body.style.backgroundColor="white";
                },150);
                reset();
                 
            }

        }
        let allbtns=document.querySelectorAll(".btn");
        for(btn of allbtns){
            btn.addEventListener("click",function(){
                buttn=this;
                userflashbtn(buttn);
                usercolor=buttn.getAttribute("id");

                userseq.push(usercolor);

                checkans(userseq.length-1);
            });

        }
        function reset(){
            started=false;
            gameseq=[];
            userseq=[];
            level=0;
             
        }

