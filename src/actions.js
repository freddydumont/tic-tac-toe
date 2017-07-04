export const CHOOSE_SYMBOL = 'CHOOSE_SYMBOL';

export function chooseSymbol(playerSymbol) {
  return {
    type: CHOOSE_SYMBOL,
    playerSymbol
  }
}