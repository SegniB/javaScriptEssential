
function submitFeedback() {
    const username = document.querySelector('#name').value;
    const age = document.querySelector('#age').value;
    const email = document.querySelector('#email').value;
    const job = document.querySelector('#job').value;
    const designation = document.querySelector('#designation').value;
    const productType = document.querySelector('#productType').value;
    const feedback = document.querySelector('#feedbackText').value;
 
    alert('Thank you for your valuable feedback');

    document.querySelector('#userName').innerHTML = username;
    document.querySelector('#userAge').innerHTML = age;
    document.querySelector('#userEmail').innerHTML = email;
    document.querySelector('#userJob').innerHTML = job;
    document.querySelector('#userDesignation').innerHTML = designation;
    document.querySelector('#userProductChoice').innerHTML = productType;
    document.querySelector('#userFeedback').innerHTML = feedback;

    document.querySelector('#userInfo').style.display = 'block';
}

const submitButton=document.querySelector('#submitBtn');

submitButton.addEventListener('click', submitFeedback); 

document.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
      submitFeedback();
    }
  });