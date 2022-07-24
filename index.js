
let Person1 = []
let Person2 = []
let matchedFields = []
function oper(){
    console.log(Person1,Person2)
for (let i = 0; i < Person1.length; i++) {
    Person1[i] == Person2[i] ? matchedFields.push(i) : null
}
console.log(matchedFields)
if (matchedFields.length == Person1.length) {
    alert("100%"+" "+"Matched")
    

} else {
    let matchedPercentage = Math.floor((matchedFields.length / Person1.length) * 100)
    alert(matchedPercentage + "%"+"Matched")
    
}
}

/* ===>this doesnt work found a bug function compare(val1,val2,index){
    val1==val2?matchedFields.push(index):null
} */
/* Person1.map((val1,index)=>Person2.map((val2,index)=>compare(val1,val2,index))) */
function submi(event){
    Person1 = []
    Person2 = []
    matchedFields=[]
    event.preventDefault()
    var c=document.getElementById("Film-selectp1").value
    var d=document.getElementById("Color-selectp1").value
    var a=document.getElementById("Film-selectp2").value
    var b=document.getElementById("Color-selectp2").value
    
    if((c||d||a||b)==="Open this select menu"){
        Toastify({
            text: "Please Fill All Input Fields",
            duration: 3000,
            destination: "https://github.com/apvarun/toastify-js",
            newWindow: true,
            close: true,
            gravity: "bottom", // `top` or `bottom`
            position: "center", // `left`, `center` or `right`
            stopOnFocus: true, // Prevents dismissing of toast on hover
            
            onClick: function(){} // Callback after click
          }).showToast();
    }
    if((c||d||a||b)!=="Open this select menu"){
        Person1.push(c)
        Person1.push(d)
        Person2.push(a)
        Person2.push(b)
        oper()
    }
  
     
}

