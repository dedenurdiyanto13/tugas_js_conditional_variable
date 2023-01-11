// conditional
const rating = 4;

const keterangan = rating > 4 ? "bagus" : "jelek";
console.log(keterangan); // jelek

const conditionalAnd = rating > 4 && "bagus";
console.log(conditionalAnd); // false
const conditionalOr = rating > 4 || "bagus";
console.log(conditionalOr);

// map
const nilaiSiswa = [
  {
    nama: "Nadeo",
    nilai: 80,
  },
  {
    nama: "Asnawi",
    nilai: 90,
  },
  {
    nama: "Klok",
    nilai: 75,
  },
];

const listNama = nilaiSiswa.map((siswa) => siswa.nama);
console.log(listNama);
const listNilai = nilaiSiswa.map((siswa) => siswa.nilai);
console.log(listNilai);
const listPerbaikan = nilaiSiswa.map((siswa) => siswa.nilai + 5);
console.log(listPerbaikan);

// filter
const lulus = nilaiSiswa.filter((siswa) => siswa.nilai >= 80);
console.log(lulus);
