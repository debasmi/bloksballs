function bounceoff(ball,block1)
{
    if(ball.x-block1.x<ball.width/2+block1.width/2 &&
    block1.x-ball.x<ball.width/2+block1.width/2 ){
        ball.velocityX=ball.velocityX*(-1);
        block1.velocityX=block1.velocityX*(-1);
    }

    if(ball.y-block1.y<ball.height/2+block1.height/2 &&
    block1.y-ball.y<ball.height/2+block1.height/2 ){
        ball.velocityY=ball.velocityY*(-1);
        block1.velocityY=block1.velocityY*(-1);
        }

    if(ball.x-block2.x<ball.width/2+block2.width/2 &&
    block2.x-ball.x<ball.width/2+block2.width/2 ){
        ball.velocityX=ball.velocityX*(-1);
        block2.velocityX=block2.velocityX*(-1);
        }
        
    if(ball.y-block2.y<ball.height/2+block2.height/2 &&
    block1.y-ball.y<ball.height/2+block1.height/2 ){
        ball.velocityY=ball.velocityY*(-1);
        block2.velocityY=block2.velocityY*(-1);
        }

    if(ball.x-block3.x<ball.width/2+block3.width/2 &&
    block3.x-ball.x<ball.width/2+block3.width/2 ){
        ball.velocityX=ball.velocityX*(-1);
        block3.velocityX=block3.velocityX*(-1);
        }
        
    if(ball.y-block3.y<ball.height/2+block3.height/2 &&
    block3.y-ball.y<ball.height/2+block1.height/2 ){
        ball.velocityY=ball.velocityY*(-1);
        block3.velocityY=block3.velocityY*(-1);
                }
    if(ball.x-block4.x<ball.width/2+block4.width/2 &&
    block4.x-ball.x<ball.width/2+block4.width/2 ){
        ball.velocityX=ball.velocityX*(-1);
        block4.velocityX=block1.velocityX*(-1);
        }
                
    if(ball.y-block4.y<ball.height/2+block4.height/2 &&
    block4.y-ball.y<ball.height/2+block4.height/2 ){
        ball.velocityY=ball.velocityY*(-1);
        block4.velocityY=block4.velocityY*(-1);
        }
                        
        

}

function isTouching(ball,block1,block2,block3,block4)
{
    if(ball.y-block1.y<ball.height/2+block1.height/2 &&
    ball.y-block2.y<ball.height/2+block2.height/2 &&
    ball.y-block3.y<ball.height/2+block3.height/2 &&
    ball.y-block4.y<ball.height/2+block4.height/2 ){

    return true;
}
    else
    {
    
        return false;
    }
}
