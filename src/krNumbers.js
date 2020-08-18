const largeUnits = ["", "만", "억", "조", "해", "경"];
const middleUnits = ["십", "백", "천"];
const smallUnits = ["영", "일", "이", "삼", "사", "오", "육", "칠", "팔", "구"];

const convertToSmallUnit = (number) => {
  return smallUnits[number];
};

export default function krNumbers(number, options = {}) {
  const { mixed, spacing } = options;

  const strNum = number.toString();
  const numLen = strNum.length;

  if (!Number.isInteger(number))
    throw "TypeError: number is must be Number type.";
  if (numLen > 21) throw "MaxNumberLengthError: supported max length is 21.";

  let result = "";
  for (let i = 0; i < numLen; i++) {
    const reverseIdx = numLen - 1 - i;
    const curNum = Number(strNum[reverseIdx]);

    const isZero = curNum === 0;

    // 십, 백, 천 단위 처리
    const isMiddleUnit = i % 4 !== 0;
    let middleUnit = "";
    if (isMiddleUnit && !isZero && !mixed)
      middleUnit = middleUnits[(i % 4) - 1];

    // 만, 억, 조, 해, 경 단위 처리
    const isLargeUnit = i >= 4 && i % 4 === 0;
    let largeUnit = "";
    if (isLargeUnit && !isZero) largeUnit = largeUnits[Math.ceil(i / 4)];

    // 숫자 단위 처리
    let curStrNum = curNum;
    if (!isZero) {
      if (!mixed) curStrNum = convertToSmallUnit(curStrNum);
    } else {
      if (!mixed) curStrNum = "";
    }

    // 공백 처리
    let space = "";
    if (spacing && !isZero) {
      if (mixed && i % 4 === 0) space = " ";
      else if (mixed && i % 4 !== 0) space = "";
      else space = " ";
    }

    // 콤마 처리
    let comma = "";
    if (mixed && i % 4 === 3) comma = ",";

    result = `${curStrNum}${comma}${middleUnit}${largeUnit}${space}${result}`;
  }

  return result;
}
