$(document).ready(() => {

  // Header scroll effect
  $(window).scroll(() => {
    if ($(window).scrollTop() > 50) {
      $(".header").addClass("scrolled");
    } else {
      $(".header").removeClass("scrolled");
    }
  });

  // Profile dropdown
  $(".profile").click(function (e) {
    e.stopPropagation();
    const dropdown = $("#dropdown");

    // Toggle the dropdown menu
    dropdown.toggleClass("show");
  });

  // Close dropdown when clicking outside
  $(document).click(() => {
    $("#dropdown").removeClass("show");
  });

  // Hero action buttons
  $(".btn-primary").click(() => {
    alert("Memulai film...");
  });

  $(".btn-secondary").click(() => {
    alert("Menampilkan detail film...");
  });

  $(".btn-volume").click(function () {
    const icon = $(this).find("i");
    if (icon.hasClass("bx-volume-mute")) {
      icon.removeClass("bx-volume-mute").addClass("bx-volume-full");
    } else {
      icon.removeClass("bx-volume-full").addClass("bx-volume-mute");
    }
  });


  // Smooth scrolling for movie rows
  $(".movie-row").each(function () {
    const row = $(this);
    let isDown = false;
    let startX;
    let scrollLeft;

    row.on("mousedown", (e) => {
      isDown = true;
      row.addClass("active");
      startX = e.pageX - row.offset().left;
      scrollLeft = row.scrollLeft();
    });

    row.on("mouseleave", () => {
      isDown = false;
      row.removeClass("active");
    });

    row.on("mouseup", () => {
      isDown = false;
      row.removeClass("active");
    });

    row.on("mousemove", (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - row.offset().left;
      const walk = (x - startX) * 2;
      row.scrollLeft(scrollLeft - walk);
    });
  });

  // Carousel navigation buttons
  $(".carousel-btn").click(function () {
    const isNext = $(this).hasClass("next-btn");
    const movieRow = $(this).siblings(".movie-row");
    const cardWidth = movieRow.find(".movie-card").outerWidth(true);
    const scrollAmount = cardWidth * 3; 

    if (isNext) {
      movieRow.animate(
        {
          scrollLeft: movieRow.scrollLeft() + scrollAmount,
        },
        300
      );
    } else {
      movieRow.animate(
        {
          scrollLeft: movieRow.scrollLeft() - scrollAmount,
        },
        300
      );
    }
  });

  // Footer link hover effects
  $(".footer-column a, .footer-right a").hover(
    function () {
      $(this).css("color", "var(--main-color)");
    },
    function () {
      $(this).css("color", "var(--text-secondary)");
    }
  );

  window.toggleAccordion = function(id) {
    const $content = $(`#${id}`);
    const $arrow = $content.parent().find('.footer-accordion-arrow');
    
    $('.footer-accordion-content').each(function() {
      if ($(this).attr('id') !== id) {
        $(this).removeClass('active');
      }
    });
    
    $('.footer-accordion-arrow').each(function() {
      if (this !== $arrow[0]) {
        $(this).css('transform', 'rotate(0deg)');
      }
    });
    
    if ($content.hasClass('active')) {
      $content.removeClass('active');
      $arrow.css('transform', 'rotate(0deg)');
    } else {
      $content.addClass('active');
      $arrow.css('transform', 'rotate(90deg)');
    }
  };
});
