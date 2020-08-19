declare module 'kr-numbers' {
  function krNumbers(number: number): string;
  function krNumbers(number: number, options: { mixed?: boolean; spacing?: boolean }): string;

  export default krNumbers;
}
