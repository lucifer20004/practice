function data(){
    let username= document.getElementById('username').value
    // console.log(username)
    
    let url= 'https://api.github.com/users/'+username
    let store=document.getElementById('store')
    fetch(url)
    .then(res => res.json())
    .then(data => {
        console.log(data)
        if(data.message)
        {
            store.innerHTML='<h1>user not found</h1>'
            console.log('user not found')
        }
        else
        {
            store.innerHTML=`
            <a href=https://github.com/${data.login}>
            <h1>${data.login}</h1>
            <h1>Name: ${data.name}</h1>
            <img src='${data.avatar_url}'>
           
            </a>
            <a href=https://github.com/${data.login}?tab=repositories>just go</a>
            
            `
            }
        }).catch(err=>console.log(err))

    document.getElementById('username').value =''  
    
}
