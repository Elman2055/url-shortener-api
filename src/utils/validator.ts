import validUrl from "valid-url";

const validateUrl = (url: string) => {
  return validUrl.isUri(url) !== undefined;
};

export default validateUrl;
