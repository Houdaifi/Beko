const ratio = .3;
const options = {
    root: null,
    rootMargin: '0px',
    threshold: ratio
  }

  const callback = function (entries, observer) {
    entries.forEach(function (entry) {
        if (entry.intersectionRatio > ratio) {
            entry.target.classList.add('reveal-visible');
            observer.unobserve(entry.target);
        }
    });
  }

  const observer = new IntersectionObserver(callback, options);
  document.querySelectorAll('.reveal').forEach(function (element){
      observer.observe(element);
  });

    const intersection = function (entries, observer) {
        entries.forEach(function (e) {
            if (e.intersectionRatio > ratio) {
                $(".odometer").each(function(index, element) {
                    setTimeout(function (){
                        $(element).html(999);
                    },100);
                });
                observer.unobserve(e.target);
            }
        });
    }

    const observer1 = new IntersectionObserver(intersection, options);
    document.querySelectorAll('.odometer').forEach(function (o){
        observer1.observe(o);
    });

var BaseCompAnimations = function() {
  // Animation toggle functionality
  var initAnimationToggle = function(){
      var $animationClass, $button, $currentSection;

      // On button click
      jQuery('.js-animation-section button').on('click', function(){
          $button         = jQuery(this);
          $animationClass = $button.data('animation-class');
          $currentSection = $button.parents('.js-animation-section');

          // Update class preview
          jQuery('.js-animation-preview', $currentSection).html($animationClass);

          // Update animation object classes
          jQuery('.js-animation-object', $currentSection)
              .removeClass()
              .addClass('js-animation-object animated ' + $animationClass);
      });
  };

  return {
      init: function() {
          // Init animation toggle
          initAnimationToggle();
      }
  };
}();

// Initialize when page loads
jQuery(function(){ BaseCompAnimations.init(); });