// 三角函数画直线中间的箭头
const drawLineArrow = (x1, y1, x2, y2) =>{  
  var path;  
  var slopy, cosy, siny;  
  var Par=10.0;  
  var x3, y3;  
  slopy=Math.atan2((y1-y2), (x1-x2));     
  cosy=Math.cos(slopy);     
  siny=Math.sin(slopy);   
       
  path="M"+x1+","+y1;  
           
  x3=(Number(x1)+Number(x2))/2;  
  y3=(Number(y1)+Number(y2))/2;
  
  
  path +=" L"+x3+","+y3;  
    
  path +=" L"+(Number(x3)+Number( Math.ceil(Par*cosy-(Par/2.0*siny)) ))+","+(Number(y3)+Number( Math.ceil(Par*siny+(Par/2.0*cosy)) ));  
  path +=" L"+x3+","+y3; 
  path +=" L"+(Number(x3)+Number( Math.ceil(Par*cosy+Par/2.0*siny) )+","+ (Number(y3)-Number( Math.ceil(Par/2.0*cosy-Par*siny)) ));  

  path +=" L"+x3+","+y3 + " L"+x2+","+y2;  
  
  
  return path;  
};

export default drawLineArrow;