Welcome to the HTTP API!
================================================================================
HTTP API Documentation

=== Overview
The HTTP API provides a simple and efficient way to test HTTP status codes. Using this API, developers can quickly generate responses with specific status codes for testing purposes. The status codes are based on the HTTP status code registry: https://www.iana.org/assignments/http-status-codes/http-status-codes.xhtml.

=== How to Use

1. Access the API:
   To use the HTTP API, navigate to the following URL format:
   https://http.hisam.dev/{code}

   Replace '{code}' with the HTTP status code you want to test. For example, to get a 404 status code response, use:

   curl --url 'https://http.hisam.dev/404'

2. Receive the Response:
   The API will return a response with the specified status code in the URL.

3. Important Notes:
   Since the valid range for HTTP status codes is from 100 to 599, the API will return:
   - 200 for status codes between 100 and 199,
   - 429 if the rate limit is exceeded,
   - 400 for any other invalid status codes,
   - and the appropriate corresponding status code for valid entries within the range.

=== Usage Limits

- Rate Limit: The HTTP API enforces a rate limit of 60 requests per second to ensure fair usage and stability for all users. Exceeding this limit will result in temporary throttling of requests.

=== Open Source

The HTTP API is an open-source project. You can view, contribute to, and fork the project on GitHub: https://github.com/hisamafahri/http.

=== Fair Usage Policy

To maintain the availability and performance of the HTTP API for all users, we have implemented the following fair usage policy:

- Rate Limiting: As mentioned, the API rate limit is set to 60 requests per second. Please adhere to this limit to avoid any service interruptions.
- No Abuse: Do not use the API for any malicious purposes.
- Respect the Service: Use the API responsibly to ensure it remains a valuable resource for everyone.

By following these guidelines, you help ensure that the HTTP API remains available and reliable for all users.

For any questions, issues, or contributions, feel free to reach out via my GitHub repository or contact me through my website. Thank you for using the HTTP API!

=== About Me

Hi! I'm Hisam, a passionate developer dedicated to creating useful tools and resources for the developer community. You can learn more about my work and get in touch with me at https://hisam.dev or email me at me@hisamafahri.com.
