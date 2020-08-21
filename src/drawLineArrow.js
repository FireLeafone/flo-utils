// 三角函数画直线中间的箭头
const drawLineArrow = (x1, y1, x2, y2) => {
  let path;
  const Par = 10.0;
  const slopy = Math.atan2(y1 - y2, x1 - x2);
  const cosy = Math.cos(slopy);
  const siny = Math.sin(slopy);

  path = `M${x1},${y1}`;

  const x3 = (Number(x1) + Number(x2)) / 2;
  const y3 = (Number(y1) + Number(y2)) / 2;

  path += ` L${x3},${y3}`;

  path += ` L${
    Number(x3) + Number(Math.ceil(Par * cosy - (Par / 2.0) * siny))
  },${Number(y3) + Number(Math.ceil(Par * siny + (Par / 2.0) * cosy))}`;
  path += ` L${x3},${y3}`;
  path += ` L${
    Number(x3) + Number(Math.ceil(Par * cosy + (Par / 2.0) * siny))
  },${Number(y3) - Number(Math.ceil((Par / 2.0) * cosy - Par * siny))}`;

  path += ` L${x3},${y3} L${x2},${y2}`;

  return path;
};

export default drawLineArrow;
