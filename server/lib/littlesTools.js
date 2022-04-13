// General Function
export const random = (arr) => Math.floor(Math.random() * arr.length)

// Generator randoms IDs

export const randomIds = () => {
  let id = ''
  const bigArr = [
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z',
  ]
  for (let i = 0; i <= 5; i++) {
    id = id + bigArr[random(bigArr)]
  }
  return id
}
