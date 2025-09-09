import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { TextPlugin } from 'gsap/TextPlugin';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger, TextPlugin);

// Animation utilities
export const animations = {
  // Hero typing animation
  typeWriter: (element, text, delay = 0) => {
    return gsap.to(element, {
      duration: 2,
      text: text,
      delay: delay,
      ease: "none"
    });
  },

  // Reveal animation for sections
  revealSection: (element, direction = 'up') => {
    const directions = {
      up: { y: 60, opacity: 0 },
      down: { y: -60, opacity: 0 },
      left: { x: -60, opacity: 0 },
      right: { x: 60, opacity: 0 }
    };

    gsap.fromTo(element, 
      directions[direction],
      {
        y: 0,
        x: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: element,
          start: "top 85%",
          end: "bottom 15%",
          toggleActions: "play none none reverse"
        }
      }
    );
  },

  // Stagger animation for cards
  staggerCards: (elements) => {
    gsap.fromTo(elements, 
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: elements[0],
          start: "top 85%",
          end: "bottom 15%",
          toggleActions: "play none none reverse"
        }
      }
    );
  },

  // Parallax effect
  parallax: (element, speed = 0.5) => {
    gsap.to(element, {
      yPercent: -50 * speed,
      ease: "none",
      scrollTrigger: {
        trigger: element,
        start: "top bottom",
        end: "bottom top",
        scrub: true
      }
    });
  },

  // Hover animations for buttons
  buttonHover: {
    enter: (element) => {
      gsap.to(element, {
        scale: 1.05,
        duration: 0.3,
        ease: "power2.out"
      });
    },
    leave: (element) => {
      gsap.to(element, {
        scale: 1,
        duration: 0.3,
        ease: "power2.out"
      });
    }
  },

  // Card hover effects
  cardHover: {
    enter: (element) => {
      gsap.to(element, {
        y: -8,
        boxShadow: "0 20px 40px rgba(10, 37, 64, 0.2)",
        duration: 0.4,
        ease: "power2.out"
      });
    },
    leave: (element) => {
      gsap.to(element, {
        y: 0,
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        duration: 0.4,
        ease: "power2.out"
      });
    }
  },

  // Initialize all animations
  init: () => {
    // Global scroll animations
    const revealElements = document.querySelectorAll('.reveal');
    revealElements.forEach(el => animations.revealSection(el));

    const staggerElements = document.querySelectorAll('.stagger-parent');
    staggerElements.forEach(parent => {
      const children = parent.querySelectorAll('.stagger-child');
      if (children.length > 0) animations.staggerCards(children);
    });

    const parallaxElements = document.querySelectorAll('.parallax');
    parallaxElements.forEach(el => animations.parallax(el));

    // Button hover effects
    const buttons = document.querySelectorAll('.btn-hover');
    buttons.forEach(btn => {
      btn.addEventListener('mouseenter', () => animations.buttonHover.enter(btn));
      btn.addEventListener('mouseleave', () => animations.buttonHover.leave(btn));
    });

    // Card hover effects
    const cards = document.querySelectorAll('.card-hover');
    cards.forEach(card => {
      card.addEventListener('mouseenter', () => animations.cardHover.enter(card));
      card.addEventListener('mouseleave', () => animations.cardHover.leave(card));
    });
  }
};