document.addEventListener('DOMContentLoaded', function () {
    const resumeForm = document.getElementById('resumeForm');
    const resumeOutput = document.getElementById('resumeOutput');

    resumeForm.addEventListener('submit', function (event) {
        event.preventDefault();

        const fullName = document.getElementById('fullName').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;
        const education = document.getElementById('education').value;
        const experience = document.getElementById('experience').value;

        // Display generated resume
        document.getElementById('outputFullName').textContent = `Full Name: ${fullName}`;
        document.getElementById('outputEmail').textContent = `Email: ${email}`;
        document.getElementById('outputPhone').textContent = `Phone: ${phone}`;
        document.getElementById('outputEducation').textContent = `Education: ${education}`;
        document.getElementById('outputExperience').textContent = `Experience: ${experience}`;

        resumeOutput.classList.remove('hidden');
    });
});
