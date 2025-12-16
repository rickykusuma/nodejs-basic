import process from 'process';

process.addListener('exit', (exitCode) => {
  console.info(`NodeJS exit with code ${exitCode}`);
});

// digunakan untuk mengambil versi nodejs yang digunakan
console.info(process.version);
// argv digunakan untuk mengambil argument dari command line
console.table(process.argv);
// report digunakan untuk mengambil laporan dari proses nodejs
console.table(process.report);
// env digunakan untuk mengambil environment variable di pc atau server
console.table(process.env);

// digunakan untuk keluar dari proses nodejs
process.exit(1);

// tidak akan dieksekusi karena proses sudah keluar
console.info('Not Printed because already exit');
