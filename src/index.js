// @ts-nocheck
let displayValue = ''

function calculate(value) {
  if (value === 'C') {
    displayValue = ''
  } else if (value === '=') {
    try {
      displayValue = eval(displayValue).toString()
    } catch (error) {
      displayValue = 'Error'
    }
  } else if (value === '√') {
    try {
      let num = parseFloat(displayValue)
      if (isNaN(num) || num < 0) {
        displayValue = 'Error'
      } else {
        displayValue = Math.sqrt(num).toString()
      }
    } catch (error) {
      displayValue = 'Error'
    }
  } else if (value === '^2') {
    try {
      let num = parseFloat(displayValue)
      if (isNaN(num)) {
        displayValue = 'Error'
      } else {
        displayValue = (num * num).toString()
      }
    } catch (error) {
      displayValue = 'Error'
    }
  } else if (value === '1/x') {
    try {
      let num = parseFloat(displayValue)
      if (isNaN(num) || num === 0) {
        displayValue = 'Error'
      } else {
        displayValue = (1 / num).toString()
      }
    } catch (error) {
      displayValue = 'Error'
    }
  } else {
    displayValue += value
  }

  document.getElementById('display').value = displayValue
}
