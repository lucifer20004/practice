let pwd=document.getElementById('pwd')
let upper=document.getElementById('upper')
let lower= document.getElementById('lower')
let no= document.getElementById('number')
let symbol=document.getElementById('symbol')
function Pass()
{
    if(pwd.value.match(/[A-Z]/))
    {
        upper.style.color='green'
    }else{
        upper.style.color='red'
    }


    if(pwd.value.match(/[a-z]/))
    {
        lower.style.color="green"
    }else{
        lower.style.color="red"
    }
 
    if(pwd.value.match(/[\@\%\$\&]/))
    {
        symbol.style.color="green"

    }
    else{
        symbol.style.color="red"
    }

    if(pwd.value.match(/[0-9]/))
    {
        number.style.color="green"
    }
    else{
        number.style.color="red"
    }

}
