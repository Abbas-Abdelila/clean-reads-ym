export function splitAndJoinSpace(str: string): string {
  return str.split("-").map(capitalizeFirstLetter).join(" ");
}
export function splitAndJoinHyphen(str: string): string {
  return str.split("-").map(capitalizeFirstLetter).join("-");
}

export function capitalizeFirstLetter(word: string): string {
  return word.charAt(0).toUpperCase() + word.slice(1);
}
