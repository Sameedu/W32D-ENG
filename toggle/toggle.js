
let colours = ["crimson","teal","skyblue", "green","orange"]
let index = 0
let msg
let kswitch = 0

function toggle()
{
 if (kswitch == 0)
 {
    kswitch = 1
    startCycle()
 }
 else{
     kswitch = 0
     stopCycle()
 }

}

function startCycle()
{
 msg = window.setInterval(() => {
    if (index == colours.length) 
          index=0
    document.body.style.background = colours[index];
    index+=1;
}, 1*1000);
}

function stopCycle()
{ 
    window.setTimeout(() => {
    console.log("Timerstopped")
    clearInterval(msg)
}, 1*1000);

}