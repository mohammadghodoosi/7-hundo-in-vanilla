//step 1
function getValue(){


  //step2
  let start=parseInt(document.getElementById('startValue').value)
  let end=parseInt(document.getElementById('endValue').value)


  //step3
  if (Number.isInteger(start)&&Number.isInteger(end)){
    produceNumbers(start,end)
  }else{
    alert('Enter integer inputs only...')
  }
}

//step4
function produceNumbers(start,end){
   let numbers=[]
   for(start;start<=end;start++){
     numbers.push(start)
   }
   displayNumbers(numbers)
}

//step5
function displayNumbers(numbers){
   let result=''
   let className
   numbers.forEach((num)=>{
     if (num%2==0)
     {className='even'}
     else{className='odd'}
     result+=`<tr>
              <td class=${className}>${num}</td>
              </tr>`
   })
   document.getElementById('result').innerHTML=result
}