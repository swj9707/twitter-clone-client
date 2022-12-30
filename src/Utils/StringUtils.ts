import uuid from "react-uuid";

export function getExtensionOfFilename(filename: string) {
  const fileLen = filename.length;
  const lastDot = filename.lastIndexOf(".");
  return filename.substring(lastDot, fileLen).toLowerCase();
}

export function getToday() {
  var date = new Date();
  var year = date.getFullYear();
  var month = ("0" + (1 + date.getMonth())).slice(-2);
  var day = ("0" + date.getDate()).slice(-2);

  return year + "-" + month + "-" + day;
}

export function getTweetImageName(filename: string) {
  return getToday() + "-" + uuid() + "-" + getExtensionOfFilename(filename);
}
