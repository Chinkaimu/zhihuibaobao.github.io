/**
 * Created by Lenovo on 2016/8/2.
 */
function do_something(n, s, l){
    //你的代码
    var num = 0 ;
    var nn = n;
    var i = 1;

    while(nn >= 0 ){
        for(i = 1 ; i <= nn ; i++ ){
            if( (s*i + i-1) == l && i%13 != 0 ){
                nn = nn - i;
                num++;
            }
            else if( (s*i + i-1) > l){
                if((i-1)%13 != 0){
                    nn = nn - i + 1;
                }else if( (i-1)%13 == 0 ){
                    nn = nn - i + 2;
                }
                num++;
            }
        }
    }
    console.log(num);
    return num;
}
do_something(7,2,6);


var pattern2 = /^\/([-\.]?|(((-\.)*-?)|((\.-)*\.?))[a-zA-Z0-9])+$/;
