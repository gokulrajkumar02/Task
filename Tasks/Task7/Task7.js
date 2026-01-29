
const btnSubmit = document.getElementById("form");
const totalForm = document.getElementById("main");
const formValue = document.getElementById("formValue")
const formData = document.getElementById("formData")
const textAreaData = document.getElementById("textArea");
btnSubmit.addEventListener("submit", (e) => {
    e.preventDefault();
    totalForm.style.display = "none";
    alert("Form Submitted Successfully!");
    formValue.innerText = "Thank you for submitting the form.";
    formData.style.border = "1px solid black";
    formData.style.width = "350px";
    formData.innerHTML = "<br> Form Details : <br><br>";
    const userName = document.createElement("p");
    userName.innerText = `Name : ${document.getElementById("userName").value}`
    formData.appendChild(userName);
    const userPhoneNumber = document.createElement("p");
    userPhoneNumber.innerText = `Phone-Number : ${document.getElementById("userPhoneNumber").value}`
    formData.appendChild(userPhoneNumber);
    const userDOB = document.createElement("p");
    userDOB.innerText = `Date-of-birth : ${document.getElementById("userDOB").value}`
    formData.appendChild(userDOB);
    const userGender = document.createElement("p");
    const male = document.getElementById("gen1");
    const female = document.getElementById("gen2");
    if (male.checked) {
        userGender.innerText = "Gender : Men";
    } else if (female.checked) {
        userGender.innerText = "Gender : Women";
    }
    formData.appendChild(userGender);
    const userTechSkills = document.createElement("p");
    userTechSkills.innerText = "Tech Skills : ";
    const techJava = document.getElementById("techJava");
    const techFrontEnd = document.getElementById("techFrontEnd");   
    const techUIUX = document.getElementById("techUIUX");
    const techPython = document.getElementById("techPython");
    let bool = true
    if (techJava.checked) {
        bool = false
        userTechSkills.innerText += " Java ";
    }
    if (techFrontEnd.checked) {
        bool = false
        userTechSkills.innerText += " ,Front-End ";
    }
    if (techUIUX.checked) {
        bool = false
        userTechSkills.innerText += " ,UI/UX ";
    }
    if (techPython.checked) {
        bool = false
        userTechSkills.innerText += " ,Python ";
    }
    if(bool) {
        userTechSkills.innerText += " None ";
    }
    formData.appendChild(userTechSkills);
    const userProjectDetails = document.createElement("p");
    userProjectDetails.innerText = `Project Details : ${document.getElementById("textArea").value}`;
    formData.appendChild(userProjectDetails);
    const userPassword = document.createElement("p");
    userPassword.innerText = `Password : ${document.getElementById("userPassword").value}`;
    //console.log(userPassword.innerText);
    
    formData.appendChild(userPassword);
}); 
