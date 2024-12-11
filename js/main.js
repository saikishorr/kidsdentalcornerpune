(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Initiate the wowjs
    new WOW().init();


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 40) {
            $('.navbar').addClass('sticky-top');
        } else {
            $('.navbar').removeClass('sticky-top');
        }
    });
    
    // Dropdown on mouse hover
    const $dropdown = $(".dropdown");
    const $dropdownToggle = $(".dropdown-toggle");
    const $dropdownMenu = $(".dropdown-menu");
    const showClass = "show";
    
    $(window).on("load resize", function() {
        if (this.matchMedia("(min-width: 992px)").matches) {
            $dropdown.hover(
            function() {
                const $this = $(this);
                $this.addClass(showClass);
                $this.find($dropdownToggle).attr("aria-expanded", "true");
                $this.find($dropdownMenu).addClass(showClass);
            },
            function() {
                const $this = $(this);
                $this.removeClass(showClass);
                $this.find($dropdownToggle).attr("aria-expanded", "false");
                $this.find($dropdownMenu).removeClass(showClass);
            }
            );
        } else {
            $dropdown.off("mouseenter mouseleave");
        }
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Date and time picker
    $('.date').datetimepicker({
        format: 'L'
    });
    $('.time').datetimepicker({
        format: 'LT'
    });


    // Image comparison
    $(".twentytwenty-container").twentytwenty({});


    // Price carousel
    $(".price-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        margin: 45,
        dots: false,
        loop: true,
        nav : true,
        navText : [
            '<i class="bi bi-arrow-left"></i>',
            '<i class="bi bi-arrow-right"></i>'
        ],
        responsive: {
            0:{
                items:1
            },
            768:{
                items:2
            }
        }
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        items: 1,
        dots: false,
        loop: true,
        nav : true,
        navText : [
            '<i class="bi bi-arrow-left"></i>',
            '<i class="bi bi-arrow-right"></i>'
        ],
    });
    
})(jQuery);



document.addEventListener("DOMContentLoaded", function () {
    const facilities = document.querySelectorAll(".facility");
    const facilityGridOverlay = document.getElementById("facilityGridOverlay");
    const descriptionSection = document.getElementById("descriptionSection");
    const descriptionImage = document.getElementById("descriptionImage");
    const descriptionTitle = document.getElementById("descriptionTitle");
    const descriptionText = document.getElementById("descriptionText");
    const closeButton = document.getElementById("closeButton");

    // Facility data
    const facilityData = {
        1: { title: "Infant & Toddler", text: "Gentle care for infants and toddlers.", image: "https://via.placeholder.com/600" },
        2: { title: "Anxiety-Free Treatment", text: "Stress-free dental care.", image: "https://via.placeholder.com/600" },
        3: { title: "Preventive Dentistry", text: "Protect your oral health.", image: "https://via.placeholder.com/600" },
        4: { title: "Orthodontics", text: "Aligned and beautiful smiles.", image: "https://via.placeholder.com/600" },
        5: { title: "General Anesthesia", text: "Comfortable and safe procedures.", image: "https://via.placeholder.com/600" },
        6: { title: "Sleep Dentistry", text: "Sleep through your dental care.", image: "https://via.placeholder.com/600" },
        7: { title: "Special Needs", text: "Tailored care for everyone.", image: "https://via.placeholder.com/600" },
        8: { title: "Disabilities", text: "Accessible and gentle dentistry.", image: "https://via.placeholder.com/600" },
        9: { title: "Advanced Care", text: "State-of-the-art treatments.", image: "https://via.placeholder.com/600" },
    };

    facilities.forEach(facility => {
        facility.addEventListener("click", function () {
            const index = this.getAttribute("data-index");
            const data = facilityData[index];

            // Update description content
            descriptionImage.src = data.image;
            descriptionTitle.textContent = data.title;
            descriptionText.textContent = data.text;

            // Show overlay and description section
            facilityGridOverlay.style.display = "block";
            descriptionSection.style.display = "flex";
        });
    });

    // Close button functionality
    closeButton.addEventListener("click", function () {
        facilityGridOverlay.style.display = "none";
        descriptionSection.style.display = "none";
    });
});

