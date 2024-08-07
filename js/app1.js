/* -----------------------------------------------
/* How to use? : Check the GitHub README
/* ----------------------------------------------- */

/* To load a config file (particles.json) you need to host this demo (MAMP/WAMP/local)... */
/*
particlesJS.load('particles-js', 'particles.json', function() {
  console.log('particles.js loaded - callback');
});
*/

/* Otherwise just put the config content (json): */

particlesJS('particles-js',
  
  {
    "particles": {
	"number": {
	  "value": 80,
	  "density": {
		"enable": true,
		"value_area": 800
	  }
	},
	"color": {
	  //"value": ["#325358","#C0FFEE","#31CCEC","#6A1A78"]
		"value": ["#246da6"]
	},
	"shape": {
	  "type": ["circle","triangle","edge","polygon"],
	  "stroke": {
		"width": 0,
		"color": ["#325358","#C0FFEE","#31CCEC","#6A1A78"]
	  },
	  "polygon": {
		"nb_sides": 6
	  }
	},
	"opacity": {
	  "value": 1,
	  "random": true,
	  "anim": {
		"enable": true,
		"speed": 1,
		"opacity_min": 0.1,
		"sync": false
	  }
	},
	"size": {
	  "value": 4,
	  "random": true,
	  "anim": {
		"enable": true,
		"speed": 1,
		"size_min": 0.1,
		"sync": false
	  }
	},
	"line_linked": {
	  "enable": true,
	  "distance": 150,
	  //"color": "#C0FFEE",
		"color": "#42a8d2",
	  "opacity": 0.5,
	  "width": 1
	},
	"move": {
	  "enable": true,
	  "speed": 0.5,
	  "direction": "right",
	  "random": true,
	  "straight": false,
	  "out_mode": "out",
	  "bounce": true
	}
  },
  "interactivity": {
	"detect_on": "canvas",
	"events": {
	  "onhover": {
		"enable": true,
		"mode": ["bubble","grab"]
	  },
	  "onclick": {
		"enable": true,
		"mode": "push"
	  },
	  "resize": true
	},
	"modes": {
	  "grab": {
		"distance": 140,
		"line_linked": {
		  "opacity": 1
		}
	  },
	  "bubble": {
		"distance": 200,
		"size": 4,
		"duration": 5,
		"opacity": 1,
		"speed": 0.1
	  },
	  "push": {
		"particles_nb": 4
	  }
	}
  },
  "retina_detect": true,
    "config_demo": {
      "hide_card": false,
      "background_color": "#b61924",
      "background_image": "",
      "background_position": "50% 50%",
      "background_repeat": "no-repeat",
      "background_size": "cover"
    }
  }

);