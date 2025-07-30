import Logo from "@/assets/icons/ic-logo-badge.svg";
import { Icon } from "@/components/icon";
import { Button } from "@/ui/button";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/ui/tooltip";
import { cn } from "@/utils";
import { getAppVersion } from "@/utils/version";
import { useState } from "react";

interface FooterProps {
	className?: string;
}

export function Footer({ className }: Readonly<FooterProps>) {
	const [isChatOpen, setIsChatOpen] = useState(false);
	const version = getAppVersion();

	const handleChatToggle = () => {
		setIsChatOpen(!isChatOpen);
		// Here you would typically integrate with your chat service (e.g., Intercom, Zendesk, etc.)
		// Example integrations:
		// - window.Intercom('show')
		// - window.zE('messenger', 'show')
		// - Custom chat widget API
		console.log("Chat toggled:", !isChatOpen);
	};

	const handleEmailSupport = () => {
		window.location.href = "mailto:support@turftappickem.com?subject=Support Request";
	};

	return (
		<footer
			className={cn(
				"fixed bottom-0 left-0 right-0 z-50",
				"border-t border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60",
				"px-4 py-2",
				className
			)}
		>
			<div className="container mx-auto flex items-center justify-between">
				{/* Left side - Company logo and name */}
				<div className="flex items-center gap-2">
					<img src={Logo} alt="TurfTap Pickem" className="h-6 w-6" />
					<span className="text-sm font-medium text-muted-foreground">TurfTap Pickem</span>
				</div>

				{/* Center - Version info */}
				<div className="hidden sm:flex items-center gap-4 text-xs text-muted-foreground">
					<span>{version}</span>
					<span>•</span>
					<span>© 2025 TurfTap Pickem</span>
				</div>

				{/* Right side - Chat button */}
				<div className="flex items-center gap-2">
					<Tooltip>
						<TooltipTrigger asChild>
							<Button
								variant="ghost"
								size="sm"
								onClick={handleChatToggle}
								className="h-8 w-8 p-0"
								aria-label="Open chat support"
							>
								<Icon 
									icon={isChatOpen ? "mdi:chat-processing" : "mdi:chat-question"} 
									size={16} 
									className={cn(
										"transition-colors",
										isChatOpen ? "text-primary" : "text-muted-foreground hover:text-foreground"
									)}
								/>
							</Button>
						</TooltipTrigger>
						<TooltipContent side="top">
							<p>{isChatOpen ? "Close chat" : "Need help? Chat with us"}</p>
						</TooltipContent>
					</Tooltip>

					{/* Mobile version display */}
					<span className="text-xs text-muted-foreground sm:hidden">{version}</span>
				</div>
			</div>

			{/* Chat widget placeholder - you would replace this with your actual chat widget */}
			{isChatOpen && (
				<div className="absolute bottom-full right-4 mb-2 w-80 max-w-[calc(100vw-2rem)]">
					<div className="rounded-lg border border-border bg-background p-4 shadow-lg">
						<div className="flex items-center justify-between mb-3">
							<h3 className="font-semibold">Chat Support</h3>
							<Button
								variant="ghost"
								size="sm"
								onClick={() => setIsChatOpen(false)}
								className="h-6 w-6 p-0"
							>
								<Icon icon="mdi:close" size={14} />
							</Button>
						</div>
						<p className="text-sm text-muted-foreground mb-3">
							How can we help you today?
						</p>
						<div className="flex gap-2">
							<Button size="sm" variant="outline" onClick={handleChatToggle}>
								Start Chat
							</Button>
							<Button size="sm" variant="ghost" onClick={handleEmailSupport}>
								Email Support
							</Button>
						</div>
					</div>
				</div>
			)}
		</footer>
	);
}

export default Footer;
