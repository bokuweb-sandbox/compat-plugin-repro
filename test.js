const a = () => Promise.resolve();

const b = fetch("").then(a => a);

const c = new URLSearchParams('foo/bar');

const d = navigator.serviceWorker;