  // БУРГЕР
  const burger = document.querySelector('.burger');

  if(burger){
    const burgerBody = document.querySelector('.burger-body');
    burger.addEventListener("click", function(e){
      burger.classList.toggle('burger--active');
      burgerBody.classList.toggle('_active');
    });
  }