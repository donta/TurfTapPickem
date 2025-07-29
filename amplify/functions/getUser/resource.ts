import { defineFunction } from "@aws-amplify/backend";

export const getUserFunction = defineFunction({
	name: "getUserFunction",
	entry: "./handler.ts",
});
