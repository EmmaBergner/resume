function sendMail(contactForm) {
    emailjs.send("service_vhx6358", "template_ov5jv3p", {
            "from_name": contactForm.name.value,
            "from_email": contactForm.email.value,
            "project_request": contactForm.projectsummary.value
        })
        .then(
            function (response) {
                console.log("SUCCESS", response);
            },
            function (error) {
                console.log("FAILED", error);
            });
    document.getElementById("mailform").reset();
    return false;
}