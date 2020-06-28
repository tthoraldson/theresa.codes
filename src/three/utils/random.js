// generic get random number function
export const getRandomNum = (min, max) => {
    return Math.random() * (max - min) + min;
}

// random width, according to device width
export const randomWidth = () => {
  return getRandomNum(-( window.innerWidth), (window.innerWidth));
}

// random height, according to decice height
export const randomHeight = () => {
  return getRandomNum(-( window.innerHeight), (window.innerHeight))
}

// generate random point based on device width and height
export const randomPoint = (zPoint) => {
  var array = [randomWidth(), randomHeight(), zPoint];
  return array;
}