document.addEventListener("DOMContentLoaded", () => {
  let articles = document.querySelectorAll('.nieuws-section article');
  let buttons = document.querySelectorAll('.filterbutton');

  buttons.forEach(button => {
    button.addEventListener('click', () => {
      let filterClass = button.classList[0].replace('-button','');
      
      articles.forEach(article => {
        if(article.classList.contains(filterClass)) {
          article.classList.toggle('show`');
        } else {
          article.classList.toggle('hidden');
        }
      });
    });
  });
});
