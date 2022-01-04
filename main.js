

let accountInfo = document.getElementById("account-info");
let accountClick = document.getElementById("account-click");
let accountIsOpen = false;

accountClick.addEventListener("click", ()=> {
    if(!accountIsOpen){
        accountInfo.style.display = "none";
        accountIsOpen = true;
    }else{
        accountInfo.style.display = "block";
        accountIsOpen =  false;
    }
})




let statusClick = document.getElementById("status-click");
let statusCategory = document.getElementById("statusCategory");
let statusIsOpen = false;

statusClick.addEventListener("click", ()=> {
    if(!statusIsOpen){
        statusCategory.style.display = "none";
        statusIsOpen = true;
    }else{
        statusCategory.style.display = "flex";
        statusIsOpen =  false;
    }
})




