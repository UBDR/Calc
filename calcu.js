let input = document.getElementById("screen")
input.value = "0";
// FOr buttons
let but = document.getElementsByTagName("Button");
for (let i=0;i<but.length;i++)
{
    but[i].addEventListener('click', function(event) {
        if(event.target.id=="Eq") 
        {
           eval();
        }                             //important
       if (event.target.id=="reset")
       {
           input.value = "0";
       }
       else
       {
        let bt=input.value;// console.log(event.target);
        if (bt == 0) {
                input.value = event.target.value;
            }                                                                                   
            else 
                {
                    input.value = bt + event.target.value;
                }
            }        
        // input.value = event.target.value;
    }) ;

};
// function eval(){
// if(event.target.value == '+')
// {
//     bt = Math.value() ;
//     console.log(bt);
// }
