interface ResumeData {
    name: string;
    email: string;
    phone: string;
    experience: string;
    education: string;    
}

// Function to get form data
function getFormData(): ResumeData| null {
    const nameInput = document.getElementById("name") as HTMLInputElement | null;
    const emailInput = document.getElementById("email") as HTMLInputElement | null;
    const phoneInput = document.getElementById("phone") as HTMLInputElement | null;
    const experienceInput = document.getElementById("experience") as HTMLTextAreaElement | null;
    const educationInput = document.getElementById("education") as HTMLInputElement| null;

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
function renderResume(data: ResumeData, layoutClass: string, colorClass: string): void {
    const resumeOutput = document.getElementById("resume-output") as HTMLDivElement | null;

    // Ensure the output div exists
    if (!resumeOutput) {
        console.error("Resume output container not found.");
        return;
    }

    // Render the resume with the selected layout and color class
    resumeOutput.innerHTML = `
        <div class="${layoutClass} ${colorClass}">
            <h2>${data.name}</h2>
            <p><strong>Email:</strong> ${data.email}</p>
            <p><strong>Phone:</strong> ${data.phone}</p>
            <p><strong>Experience:</strong></p>
            <p>${data.experience}</p>
            <p><strong>Education:</strong></p>
            <p>${data.education}</p>
        </div>
    `;
}
// Event listener for generate button
document.addEventListener("DOMContentLoaded", () => {
    const generateButton = document.getElementById("generate-resume") as HTMLButtonElement | null;
    const layoutSelect = document.getElementById("layout") as HTMLSelectElement | null;
    const colorSelect = document.getElementById("color") as HTMLSelectElement | null;

    // Ensure all elements exist
    if (!generateButton || !layoutSelect || !colorSelect) {
        console.error("One or more select elements are missing.");
        return;
    }

    generateButton.addEventListener("click", () => {
        const data = getFormData();
        
        // Proceed only if data is available
        if (!data) return;

        const layout = layoutSelect.value;
        const color = colorSelect.value;

        // Map layout and color to CSS classes
        const layoutClass = layout;
        const colorClass = color;

        renderResume(data, layoutClass, colorClass);
    });
});
