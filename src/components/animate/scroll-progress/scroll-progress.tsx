import { useTheme } from "@/theme/hooks";
import { type HTMLMotionProps, type MotionValue, m, useSpring } from "framer-motion";
import type { CSSProperties } from "react";

/**
 * ScrollProgress component properties interface
 * @interface Props
 * @extends {HTMLMotionProps<"div">} - Extends from Framer Motion's div element properties
 * @property {string} [color] - Progress bar color, optional
 * @property {MotionValue<number>} scrollYProgress - Scroll progress value, range 0-1
 * @property {number} [height=4] - Progress bar height, defaults to 4px
 */
interface Props extends HTMLMotionProps<"div"> {
	color?: string;
	scrollYProgress: MotionValue<number>;
	height?: number;
}

/**
 * Scroll Progress Component
 *
 * This component displays the page scroll progress with a smooth progress bar animation effect.
 * Uses Framer Motion's spring animation for smooth transitions.
 *
 * @component
 * @param {Props} props - Component properties
 * @param {MotionValue<number>} props.scrollYProgress - Scroll progress value
 * @param {number} [props.height=4] - Progress bar height
 * @param {string} [props.color] - Progress bar color, defaults to theme color
 *
 * @example
 * ```tsx
 * const scrollYProgress = useScroll().scrollYProgress;
 * <ScrollProgress scrollYProgress={scrollYProgress} />
 * ```
 */
export function ScrollProgress({ scrollYProgress, height = 4, color, ...other }: Props) {
	// Use spring animation to make progress bar changes smoother
	const scaleX = useSpring(scrollYProgress, {
		stiffness: 100, // Spring stiffness
		damping: 30, // Damping coefficient
		restDelta: 0.001, // Animation stop threshold
	});

	const { themeTokens } = useTheme();

	// Set progress bar color, use provided color if available, otherwise use theme color
	const backgroundColor = color || themeTokens.color.palette.primary.default;

	// Progress bar style configuration
	const style: CSSProperties = {
		transformOrigin: "0%", // Set transform origin to left side
		height, // Set height
		backgroundColor, // Set background color
	};

	return <m.div style={{ scaleX, ...style }} {...other} />;
}
