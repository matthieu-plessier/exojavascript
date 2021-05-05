for (let year = 2020; year= 2030; year++){
    document.write(`<div>${year}</div>`)
    if((year%4==0 && year%100!=0) || year%400==0){
    document.write(`<span style="color: red;">${years}</span><br/>`);
}else{
    document.write(`<div>${year}</div>`)
}
}









// for (let years = 2020; years<=2030; years++) {
//     if (((years % 4 == 0 && years != 100 > 0) || (years % 400 == 0))) {
//         document.write(`<span style="color: red;">${years}</span><br/>`);
        
//     } else {
        
//         document.write(`${years}<br/>`);
//     }
// }


