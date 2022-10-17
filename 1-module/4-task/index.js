function checkSpam(str) {
  return /^(1[xX]be[tT])|([xX][xX][xX\d])|[]]$/gm.test(str);
}
