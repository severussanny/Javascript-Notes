const heading1= document.querySelector('.heading1');
const heading2= document.querySelector('.heading2');
const heading3= document.querySelector('.heading3');
const heading4= document.querySelector('.heading4');
const heading5= document.querySelector('.heading5');
const heading6= document.querySelector('.heading6');
const heading7= document.querySelector('.heading7');

//   text     delay    color
// one   1s  violet
// two    2s    red
// three  2s  purple
// four   1s  pink
// five   2s  green
// six    3s   blue
// seven  1s  brown 
function changeText(element , text , color , time, onSuccessCallback , onFailureCallback){
    setTimeout(()=>{
        if(element){
             element.textContent=text;
             element.style.color= color;
             if(onSuccessCallback){
                onSuccessCallback();
             }
        }
        else{
           if(onFailureCallback){
            onFailureCallback();
           }
        }
    }, time);
}
