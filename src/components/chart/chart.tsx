import ApexChart from "react-apexcharts";
import { chartWrapper } from "./styles.css";

import type { Props as ApexChartProps } from "react-apexcharts";

export function Chart(props: ApexChartProps) {
	return (
		<div className={chartWrapper}>
			<ApexChart
				{...props}
				options={{
					...props.options,
					chart: {
						...props.options?.chart,
						// Optimize responsive performance
						animations: {
							...props.options?.chart?.animations,
							enabled: true,
							speed: 200, // Reduce animation time
							animateGradually: {
								enabled: false, // Disable gradual animation
							},
							dynamicAnimation: {
								enabled: true,
								speed: 200, // Reduce dynamic animation time
							},
						},
						// Enable hardware acceleration
						redrawOnParentResize: true,
						redrawOnWindowResize: true,
					},
				}}
			/>
		</div>
	);
}
