document.getElementById('registrasiForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const namaLengkap = document.getElementById('namaLengkap').value;
    const nomorWhatsApp = document.getElementById('nomorWhatsApp').value;
    const kotaTinggal = document.getElementById('kotaTinggal').value;
    const buatPassword = document.getElementById('buatPassword').value;
    const referral = document.getElementById('referral').value;

    const urlParams = new URLSearchParams(window.location.search);
    const referralCode = urlParams.get('referral');

    const finalReferral = referralCode ? referralCode : referral;

    const data = {
        namaLengkap,
        nomorWhatsApp,
        kotaTinggal,
        buatPassword,
        referral: finalReferral
    };

    fetch('https://script.google.com/macros/s/AKfycbyxyFIoOi6l4NSuWOK7byxS7zKYLnMoyVrSKnJsmGWAN1v6ymY3crEYBR3R3XhXeRfDAw/exec', {
        method: 'POST',
        mode: 'no-cors',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => {
        alert('Registrasi Berhasil!');
        window.location.reload();
    })
    .catch(error => {
        console.error('Error:', error);
    });
});
