import demoService from "@/api/services/demoService";
import { Button } from "@/ui/button";
import { Card, CardContent } from "@/ui/card";

export default function TokenExpired() {
	// const tokenExpiredMutation = useMutation({
	// 	mutationFn: demoService.mockTokenExpired,
	// });

	const mockTokenExpired = () => {
		demoService
			.mockPets()
			.then((response) => {
				console.log("Mock pets data:", response);
			})
			.catch((error) => {
				console.error("Error fetching mock pets data:", error);
			});
	};
	return (
		<Card>
			<CardContent className="grid grid-cols-1 gap-4 lg:grid-cols-2">
				<div>
					<p>Clicking a button to simulate a token expiration scenario.</p>
				</div>
				<div>
					<Button onClick={mockTokenExpired}>Simulate Token Expired</Button>
				</div>
			</CardContent>
		</Card>
	);
}
