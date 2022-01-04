var key = document.getElementsByClassName("key");

//ARRAY
var keys = [];
var sound = [];

sound[0] = new Howl(
{
    src : ["audio/1.mp3"],
})

sound[1] = new Howl(
{
    src : ["audio/2.mp3"],
})


sound[2] = new Howl(
{
    src : ["audio/3.mp3"],
})
    
sound[3] = new Howl(
{
     src : ["audio/4.mp3"],
})

sound[4] = new Howl(
{
    src : ["audio/5.mp3"],
})

sound[5] = new Howl(
{
    src : ["audio/6.mp3"],
})

sound[6] = new Howl(
    {
        src : ["audio/7.mp3"],
    })

sound[7] = new Howl(
{
    src : ["audio/8.mp3"],
})

sound[8] = new Howl(
{
    src : ["audio/9.mp3"],
})

document.addEventListener('keydown', keyDown);
document.addEventListener('keyup', keyUp);

function keyDown(evt)
{
    keys[evt.keyCode] = true;

    if(keys[65])
    {
        sound[0].play();
        key[0].style.backgroundColor = "gray";
    }

    if(keys[66])
    {
        sound[1].play();
        key[1].style.backgroundColor = "gray";
    }

    if(keys[67])
    {
        sound[2].play();
        key[2].style.backgroundColor = "gray";
    }

    if(keys[68])
    {
        sound[3].play();
        key[3].style.backgroundColor = "gray";
    }

    if(keys[69])
    {
        sound[4].play();
        key[4].style.backgroundColor = "gray";
    }

    if(keys[70])
    {
        sound[5].play();
        key[5].style.backgroundColor = "gray";
    }

    if(keys[71])
    {
        sound[6].play();
        key[6].style.backgroundColor = "gray";
    }

    if(keys[72])
    {
        sound[7].play();
        key[7].style.backgroundColor = "gray";
    }

    if(keys[73])
    {
        sound[8].play();
        key[8].style.backgroundColor = "gray";
    }
}

function keyUp(evt)
{
    delete keys[evt.keyCode];

    if(evt.keyCode == 65)
    {
        key[0].style.backgroundColor = "white";
    }

    //B
    if(evt.keyCode == 66)
    {
        key[1].style.backgroundColor = "white";
    }

    //C
    if(evt.keyCode == 67)
    {
        key[2].style.backgroundColor = "white";
        
    }

    //D
    if(evt.keyCode == 68)
    {
        key[3].style.backgroundColor = "white";
    }

    //E
    if(evt.keyCode == 69)
    {
        key[4].style.backgroundColor = "white";
        
    }

    //F
    if(evt.keyCode == 70)
    {
        key[5].style.backgroundColor = "white";
    }

    //G
    if(evt.keyCode == 71)
    {
        key[6].style.backgroundColor = "white";
    }

    //H
    if(evt.keyCode == 72)
    {
        key[7].style.backgroundColor = "white";
    }

    //I
    if(evt.keyCode == 73)
    {
        key[8].style.backgroundColor = "white";
    }

}