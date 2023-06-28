
/**
 * Suspends execution for the given number of milliseconds by awaiting the returned promise.
 * 
 * @param {The number§} ms the number of ms to sleep for
 * @returns Proise to be awaited
 */
export default function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}