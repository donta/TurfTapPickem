import Cover3 from "@/assets/images/cover/cover_3.jpg";
import MotionContainer from "@/components/animate/motion-container";
import { variantsHelper } from "@/components/animate/variants/types";
import { themeVars } from "@/theme/theme.css";
import { motion } from "framer-motion";
import { useMemo } from "react";

type Props = {
	variant: string;
};
export default function ContainerView({ variant }: Props) {
	const variants = useMemo(() => variantsHelper(), []);
	const isKenburns = variant.includes("kenburns");

	return (
		<div
			key={variant}
			className="h-[480px] overflow-hidden rounded-lg"
			style={{ backgroundColor: themeVars.colors.background.neutral }}
		>
			<MotionContainer className="flex h-full w-full flex-col items-center gap-6">
				{isKenburns ? (
					<motion.img src={Cover3} className="h-full w-full object-cover" variants={variants} />
				) : (
					<motion.div className="h-full w-full" variants={variants} />
				)}
			</MotionContainer>
		</div>
	);
}
