import { STATUS_CODES, StatusCodeInfo } from "./constants";

export const isValidStatusCode = (code: number) => {
  if (code < 100 || code > 600) {
    return false;
  }

  return true;
};

export const getStatusCodeInfo = (code: number): StatusCodeInfo => {
  if (STATUS_CODES[code]) {
    return STATUS_CODES[code];
  } else if (
    (104 <= code && code <= 199) ||
    (209 <= code && code <= 225) ||
    (227 <= code && code <= 299) ||
    (309 <= code && code <= 399) ||
    (419 <= code && code <= 420) ||
    (427 <= code && code <= 430) ||
    (432 <= code && code <= 450) ||
    (452 <= code && code <= 499) ||
    code === 509 ||
    (512 <= code && code <= 599)
  ) {
    return { code, description: "Unassigned", reference: "" };
  } else if (code === 306 || code === 418) {
    return {
      code,
      description: "Unused",
      reference:
        code === 306 ? "RFC9110, Section 15.4.7" : "RFC9110, Section 15.5.19",
    };
  } else {
    return { code, description: "Invalid status code", reference: "" };
  }
};
