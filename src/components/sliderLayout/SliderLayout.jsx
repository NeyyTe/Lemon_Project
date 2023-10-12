import './sliderLayout.css'


const SliderLayout = {
    className: "center",
    infinite: true, // Boucle infinie du slider
    lazyLoad: "ondemand", // LazyLoading des images dans le slider

    slidesToShow: 7, // Nombres d'éléments affiché
    slidesToScroll: 7, // Nombres d'éléments affiché lors d'un scroll avec les flèches ou drag a la souris
    speed: 800, // Vitesse de transition ( en ms )
    arrows: true, // Affichage des fléches de navigation

    responsive: [
      // Responsivité du slider
      {
        breakpoint: 1610,
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 1158,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  export default SliderLayout
