import type { EasingDefinition, Variants } from "framer-motion";

export interface TransitionProps {
	durationIn?: number;
	durationOut?: number;
	easeIn?: EasingDefinition;
	easeOut?: EasingDefinition;
}

export const defaultEasing: EasingDefinition = [0.43, 0.13, 0.23, 0.96];

export const variantsHelper = (props?: TransitionProps): Variants => {
	const { durationIn = 0.5, durationOut = 0.5, easeIn = defaultEasing, easeOut = defaultEasing } = props || {};

	return {
		initial: { opacity: 0 },
		animate: {
			opacity: 1,
			transition: {
				duration: durationIn,
				ease: easeIn,
			},
		},
		exit: {
			opacity: 0,
			transition: {
				duration: durationOut,
				ease: easeOut,
			},
		},
	};
};

// Predefined variants for different animation types
export const varFade = (): Variants => ({
	initial: { opacity: 0 },
	animate: {
		opacity: 1,
		transition: { duration: 0.32, ease: defaultEasing },
	},
	exit: {
		opacity: 0,
		transition: { duration: 0.24, ease: defaultEasing },
	},
});

export const varScale = (): Variants => ({
	initial: { scale: 0, opacity: 0 },
	animate: {
		scale: 1,
		opacity: 1,
		transition: { duration: 0.32, ease: defaultEasing },
	},
	exit: {
		scale: 0,
		opacity: 0,
		transition: { duration: 0.24, ease: defaultEasing },
	},
});

export const varSlide = (): Variants => ({
	initial: { x: -40, opacity: 0 },
	animate: {
		x: 0,
		opacity: 1,
		transition: { duration: 0.32, ease: defaultEasing },
	},
	exit: {
		x: 40,
		opacity: 0,
		transition: { duration: 0.24, ease: defaultEasing },
	},
});
