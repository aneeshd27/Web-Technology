const notesContainer=document.querySelector(".notes-container");
const createBtn=document.querySelector(".btn");
let notes=document.querySelectorAll(".input-box"); 


function showNotes()
{
    notesContainer.innerHTML=localStorage.getItem("notes");
}
showNotes();
function updateStorage()
{
    localStorage.setItem("notes",notesContainer.innerHTML);
}

createBtn.addEventListener("click",()=>{
    let inputBox=document.createElement("p");
    let img=document.createElement("img");
    inputBox.className="input-box";
    inputBox.setAttribute("contenteditable","true");
    img.src="images/delete.png";
    notesContainer.appendChild(inputBox).appendChild(img);
})

notesContainer.addEventListener("click",function(e){
    if (e.target && e.target.tagName=="IMG"){
        e.target.parentElement.remove();
        updateStorage();
    }
    else if(e.target.tagName==="P")
    {
        notes=document.querySelectorAll(".input-box");
        notes.forEach(nt=>{
            nt.onkeyup=function(){
                updateStorage();
            }
        })
    }
    
})


// Get a reference to the contenteditable <p> element
const noteElement = document.getElementById("note");

// Add an event listener to the <p> element to detect when content changes
noteElement.addEventListener("input", function() {
    const text = noteElement.textContent.trim(); // Get the entered text
    const currentTime = new Date(); // Get the current time
    const formattedTime = currentTime.toLocaleString(); // Format the time as a string

    // Output the text and the time to the console (you can store this data in a database or elsewhere)
    console.log("Text:", text);
    console.log("Time:", formattedTime);
});
