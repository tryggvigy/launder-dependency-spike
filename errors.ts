type ErrorConstructorArgs = { options: ErrorOptions };
type ResolveErrorConstructorArgs = ErrorConstructorArgs & {
  packageName: string;
};
type ParseErrorConstructorArgs = ErrorConstructorArgs & {
  path: string;
  packageName: string;
};

export class ResolveError extends Error {
  public packageName: string;
  public originalErrorMsg: string;
  constructor({ packageName, options }: ResolveErrorConstructorArgs) {
    super(`Failed to resolve "${packageName}"`, options);
    Object.setPrototypeOf(this, ResolveError.prototype);
  }
}

export function isResolveError(obj: unknown): obj is ResolveError {
  return obj instanceof ResolveError;
}

export class ParseError extends Error {
  public packageName: string;
  public path: string;
  public originalErrorMsg: string;
  constructor({ packageName, path, options }: ParseErrorConstructorArgs) {
    super(`Failed to parse "${path}" from ${packageName}`, options);
    Object.setPrototypeOf(this, ParseError.prototype);
  }
}

export function isParseError(obj: unknown): obj is ParseError {
  return obj instanceof ParseError;
}
