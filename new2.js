let btn= document.getElementById('btn')

btn.addEventListener('click',callMe)
function callMe(e){
    console.log('ohh yeahh')
    console.log(e.type)
    console.log(e.currentTarget)
    console.log(e.clientX)
    console.log(e.clientY)
}


