

export class Utils {

  static isMissing(value: any): boolean {
    return value === null || typeof value === "undefined" || value === '';
  }

  static isDefined(value: any): boolean {
    return !Utils.isMissing(value);
  }
}
