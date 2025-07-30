import demoService from "@/api/services/demoService";
import { Button } from "@/ui/button";
import { toast } from "sonner";

interface MockTokenExpiredProps {
	className?: string;
}

export default function MockTokenExpired({ className }: Readonly<MockTokenExpiredProps>) {
	const mockTokenExpired = () => {
		demoService
			.mockPets()
			.then((response) => {
				console.log("Mock pets data:", response);
				toast.success("Token expiration simulated successfully!", {
					description: "Check console for mock data response",
					closeButton: true,
				});
			})
			.catch((error) => {
				console.error("Error fetching mock pets data:", error);
				toast.error("Failed to simulate token expiration", {
					description: error.message || "Unknown error occurred",
					closeButton: true,
				});
			});
	};

	return (
		<div className={className}>
			<Button 
				variant="outline" 
				size="sm" 
				onClick={mockTokenExpired}
				className="text-xs"
			>
				Simulate Token Expired
			</Button>
		</div>
	);
}
