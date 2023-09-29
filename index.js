// menghitung luas dan keliling persegi 
function Persegi (sisi){
  const luas = sisi * sisi;
  const keliling = 4 * sisi;
  return { luas, keliling};
}

function persegiPanjang (panjang, lebar){
  const luas = panjang * lebar;
  const keliling = 2 * ( panjang + lebar );
  return { luas, keliling };
}

module.exports = {Persegi, persegiPanjang};