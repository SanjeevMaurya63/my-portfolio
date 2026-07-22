
! function ($) {
    "use strict";

    /* ---------------------------------------------- /*
    * Preloader
    /* ---------------------------------------------- */

    $(window).on('load', function () {
        var preloader = document.getElementById('preloader');
        if (preloader) {
            // Add a small delay for smooth visual transition
            setTimeout(function () {
                preloader.classList.add('loaded');
            }, 800);
        }
    });

    /* ---------------------------------------------- /*
    * Section Scroll - Navbar
    /* ---------------------------------------------- */

    $('.navbar-nav a').on('click', function (event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top - 0
        }, 1500, 'easeInOutExpo');

        if ($('.navbar').hasClass('active')) {
            $('.navbar').removeClass('active')
            $('.ham').removeClass('active')
        }

        event.preventDefault();
    });

    $('.navbar-toggler').on('click', function () {
        $('.aside').toggleClass('aside-open');
        $(".ham").toggleClass('active');
    });


    $(window).on("scroll", function () {
        if ($(this).scrollTop() > 50) {
            $('.section-about').addClass("in");
            $('.overlay-wrap').fadeOut(400);
        } else {
            $('.section-about').removeClass("in");
            $('.overlay-wrap').fadeIn(400);
        }

        if ($(this).scrollTop() > 500) {
            $('.navbar.fixed-top').fadeIn(400);
        } else {
            $('.navbar.fixed-top').fadeOut(400);
        }


    });

    /* ---------------------------------------------- /*
    * Scroll Spy - init
    /* ---------------------------------------------- */

    $("#navbarCollapse").scrollspy({
        offset: 20
    });

    /* ---------------------------------------------- /*
    * Magnific Popup - Init
    /* ---------------------------------------------- */

    $('.simple-ajax-popup').magnificPopup({
        type: 'image',
        closeOnContentClick: true,
        mainClass: 'mfp-fade',
        gallery: {
            enabled: true,
            navigateByImgClick: true,
            preload: [0, 1]
        },
        zoom: {
            enabled: true,

            duration: 300,
            easing: 'ease-in-out',

            opener: function (openerElement) {
                return openerElement.is('img') ? openerElement : openerElement.find('img');
            }
        }
    });

    /* ---------------------------------------------- /*
    * Swipper - Init
    /* ---------------------------------------------- */

    // Portolio init

    var swiper = new Swiper('.swiper-portfolio', {
        effect: 'coverflow',
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: 3,
        spaceBetween: -30,
        initialSlide: 2,
        coverflowEffect: {
            rotate: 25,
            stretch: 0,
            depth: 150,
            slideShadows: false,
        },
        breakpoints: {
            767: {
                slidesPerView: 2,
            }
        },
        pagination: {
            el: '.portfolio-pagination',
            dynamicBullets: true,
        },
    });

    // Testimony init

    var swipertest = new Swiper('.swiper-testimony', {
        spaceBetween: 30,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });

    // Blog Init

    var swipert = new Swiper('.swiper-blog', {
        slidesPerView: 'auto',
        spaceBetween: 30,
        loop: true,
        centeredSlides: true,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
        },
        speed: 800,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });

    // Home Banner Init

    var swiper = new Swiper('.swiper-home', {
        spaceBetween: 3,
        effect: 'fade',
        pagination: {
            el: '.home-pagination',
            clickable: true,
        },
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
    });

    /* ---------------------------------------------- /*
    * Parallax - Init
    /* ---------------------------------------------- */

    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)) {
        $('#home').css({ 'background-attachment': 'scroll' });
    } else {
        $('#home').parallax('50%', -0.3);
    }

    if ($('.section-home').length) {
        if (/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)) {
            $('.swiper-slide').css({ 'background-attachment': 'scroll' });
        } else {
            $('.swiper-slide').parallax('50%', -0.3);
        }
    }

    /* ---------------------------------------------- /*
    * AnimateOnScroll - Init
    /* ---------------------------------------------- */

    var wow = new WOW(
        {
            boxClass: 'wow',      // animated element css class (default is wow)
            animateClass: 'animated', // animation css class (default is animated)
            offset: 0,          // distance to the element when triggering the animation (default is 0)
            mobile: true,       // trigger animations on mobile devices (default is true)
            live: true,       // act on asynchronously loaded content (default is true)
            callback: function (box) {
                // the callback is fired every time an animation is started
                // the argument that is passed in is the DOM node being animated
            },
            scrollContainer: null,    // optional scroll container selector, otherwise use window,
            resetAnimation: true,     // reset animation on end (default is true)
        }
    );
    wow.init();

    /* ---------------------------------------------- /*
    * Youtub Player
    /* ---------------------------------------------- */


    if ($('.youtube-bg').length) {
        $(".youtube-bg").mb_YTPlayer();
    }

    /* ---------------------------------------------- /*
    * Initialize shuffle plugin
    /* ---------------------------------------------- */

    var $portfolioContainer = $('.list-items-container');

    $('#filter li').on('click', function (e) {
        e.preventDefault();

        $('#filter li').removeClass('active');
        $(this).addClass('active');

        var group = $(this).attr('data-group');
        var groupName = $(this).attr('data-group');

        $portfolioContainer.shuffle('shuffle', groupName);
    });


    $(document).ready(function () {

        $('.simple-ajax-popup').magnificPopup({
            type: 'image',
            gallery: { enabled: true }
        });

        if ($('#home').length && typeof $.fn.ripples !== 'undefined') {
            $('#home').ripples({
                resolution: 500,
                dropRadius: 20,
                perturbance: 0.04
            });
        }

    });

    /* ---------------------------------------------- /*
    * Switcher
    /* ---------------------------------------------- */

    $('.toggle-theme-panel').on("click", function (e) {
        e.preventDefault();
        $('.settings_panel').toggleClass('active');
    });
    $('.colors-switch a').on("click", function (e) {
        e.preventDefault();
        var attr = $(this).attr("title");
        console.log(attr);
        $('head').append('<link rel="stylesheet" href="assets/css/' + attr + '.css">');
    });


    /* ---------------------------------------------- /*
    * Typing Animation
    /* ---------------------------------------------- */
    var typingRoles = ["Java Backend Developer", "Spring Boot Engineer", "Problem Solver"];
    var currentRoleIndex = 0;
    var currentCharIndex = 0;
    var isDeleting = false;
    var typingElement = document.querySelector('.hero-typing-text');

    function typeEffect() {
        if (!typingElement) return;

        var currentRole = typingRoles[currentRoleIndex];

        if (isDeleting) {
            typingElement.textContent = currentRole.substring(0, currentCharIndex - 1);
            currentCharIndex--;
        } else {
            typingElement.textContent = currentRole.substring(0, currentCharIndex + 1);
            currentCharIndex++;
        }

        var typingSpeed = 100;
        if (isDeleting) typingSpeed /= 2;

        if (!isDeleting && currentCharIndex === currentRole.length) {
            typingSpeed = 2000;
            isDeleting = true;
        } else if (isDeleting && currentCharIndex === 0) {
            isDeleting = false;
            currentRoleIndex = (currentRoleIndex + 1) % typingRoles.length;
            typingSpeed = 500;
        }

        setTimeout(typeEffect, typingSpeed);
    }

    setTimeout(typeEffect, 1000);

    /* ---------------------------------------------- /*
    * Animated Counters
    /* ---------------------------------------------- */
    var counted = false;
    $(window).on("scroll", function () {
        var counterSection = $('.about-stats-row');
        if (counterSection.length) {
            var oTop = counterSection.offset().top - window.innerHeight;
            if (counted == 0 && $(window).scrollTop() > oTop) {
                $('.about-stat-number').each(function () {
                    var $this = $(this),
                        countTo = $this.attr('data-target');
                    $({
                        countNum: $this.text()
                    }).animate({
                        countNum: countTo
                    },
                        {
                            duration: 800,
                            easing: 'swing',
                            step: function () {
                                $this.text(Math.floor(this.countNum));
                            },
                            complete: function () {
                                $this.text(this.countNum);
                            }
                        });
                });
                counted = 1;
            }
        }
    });

    /* ---------------------------------------------- *
        * Dynamic Data Loading from Spring Boot Backend
        /* ---------------------------------------------- */
    $(document).ready(async function () {
        // ==========================================
        // 1. Load Projects from Backend
        // ==========================================
        try {
            var projects = await fetchProjects();
            var swiperWrapper = document.querySelector('.swiper-blog .swiper-wrapper');
            if (swiperWrapper && projects && projects.length > 0) {
                swiperWrapper.innerHTML = '';
                projects.forEach(function (project, index) {
                    var delay = 0.1 + (index * 0.1);
                    var imageUrl = project.imageUrl || 'images/default-project.svg';
                    var techList = project.technologies || '';
                    var projectUrl = project.githubUrl || 'https://github.com/SanjeevMaurya63';
                    var slide = document.createElement('a');
                    slide.href = projectUrl;
                    slide.target = '_blank';
                    slide.className = 'swiper-slide blog-list b-box hover-state d-block mb-4';
                    slide.innerHTML = `
                        <div class="blog-list--img wow fadeIn" data-wow-duration="1.5s" data-wow-delay="${delay}s">
                            <img loading="lazy" width="1280" height="720" src="${imageUrl}" alt="${project.projectName}" class="img-fluid">
                            <div class="blog-list--details d-flex justify-content-center align-items-center">
                                <div class="blog-list--details-in">
                                    <p class="blog-by text-white">${project.projectName}</p>
                                    <span class="blog-duration text-white">${project.projectType}</span>
                                </div>
                            </div>
                        </div>
                        <div class="blog-list--desc p-3">
                            <p>${project.description || ''}</p>
                            <span class="d-block text-center mt-3 font-weight-bold blog-cat">${techList}</span>
                        </div>
                    `;
                    swiperWrapper.appendChild(slide);
                });
                // Re-init Wow for new elements
                if (typeof WOW !== 'undefined') {
                    new WOW().init();
                }
            }
        } catch (e) {
            console.log('Projects API unavailable, using static content');
        }

        // ==========================================
        // 2. Load Skills from Backend
        // ==========================================
        try {
            var skills = await fetchSkills();
            if (skills && skills.length > 0) {
                var skillTagsContainer = document.querySelector('#resume .resume-list.b-box');
                if (skillTagsContainer) {
                    // Group skills by category
                    var grouped = {};
                    skills.forEach(function (skill) {
                        var cat = skill.category || 'Other';
                        if (!grouped[cat]) grouped[cat] = [];
                        grouped[cat].push(skill);
                    });

                    var categories = ['Languages', 'Backend Frameworks', 'Frontend & Web', 'Databases', 'DevOps & Cloud', 'Tools & Others'];
                    var html = '';
                    var delay = 0;
                    categories.forEach(function (cat) {
                        if (grouped[cat] && grouped[cat].length > 0) {
                            delay += 0.1;
                            html += `<div class="mb-4 pb-2 wow fadeInUp" data-wow-duration="1.5s" data-wow-delay="${delay}s">
                                <h6>${cat}</h6>
                                <div class="skill-tag-container mt-2">`;
                            grouped[cat].forEach(function (skill) {
                                html += `<span class="skill-tag">${skill.skillName}</span>`;
                            });
                            html += `</div></div>`;
                        }
                    });
                    skillTagsContainer.innerHTML = html;
                }
            }
        } catch (e) {
            console.log('Skills API unavailable, using static content');
        }

        // ==========================================
        // 3. Load Education from Backend
        // ==========================================
        try {
            var educationList = await fetchEducation();
            if (educationList && educationList.length > 0) {
                var eduContainer = document.querySelector('#resume .col-sm-6.col-lg-6:first-child');
                if (eduContainer) {
                    var eduHtml = '<h5 class="section-subHead mt-3">My Education</h5>';
                    educationList.forEach(function (edu, index) {
                        var delay = index * 0.1;
                        var years = edu.startYear + ' - ' + (edu.endYear || 'Present');
                        var location = edu.instituteName + (edu.university ? ', ' + edu.university : '');
                        eduHtml += `<div class="resume-list b-box hover-state p-4 mt-4 wow fadeInUp" data-wow-duration="1.5s" data-wow-delay="${delay}s">
                            <div>
                                <h5>${edu.degree}${edu.fieldOfStudy ? ' - ' + edu.fieldOfStudy : ''}</h5>
                                <h6 class="badge badge-dark d-inline-block my-3">${location} | ${years}</h6>
                                <p>${edu.description || ''}</p>
                            </div>
                        </div>`;
                    });
                    // Keep the skills section alongside
                    var skillsSection = eduContainer.nextElementSibling;
                    eduContainer.innerHTML = eduHtml;
                }
            }
        } catch (e) {
            console.log('Education API unavailable, using static content');
        }

        // ==========================================
        // 4. Load Experience from Backend
        // ==========================================
        try {
            var experiences = await fetchExperiences();
            if (experiences && experiences.length > 0) {
                var expSection = document.querySelector('#resume .col-sm-6.col-lg-6:last-child');
                if (expSection) {
                    var expHtml = '<h5 class="section-subHead mt-3">Professional Experience</h5>';
                    experiences.forEach(function (exp, index) {
                        var delay = index * 0.1;
                        var start = exp.startDate ? new Date(exp.startDate).toLocaleDateString('en-US', { month: 'short', year: 'numeric' }) : '';
                        var end = exp.currentlyWorking ? 'Present' : (exp.endDate ? new Date(exp.endDate).toLocaleDateString('en-US', { month: 'short', year: 'numeric' }) : '');
                        var duration = start + (end ? ' - ' + end : '');
                        expHtml += `<div class="resume-list b-box hover-state p-4 mt-4 wow fadeInUp" data-wow-duration="1.5s" data-wow-delay="${delay}s">
                            <div>
                                <h5>${exp.role}${exp.organizationName ? ' @ ' + exp.organizationName : ''}</h5>
                                <h6 class="badge badge-dark d-inline-block my-3">${exp.type || 'Experience'}${duration ? ' | ' + duration : ''}</h6>
                                <p>${exp.description || ''}</p>
                            </div>
                        </div>`;
                    });
                    // Append before the technical skills section
                    var skillSection = expSection.querySelector('.resume-list.b-box');
                    var parent = expSection;
                    var existingSubhead = parent.querySelector('.section-subHead');
                    if (existingSubhead && existingSubhead.textContent.includes('Technical Skills')) {
                        parent.insertAdjacentHTML('afterbegin', expHtml);
                    }
                }
            }
        } catch (e) {
            console.log('Experience API unavailable, using static content');
        }

        // Re-init Swiper after dynamic content load
        if (typeof Swiper !== 'undefined') {
            try {
                new Swiper('.swiper-blog', {
                    slidesPerView: 'auto',
                    spaceBetween: 30,
                    loop: true,
                    centeredSlides: true,
                    autoplay: { delay: 3000, disableOnInteraction: false, pauseOnMouseEnter: true },
                    speed: 800,
                    navigation: { nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' },
                });
            } catch (e) {
                console.log('Swiper already initialized');
            }
        }
    });

    /* ---------------------------------------------- *
     * 1. SCROLL PROGRESS BAR
     * Shows a thin bar at top that fills as you scroll
     /* ---------------------------------------------- */
    (function () {
        var bar = document.getElementById('scroll-progress-bar');
        if (!bar) return;
        window.addEventListener('scroll', function () {
            var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            var docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            var progress = (scrollTop / docHeight) * 100;
            bar.style.width = progress + '%';
        });
    })();

    /* ---------------------------------------------- *
     * 2. BACK TO TOP BUTTON with Progress Ring
     /* ---------------------------------------------- */
    (function () {
        var btn = document.getElementById('back-to-top');
        if (!btn) return;
        var circle = btn.querySelector('circle');
        var circumference = 2 * Math.PI * 24.5; // r=24.5

        window.addEventListener('scroll', function () {
            var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            if (scrollTop > 500) {
                btn.classList.add('visible');
            } else {
                btn.classList.remove('visible');
            }
            // Update progress ring
            var docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            var progress = Math.min(scrollTop / docHeight, 1);
            var offset = circumference * (1 - progress);
            if (circle) circle.style.strokeDashoffset = offset;
        });

        btn.addEventListener('click', function () {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    })();

    /* ---------------------------------------------- *
     * 3. HERO PARTICLE EFFECT (Canvas)
     /* ---------------------------------------------- */
    (function () {
        var hero = document.querySelector('.section-home');
        if (!hero) return;

        var canvas = document.createElement('canvas');
        canvas.id = 'hero-particles';
        hero.appendChild(canvas);
        var ctx = canvas.getContext('2d');

        function resize() {
            canvas.width = hero.offsetWidth;
            canvas.height = hero.offsetHeight;
        }
        resize();
        window.addEventListener('resize', resize);

        var particles = [];
        var count = Math.min(60, Math.floor(window.innerWidth / 20));

        for (var i = 0; i < count; i++) {
            particles.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                vx: (Math.random() - 0.5) * 0.6,
                vy: (Math.random() - 0.5) * 0.6,
                r: Math.random() * 2 + 1,
                alpha: Math.random() * 0.5 + 0.2
            });
        }

        function drawParticles() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            for (var i = 0; i < particles.length; i++) {
                var p = particles[i];
                p.x += p.vx;
                p.y += p.vy;

                if (p.x < 0) p.x = canvas.width;
                if (p.x > canvas.width) p.x = 0;
                if (p.y < 0) p.y = canvas.height;
                if (p.y > canvas.height) p.y = 0;

                ctx.beginPath();
                ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
                ctx.fillStyle = 'rgba(66, 165, 245, ' + p.alpha + ')';
                ctx.fill();

                // Draw connections
                for (var j = i + 1; j < particles.length; j++) {
                    var p2 = particles[j];
                    var dx = p.x - p2.x;
                    var dy = p.y - p2.y;
                    var dist = Math.sqrt(dx * dx + dy * dy);
                    if (dist < 120) {
                        ctx.beginPath();
                        ctx.moveTo(p.x, p.y);
                        ctx.lineTo(p2.x, p2.y);
                        ctx.strokeStyle = 'rgba(66, 165, 245, ' + (0.08 * (1 - dist / 120)) + ')';
                        ctx.lineWidth = 0.5;
                        ctx.stroke();
                    }
                }
            }
            requestAnimationFrame(drawParticles);
        }
        drawParticles();
    })();

    /* ---------------------------------------------- *
     * 4. 3D TILT EFFECT ON CARDS
     /* ---------------------------------------------- */
    (function () {
        var tiltCards = document.querySelectorAll('.resume-list.b-box, .blog-list.b-box, .about-stat-card');
        tiltCards.forEach(function (card) {
            card.classList.add('tilt-card');
            var content = card.querySelector('.flip-content, .blog-list--desc, .about-stat-number');
            if (content) content.classList.add('tilt-content');

            card.addEventListener('mousemove', function (e) {
                var rect = card.getBoundingClientRect();
                var x = e.clientX - rect.left;
                var y = e.clientY - rect.top;
                var centerX = rect.width / 2;
                var centerY = rect.height / 2;
                var rotateX = (y - centerY) / centerY * -8;
                var rotateY = (x - centerX) / centerX * 8;
                card.style.transform = 'perspective(1000px) rotateX(' + rotateX + 'deg) rotateY(' + rotateY + 'deg) scale3d(1.02,1.02,1.02)';
            });

            card.addEventListener('mouseleave', function () {
                card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1,1,1)';
            });
        });
    })();

    /* ---------------------------------------------- *
     * 5. GRADIENT FLOW BORDER on Resume Cards
     /* ---------------------------------------------- */
    (function () {
        var cards = document.querySelectorAll('.resume-list.b-box, .blog-list.b-box');
        cards.forEach(function (card) {
            card.classList.add('gradient-border');
        });
    })();

    /* ---------------------------------------------- *
     * 6. MAGNETIC GLOW CURSOR
 /* ---------------------------------------------- */
    (function () {
        var glow = document.getElementById('cursor-glow');
        if (!glow) return;
        document.addEventListener('mousemove', function (e) {
            glow.style.left = e.clientX + 'px';
            glow.style.top = e.clientY + 'px';
        });
    })();

    /* ---------------------------------------------- *
     * 7. CIRCULAR SKILL PROGRESS RINGS
     /* ---------------------------------------------- */
    (function () {
        var skillsSection = document.querySelector('#resume .col-sm-6.col-lg-6:last-child');
        if (!skillsSection) return;

        // Create SVG gradient definition
        var svgNS = 'http://www.w3.org/2000/svg';
        var defs = document.createElementNS(svgNS, 'defs');
        var gradient = document.createElementNS(svgNS, 'linearGradient');
        gradient.id = 'ringGradient';
        gradient.setAttribute('x1', '0%');
        gradient.setAttribute('y1', '0%');
        gradient.setAttribute('x2', '100%');
        gradient.setAttribute('y2', '100%');
        var stop1 = document.createElementNS(svgNS, 'stop');
        stop1.setAttribute('offset', '0%');
        stop1.setAttribute('stop-color', '#1976D2');
        var stop2 = document.createElementNS(svgNS, 'stop');
        stop2.setAttribute('offset', '100%');
        stop2.setAttribute('stop-color', '#64B5F6');
        gradient.appendChild(stop1);
        gradient.appendChild(stop2);
        defs.appendChild(gradient);
        document.body.appendChild(defs);

        var skills = [
            { name: 'Java', percent: 90 },
            { name: 'Spring Boot', percent: 85 },
            { name: 'AWS', percent: 70 },
            { name: 'DSA', percent: 80 },
            { name: 'SQL', percent: 75 },
            { name: 'Docker', percent: 65 }
        ];

        var container = document.createElement('div');
        container.className = 'skill-ring-container';
        container.innerHTML = '<h6 style="width:100%;color:#c8c8c8;font-weight:500;font-size:13px;letter-spacing:0.3px;margin-bottom:5px;">Core Proficiency</h6>';

        skills.forEach(function (skill) {
            var circumference = 2 * Math.PI * 36; // r=36
            var offset = circumference * (1 - skill.percent / 100);

            var item = document.createElement('div');
            item.className = 'skill-ring-item';
            item.innerHTML = '<div class="skill-ring">' +
                '<svg viewBox="0 0 80 80">' +
                '<circle class="skill-ring-bg" cx="40" cy="40" r="36"/>' +
                '<circle class="skill-ring-progress" cx="40" cy="40" r="36" style="stroke-dasharray:' + circumference + ';stroke-dashoffset:' + circumference + ';" data-offset="' + offset + '"/>' +
                '</svg>' +
                '<span class="skill-ring-label">0%</span>' +
                '</div>' +
                '<span class="skill-ring-title">' + skill.name + '</span>';
            container.appendChild(item);
        });

        // Insert after the Technical Skills heading
        var subHead = skillsSection.querySelector('.section-subHead');
        if (subHead) {
            subHead.parentNode.insertBefore(container, subHead.nextSibling);
        }

        // Animate rings on scroll
        var animated = false;
        window.addEventListener('scroll', function () {
            if (animated) return;
            var rect = container.getBoundingClientRect();
            if (rect.top < window.innerHeight - 100) {
                animated = true;
                var circles = container.querySelectorAll('.skill-ring-progress');
                var labels = container.querySelectorAll('.skill-ring-label');
                circles.forEach(function (circle, i) {
                    var targetOffset = circle.getAttribute('data-offset');
                    var percent = skills[i].percent;
                    setTimeout(function () {
                        circle.style.strokeDashoffset = targetOffset;
                        // Animate label counting
                        var current = 0;
                        var interval = setInterval(function () {
                            current++;
                            labels[i].textContent = current + '%';
                            if (current >= percent) clearInterval(interval);
                        }, 15);
                    }, i * 200);
                });
            }
        });
    })();

    /* ---------------------------------------------- *
     * 8. FLOATING TECH TAGS IN HERO
     /* ---------------------------------------------- */
    (function () {
        var hero = document.querySelector('.section-home .overlay');
        if (!hero) return;

        var tags = ['Java', 'Spring Boot', 'AWS', 'Microservices', 'Docker', 'REST APIs'];
        var tagContainer = document.createElement('div');
        tagContainer.style.cssText = 'position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none;z-index:1;';

        tags.forEach(function (tag, i) {
            var el = document.createElement('span');
            el.className = 'floating-tag floating-tag-' + (i + 1);
            el.textContent = tag;
            tagContainer.appendChild(el);
        });

        hero.appendChild(tagContainer);
    })();

    /* ---------------------------------------------- *
     * 9. SCROLL-TRIGGERED TEXT REVEAL
     /* ---------------------------------------------- */
    (function () {
        var headings = document.querySelectorAll('.section-head h2, .about-desc h2, .section-subHead');
        headings.forEach(function (heading) {
            var wrapper = document.createElement('span');
            wrapper.className = 'reveal-text';
            var inner = document.createElement('span');
            inner.className = 'reveal-inner';
            inner.innerHTML = heading.innerHTML;
            wrapper.appendChild(inner);
            heading.innerHTML = '';
            heading.appendChild(wrapper);
        });

        // Reveal on scroll
        var revealObserver = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add('revealed');
                }
            });
        }, { threshold: 0.3 });

        document.querySelectorAll('.reveal-text').forEach(function (el) {
            revealObserver.observe(el);
        });
    })();

    /* ---------------------------------------------- *
     * 10. ANIMATED GRADIENT MESH BACKGROUND
     /* ---------------------------------------------- */
    (function () {
        var sections = document.querySelectorAll('.section:not(.section-home)');
        sections.forEach(function (section) {
            var mesh = document.createElement('div');
            mesh.className = 'mesh-bg';
            for (var i = 0; i < 3; i++) {
                var blob = document.createElement('div');
                blob.className = 'mesh-bg-blob';
                mesh.appendChild(blob);
            }
            section.appendChild(mesh);
        });
    })();

    /* ---------------------------------------------- *
     * 11. SECTION REVEAL ON SCROLL
     /* ---------------------------------------------- */
    (function () {
        var sections = document.querySelectorAll('.section:not(.section-home)');
        sections.forEach(function (section) {
            section.classList.add('section-reveal');
        });

        var sectionObserver = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, { threshold: 0.1 });

        document.querySelectorAll('.section-reveal').forEach(function (el) {
            sectionObserver.observe(el);
        });
    })();

    /* ---------------------------------------------- *
         * Perspective Grid – Single Canvas, Zero DOM Tiles
         * Covers ALL sections, scales for tall ones
         /* ---------------------------------------------- */
    (function () {
        var canvas = document.createElement('canvas');
        canvas.id = 'pgrid-canvas';
        document.body.appendChild(canvas);
        var ctx = canvas.getContext('2d');
        var dpr = window.devicePixelRatio || 1;

        var TILE = 28, BASE_COLS = 50, BASE_ROWS = 50;
        var P = 2000, FADE = 1500;
        var COLORS = [[248, 113, 113], [56, 189, 248], [74, 222, 128], [253, 224, 71]];

        // Precompute rotation matrix (Rx(30) * Ry(-5) * Rz(20))
        var rx = 30 * Math.PI / 180, ry = -5 * Math.PI / 180, rz = 20 * Math.PI / 180;
        var cRx = Math.cos(rx), sRx = Math.sin(rx), cRy = Math.cos(ry), sRy = Math.sin(ry), cRz = Math.cos(rz), sRz = Math.sin(rz);
        var R00 = cRy * cRz, R01 = -cRy * sRz, R10 = sRx * sRy * cRz + cRx * sRz, R11 = -sRx * sRy * sRz + cRx * cRz;
        var R20 = -cRx * sRy * cRz + sRx * sRz, R21 = cRx * sRy * sRz + sRx * cRz;

        var active = new Map();
        var mouseX = -9999, mouseY = -9999;
        // All content sections (skip hero which is .section-home)
        var sections = document.querySelectorAll('.section:not(.section-home)');

        function resize() {
            canvas.width = window.innerWidth * dpr;
            canvas.height = window.innerHeight * dpr;
            ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
        }
        resize();
        window.addEventListener('resize', resize);
        document.addEventListener('mousemove', function (e) { mouseX = e.clientX; mouseY = e.clientY; });

        function proj(gx, gy, cx, cy, gw, gh) {
            var x = (gx - gw / 2) * 2, y = (gy - gh / 2) * 2;
            var x2 = R00 * x + R01 * y, y2 = R10 * x + R11 * y, z2 = R20 * x + R21 * y;
            var s = P / (P + z2);
            return { x: cx + x2 * s, y: cy + y2 * s };
        }

        function screenToCell(sx, sy, cx, cy, gw, gh, cols, rows) {
            var dx = sx - cx, dy = sy - cy;
            var A = dx * R20 - P * R00, B = dx * R21 - P * R01;
            var C = dy * R20 - P * R10, D = dy * R21 - P * R11;
            var det = A * D - B * C;
            if (Math.abs(det) < 0.001) return null;
            var x = P * (-dx * D + B * dy) / det;
            var y = P * (-A * dy + C * dx) / det;
            var gx = x / 2 + gw / 2, gy = y / 2 + gh / 2;
            var col = Math.floor(gx / TILE), row = Math.floor(gy / TILE);
            if (col < 0 || col >= cols || row < 0 || row >= rows) return null;
            return { col: col, row: row };
        }

        function getColor(c, r) {
            var i = c * 100 + r;
            return COLORS[((i % 4) + (i % 7) + (i % 11)) % 4];
        }

        function isDark(sec) {
            return sec.classList.contains('section-dark') ||
                sec.classList.contains('section-resume') ||
                sec.classList.contains('section-social') ||
                sec.classList.contains('section-certifications') ||
                sec.classList.contains('section-testimony') ||
                sec.classList.contains('section-contact');
        }

        function draw() {
            var w = window.innerWidth, h = window.innerHeight, now = performance.now();
            ctx.clearRect(0, 0, w, h);

            sections.forEach(function (sec, si) {
                var rect = sec.getBoundingClientRect();
                if (rect.bottom < 0 || rect.top > h) return;

                // Scale grid to cover section height
                var cols = BASE_COLS;
                var rows = Math.max(BASE_ROWS, Math.ceil(rect.height / TILE) + 20);
                var gw = cols * TILE, gh = rows * TILE;
                var dark = isDark(sec);

                ctx.save();
                ctx.beginPath();
                ctx.rect(rect.left, rect.top, rect.width, rect.height);
                ctx.clip();

                var cx = rect.left + rect.width / 2, cy = rect.top + rect.height / 2;

                // Grid lines - white on dark, dark on light
                ctx.strokeStyle = dark ? 'rgba(255,255,255,0.07)' : 'rgba(0,0,0,0.06)';
                ctx.lineWidth = 0.5;
                ctx.beginPath();
                for (var r = 0; r <= rows; r++) {
                    var a = proj(0, r * TILE, cx, cy, gw, gh), b = proj(gw, r * TILE, cx, cy, gw, gh);
                    ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y);
                }
                for (var c = 0; c <= cols; c++) {
                    var a = proj(c * TILE, 0, cx, cy, gw, gh), b = proj(c * TILE, gh, cx, cy, gw, gh);
                    ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y);
                }
                ctx.stroke();

                // Draw active (fading) tiles
                active.forEach(function (d, key) {
                    if (d.si !== si) return;
                    var elapsed = now - d.t;
                    if (elapsed > FADE) { active.delete(key); return; }
                    var alpha = 0.55 * (1 - elapsed / FADE);
                    ctx.fillStyle = 'rgba(' + d.c[0] + ',' + d.c[1] + ',' + d.c[2] + ',' + alpha + ')';
                    var p0 = proj(d.col * TILE, d.row * TILE, cx, cy, d.gw, d.gh);
                    var p1 = proj((d.col + 1) * TILE, d.row * TILE, cx, cy, d.gw, d.gh);
                    var p2 = proj((d.col + 1) * TILE, (d.row + 1) * TILE, cx, cy, d.gw, d.gh);
                    var p3 = proj(d.col * TILE, (d.row + 1) * TILE, cx, cy, d.gw, d.gh);
                    ctx.beginPath(); ctx.moveTo(p0.x, p0.y); ctx.lineTo(p1.x, p1.y);
                    ctx.lineTo(p2.x, p2.y); ctx.lineTo(p3.x, p3.y); ctx.closePath(); ctx.fill();
                });

                // Hit test mouse position
                if (mouseX >= rect.left && mouseX <= rect.right && mouseY >= rect.top && mouseY <= rect.bottom) {
                    var cell = screenToCell(mouseX, mouseY, cx, cy, gw, gh, cols, rows);
                    if (cell) {
                        var key = si + '-' + cell.col + '-' + cell.row;
                        active.set(key, { si: si, col: cell.col, row: cell.row, c: getColor(cell.col, cell.row), t: now, gw: gw, gh: gh });
                    }
                }
                ctx.restore();
            });
            requestAnimationFrame(draw);
        }
        requestAnimationFrame(draw);
    })();

}(window.jQuery);
