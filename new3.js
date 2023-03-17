function onformsubmit(){
   
    event.preventDefault()
   let data= getuserdata()
//    console.log(data)
//    createdata(data)
if(selectedRow === null)
{
    createdata(data)
}else{
    updateData(data)
}
   reset()
}

function getuserdata(){
    let formdata= {}

    formdata['name']=document.getElementById('fname').value
    formdata['email']=document.getElementById('femail').value
    formdata['number']=document.getElementById('fnumber').value
    formdata['message']=document.getElementById('fmessage').value
    // console.log(formdata)
    return formdata
}
function createdata(userdata){
    let table= document.getElementById('store').getElementsByTagName('tbody')[0]
    let row=table.insertRow(table.length)
    let cell1=row.insertCell(0).innerHTML=userdata.name
    let cell2=row.insertCell(1).innerHTML=userdata.email
    let cell3=row.insertCell(2).innerHTML=userdata.number
    let cell4=row.insertCell(3).innerHTML=userdata.message
    let cell5=row.insertCell(4).innerHTML= `<button onclick="editdata(this)">Edit</button> 
    <button onclick="deleteData(this)">Delete</button>
    `
console.log()
}
function reset(){
    document.getElementById('fname').value=""
    document.getElementById('femail').value=""
    document.getElementById('fnumber').value=""
    document.getElementById('fmessage').value=""
}
let selectedRow=null
function editdata(td){
    selectedRow = td.parentElement.parentElement
    // console.log('edited',selectedRow)
    // let a=selectedRow.cells[0].innerHTML
    // console.log(a)
    document.getElementById('fname').value=selectedRow.cells[0].innerHTML
    document.getElementById('femail').value=selectedRow.cells[1].innerHTML
    document.getElementById('fnumber').value=selectedRow.cells[2].innerHTML
    document.getElementById('fmessage').value=selectedRow.cells[3].innerHTML

}
function updateData(updatedData){
    // console.log('running')
    selectedRow.cells[0].innerHTML=updatedData.name
    selectedRow.cells[1].innerHTML=updatedData.email
    selectedRow.cells[2].innerHTML=updatedData.number
    selectedRow.cells[3].innerHTML=updatedData.message
    selectedRow=null

}

function deleteData(del)
{
    if(confirm('do you want to delete the row?'))
    {
// console.log('deleting')
let row=del.parentElement.parentElement
// console.log(row.rowIndex)
document.getElementById('store').deleteRow(row.rowIndex)}

}