import Cover3 from "@/assets/images/cover/cover_3.jpg";
import MotionContainer from "@/components/animate/motion-container";
import { variantsHelper } from "@/components/animate/variants/types";
import { themeVars } from "@/theme/theme.css";
import { motion } from "framer-motion";
import { repeat } from "ramda";
import { useMemo } from "react";

const TEXT = "SlashAdmin";
type Props = {
	isText: boolean;
	isMulti: boolean;
	variant: string;
};
export default function ContainerView({ isText, variant, isMulti }: Props) {
	const variants = useMemo(() => variantsHelper(), []);
	const imgs = useMemo(() => (isMulti ? repeat(Cover3, 5) : [Cover3]), [isMulti]);

	return (
		<div
			key={variant}
			className="h-[480px] overflow-auto rounded-lg flex flex-col items-center justify-center"
			style={{ backgroundColor: themeVars.colors.background.neutral }}
		>
			{isText ? (
				<MotionContainer className="flex h-[480px] items-center justify-center font-bold md:text-6xl">
					{TEXT.split("").map((letter) => (
						<motion.div key={letter} variants={variants}>
							{letter}
						</motion.div>
					))}
				</MotionContainer>
			) : (
				<MotionContainer className="flex flex-col items-center justify-center gap-6">
					{imgs.map((img) => (
						<motion.img
							key={img}
							src={img}
							style={{
								objectFit: "cover",
								width: "240px",
								height: isMulti ? "36px" : "240px",
								margin: "auto",
								borderRadius: "8px",
							}}
							variants={variants}
						/>
					))}
				</MotionContainer>
			)}
		</div>
	);
}
