// https://stackoverflow.com/questions/31061838/how-do-i-cancel-an-http-fetch-request/47250621#47250621
// https://stackoverflow.com/questions/46946380/fetch-api-request-timeout/57888548#57888548
// My API sometimes goes down, I also like to do offline development.
export default async function fetchTimeout(url, { ...options } = {}, ms) {
    const controller = new AbortController();
    const id = setTimeout(() => controller.abort(), ms);

    const response = await fetch(url, {
        ...options,
        signal: controller.signal
    });
    clearTimeout(id);

    console.log(response);
    return response;
};
