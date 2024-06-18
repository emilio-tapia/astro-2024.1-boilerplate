export class MathManager {
  static getAverageFromArray({ values }: { values: Array<number> }): number {
    let total = 0;
    // SUM
    values!.forEach((result: number) => {
      total += +result;
    });
    // AVERAGE
    const averageSpeed = total / values!.length;
    return +averageSpeed.toFixed(2);
  }

  static isThresholdPassed({
    value,
    threshold,
  }: {
    value: number;
    threshold: number;
  }): boolean {
    return value > threshold ? true : false;
  }
}
