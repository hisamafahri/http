import { Hono } from "hono";
import { getStatusCodeInfo, isValidStatusCode } from "./lib/utils";

type Bindings = {
  RATE_LIMITER: any;
};

const app = new Hono<{ Bindings: Bindings }>();

app.use(async (c, next) => {
  const pathname = c.req.path;

  const { success } = await c.env.RATE_LIMITER.limit({ key: pathname });
  if (!success) {
    return c.text("Rate limit exceeded", { status: 429 });
  }

  await next();
});

app.get("/", (c) => {
  return c.text(`Welcome to http API!
================================================================================
http API Documentation

=== Overview
The http API provides a simple and efficient way to test HTTP status codes. By using this API, developers can quickly generate responses with specific status codes for testing purposes.

=== How to Use

1. Access the API:
   To use the http API, simply navigate to the following URL format:
   https://http.hisam.dev/:code

   Replace \`:code\` with the desired HTTP status code you want to test. For example, to get a 404 status code response, you would use:

   https://http.hisam.dev/404

2. Receive the Response:
   The API will return a response with the designated status code you specified in the URL.

=== Usage Limits

- Rate Limit: The http API enforces a rate limit of 60 requests per second to ensure fair usage and stability for all users. Exceeding this limit will result in temporary throttling of your requests.

=== Open Source

The http API is an open-source project. You can view, contribute to, and fork the project on GitHub:
[https://github.com/hisamafahri/http](https://github.com/hisamafahri/http)

=== About Me

Hi! I'm Hisam, a passionate developer dedicated to creating useful tools and resources for the developer community. You can learn more about my work and get in touch with me at https://hisam.dev.

=== Fair Usage Policy

To maintain the availability and performance of the http API for all users, we have implemented the following fair usage policy:

- Rate Limiting: As mentioned, the API rate limit is set to 60 requests per second. Please adhere to this limit to avoid any disruptions in service.
- No Abuse: Do not use the API for malicious purposes, such as DDoS attacks or other forms of abuse.
- Respect the Service: Use the API responsibly to ensure it remains a valuable resource for everyone.

By following these guidelines, you help ensure that the http API remains available and reliable for all users.

For any questions, issues, or contributions, feel free to reach out via my GitHub repository or contact me through my website. Thank you for using the http API!`);
});

app.get("/:code", (c) => {
  const code = c.req.param("code");
  const codeInt = parseInt(code);

  if (isNaN(codeInt)) {
    return c.text("Invalid code", { status: 400 });
  }

  if (!isValidStatusCode(codeInt)) {
    return c.text("Out of range status code", { status: 400 });
  }

  const cInfo = getStatusCodeInfo(codeInt);

  return c.json(cInfo, { status: codeInt });
});

export default app;
