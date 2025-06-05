document.addEventListener('DOMContentLoaded', () => {
    // Mobile menu toggle
    const navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);
    
    if (navbarBurgers.length > 0) {
        navbarBurgers.forEach(el => {
            el.addEventListener('click', () => {
                const target = el.dataset.target;
                const targetEl = document.getElementById(target);
                
                el.classList.toggle('is-active');
                targetEl.classList.toggle('is-active');
            });
        });
    }
    
    // Sample program data
    const programs = [
        {
            title: "Morning Show",
            time: "Weekdays 6AM-10AM",
            description: "Start your day with the best music and news",
            image: "https://via.placeholder.com/300x180?text=Morning+Show"
        },
        {
            title: "Afternoon Drive",
            time: "Weekdays 3PM-7PM",
            description: "The perfect soundtrack for your commute home",
            image: "https://via.placeholder.com/300x180?text=Afternoon+Drive"
        },
        {
            title: "Late Night Jazz",
            time: "Every Night 10PM-2AM",
            description: "Smooth jazz to wind down your evening",
            image: "https://via.placeholder.com/300x180?text=Late+Night+Jazz"
        },
        {
            title: "Weekend Brunch",
            time: "Weekends 9AM-1PM",
            description: "Chill vibes for your lazy weekend mornings",
            image: "https://via.placeholder.com/300x180?text=Weekend+Brunch"
        },
        {
            title: "Sports Talk",
            time: "Weekdays 1PM-3PM",
            description: "All the latest sports news and analysis",
            image: "https://via.placeholder.com/300x180?text=Sports+Talk"
        },
        {
            title: "Indie Hour",
            time: "Daily 8PM-9PM",
            description: "Discover new independent artists",
            image: "https://via.placeholder.com/300x180?text=Indie+Hour"
        }
    ];
    
    // Initialize carousel
    const carousel = document.getElementById('programs-carousel');
    const prevBtn = document.querySelector('.carousel-prev');
    const nextBtn = document.querySelector('.carousel-next');
    let currentPosition = 0;
    const cardWidth = 320; // Width + margin of program card
    
    // Create program cards
    programs.forEach(program => {
        const card = document.createElement('div');
        card.className = 'program-card';
        card.innerHTML = `
            <div class="program-image" style="background-image: url('${program.image}')"></div>
            <div class="program-content">
                <div class="program-time">${program.time}</div>
                <h3 class="program-title">${program.title}</h3>
                <p class="program-desc">${program.description}</p>
            </div>
        `;
        carousel.appendChild(card);
    });
    
    // Carousel navigation
    function updateCarousel() {
        carousel.style.transform = `translateX(${-currentPosition * cardWidth}px)`;
    }
    
    prevBtn.addEventListener('click', () => {
        if (currentPosition > 0) {
            currentPosition--;
            updateCarousel();
        }
    });
    
    nextBtn.addEventListener('click', () => {
        if (currentPosition < programs.length - 1) {
            currentPosition++;
            updateCarousel();
        }
    });
    
    // Optional: Auto-advance carousel
    // setInterval(() => {
    //     if (currentPosition < programs.length - 1) {
    //         currentPosition++;
    //     } else {
    //         currentPosition = 0;
    //     }
    //     updateCarousel();
    // }, 5000);
});