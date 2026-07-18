//break 1 to 10 print and stop in 5
for (let i=1;i<11;i++){
    console.log(i)
    if(i ===5 ){
        break;
    }
}


// Continue 1 to 10 skip 5
for (let i=1;i<11;i++){
    
    if(i ===5 ){
        continue;
    }
    console.log(i)
}


//skip even number

for (let i=0;i<31;i++){
    if(i%2===0){
          continue;
    }
    console.log(i)
}