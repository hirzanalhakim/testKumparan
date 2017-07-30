export default function loadData(req) {

    const data =
        [{
            "id": 1,
            "alamat": "Komp. Batan Indah blok I- 29, Setu, Tangsel",
            "name": "Hirzan Jundi Al Hakim"
        }, {
            "id": 2,
            "alamat": "Komp. Batan Indah",
            "name": "Faris"
        }, {
            "id": 3,
            "alamat": "22850 W. Elm Street Springfield, MO 65802",
            "name": "Epul"
        }, {

            "id": 4,
            "alamat": "Taman Pegangsaan Indah Blok O No. 4 Kelapa Gading, Jakarta 14250",
            "name": "Agung Surya Bangsa"
        }, {
            "id": 5,
            "alamat": "Ngumbo, Desa Pager Sari, Kec Kali Dawir, Tulung Agung, Jawa Timur",
            "name": "Komar Pulung"
        }, {
            "id": 6,
            "alamat": "Kompleks Larangan Indah Cileduk, Tangerang, Jawa Barat",
            "name": "Abdul"
        },
        {
            "id": 7,
            "alamat": "Jln. Perkapuran No 1000 Cibubur, Jakarta Timur",
            "name": "Muhammad Arja"
        }, {
            "id": 8,
            "alamat": "Bambang Budidoyo s.d.a Jln. Madni No. 101 Kediri, Jawa Timur",
            "name": "Ridwan Ramadhan"
        }, {
            "id": 9,
            "alamat": "Desa Pager Sari, Kec Kali Dawir, Tulung Agung, Jawa Timur",
            "name": "Achmad Dwi"
        }, {

            "id": 10,
            "alamat": "Kp. Cibogo III Ciaranjang, Cianjur, Jawa Barat",
            "name": "Akbar Kusuma Negara"
        }, {
            "id": 11,
            "alamat": "Desa Pager Sari, Kec Kali Dawir, Tulung Agung, Jawa Timur",
            "name": "Saepul Bongek"
        }, {
            "id": 12,
            "alamat": " Surotokunto 82, Rawa Gabus Kerawang 41313, Jawa Barat",
            "name": "Ridwan Ramadhan"
        }, {
            "id": 13,
            "alamat": "Dusun Sido Gede RT01/01, Belitang Ogan Komering Ulu Timur",
            "name": "Salim"
        }, {
            "id": 14,
            "alamat": "Handoko 304 W. Broad St Apt #3 Quakertown, PA 18951",
            "name": "Beni"
        }, {

            "id": 15,
            "alamat": "Kompleks Dit. Bek. Ang. Jl. Darma no K2 G2 RT 010/0a",
            "name": "Feby"
        }, {
            "id": 16,
            "alamat": "Jln Dukuh Kupang XXV/7 Surabaya, Jawa Timur",
            "name": "Ajeng"
        }, {
            "id": 17,
            "alamat": "Kesatrian I no 20, Tegal 52111 Jawa Tengah",
            "name": "Samsul"
        }]

let page = 1;
let limit = 5;

if (req.query) {
    if (req.query.page) {
        page = req.query.page
    }
    if (req.query.limit) {
        limit = req.query.limit
    }
}

let res = [];
const start = ((limit * page) - limit);
const stop = limit * page;
for (let i = 0; i < data.length; i++) {
    if ((i >= (start)) && (i < stop)) {
        res.push(data[i]);
    }
}
return {
    "results": res
};

}