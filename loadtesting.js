var lock_available = true;

async function loadtesting(ms) {
  console.log("controller - loadtesting() called")

  while(true) {
    if (lock_available === true) break;
    await sleep(1);
  }

  lock_available = false;
  await sleep(ms);
  lock_available = true;

  return {};
}

function sleep(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

module.exports = {
  loadtesting: loadtesting
};