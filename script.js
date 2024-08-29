function checkKhodam() {
  const name = document.getElementById('nameInput').value.trim();
  const resultDiv = documen.getElementById('result');
  
  if (name === "") {
    resultDiv.innerHTML = "<p style='color: red;'>Nama Tidak Boleh Kosong!</p>";
    return;
  }
  const khodamNames = [
    "khodam naga tunduk",
    "khodam naga emas",
    "Kuda terbang",
    "Rawa rontek",
    "khodam kuda nyilit"
];

const KhodamPresent = Math.random() > 0.5;

if (KhodamPresent) {
  const khodamName = KhodamNames[Math.floor(Math.random() * KhodamNames.length)];
  resultDiv.innerHTML = `<p style='color: green;'>${name}, Anda memiliki ${khodamName} yang melindungi anda!</p>`;
  } else {
    resultDiv.innerHTML = `<p style='color: red;'>${name}, maaf, anda tidak mempunyai khodam</p>;
    }
}