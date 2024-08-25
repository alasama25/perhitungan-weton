function hitungWeton() {
    const hari1 = parseInt(document.getElementById("hari1").value);
    const pasaran1 = parseInt(document.getElementById("pasaran1").value);
    const hari2 = parseInt(document.getElementById("hari2").value);
    const pasaran2 = parseInt(document.getElementById("pasaran2").value);

    if (isNaN(hari1) || isNaN(pasaran1) || isNaN(hari2) || isNaN(pasaran2)) {
        alert("Silakan pilih semua field.");
        return;
    }

    const neptu1 = hari1 + pasaran1;
    const neptu2 = hari2 + pasaran2;
    const totalNeptu = neptu1 + neptu2;

    let hasil = "";
    let penjelasan = "";

    switch (totalNeptu) {
        case 1: case 9: case 17: case 25: case 33:
            hasil = "Pegat";
            penjelasan = "Hubungan berpotensi menghadapi masalah ekonomi, kekuasaan, atau perselingkuhan yang bisa mengarah pada perpisahan atau perceraian.";
            break;
        case 2: case 10: case 18: case 26: case 34:
            hasil = "Ratu";
            penjelasan = "Pasangan dianggap jodoh sejati, dengan hubungan yang harmonis, bahagia, dan disegani.";
            break;
        case 3: case 11: case 19: case 27: case 35:
            hasil = "Jodoh";
            penjelasan = "Pasangan benar-benar jodoh satu sama lain, saling menerima kelebihan dan kekurangan, dengan rumah tangga yang harmonis dan rukun hingga tua.";
            break;
        case 4: case 12: case 20: case 28: case 36:
            hasil = "Topo";
            penjelasan = "Hubungan mungkin sulit di awal tetapi akan membaik seiring waktu, terutama setelah memiliki anak dan berumah tangga lama.";
            break;
        case 5: case 13: case 21: case 29:
            hasil = "Tinari";
            penjelasan = "Pasangan diberkati dengan kecukupan rezeki dan keberuntungan, sering mendapatkan kemudahan dalam kehidupan berumah tangga.";
            break;
        case 6: case 14: case 22: case 30:
            hasil = "Padu";
            penjelasan = "Sering mengalami pertengkaran sepele, tetapi bisa diselesaikan dengan kepala dingin tanpa mengancam kelangsungan pernikahan.";
            break;
        case 7: case 15: case 23: case 31:
            hasil = "Sujanan";
            penjelasan = "Berada dalam ancaman pertengkaran besar, mungkin disebabkan oleh perselingkuhan, yang bisa mengakibatkan perpisahan atau perceraian.";
            break;
        case 8: case 16: case 24: case 32:
            hasil = "Pesthi";
            penjelasan = "Hubungan berjalan rukun dan harmonis, dengan masalah yang tidak merusak keharmonisan rumah tangga.";
            break;
        default:
            hasil = "Error";
            penjelasan = "Perhitungan tidak valid.";
    }

    // Menampilkan hasil di modal
    const modal = document.getElementById("modal");
    const modalBody = document.getElementById("modalBody");

    modalBody.innerHTML = `
        <p>Total Neptu Pasangan 1: ${neptu1}</p>
        <p>Total Neptu Pasangan 2: ${neptu2}</p>
        <h2>${hasil}</h2>
        <p>${penjelasan}</p>
        <p><strong>Catatan:</strong> Ingat ya jangan terlalu di percaya, jangan lupa balik lagi yang tadi, masih sisa 1 website wkwk </p>
    `;
    
    // Menampilkan modal
    modal.style.display = "block";
}

function closeModal() {
    const modal = document.getElementById("modal");
    modal.style.display = "none";
}

// Menutup modal jika area luar diklik
window.onclick = function(event) {
    const modal = document.getElementById("modal");
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
