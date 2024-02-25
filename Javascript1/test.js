function mayor(parametro){
    let actual=0;
    for (i=0; i<parametro.length; i++){
        if (actual<=parametro[i]){
            actual=parametro[i];
        }
    }
    console.log(actual);
}

let Array= [ 1, 23, 45, 86,3,9];

mayor(Array);
