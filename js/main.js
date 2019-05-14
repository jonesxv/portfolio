// document.addEventListener('DOMContentLoaded', function() {

//   var portfolioIsotope = $('.portfolio-container').isotope({
//     itemSelector: '.portfolio-item',
//     layoutMode: 'fitRows'
//   });
//   console.log(portfolioIsotope)
  
//   $('#portfolio-flters li').on( 'click', function() {
//     $("#portfolio-flters li").removeClass('filter-active');
//     $(this).addClass('filter-active');
  
//     portfolioIsotope.isotope({ filter: $(this).data('filter') });
//   });
// }
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
})