
export const generateSellerId = (i: number) => {
  const chars = 'ABCEFGHJKLMNOPRSTVXZ';
  const char = chars[i % 20];
  const num = (Math.floor(i / 20) % 100 * 2 + 1).toString().padStart(2, "0")

  return `${char}-${num}`
}