const button = document.querySelector('.main__content__btn')
const colorSection = document.querySelector('.color__section')
const rgbaSection = document.querySelector('.color__section__rgba')
const hexSection = document.querySelector('.color__section__hex')

button.addEventListener('click', () => {
    colorGenerator()
})

let colorGenerator = () => {
    let colorCodeR = Math.floor(Math.random()*255)
    let colorCodeG = Math.floor(Math.random()*255)
    let colorCodeB = Math.floor(Math.random()*255)
    let colorCodeA = +Math.random().toFixed(3)
    let rgba = `rgba(${colorCodeR}, ${colorCodeG}, ${colorCodeB}, ${colorCodeA})`
    colorSection.style.backgroundColor = `${rgba}`  
    let hexCode = `hex code ${RGBAToHexA(colorCodeR, colorCodeG, colorCodeB, colorCodeA)}`
    rgbaSection.textContent = rgba;
    hexSection.textContent = hexCode;
}

function RGBAToHexA(r,g,b,a) {
    r = r.toString(16);
    g = g.toString(16);
    b = b.toString(16);
    a = Math.round(a * 255).toString(16);
  
    if (r.length == 1)
      r = "0" + r;
    if (g.length == 1)
      g = "0" + g;
    if (b.length == 1)
      b = "0" + b;
    if (a.length == 1)
      a = "0" + a;
  
    return "#" + r + g + b + a;
  }

console.log('210'.toString(16));


