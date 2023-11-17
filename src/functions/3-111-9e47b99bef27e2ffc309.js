import { app, InvocationContext } from "@azure/functions";
import * as https from "https";
import * as df from 'durable-functions';
import { ActivityHandler, OrchestrationContext, OrchestrationHandler } from 'durable-functions';

codigo desde postman version ya me muero 9

export async function serviceBusQueueTrigger(message: unknown, context: InvocationContext): Promise<void> {
    context.log('Service bus queue function processed message:', message);
    const client = df.getClient(context);
    const instanceId: string = await client.startNew("3-111-9e47b99bef27e2ffc309", message);
    context.log(`Started orchestration with ID = '${instanceId}'.`);
}
app.serviceBusQueue('3-111-9e47b99bef27e2ffc309', {
    connection: 'connection',
    queueName: '3-111-9e47b99bef27e2ffc309',
    handler: serviceBusQueueTrigger,
    extraInputs: [df.input.durableClient()],
});