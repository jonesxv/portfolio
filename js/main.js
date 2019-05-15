
$(document).ready(() => {
  const name = 'Ryan Jones'
  let typeName = '';
  $('#hero h1').click(function() {
    console.log(event.target.innerText)
  })
  let count = 0;
  (function typeOut () {
    if (count < name.length) {
      typeName += name[count];
      console.log(typeName)
      $('#type-out').text(typeName);
      count ++
      setTimeout(typeOut, 200)
    }
  })()
  
  console.log('ready')
  $('#portfolio-flters').click(function() {
    event.preventDefault();
    console.log(event.target.innerText);
  })

  $(window).scroll(function() {
    if ($(this).scrollTop() > 690) {
      $('#nav-ham').css({'color': 'black'})
      $('.nav-menu a').css({'color': 'black'})
      $('#logo img').css({'width': '40px'})
    } else {
      $('#nav-ham').css({'color': 'white'})
      $('.nav-menu a').css({'color': 'white'})
      $('#logo img').css({'width': '80px'})
    }
  })
})