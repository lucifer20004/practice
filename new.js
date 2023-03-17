// function getJokes(){

    
// const options = {
//     method: 'GET',
    
//     headers: {
//       'X-RapidAPI-Key': '04772778c6mshe49d2f85ce646b6p128047jsnb6d7ae60cea8',
//       'X-RapidAPI-Host': 'dad-jokes.p.rapidapi.com'
//     }
//   };
//     // console.log('hello')
//     // let url= 'https://dad-jokes.p.rapidapi.com/random/joke',options
//     fetch('https://dad-jokes.p.rapidapi.com/random/joke',options)
//     .then(res => res.json())
//     .then(data => console.log(data))
//     //     store.innerHTML=`
//     //     <h1>${data.value}</h1>
//     //     `

//     // })
    
// }

var store=document.getElementById('store')

function getdata(){
    // console.log('hi')
    fetch('https://api.chucknorris.io/jokes/random')
    .then(res => res.json())
    .then(data => {
        store.innerHTML=` <h1>${data.value}</h1>`
        
    }).catch(err => console.log(err))
}
var i=1;
setInterval(() => 
{
    
    console.log(++i)
},1
)