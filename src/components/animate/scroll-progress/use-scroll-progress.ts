import type { MotionValue } from "framer-motion";
import { useScroll } from "framer-motion";
import { useMemo, useRef } from "react";

/**
 * Return type definition, containing scroll progress values and element reference
 */
export type UseScrollProgressReturn = {
	/** Horizontal scroll progress value (0-1) */
	scrollXProgress: MotionValue<number>;
	/** Vertical scroll progress value (0-1) */
	scrollYProgress: MotionValue<number>;
	/** Container element reference, used for container scroll mode */
	elementRef: React.RefObject<HTMLDivElement | null>;
};

/**
 * Scroll target type
 * - "document": Monitor the entire document's scroll
 * - "container": Monitor specified container's scroll
 */
export type UseScrollProgress = "document" | "container";

/**
 * Custom Hook for getting scroll progress
 *
 * @param target - Scroll target type, can be "document" or "container", defaults to "document"
 * @returns Returns an object containing scroll progress values and element reference
 *
 * @example
 * // Monitor entire document's scroll
 * const { scrollYProgress } = useScrollProgress();
 *
 * @example
 * // Monitor container's scroll
 * const { scrollYProgress, elementRef } = useScrollProgress("container");
 * // Bind elementRef to container element
 */
export function useScrollProgress(target: UseScrollProgress = "document"): UseScrollProgressReturn {
	const elementRef = useRef<HTMLDivElement>(null);

	const options = { container: elementRef };

	const { scrollYProgress, scrollXProgress } = useScroll(target === "container" ? options : undefined);

	const memoizedValue = useMemo(
		() => ({ elementRef, scrollXProgress, scrollYProgress }),
		[scrollXProgress, scrollYProgress],
	);

	return memoizedValue;
}
