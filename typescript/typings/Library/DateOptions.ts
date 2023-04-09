export declare interface DateResponse {
  isAfter?: (input: string | Date) => boolean;
  isBefore?: (input: string | Date) => boolean;
  relative?: (input: string | Date) => string;
  isInThePast?: (input: string | Date) => boolean;
  isInTheFuture?: (input: string | Date) => boolean;
}
