//MULTIPLY LARGE NUMBERS AS STRINGS !!
//EXAMPLE: multiply('23993828392323423423429798798734','2898798737498273984723984729837492837498234')

const multiply = (n1,n2) => {
  
  const leadingZeroes = (str) => {
    return (str.length > 1) ? 
    	(str.charAt(0) == '0') ? 
      	leadingZeroes(str.slice(1)) : 
    			str : str
  }
  
const sumStrings = (first,second) => {

  const strToArr = (a,b) => {
    a = a.split('')
    b = b.split('')
    
    return [a,b]
  }
  
  const addLeadingZeroes = ([a,b]) => {  
    if (a.length > b.length) {
      a.forEach((val,i) => {
        if(!b[i]){b.unshift('0')}
      })
    } else if (b.length > a.length) {
      b.forEach((val,i) => {
        if (!a[i]){a.unshift('0')}
      })
    } 
    return [a,b]
  }
  
  const addStringNums = ([a,b]) => {
    let sumArr = []
    a.forEach((val,i)=>{
      sumArr.push( (parseInt(a[i]) + parseInt(b[i])).toString() )
    })
    
    return sumArr
  }
  
  const carryRemainders = (a) => {
    a = a.reverse()
    
    a.forEach((val,i,arr)=>{
      if(arr[i + 1]){
        if(parseInt(arr[i]) >= 10){
          arr[i + 1] = ( parseInt(arr[i + 1] ) + (parseInt( parseInt(arr[i])/10) )).toString()
          arr[i] = ( parseInt(arr[i]) % 10 ).toString()
        }
      }else{
        if(parseInt(arr[i]) >= 10){
          arr.push((parseInt(parseInt(arr[i])/10)).toString())
          arr[i] = ( parseInt(arr[i]) % 10 ).toString()
        }
      }
    })
    
    return a.reverse().join('')
    
  }
  
  const removeZeroes = (a) => {
    a = a.toString().split('')
    if(a[0] === '0'){
      a.shift()
      removeZeroes(a)
    }
    return a.join('')
  }
  
  const answer = carryRemainders(addStringNums(addLeadingZeroes(strToArr(first,second))))
  return removeZeroes(answer)
  
  }
  
  const carryRemainders = (nums) => {
  
    const length = nums.length
    nums.reverse()
    
    nums.forEach((a,i,arr)=>{
      if(i == length - 1){
        if(parseInt(arr[i]) >= 10){
          arr.push('1')
          arr[i] = (parseInt(arr[i]) - 10).toString()
        }
      }else{
        if(parseInt(arr[i])>=10){
          arr[i+1] = (parseInt(arr[i+1]) + 1).toString()
          arr[i] = (parseInt(arr[i]) - 10).toString()
        }
      }
  
    })
   
     return nums.reverse()
    
  }
  
  const keepCarrying = (arr) => {
    let moreCarry = false
    arr.forEach((a)=>{ if(parseInt(a) >= 10){ 
      moreCarry = true
    } 
   })
    if(moreCarry){
      return keepCarrying(carryRemainders(arr))
    }else{
      return arr
    }
  }
  
  const mult = (x,y) => {
  
    if(String(x).length > String(y).length){
      x = x.split('').reverse(); y = y.split('').reverse()
    } else {
      let temp = y; y = x.split('').reverse(); x = temp.split('').reverse()
    }
  
    let arr = []
    let products = []
    let zeroes = 0
    
    x.forEach((xVal,xI)=>{
      y.forEach((yVal,yI)=>{
        products.unshift(String(parseInt(yVal)*parseInt(xVal)))
      })
      for(var i=1;i<=zeroes;i++){
        products.push('0')
      }
      zeroes++
      arr.push(products)
      products = []
    })
  
    return arr.map(a=>keepCarrying(a).join(''))
  }
  
  const sumManyStrings = (sumArr) => {
    return sumArr.reduce((a,b)=>sumStrings(a,b))
  }
  
   const ans = sumManyStrings(mult(n1,n2))
   return leadingZeroes(ans)
   
  }