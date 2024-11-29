// Function to get form data
function getFormData() {
    var nameInput = document.getElementById("name");
    var emailInput = document.getElementById("email");
    var phoneInput = document.getElementById("phone");
    var experienceInput = document.getElementById("experience");
    var educationInput = document.getElementById("education");
    // Check if any of the inputs are null (not found in the DOM)
    if (!nameInput || !emailInput || !phoneInput || !experienceInput || !educationInput) {
        console.error("One or more form elements are missing.");
        return null;
    }
    // Return the collected data
    return {
        name: nameInput.value,
        email: emailInput.value,
        phone: phoneInput.value,
        experience: experienceInput.value,
        education: educationInput.value,
    };
}
// Function to render the resume
// function renderResume(data: ResumeData, layoutClass: string, colorClass: string): void {
//     const resumeOutput = document.getElementById("resume-output") as HTMLDivElement | null;
//     // Ensure the output div exists
//     if (!resumeOutput) {
//         console.error("Resume output container not found.");
//         return;
//     }
//     // Render the resume with the selected layout and color class
//     resumeOutput.innerHTML = `
//         <div class="${layoutClass} ${colorClass}">
//             <h2>${data.name}</h2>
//             <p><strong>Email:</strong> ${data.email}</p>
//             <p><strong>Phone:</strong> ${data.phone}</p>
//             <p><strong>Experience:</strong></p>
//             <p>${data.experience}</p>
//         </div>
//     `;
// }
// Function to render the resume
function renderResume(data, layoutClass, colorClass) {
    var resumeOutput = document.getElementById("resume-output");
    // Ensure the output div exists
    if (!resumeOutput) {
        console.error("Resume output container not found.");
        return;
    }
    // Render the resume with the selected layout and color class
    resumeOutput.innerHTML = "\n        <div class=\"".concat(layoutClass, " ").concat(colorClass, "\">\n            <h2>").concat(data.name, "</h2>\n            <p><strong>Email:</strong> ").concat(data.email, "</p>\n            <p><strong>Phone:</strong> ").concat(data.phone, "</p>\n            <p><strong>Experience:</strong></p>\n            <p>").concat(data.experience, "</p>\n            <p><strong>Education:</strong></p>\n            <p>").concat(data.education, "</p>  <!-- Added this line -->\n        </div>\n    ");
}
// Event listener for generate button
document.addEventListener("DOMContentLoaded", function () {
    var generateButton = document.getElementById("generate-resume");
    var layoutSelect = document.getElementById("layout");
    var colorSelect = document.getElementById("color");
    // Ensure all elements exist
    if (!generateButton || !layoutSelect || !colorSelect) {
        console.error("One or more select elements are missing.");
        return;
    }
    generateButton.addEventListener("click", function () {
        var data = getFormData();
        // Proceed only if data is available
        if (!data)
            return;
        var layout = layoutSelect.value;
        var color = colorSelect.value;
        // Map layout and color to CSS classes
        var layoutClass = layout;
        var colorClass = color;
        renderResume(data, layoutClass, colorClass);
    });
});
