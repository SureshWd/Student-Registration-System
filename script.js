// accessing all values
const sname = document.getElementById('sname');
const id = document.getElementById('id');
const email = document.getElementById('email');
const contact = document.getElementById('contact');
const addbtn = document.getElementById('add');
const rightBox = document.getElementById('box');

let selectedRow =null;
let i=0;
addbtn.addEventListener('click',()=>{
    // instructions to not add empty fields
    if(sname.value!='' && id.value!='' && email.value!='' && contact.value!='' ){
    if(selectedRow==null){
        newRow();
        i++;
        console.log(i);
    }
    else if(selectedRow!=null){
          updaterow();
    } 
}
 else{
     alert("Fill the mandatory fields")
 } 
})
if(i>=6){
    rightBox.style.overflow ="scroll";

}

rightBox.addEventListener('click',(e)=>{
    //for delete btn
    if(e.target.classList.contains('delete')){
        e.target.parentElement.remove();
    }
    //for edit btn
    else if(e.target.classList.contains('edit')){
         selectedRow = e.target.closest('.product')
        let nodeList = selectedRow.querySelectorAll('span');
        let arr = Array.from(nodeList);
        
        //getting value from record into input fields
        sname.value=arr[0].textContent;
        id.value=arr[1].textContent;
        email.value=arr[2].textContent;
        contact.value=arr[3].textContent;   
    }
})

function newRow(){
    let prod = document.createElement('div');
    prod.classList.add('product')
    //input field 1
    let procode = document.createElement('span')
    procode.id='prodcode';
    procode.innerHTML =sname.value;
    prod.appendChild(procode);
    //input field 2
    let proname = document.createElement('span')
    proname.id='prodname'
    proname.innerHTML =id.value;
    prod.appendChild(proname);
    //input field 3
    let proqty = document.createElement('span')
    proqty.id="prodqty"
    proqty.innerHTML =email.value;
    prod.appendChild(proqty);
    //input field 4
    let prors = document.createElement('span')
    prors.id='prodrs'
    prors.innerHTML =contact.value;
    prod.appendChild(prors);
    
    //edit button
    let edit =document.createElement('button');
    edit.textContent= "Edit";
    edit.classList.add("edit");
    prod.appendChild(edit);
// delete button
    let del =document.createElement('button');
    del.textContent ="Delete";
    del.classList.add("delete");
    prod.appendChild(del);
   
    rightBox.appendChild(prod);
    editField();
}
function updaterow(){
    let nodeList = selectedRow.querySelectorAll('span');
    let arr = Array.from(nodeList);
    arr[0].innerHTML=sname.value;
    arr[1].innerHTML=id.value;
    arr[2].innerHTML=email.value;
    arr[3].innerHTML=contact.value; 
    editField();  
}
function editField(){
     //edit input filed
     sname.value='';
     id.value='';
     email.value='';
     contact.value='';

}
