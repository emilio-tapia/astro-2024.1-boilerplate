export class BatchManager {
  static async iteratePromiseWithDelay({
    numTests = 5,
    delay = 100,
    callback,
  }: {
    numTests?: number;
    delay?: number;
    callback: any;
  }): Promise<number[]> {
    const results = [];
    for (let i = 0; i < numTests; i++) {
      results.push(await callback());
      await new Promise((resolve) => setTimeout(resolve, delay));
    }
    return results;
  }
}
