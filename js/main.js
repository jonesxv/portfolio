
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

  // clip-path: polygon(0 0, 100% 0%, 100% 100%, 0 100%);
  // clip-path: polygon(50 50, 50% 50%, 50% 50%, 50 50%);
  // to
  // clip-path: polygon(100% 70%, 26% 100%, 0 48%, 53% 0);
  // clip-path: polygon(100% 42%, 26% 100%, 0 22%, 53% 0);
  let a1 = 50;
  let a2 = 50;
  let b1 = 50;
  let b2 = 50;
  let c1 = 50;
  let c2 = 50;
  let d1 = 50;
  let d2 = 40;
  let interval = setInterval(function() {
    a1++;
    if (a2 > 42) {
      a2--
    }
    if (b1 > 26) {
      b1--;
    }
    if (b2 < 100) {
      b2++;
    }
    if (c1 > 0) {
      c1--;
    }
    if (c2 > 22) {
      c2--;
    }
    if (d1 < 53) {
      d1++;
    }
    if (d2 > 0) {
      d2--;
    }
    $('#hero img').css('clip-path' , `polygon(${a1}% ${a2}%, ${b1}% ${b2}%, ${c1}% ${c2}%, ${d1}% ${d2}%)`)
    if (a1 === 100) {
      clearInterval(interval)
    }
  },50)
  
  
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