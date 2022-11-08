let num = ['havaianas', 5, 8, 2, 9, 3] //O VALOR DECLARADO TAMBÉM PODE SER UMA STRING OU FUNÇÃO!

num.push(1)
console.log(num)
console.log(`O vetor tem ${num.length} posições`)
console.log(`O primeiro valor do vetor é ${num[0]}`)
let pos = num.indexOf(4)
if (pos == -1) {
    console.log('O valor não foi encontrado!')
} else {
console.log(`O valor 4 está na posição ${pos}`)

}
