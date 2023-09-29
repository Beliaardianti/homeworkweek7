const readline = require('readline');
const { Persegi, persegiPanjang } = require('./index');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Masukan Panjang Sisi : ' , (sisi) => {
  const hasilPersegi = Persegi(parseInt(sisi));
  console.log(`Luas Persegi : ${hasilPersegi.luas}`);
  console.log(`Keliling Persegi : ${hasilPersegi.keliling}`);

  console.log('\n');
  rl.question('Masukan Panjang Persegi Panjang : ' , (panjang) => {
    rl.question('Masukan Lebar Persegi Panjang : ' , (lebar) => {
      const hasilPersegiPanjang = persegiPanjang(parseInt(panjang), parseInt(lebar));
      console.log(`Luas Persegi Panjang: ${hasilPersegiPanjang.luas}`);
      console.log(`Keliling Persegi Panjang: ${hasilPersegiPanjang.keliling}`);
      rl.close();
    });
  });
});
