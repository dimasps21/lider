/* Переключение между добавлением и удалением класса "отзывчивый" в topnav, когда пользователь нажимает на значок */
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}


document.getElementById('scrollButton')
.addEventListener('click', function() { 
document.querySelector('#targetDiv').scrollIntoView({ behavior: 'smooth' }); 
});

