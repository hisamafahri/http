export type StatusCodeInfo = {
  code: number;
  description: string;
  reference: string;
};

// ref: https://www.iana.org/assignments/http-status-codes/http-status-codes.xhtml
// last updated: 18-06-2024
export const STATUS_CODES: { [key: number]: StatusCodeInfo } = {
  100: {
    code: 100,
    description: "Continue",
    reference: "RFC9110, Section 15.2.1",
  },
  101: {
    code: 101,
    description: "Switching Protocols",
    reference: "RFC9110, Section 15.2.2",
  },
  102: { code: 102, description: "Processing", reference: "RFC2518" },
  103: { code: 103, description: "Early Hints", reference: "RFC8297" },
  200: { code: 200, description: "OK", reference: "RFC9110, Section 15.3.1" },
  201: {
    code: 201,
    description: "Created",
    reference: "RFC9110, Section 15.3.2",
  },
  202: {
    code: 202,
    description: "Accepted",
    reference: "RFC9110, Section 15.3.3",
  },
  203: {
    code: 203,
    description: "Non-Authoritative Information",
    reference: "RFC9110, Section 15.3.4",
  },
  204: {
    code: 204,
    description: "No Content",
    reference: "RFC9110, Section 15.3.5",
  },
  205: {
    code: 205,
    description: "Reset Content",
    reference: "RFC9110, Section 15.3.6",
  },
  206: {
    code: 206,
    description: "Partial Content",
    reference: "RFC9110, Section 15.3.7",
  },
  207: { code: 207, description: "Multi-Status", reference: "RFC4918" },
  208: { code: 208, description: "Already Reported", reference: "RFC5842" },
  226: { code: 226, description: "IM Used", reference: "RFC3229" },
  300: {
    code: 300,
    description: "Multiple Choices",
    reference: "RFC9110, Section 15.4.1",
  },
  301: {
    code: 301,
    description: "Moved Permanently",
    reference: "RFC9110, Section 15.4.2",
  },
  302: {
    code: 302,
    description: "Found",
    reference: "RFC9110, Section 15.4.3",
  },
  303: {
    code: 303,
    description: "See Other",
    reference: "RFC9110, Section 15.4.4",
  },
  304: {
    code: 304,
    description: "Not Modified",
    reference: "RFC9110, Section 15.4.5",
  },
  305: {
    code: 305,
    description: "Use Proxy",
    reference: "RFC9110, Section 15.4.6",
  },
  306: {
    code: 306,
    description: "Unused",
    reference: "RFC9110, Section 15.4.7",
  },
  307: {
    code: 307,
    description: "Temporary Redirect",
    reference: "RFC9110, Section 15.4.8",
  },
  308: {
    code: 308,
    description: "Permanent Redirect",
    reference: "RFC9110, Section 15.4.9",
  },
  400: {
    code: 400,
    description: "Bad Request",
    reference: "RFC9110, Section 15.5.1",
  },
  401: {
    code: 401,
    description: "Unauthorized",
    reference: "RFC9110, Section 15.5.2",
  },
  402: {
    code: 402,
    description: "Payment Required",
    reference: "RFC9110, Section 15.5.3",
  },
  403: {
    code: 403,
    description: "Forbidden",
    reference: "RFC9110, Section 15.5.4",
  },
  404: {
    code: 404,
    description: "Not Found",
    reference: "RFC9110, Section 15.5.5",
  },
  405: {
    code: 405,
    description: "Method Not Allowed",
    reference: "RFC9110, Section 15.5.6",
  },
  406: {
    code: 406,
    description: "Not Acceptable",
    reference: "RFC9110, Section 15.5.7",
  },
  407: {
    code: 407,
    description: "Proxy Authentication Required",
    reference: "RFC9110, Section 15.5.8",
  },
  408: {
    code: 408,
    description: "Request Timeout",
    reference: "RFC9110, Section 15.5.9",
  },
  409: {
    code: 409,
    description: "Conflict",
    reference: "RFC9110, Section 15.5.10",
  },
  410: {
    code: 410,
    description: "Gone",
    reference: "RFC9110, Section 15.5.11",
  },
  411: {
    code: 411,
    description: "Length Required",
    reference: "RFC9110, Section 15.5.12",
  },
  412: {
    code: 412,
    description: "Precondition Failed",
    reference: "RFC9110, Section 15.5.13",
  },
  413: {
    code: 413,
    description: "Content Too Large",
    reference: "RFC9110, Section 15.5.14",
  },
  414: {
    code: 414,
    description: "URI Too Long",
    reference: "RFC9110, Section 15.5.15",
  },
  415: {
    code: 415,
    description: "Unsupported Media Type",
    reference: "RFC9110, Section 15.5.16",
  },
  416: {
    code: 416,
    description: "Range Not Satisfiable",
    reference: "RFC9110, Section 15.5.17",
  },
  417: {
    code: 417,
    description: "Expectation Failed",
    reference: "RFC9110, Section 15.5.18",
  },
  421: {
    code: 421,
    description: "Misdirected Request",
    reference: "RFC9110, Section 15.5.20",
  },
  422: {
    code: 422,
    description: "Unprocessable Content",
    reference: "RFC9110, Section 15.5.21",
  },
  423: { code: 423, description: "Locked", reference: "RFC4918" },
  424: { code: 424, description: "Failed Dependency", reference: "RFC4918" },
  425: { code: 425, description: "Too Early", reference: "RFC8470" },
  426: {
    code: 426,
    description: "Upgrade Required",
    reference: "RFC9110, Section 15.5.22",
  },
  428: {
    code: 428,
    description: "Precondition Required",
    reference: "RFC6585",
  },
  429: { code: 429, description: "Too Many Requests", reference: "RFC6585" },
  431: {
    code: 431,
    description: "Request Header Fields Too Large",
    reference: "RFC6585",
  },
  451: {
    code: 451,
    description: "Unavailable For Legal Reasons",
    reference: "RFC7725",
  },
  500: {
    code: 500,
    description: "Internal Server Error",
    reference: "RFC9110, Section 15.6.1",
  },
  501: {
    code: 501,
    description: "Not Implemented",
    reference: "RFC9110, Section 15.6.2",
  },
  502: {
    code: 502,
    description: "Bad Gateway",
    reference: "RFC9110, Section 15.6.3",
  },
  503: {
    code: 503,
    description: "Service Unavailable",
    reference: "RFC9110, Section 15.6.4",
  },
  504: {
    code: 504,
    description: "Gateway Timeout",
    reference: "RFC9110, Section 15.6.5",
  },
  505: {
    code: 505,
    description: "HTTP Version Not Supported",
    reference: "RFC9110, Section 15.6.6",
  },
  506: {
    code: 506,
    description: "Variant Also Negotiates",
    reference: "RFC2295",
  },
  507: { code: 507, description: "Insufficient Storage", reference: "RFC4918" },
  508: { code: 508, description: "Loop Detected", reference: "RFC5842" },
  510: {
    code: 510,
    description: "Not Extended (OBSOLETED)",
    reference: "RFC2774, status-change-http-experiments-to-historic",
  },
  511: {
    code: 511,
    description: "Network Authentication Required",
    reference: "RFC6585",
  },
};
