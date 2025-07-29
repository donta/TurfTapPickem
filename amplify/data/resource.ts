import { type ClientSchema, a, defineData } from "@aws-amplify/backend";

const schema = a.schema({
	Todo: a.model({
		content: a.string(),
	})
	.authorization((allow: { public: () => any; }) => [allow.public()]),
});

export type Schema = ClientSchema<typeof schema>;

export const data = defineData({
	schema,
});
