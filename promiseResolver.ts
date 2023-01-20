import fs from 'node:fs';
import resolve from 'enhanced-resolve';

/**
 * Given a list `[...head, tail]`, returns `[...head]`
 */
type Head<T extends any[]> = T extends [...infer Head, any] ? Head : any[];

const resolver = resolve.ResolverFactory.createResolver({
  extensions: ['.js', '.mjs', '.json', '.node'],
  mainFields: ['browser', 'module', 'main'],
  exportsFields: ['exports'],
  conditionNames: ['import', 'require', 'node', 'default'],
  fileSystem: fs,
});

/**
 * Promise wrapper around `enhanced-resolve` resolve function.
 */
export function promiseResolve(
  ...[context, path, request, resolveContext]: Head<
    Parameters<typeof resolver.resolve>
  >
): Promise<string> {
  return new Promise((resolve, reject) => {
    resolver.resolve(
      context,
      path,
      request,
      resolveContext,
      (err: Error, res: string | false) => {
        if (err) {
          return reject(err);
        }
        // Is string if there is no error
        resolve(res as string);
      }
    );
  });
}
