let Result
let Person1 = []
let Person2 = []
let matchedFields = []
function oper(){
    //console.log(Person1,Person2)
for (let i = 0; i < Person1.length; i++) {
    Person1[i] == Person2[i] ? matchedFields.push(i) : null

}


if (matchedFields.length == Person1.length) {
    Result =100    

} else {
    let matchedPercentage = Math.floor((matchedFields.length / Person1.length) * 100)
    Result=matchedPercentage
    
}
}

/* ===>this doesnt work found a bug function compare(val1,val2,index){
    val1==val2?matchedFields.push(index):null
} */
/* Person1.map((val1,index)=>Person2.map((val2,index)=>compare(val1,val2,index))) */
function submi(event){
    Result
    Person1 = []
    Person2 = []
    matchedFields=[]
    event.preventDefault()
    var c=document.getElementById("Film-selectp1").value
    var d=document.getElementById("Color-selectp1").value
    var a=document.getElementById("Film-selectp2").value
    var b=document.getElementById("Color-selectp2").value
    
    if((c||d||a||b)==="Open this select menu"){
         
        
          document.getElementById("modalb").innerHTML=`<div class="alert alert-danger" role="alert">
          please Fill Fields To see Results!
        </div>`


    }
    if((c||d||a||b)!=="Open this select menu"){
        Person1.push(c)
        Person1.push(d)
        Person2.push(a)
        Person2.push(b)
        oper()
        console.log(Result)
        function GetResult(){
            if(Result==100){
                return [100,0]
            }
            if(Result==50){
                return [50,50]
            }
        }
        const ctx = document.getElementById('myChart');
const myChart = new Chart(ctx, {
  type: 'doughnut',
    data:  {
        labels: [
          'Matched ',
          'Unmatched',
          
        ],
        datasets: [{
          label: 'My First Dataset',
          data: GetResult(),
          backgroundColor: [
            'rgb(255, 99, 132)',
            'rgb(54, 162, 235)',
          ],
          hoverOffset: 4
        }]
      }
});
    }
  document.getElementById('ResultDD').innerHTML="You got "+Result+"%"+"Match"
     
}





