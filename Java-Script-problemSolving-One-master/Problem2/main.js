
function prime(n){
    is_prime=true;
    if(n==0 || n==1){
        is_prime=false;
    }
    for(i=2;i<=n/2;i++){
        if(n%i==0){
            is_prime=false;
            break;
        }
    }
    if(is_prime){
        console.log("True")
    }
    else{
        console.log("False");
    }

}
num1=prompt("enter the num is prime or not");
prime(+num1);
