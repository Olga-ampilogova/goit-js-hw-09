const lebelForm = document.querySelector("label");
lebelForm.classList.add("label-form");
const emailForm = document.querySelector('input');
emailForm.classList.add('email-form');
let textarea = document.querySelector('textarea');
textarea.classList.add('text-input');
const button = document.querySelector('button');
button.classList.add('submit-button');
const STORAGE_FEEDBACK_KEY = "feedback-form-state";
let form = document.querySelector('.feedback-form');

let formContent = {
    email: '',
    message: '',
}
let parsedContent = localStorage.getItem((STORAGE_FEEDBACK_KEY) ?? '');
if (parsedContent) {
    formContent = JSON.parse(parsedContent);
}
form.elements.email.value = formContent.email;
form.elements.message.value = formContent.message;
form.addEventListener('input',() => {
    formContent.email = form.elements.email.value.trim();
    formContent.message = form.elements.message.value.trim();
    localStorage.setItem(STORAGE_FEEDBACK_KEY, JSON.stringify(formContent));
});

form.addEventListener('submit', (event) => {
    event.preventDefault();
     if (form.elements.email.value === "" || form.elements.message.value === "") {
        return alert("All form fields must be filled in");
    }
    localStorage.removeItem(STORAGE_FEEDBACK_KEY);
    form.reset();
    console.log(formContent);
});



