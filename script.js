let studentTitle=document.querySelector('.student')
console.log(studentTitle)


studentTitle.addEventListener('mouseover', (e)=> {
    
e.target.style.color = "red";

})

studentTitle.addEventListener('mouseout', (e)=> {
    
e.target.style.color = "black";
    
})

//document.querySelector('.link').addEventListener('click', event => {
    //handle click
  //})
    
 // document.querySelectorAll('.link').forEach(link => {
   // link.addEventListener('mouseOver', e.target.style.fontSize => {
      //handle click
     // console.log(e)
    //})
  //})
 //document.querySelectorAll('.link').forEach(link) = {
 //link.addEventListener('moveOver', event.target.style.fontSize => '20pt';
//)}
  //)}


document.querySelectorAll('.link').forEach(link => {
    link.addEventListener('mouseover',  e => {
    e.target.style.fontSize = '50px' 
   })
})

