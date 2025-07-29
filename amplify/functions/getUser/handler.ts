import type { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda";

export const handler = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
	return {
		statusCode: 200,
		headers: {
			"Content-Type": "application/json",
			"Access-Control-Allow-Origin": "*",
			"Access-Control-Allow-Headers": "Content-Type",
			"Access-Control-Allow-Methods": "OPTIONS,POST,GET",
		},
		body: JSON.stringify({
			message: "Hello from getUserFunction!",
			event: event.body || "No body provided",
		}),
	};
};
