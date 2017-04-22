//Check if browser is firefox
if (typeof InstallTrigger === 'undefined') {
  // Find elements in DOM
  var linksDOM = document.querySelectorAll('.js-nav-link');
  // Smooth scroll settings
  var scrollDuration = 1000;
  var numberOfScrolls = 100;
  var singleScrollDuration = scrollDuration / numberOfScrolls;
  // Smooth scroll function
  function smoothScrollTo(elementScrolled, targetElementPosition, scrollDuration) {
    if (scrollDuration <= 0) { return; }
    var distanceToTarget = targetElementPosition - elementScrolled.scrollTop;
    var scrollBlock = distanceToTarget / scrollDuration * singleScrollDuration;
    setTimeout(function(){
      elementScrolled.scrollTop = elementScrolled.scrollTop + scrollBlock;
      if (elementScrolled.scrollTop === targetElementPosition) { return; }
      smoothScrollTo(elementScrolled, targetElementPosition, scrollDuration - singleScrollDuration);
    }, 10);
  }
  // Add event listeners
  linksDOM.forEach(function(link) {
    link.addEventListener('click', function(event) {
      event.preventDefault();
      var targetId = event.target.innerText;
      var targetPosition = document.getElementById(targetId).offsetTop;
      smoothScrollTo(document.body, targetPosition, scrollDuration);
    });
  });
}
