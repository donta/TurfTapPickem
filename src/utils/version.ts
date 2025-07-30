// Version information utility
export const getAppVersion = () => {
	// Try to get version from environment variable first (set during build)
	// Fallback to static version
	return import.meta.env.VITE_APP_VERSION || "v0.0.1";
};

export const getBuildInfo = () => {
	return {
		version: getAppVersion(),
		buildDate: import.meta.env.VITE_BUILD_DATE || new Date().toISOString().split('T')[0],
		environment: import.meta.env.MODE,
		commit: import.meta.env.VITE_GIT_COMMIT || "unknown",
	};
};
