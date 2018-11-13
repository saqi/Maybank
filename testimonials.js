;(function () {
  var testimonials = document.querySelectorAll('#testimonials .flex-container .testi');
  var ul = document.querySelector('#testimonials div ul');
  var counter = 1;
  var order = 0;

  testimonials.forEach(function (item) {
    var li = document.createElement('li');
    console.log(li);
    var a = document.createElement('a');
    a.setAttribute('href', '#');
    //a.setAttribute('class', 'dot');
    a.appendChild(document.createTextNode(counter));
    li.setAttribute('id', counter++);
    console.log(li);
    li.append(a);
    console.log(li);
    ul.append(li);
  });
  ul.querySelectorAll('li').forEach(function (item) {
    item.addEventListener('click', function (ev) {
      testimonials.forEach(function (item) {
        item.style.display = 'none';
      });
      ev.preventDefault();
      testimonials[this.id-1].style.display = 'block';
    });
  });
})();
