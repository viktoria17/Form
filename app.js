const nameInput = document.getElementById('name');
const messageTextArea = document.getElementById('message');

const focusHandler = event => {
    // target is the element that triggered the event
    event.target.className = 'form__field-highlighter';
};

const blurHandler = event => {
    event.target.className = '';
};

// addEventListener() method attaches an event handler to the specified element without overwriting existing event handlers
nameInput.addEventListener('focus', focusHandler);

nameInput.addEventListener('blur', blurHandler);

messageTextArea.addEventListener('focus', focusHandler);

messageTextArea.addEventListener('blur', blurHandler);

function executeCallback(callback){
    callback();
}
