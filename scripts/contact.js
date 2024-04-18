// when the "submit-button" is clicked, the contents of the contact-page are replaced with a single <p> element that reads "Thank you for your message" in size 24 font.
const contactFormArea = document.getElementById("contact-page");
contactFormArea.addEventListener("click", submit);

function submit() {
    contactFormArea.innerHTML = '<p>Thank you for your message</p>';
    contactFormArea.classList.add("large-text");
}
// hint: you can change the style of an element by modifying the value of that element's .style.fontSize, or by updating its .classList.
// Setup event listener for the response message after form submission
