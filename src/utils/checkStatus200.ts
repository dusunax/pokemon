export function checkStatus200(response: any): boolean {
  return response.status.toString()[0] === "2";
}
