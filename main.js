
function setValues(){
    return {
        valueToPay : document.getElementById("initialValueToPay").value || 0,
        valueKwH : document.getElementById("valueKwH").value || 0,
        totalConsumedKw : document.getElementById("totalConsumedKw").value || 0,
        potenciaKW : document.getElementById("potenciaKW").value || 0,
        timeUsedTotal:  document.getElementById("timeUsedTotal").value || 0
    }
}
function calculateControl(){

    var values = setValues();
    if(values.valueKwH === 0){ values.valueKwH = calculateValuePerKWH(values)};
    calculatetotalConsumedOfIt(values);
    calculateDifferenceToPay(values);
    let resultsText =`Você paga R$${values.valueKwH}kWh, esse novo dispositivo consome, ao longo do tempo forneceido um total de ${values.totalConsumedOfIt}kW. Utilizando este dispostivo,  o acréscimo em reais na sua conta mensal será de R$${values.differenceToPay}, e o consumo total será ${values.totalConsumedOfIt + Number(values.totalConsumedKw)}kWh.`;
    innerNewText(resultsText);

}

function innerNewText(text){
    document.getElementById("results").innerHTML = `<p>${text}</p>`;

}
function calculateValuePerKWH(values){
    return values.valueToPay / values.totalConsumedKw;
}
function calculatetotalConsumedOfIt(values){
    values.totalConsumedOfIt = values.potenciaKW * values.timeUsedTotal;
}
function calculateDifferenceToPay(values){
    values.differenceToPay =  values.valueKwH * values.totalConsumedOfIt;
}