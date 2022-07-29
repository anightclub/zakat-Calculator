function zakatCalculation() {
    let goldZakat = document.getElementById('gold').value *12000 / 40;
    let  silverZakat= document.getElementById('silver').value *2000 / 40;
    let cashZakat = document.getElementById('cash').value / 40;
    document.getElementById('zakat').innerText = goldZakat + silverZakat + cashZakat;

}