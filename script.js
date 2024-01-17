let inputbox=document.querySelector("#inputbox")
let list=document.querySelector("#list");
inputbox.addEventListener("keyup",function(event){
    if(event.key=="Enter"){
        addItem(this.value)
        this.value=""
    }
})
let addItem =(inputbox)=>{
    let listitem=document.createElement("li")
    listitem.innerHTML=`${inputbox}<i><i>`;
    listitem.addEventListener("click",function(){
        this.classList.toggle('done');
    })

    listitem.querySelector("i").addEventListener("click",
    function(){
        listitem.remove();
    })
    list.appendChild(listitem);
}