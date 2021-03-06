;(async () => {
  const response = await fetch('hello.wasm')
  console.log(response)
  const buffer = await response.arrayBuffer()
  console.log(buffer)
  const module = await WebAssembly.compile(buffer)
  console.log(module)
  const instance = await WebAssembly.instantiate(module)
  const result = instance.exports.main()
  console.log(result)
})()
