


function getnum(num){
 
    result = document.getElementById('result')
    result.value +=num

}

function clear_result(){
    result = document.getElementById('result')
    result.value = ''
   
}

function get_result(){

    result =document.getElementById('result')
    result.value = eval(result.value)
}