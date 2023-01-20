export function isFulfilled<T>(
  input: PromiseSettledResult<T>
): input is PromiseFulfilledResult<T> {
  return input.status === 'fulfilled';
}

export function isRejected<T>(
  input: PromiseSettledResult<T>
): input is PromiseRejectedResult {
  return input.status === 'rejected';
}
