const input=document.querySelector("input");
const add=document.querySelector('.Add');
const container=document.querySelector(".container");

const notify = new Audio("bird.mp4");
const added = new Audio("Added.mp3");
const cancelled = new Audio("Cancel.wav");
add.addEventListener("click",(evt)=>{
evt.preventDefault();
if (input.value!=="")
{
    let list=document.createElement("div");
    list.innerHTML=`<p><input type="checkbox" id="horns"/>${input.value}</p><span>Cancel</span>`;
    container.append(list);
    added.play();
    input.value="";
    const iele=document.querySelectorAll("span");
    const check=document.querySelectorAll("#horns")
    for(i=0;i<iele.length;i++)
    {
        iele[i].addEventListener("click",(evt)=>
        {
            cancelled.play();
            console.log(evt.target.parentElement.remove());
        });
        let temp="light";
        check[i].addEventListener("click",(evt)=>
        {
            if (temp==="light") {
                evt.target.parentElement.style.backgroundColor="grey";
                temp="grey";
                notify.play();
            }
            else if(temp==="grey"){
                evt.target.parentElement.style.backgroundColor="white";
                temp="light";
            }
        });
    }
}
else
{
    alert("Please enter any task");
}

})
