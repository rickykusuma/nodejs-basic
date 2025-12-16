function samplePromise() {
  return Promise.resolve('Ricky');
}

async function run() {
  const name = await samplePromise();

  console.info(name);
}

run();
