document.getElementById('scrollButton')
.addEventListener('click', function() { 
document.querySelector('#targetDiv').scrollIntoView({ behavior: 'smooth' }); 
});

