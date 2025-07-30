import { execSync } from "node:child_process";
import { readFileSync, writeFileSync } from "node:fs";

try {
	// Read package.json to get version
	const packageJson = JSON.parse(readFileSync("package.json", "utf8"));
	const version = `v${packageJson.version}`;

	// Get git commit hash (if available)
	let gitCommit = "unknown";
	try {
		gitCommit = execSync("git rev-parse --short HEAD", { encoding: "utf8" }).trim();
	} catch (error) {
		console.warn("Could not get git commit hash:", error.message);
	}

	// Get current date
	const buildDate = new Date().toISOString().split("T")[0];

	// Create .env.local with version info
	const envContent = `# Auto-generated version info
VITE_APP_VERSION=${version}
VITE_BUILD_DATE=${buildDate}
VITE_GIT_COMMIT=${gitCommit}
`;

	writeFileSync(".env.local", envContent);
	console.log(`✅ Version info generated: ${version} (${gitCommit}) built on ${buildDate}`);
} catch (error) {
	console.error("❌ Failed to generate version info:", error.message);
	process.exit(1);
}
