import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.matchMedia({
	// small
	"(min-width: 599px)": function () {
		// The ScrollTriggers created inside these functions are segregated and get
		// reverted/killed when the media query doesn't match anymore.

		gsap.to(".my-work", {
			xPercent: -100,
			x: () => innerWidth,
			ease: "none",
			scrollTrigger: {
				trigger: ".my-work",
				start: "top top",
				end: () => innerWidth * 3,
				scrub: true,
				pin: true,
				invalidateOnRefresh: true,
				anticipatePin: 1,
			},
		});
	},

	// all
	all: function () {
		// ScrollTriggers created here aren't associated with a particular media query,
		// so they persist.
	},
});
