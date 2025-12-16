function samplePromise() {
  return Promise.resolve('Ricky');
}

const name = await samplePromise();

console.info(name);

// File Format MJS / Module Javascript, semua kode berjalan secara Non-Blocking atau Asynchronous, sehingga tidak perlu membuat function async lagi.
