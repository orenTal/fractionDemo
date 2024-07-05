function main() {
    function createFractionArray(numerator,denominator){
        if (numerator > denominator){
            throw ("numerator should be smaller than denominator")
        }

        const arraySize = denominator - numerator +1;
        fractionArray = Array(arraySize).fill(1);
        fractionArray[0] = numerator;
        return fractionArray;
    }


    const dataArr = createFractionArray(1,400);
    console.log(dataArr);
    const height =700;
    const width = 700;
    const svg = d3.select(".d3") 
        .append("svg")
        .attr("width", width)
        .attr("height", height);
    
    const radius = Math.min(width, height) /2;  
    const g = svg.append('g')
        .attr("transform", "translate("+ radius +","+ radius +")");
    const pie = d3.pie();
    const arc = d3.arc()
        .innerRadius(0)
        .outerRadius(radius);
    const arcs =  g.selectAll("arc")
                    .data(pie(dataArr))
                    .enter();
    arcs.append("path")
        .attr("fill", function (d, i){ 
          if (i=== 0) {return "darkgreen"}
          else {return "lightgreen"};
        })
        .attr("d",arc);
   
   
}
