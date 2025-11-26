
document.getElementById('home').addEventListener('click', function() {
  document.querySelector('#home').scrollIntoView({ behavior: 'smooth' });
});

document.getElementById('about-us').addEventListener('click', function() {
  document.querySelector('#about-us').scrollIntoView({ behavior: 'smooth' });
});

document.getElementById('contacts').addEventListener('click', function() {
  document.querySelector('#contacts').scrollIntoView({ behavior: 'smooth' });
});

/* Переключение между добавлением и удалением класса "отзывчивый" в topnav, когда пользователь нажимает на значок */
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}