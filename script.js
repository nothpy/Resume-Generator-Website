// Function to update the profile header based on input values
function updateHeader() {
    const nameInput = document.getElementById("nameInput").value;
    const phoneInput = document.getElementById("phoneInput").value;
    const emailInput = document.getElementById("emailInput").value;
    const githubInput = document.getElementById("githubInput").value;
    const linkedinInput = document.getElementById("linkedinInput").value;
    // const imageInput = document.getElementById('imageInput');

    // Update the header dynamically
    document.getElementById("name").textContent = nameInput || 'Your Name';
    document.getElementById("phone").textContent = "+91-" + phoneInput || 'Phone Number';
    document.getElementById("email").textContent = emailInput || 'Email';
    document.getElementById("email").href = emailInput ? "mailto:" + emailInput : '#';
    document.getElementById("github").textContent = githubInput || 'GitHub';
    document.getElementById("github").href = githubInput || '#';
    document.getElementById("linkedin").textContent = linkedinInput || 'LinkedIn';
    document.getElementById("linkedin").href = linkedinInput || '#';
    // document.getElementById('profileImage').src = imageInput.value;

    // Handle image preview
    const imageInput = document.getElementById('imageInput');
    const profileImage = document.getElementById('profileImage');
    const imagePreview = document.getElementById('imagePreview');

    if (imageInput.files && imageInput.files[0]) {
        const reader = new FileReader();

        reader.onload = function (e) {
            profileImage.src = e.target.result; // Display uploaded image in the header
            imagePreview.src = e.target.result; // Display uploaded image in the preview area
            imagePreview.style.display = 'block'; // Show the image preview
        };

        reader.readAsDataURL(imageInput.files[0]); // Convert the uploaded file to a data URL
    }
}


// Function to update the summary dynamically
function updateSummary() {
    const summaryInput = document.getElementById('summaryInput').value;
    document.getElementById("sum-text").textContent = summaryInput;
}


function addEducation() {
    const degree = document.getElementById('degreeInput').value;
    const institution = document.getElementById('institutionInput').value;
    const year = document.getElementById('yearInput').value;
    const score = document.getElementById('scoreInput').value;

    if (degree && institution && year && score) {
        // Create a new row for the education item
        const newRow = document.createElement('tr');
        newRow.innerHTML = `
            <th scope="row">${degree}</th>
            <td>${institution}</td>
            <td>${year}</td>
            <td>${score}</td>
        `;

        // Append the new row to the table body
        document.getElementById('education-table-body').appendChild(newRow);

        // Clear the form fields after adding
        document.getElementById('degreeInput').value = '';
        document.getElementById('institutionInput').value = '';
        document.getElementById('yearInput').value = '';
        document.getElementById('scoreInput').value = '';
    } else {
        alert('Please fill in all fields before adding education.');
    }
}

function addExperience() {
    // Get input values from the form
    const jobRole = document.getElementById('jobRoleInput').value;
    const jobTitleAtCompany = document.getElementById('job-title-at-company-input').value;
    const jobDuration = document.getElementById('job-duration-input').value;
    const jobLocation = document.getElementById('jobLocationInput').value;
    const jobDescription = document.getElementById('jobDescription-input').value;

    // Create a new div to hold the experience
    const experienceDiv = document.createElement('div');
    experienceDiv.classList.add('experience-item');
    experienceDiv.style.marginBottom = '20px';

    // Create the structure for the experience
    experienceDiv.innerHTML = `
        <h3>${jobRole} || ${jobTitleAtCompany}, ${jobLocation} [ ${jobDuration} ]</h3>
        <p>${jobDescription}</p>
    `;

    // Append the new experience to the experience section
    document.getElementById('experience').appendChild(experienceDiv);

    // Clear the form inputs after adding the experience
    document.getElementById('experience-form').reset();
}

function addProject() {
    // Get input values from the form
    const projectName = document.getElementById("projectNameInput").value;
    const projectLink = document.getElementById("projectLinkInput").value;
    const projectDescription = document.getElementById("projectDescriptionInput").value;

    // Create a new div to hold the project item
    const projectDiv = document.createElement('div');
    projectDiv.classList.add('project-item');

    // Set the content of the project
    projectDiv.innerHTML = `
        <h3>${projectName} | <a href="${projectLink}" target="_blank">Link</a></h3>
        <p>${projectDescription}</p>
    `;

    // Append the new project item to the projects section
    document.getElementById('projects').appendChild(projectDiv);

    // Clear the form fields after adding the project
    document.getElementById("projectNameInput").value = '';
    document.getElementById("projectLinkInput").value = '';
    document.getElementById("projectDescriptionInput").value = '';
}

function addTechnicalSkills() {
    const LInput = document.getElementById("LInput").value;
    const WtInput = document.getElementById("WtInput").value;
    const DbInput = document.getElementById("DbInput").value;
    const VcInput = document.getElementById("VcInput").value;
    const FLInput = document.getElementById("FLInput").value;
    const OSInput = document.getElementById("OSInput").value;
    const MissInput = document.getElementById("MissInput").value;

    document.getElementById("programmingLanguage").textContent = LInput;
    document.getElementById("Web-technology").textContent = WtInput;
    document.getElementById("Database-management").textContent = DbInput;
    document.getElementById("version-control").textContent = VcInput;
    document.getElementById("frameworks").textContent = FLInput;
    document.getElementById("operatingSystem").textContent = OSInput;
    document.getElementById("Miscellaneous").textContent = MissInput;
}

function addAchievement() {
    const achievementName = document.getElementById("achievementNameInput").value;
    const achievementDescription = document.getElementById("achievementDescriptionInput").value;

    // Create a new achievement item
    const achievementItem = document.createElement("div");
    achievementItem.classList.add("achievement-item");
    achievementItem.innerHTML = `
        <h3>${achievementName}</h3>
        <p>${achievementDescription}</p>
    `;

    // Append the new achievement to the achievement list
    document.getElementById("achievementList").appendChild(achievementItem);

    // Clear the input fields after adding the achievement
    document.getElementById("achievementNameInput").value = '';
    document.getElementById("achievementDescriptionInput").value = '';
}

function addExtracurriculars() {
    const extracurricularName = document.getElementById('ExtracurricularsNameInput').value;
    const extracurricularDescription = document.getElementById('ExtracurricularsDescriptionInput').value;

    if (extracurricularName && extracurricularDescription) {
        // Create a new div for the extracurricular
        const extracurricularItem = document.createElement('div');
        extracurricularItem.classList.add('extracurricular-item');

        // Add name and description to the new div
        extracurricularItem.innerHTML = `<h3>${extracurricularName}</h3>
                                          <p>${extracurricularDescription}</p>`;
        // Append the new div to the Extracurriculars list
        document.getElementById('ExtracurricularsList').appendChild(extracurricularItem);

        // Clear the input fields after adding
        document.getElementById('ExtracurricularsNameInput').value = '';
        document.getElementById('ExtracurricularsDescriptionInput').value = '';
    } else {
        alert('Please fill in both fields');
    }
}

function addKeyCourse() {
    const courseName = document.getElementById('keyCourseNameInput').value;

    if (courseName) {
        // Create a new list item
        const newCourseItem = document.createElement('li');
        newCourseItem.textContent = courseName;

        // Append the new item to the list
        document.getElementById('keyCourseList').appendChild(newCourseItem);

        // Clear the input field
        document.getElementById('keyCourseNameInput').value = '';
    } else {
        alert('Please enter a course name');
    }
}

function downloadCv() {
    let printBtn = document.getElementById("print-btn");
    printBtn.style.display = "none";
    let template = document.getElementById("generaterTemp");
    template.style.display = "none";
    window.print();
    printBtn.style.display = "block";
    template.style.display = "block";

}