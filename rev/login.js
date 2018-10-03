function validasi() {
		var nama = document.getElementById("nama").value;
		var jalan = document.getElementById("jalan").value;
		var nomor = document.getElementById("nomor").value;
		var kota = document.getElementById("kota").value;
		var email = document.getElementById("email").value;
		var hape = document.getElementById("hape").value;
		var gender = document.getElementById("gender").value;
		var ttl = document.getElementById("ttl").value;
		var rubrik = document.getElementById("rubrik").value;

		if (nama !="" && jalan != "" && nomor != "" && kota != "" && email != "" && hape != "" && gender != "" && ttl != "" && rubrik != "")
		{
			return true;
		}
		else
		{
			alert('Anda harus mengisi data dengan lengkap !');
		}
		if(nama.length > 50)
		{
			alert('Nama terlalu panjang!');
		}
		if(hape.length < 10 || hape.length > 12)
		{
			alert('Nomor handphone tidak valid!');
		}
	}