var clientAPI;

/**
 * Will generate a random positive number in Int64 range
 * @returns {number} random int
 */
export default function RandomInt64(clientAPI) {
    let min = 0, max = 2147483647;
    let iRandom = Math.floor(Math.random() * (max - min + 1) ) + min;
    console.log("Rule RandomInt64: generated Number: " + iRandom)
    return iRandom;
}
