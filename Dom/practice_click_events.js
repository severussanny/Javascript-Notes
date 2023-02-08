const allButtons=document.querySelectorAll(".my-buttons button");
// bg yellow..color gray
allButtons.forEach((button)=>{
    button.addEventListener("click",(e)=>{
        // console.log(e.target);
        e.target.style.backgroundColor="Yellow";
        e.target.style.color="red";
        // console.log(e.currentTarget.textContent);
    });
});