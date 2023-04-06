let clickCount = 0;

function newOffer() {
    const fname = document.getElementById("fname").value;
    const lname = document.getElementById("lname").value;
    const job = document.getElementById("job").value;
    const salary = document.getElementById("salary").value;
    const message = document.getElementById("message");
    
    if(document.getElementById("salary").value.length>=7){
        message.innerHTML = "The salary provided is disproportionately high, please reconsider the amount."
        message.style.display = "flex"
    }
    else if(document.getElementById("salary").value.length<=4){
        message.innerHTML = "The offered salary is insufficient, please reconsider the amount."
        message.style.display = "flex"
    }
    else if(/[0-9]/.test(fname) || /[0-9]/.test(lname) || /[0-9]/.test(job)){
        message.innerHTML = "Numbers should be present only in the salary input window."
        message.style.display = "flex"
    }
    else {
        if(clickCount < 2 && fname && lname && job && salary){
            const newDiv = document.createElement("div");
            newDiv.style.cssText =
            "margin: 1%; padding: 1%; height: 70px; min-width: 200px; border: 1px solid white; font-size: 0.9rem;";

            const newContent = document.createElement("span");
            newContent.style.color = "rgb(24, 146, 148)";
            newContent.innerHTML = "Name: <span style='color: white'>" + fname + "</span>";
            const lineBreak1 = document.createElement("br");

            const newContent1 = document.createElement("span");
            newContent1.style.color = "rgb(24, 146, 148)";
            newContent1.innerHTML = "Last Name: <span style='color: white'>" + lname + "</span>";
            const lineBreak2 = document.createElement("br");

            const newContent2 = document.createElement("span");
            newContent2.style.color = "rgb(24, 146, 148)";
            newContent2.innerHTML = "Job title: <span style='color: white'>" + job + "</span>";
            const lineBreak3 = document.createElement("br");

            const newContent3 = document.createElement("span");
            newContent3.style.color = "rgb(24, 146, 148)";
            newContent3.innerHTML = "Expected Salary: <span style='color: white'>" + "$" + salary + "</span>";

            newDiv.appendChild(newContent);
            newDiv.appendChild(lineBreak1);
            newDiv.appendChild(newContent1);
            newDiv.appendChild(lineBreak2);
            newDiv.appendChild(newContent2);
            newDiv.appendChild(lineBreak3);
            newDiv.appendChild(newContent3);

            const currentDiv = document.getElementById("many-offers");
            const main = document.getElementById("whole");
            main.insertBefore(newDiv, currentDiv);

            document.getElementById("fname").value = "";
            document.getElementById("lname").value = "";
            document.getElementById("job").value = "";
            document.getElementById("salary").value = "";
            message.innerHTML = "";
            message.style.display = "none"

            clickCount ++;

            if (clickCount === 2) {
                document.getElementById("new").disabled = true;
                message.innerHTML = "There's enough job postings for now. Come back later."
                message.style.display = "flex"
            }
        }
    
    }
    
}


document.addEventListener('DOMContentLoaded', function() {
    const button = document.getElementById("new");
    button.addEventListener("click", newOffer);
});