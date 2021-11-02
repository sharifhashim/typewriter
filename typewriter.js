const sentence = "hello there from lighthouse labs";

let timer = 0
const animated = () => {
  for (const char of sentence) {
  setTimeout(() => {
      process.stdout.write(char)
    }, timer);
    timer += 50;
  }
}
animated();
setTimeout(() => {
  console.log("")
}, timer);