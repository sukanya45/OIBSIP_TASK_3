const calculateTemp=()=>{

    const numberTemp=document.getElementById('temp').value;

    const tempSelect=document.getElementById('temp_diff');
    const valuetemp=temp_diff.options[tempSelect.selectedIndex].value;

     const  CeltoFah=(cel)=>{
        let fahrenit=Math.round((cel*9/5) +  32 );
        return fahrenit;
     }
     
     const  FahtoCel=(fah)=>{
        let celcius=Math.round((fah-32) *  5/9 );
        return celcius;
     }

     

    let res;
    if(valuetemp=='cel'){
        res=CeltoFah(numberTemp);
        document.getElementById('resultContainer').innerHTML=`${res} Celcius`;
    }
    else
    {
        res=FahtoCel(numberTemp);
        document.getElementById('resultContainer').innerHTML=`${res} Fahrenheit `
    }
}