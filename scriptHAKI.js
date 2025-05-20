document.addEventListener('DOMContentLoaded', function() {
	const hakiButton = document.querySelector('.nav-buttons button:nth-child(1)');

	const lisensiITButton = document.querySelector('.nav-buttons button:nth-child(2)');

	const lisensiKomputerButton =  document.querySelector('.nav-buttons button:nth-child(3)');

	const hakiContent = document.getElementById('haki-content');
	const lisensiITcontent = document.getElementById('lisensi-it-content');
	const lisensiKomputerContent = document.getElementById('lisensi-komputer-content')

	showHAKI();
		function showHAKI() {
			hakiContent.style.display = 'block';
			lisensiITcontent.style.display = 'none';
			lisensiKomputerContent.style.display = 'none';
		}


				hakiButton.addEventListener('click', showHAKI);
				

		lisensiITButton.addEventListener('click', function() {
			hakiContent.style.display = 'none';
			lisensiITcontent.style.display = 'block';
			lisensiKomputerContent.style.display = 'none';
		});

		lisensiKomputerButton.addEventListener('click', function() {
			hakiContent.style.display = 'none';
			lisensiITcontent.style.display = 'none';
			lisensiKomputerContent.style.display = 'block';
		});
});

const toggle = document.getElementById("toggle");

toggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");

  // Simpan preferensi ke localStorage
  if (document.body.classList.contains("dark")) {
    localStorage.setItem("theme", "dark");
  } else {
    localStorage.setItem("theme", "light");
  }
});

// Terapkan preferensi saat halaman dimuat
window.addEventListener("DOMContentLoaded", () => {
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    document.body.classList.add("dark");
  }
});
