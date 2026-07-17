export default function promiseAll<T extends readonly unknown[] | []>(
  iterable: T,
): Promise<{ -readonly [P in keyof T]: Awaited<T[P]> }> {
  let results: any[] = [];
  let completedCount = 0;
  const total = iterable.length;

  return new Promise((resolve, reject) => {
    if (total === 0) {
      resolve(results as any);
    }
    iterable.forEach((task, index) => {
      Promise.resolve(task)
        .then((value) => {
          results[index] = value;
          completedCount++;
          if (completedCount === total) {
            resolve(results as any);
          }
        })
        .catch((error) => {
          return reject(error);
        });
    });
  });
}
