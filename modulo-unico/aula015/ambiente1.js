/*num[3] = 6 DEFINE O VALOR DO ARRAY NA POSIÇÃO INDICADA

num.push(7) = CRIA UM VALOR NA PRÓXIMA POSIÇÃO LIVRE

num.length = MOSTRA QUANTAS POSIÇÕES EXISTEM NO ARRAY

num.sort() = ORGANIZA O ARRAY DO VALOR MENOR PRO MAIOR */

let num = [5, 8, 2, 9, 3, 1]
num.push(7)
console.log(`Nosso vetor é o ${num}`)
console.log(`O vetor tem ${num.length} posições!`)
console.log(`O primeiro valor do vetor é ${num[0]}`)
console.log(`Agora os vetores estão organizados em ordem crescente ${num.sort()}`)
console.log(`criei mais uma posição no array ${num.push(6)}`)
console.log(num[0]) //O NÚMERO UM APARECE NA PRIMEIRA POSIÇÃO DADA A REORGANIZAÇÃO REALIZADA PELO num.sort()