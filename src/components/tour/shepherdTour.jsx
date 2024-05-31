import React, { useEffect } from "react";
import Shepherd from 'shepherd.js';
import "../../styles/shepherd-theme-custom.scss";
import "../../styles/shepherd.css";

const ShepherdTour = () => {
  useEffect(() => {
    const tour = new Shepherd.Tour({
      defaultStepOptions: {
        classes: "shepherd-theme-default",
        arrow: true,
        cancelIcon: {
          enabled: true
        }
      },
      useModalOverlay: true
    });

    const steps = [
      {
        id: "welcome-step",
        text: "<strong>Welcome to CineVault!🌸🎉<br></strong> Let's take a tour of the application! Ready?🍿",
        attachTo: {
          element: ".logo",
          on: "bottom"
        },
        buttons: [
          {
            text: "Back",
            action: tour.back,
          },
          {
            text: "Next",
            action: tour.next,
          }
        ]
      },
      {
        id: "search-bar-step",
        text: "<strong>Search Bar🔍<br></strong> Type in the title, genre, or actor to find your favorite movies and TV shows! 🎥✨",
        attachTo: {
          element: ".searchInput input",
          on: "bottom"
        },
        buttons: [
          {
            text: "Back",
            action: tour.back,
          },
          {
            text: "Next",
            action: tour.next,
          }
        ]
      },
      {
        id: "trending-toggle-step",
        text: "<strong>Trending Content📈<br></strong> Check out what's trending weekly and daily. 🍿🌟!",
        attachTo: {
          element: ".switchingTabs",
          on: "bottom"
        },
        buttons: [
            {
              text: "Back",
              action: tour.back,
            },
            {
              text: "Next",
              action: tour.next,
            }
          
        ]
      },

      // Prompt to click on a movie
      {
        id: "movie-card-step",
        text: "<strong>Movie Details 🎬<br></strong> Click on any movie or TV show card to dive into details! 🌸",
        attachTo: {
          element: ".posterBlock",
          on: "bottom"
        },
        scrollTo: true,
        buttons: [
          {
            text: "Back",
            action: tour.back,
          },
          {
            text: "Next",
            action: () => {
              const firstMovieCard = document.querySelector(".posterBlock");
              if (firstMovieCard) {
                firstMovieCard.click();
                setTimeout(() => tour.next(), 1000);
              }
            }
          }
        ]
      },

    // Movie Details - Rating
      {
        id: "rating-step",
        text: "<strong>🍿Rating<br></strong> Check out the movie's rating here. Make sure it's a 🌟-studded show!",
        attachTo: {
          element: ".circleRating",
          on: "bottom"
        },
        buttons: [
          {
            text: "Back",
            action: tour.back,
          },
          {
            text: "Next",
            action: tour.next
          }
        ]
      },

    // Movie Details - Cast Info
      {
        id: "cast-info-step",
        text: "<strong>🎭 Cast Information<br></strong> Discover the stars of the show! 💖",
        attachTo: {
          element: ".castSection",
          on: "top"
        },
        scrollTo: true,
        buttons: [
          {
            text: "Back",
            action: tour.back,
          },
          {
            text: "Next",
            action: tour.next
          }
        ]
      },

    // Movie Details - Trailer
      {
        id: "trailer-step",
        text: "<strong>Watch Trailer 🍃<br></strong> Watch the trailer directly from here.",
        attachTo: {
          element: ".playbutton",
          on: "top"
        },
        scrollTo: true,
        buttons: [
          {
            text: "Back",
            action: tour.back,
          },
          {
            text: "Next",
            action: tour.next
          }
        ]
      },

    // Related videos
      {
        id: "related-videos-step",
        text: "<strong>Related Videos 📺<br></strong> Watch related videos here.",
        attachTo: {
          element: ".videos",
          on: "top"
        },
        scrollTo: true,
        buttons: [
          {
            text: "Back",
            action: tour.back,
          },
          {
            text: "Next",
            action: tour.next
          }
        ]
      },

    // Movie Details - Similar Movies
      {
        id: "similar-movies-step",
        text: "<strong>🎬 Similar Movies!<br></strong> Find more movies and shows to binge-watch in the similar section. 🍿✨",
        attachTo: {
          element: ".carouselItems",
          on: "bottom"
        },
        scrollTo: true,
        buttons: [
          {
            text: "Back",
            action: tour.back
          },
          {
            text: "Next",
            action: tour.next
          }
        ]
      },
      {
        id: "movies-nav-step",
        text: "<strong>🎥 Movies Section!<br></strong> Navigate to the Movies section to search for more movies.",
        attachTo: {
          element: ".menuItems .menuItem:nth-child(1)",
          on: "top"
        },
        scrollTo: true,
        buttons: [
          {
            text: "Next",
            action: () => {
              window.location.href = "/explore/movie?shtc=movies-infinite-scroll-step";
            }
          }
        ]
      },
      {
        id: "movies-infinite-scroll-step",
        text: "<strong>Explore More Movies!🌸<br></strong> Scroll infinitely to explore more movies🍿.",
        attachTo: {
          element: ".pageTitle",
          on: "bottom"
        },
        scrollTo: true,
        buttons: [
          {
            text: "Back",
            action: tour.back
          },
          {
            text: "Next",
            action: tour.next
          }
        ]
      },
      {
        id: "filter-step",
        text: "<strong>Filter Movies 💖<br></strong> Filter movies by genre and popularity. 🍃",
        attachTo: {
          element: ".filters",
          on: "bottom"
        },
        scrollTo: true,
        buttons: [
          {
            text: "Back",
            action: tour.back
          },
          {
            text: "Next",
            action: tour.next
          }
        ]
      },
      {
        id: "tvshows-nav-step",
        text: "<strong>TV Shows Section 📺<br></strong> Navigate to the TV Shows section to explore popular TV shows.",
        attachTo: {
          element: ".menuItems .menuItem:nth-child(2)",
          on: "bottom"
        },
        scrollTo: true,
        buttons: [
          {
            text: "Next",
            action: () => {
              window.location.href = "/explore/tv?shtc=tvshows-infinite-scroll-step";
            }
          }
        ]
      },
      {
        id: "tvshows-infinite-scroll-step",
        text: "<strong>Explore More Shows 🔍<br></strong> Scroll infinitely to explore more TV Shows!🍿",
        attachTo: {
          element: ".pageTitle",
          on: "bottom"
        },
        scrollTo: true,
        buttons: [
          {
            text: "Back",
            action: tour.back
          },
          {
            text: "Next",
            action: tour.next
          }
        ]
      },
      {
        id: "filter-shows-step",
        text: "<strong>Filter Shows ⭐<br></strong>Filter TV Shows by genre and popularity. 🍃",
        attachTo: {
          element: ".filters",
          on: "bottom"
        },
        scrollTo: true,
        buttons: [
          {
            text: "Back",
            action: tour.back
          },
          {
            text: "Next",
            action: tour.next
          }
        ]
      },
      {
        id: "finish-step",
        text: "Ready to start your binge?🌸<br><strong>Let's gooo!🎉🎉</strong>",
        buttons: [
          {
            text: "Finish",
            action: tour.complete
          }
        ]
      }
    ];

    // Add all steps to the tour
    steps.forEach(step => tour.addStep(step));

    const urlParams = new URLSearchParams(window.location.search);
    const shouldTourContinue = urlParams.get('shtc');
    if (shouldTourContinue) {
      tour.show(shouldTourContinue);
    } else {
      tour.start();
    }

    return () => {
      tour.complete();
    };
  }, []);

  return null; 
};

export default ShepherdTour;
