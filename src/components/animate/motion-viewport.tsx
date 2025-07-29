import { type MotionProps, motion } from "framer-motion";

import { varContainer } from "./variants/container";

interface Props extends MotionProps {
	className?: string;
}

/**
 * MotionViewport Component - Used to create viewport scroll-based animation effects
 *
 * Main features:
 * - Triggers animation when elements enter the viewport
 * - Supports custom animation variants
 * - Configurable viewport trigger conditions
 *
 * Viewport configuration details:
 * - once: Whether the animation triggers only once
 * - amount: Viewport entry threshold ratio (between 0-1)
 *
 * Animation states:
 * - initial: Initial state
 * - animate: Animation state after entering the viewport
 *
 * @see https://www.framer.com/motion/scroll-animations/#scroll-triggered-animations
 */
export default function MotionViewport({ children, className, ...other }: Props) {
	return (
		<motion.div
			initial="initial"
			whileInView="animate"
			viewport={{ once: true, amount: 0.3 }}
			variants={varContainer()}
			className={className}
			{...other}
		>
			{children}
		</motion.div>
	);
}
