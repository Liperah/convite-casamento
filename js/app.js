function openMaps() {
  const address = "Capela Santa Clara, Av. Mal. Deodoro, 399, Goiânia, GO";
  window.open("https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent(address), "_blank");
}
function openConfirmForm(){document.getElementById('confirmModal').style.display='block';}
function closeConfirmForm(){document.getElementById('confirmModal').style.display='none';}

// --- SCRIPT CONTAGEM REGRESSIVA ---
const targetDate = new Date("Oct 25, 2025 14:30:00").getTime();
setInterval(() => {
  const now = new Date().getTime();
  const distance = targetDate - now;

  if(distance < 0){
    document.getElementById("countdown").innerHTML = "Chegou o grande dia! 💍";
    return;
  }

  const days = Math.floor(distance / (1000*60*60*24));
  const hours = Math.floor((distance%(1000*60*60*24))/(1000*60*60));
  const minutes = Math.floor((distance%(1000*60*60))/(1000*60));
  const seconds = Math.floor((distance%(1000*60))/1000);

  document.getElementById("days").innerText = days;
  document.getElementById("hours").innerText = hours;
  document.getElementById("minutes").innerText = minutes;
  document.getElementById("seconds").innerText = seconds;
},1000);