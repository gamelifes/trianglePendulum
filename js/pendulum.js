window.onload=function(){
    var div=document.getElementsByClassName("b7")[0];
    console.log(div);
//  ratato定义 2D 旋转，在参数中规定角度。transform-origin	允许你改变被转换元素的位置。
    setCss3(div,{transform:"rotate(10deg)","transform-origin":"0 0"})
    var angel=0;
    setInterval(function(){
        angel+=8;
        setCss3(div,{transform:"rotate("+angel+"deg)","transform-origin":"0 0"})
    },30)
    function setCss3(obj,objAttr){
        //循环属性对象
        for(var i in objAttr){
            var newi=i;
            //判断是否存在transform-origin这样格式的属性
            if(newi.indexOf("-")>0){
                var num=newi.indexOf("-");
//              把首字母转成是大写的
                newi=newi.replace(newi.substr(num,2),newi.substr(num+1,1).toUpperCase());
            }
            //考虑到css3的兼容性问题,所以这些属性都必须加前缀才行
            obj.style[newi]=objAttr[i];
            newi=newi.replace(newi.charAt(0),newi.charAt(0).toUpperCase());
            obj.style[newi]=objAttr[i];
            obj.style["webkit"+newi]=objAttr[i];
            obj.style["moz"+newi]=objAttr[i];
            obj.style["o"+newi]=objAttr[i];
            obj.style["ms"+newi]=objAttr[i];
        }
    }
}
//扩展当旋转到一定位置时,颜色更换
//注意点:1.因为如果不添加css3的过渡属性的话,旋转的时候是会有种卡顿效果的,就是旋转的时候不顺畅,所以我这里添加了transition属性,让他转动起来的时候看起来顺畅的.　　
//2.transform-origin的值如果为0 0的时候,是绕着原点旋转的,50% 50%的时候就是绕着中心点旋转的.不过默认的时候就是绕着中心点旋转的

