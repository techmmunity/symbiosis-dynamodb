import { DynamoDBClientConfig } from "@aws-sdk/client-dynamodb";
import { BaseConnectionOptions } from "@techmmunity/symbiosis";

export type DynamoDbConnectionOptions =
	BaseConnectionOptions<DynamoDBClientConfig>;