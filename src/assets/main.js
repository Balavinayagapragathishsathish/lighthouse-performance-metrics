// Main JavaScript file for the Lighthouse Performance Metrics Explained project

document.addEventListener('DOMContentLoaded', () => {
    // Add smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 100,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Add animation to metric cards when they come into view
    const observeElements = (elements, className) => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add(className);
                }
            });
        }, {
            threshold: 0.1
        });

        elements.forEach(element => {
            observer.observe(element);
        });
    };

    // Observe metric cards
    const metricCards = document.querySelectorAll('.metric-card');
    if (metricCards.length > 0) {
        // Add a class for CSS animations
        metricCards.forEach(card => card.classList.add('fade-in-element'));
        observeElements(metricCards, 'visible');
    }

    // Basic PerformanceObserver demo on the main page
    if ('PerformanceObserver' in window) {
        // Create a simple performance measurement
        performance.mark('demo-start');
        
        // Simulate some work
        setTimeout(() => {
            performance.mark('demo-end');
            performance.measure('demo-measure', 'demo-start', 'demo-end');
            
            // Log the measurement to console
            const demoMeasure = performance.getEntriesByName('demo-measure')[0];
            console.log('Demo performance measurement:', demoMeasure.duration.toFixed(2) + 'ms');
        }, 1000);

        // Observe navigation timing metrics
        try {
            const navigationObserver = new PerformanceObserver((list) => {
                const navigationEntries = list.getEntries();
                if (navigationEntries.length > 0) {
                    console.log('Navigation Timing:', navigationEntries[0]);
                }
            });
            navigationObserver.observe({ type: 'navigation', buffered: true });
        } catch (e) {
            console.log('PerformanceObserver for navigation not supported');
        }

        // Observe paint timing metrics
        try {
            const paintObserver = new PerformanceObserver((list) => {
                const paintEntries = list.getEntries();
                paintEntries.forEach(entry => {
                    console.log(`${entry.name}:`, entry.startTime.toFixed(2) + 'ms');
                });
            });
            paintObserver.observe({ type: 'paint', buffered: true });
        } catch (e) {
            console.log('PerformanceObserver for paint timing not supported');
        }
    }
});

// Add some CSS for the animations
const style = document.createElement('style');
style.textContent = `
    .fade-in-element {
        opacity: 0;
        transform: translateY(20px);
        transition: opacity 0.6s ease-out, transform 0.6s ease-out;
    }
    
    .fade-in-element.visible {
        opacity: 1;
        transform: translateY(0);
    }
`;
document.head.appendChild(style); 