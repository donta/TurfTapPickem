import { type MotionProps, motion } from "framer-motion";
import { varContainer } from "./variants/container";

interface Props extends MotionProps {
	className?: string;
}

/**
 * MotionContainer - Animation Container Component
 *
 * This is a general-purpose animation container component based on Framer Motion,
 * used to manage animation states and transition effects of child components.
 *
 * Main features:
 * 1. Provides unified animation state management (initial, animate, exit)
 * 2. Supports cascading animation effects for child components
 * 3. Customizable container styles
 *
 * Variants description:
 * - initial: Initial state
 * - animate: Animation state
 * - exit: Exit state
 *
 * Child component animation control:
 * - When the parent container sets variants, child components can inherit these animation properties
 * - Child components can specify their own animation effects through the variants property
 * - Supports various preset animation effects: fade, slide, zoom, bounce, flip, scale, rotate, etc.
 *
  * Example:
 * ```tsx
 * <MotionContainer>
 *   <motion.div variants={varFade().in}>
 *     <h1>Animated Content</h1>
 *   </motion.div>
 * </MotionContainer>
```
 *
 * Custom animation parameters:
 * You can customize animation effects by passing the following parameters to the varContainer function:
 * - staggerIn: Delay time for child element entry animations (default: 0.05s)
 * - delayIn: Overall entry animation delay time (default: 0.05s)
 * - staggerOut: Delay time for child element exit animations (default: 0.05s)
 */
export default function MotionContainer({ children, className }: Props) {
	return (
		<motion.div initial="initial" animate="animate" exit="exit" variants={varContainer()} className={className}>
			{children}
		</motion.div>
	);
}
