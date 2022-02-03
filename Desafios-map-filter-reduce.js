const list1 = [
    {Name: "Rodolfo", Vip: true},
    {Name: "Maria", Vip: false},
    {Name: "Joao", Vip: true},
    {Name: "Bruno", Vip: true},
    {Name: "Carla", Vip: false},
    {Name: "Ana", Vip: true},
    {Name: "Julio", Vip: false},
]

const newlist1 = list1.map(data => {// usar o map para separar os vips para para black e os nao-vips para green
    const newlist1 = {
        Name: data.Name,
        Vip: data.Vip,
        Sector:  data.Vip ? 'Black' : 'Green'
    }
    return newlist1
})

console.log(newlist1)// usar o map para separar os vips para para black e os nao-vips para green


//


const list2 = [
    {Name: "Rodolfo", testGrade: 7},
    {Name: "Maria", testGrade: 5},
    {Name: "Joao", testGrade: 8},
    {Name: "Bruno", testGrade: 9},
    {Name: "Carla", testGrade: 3},
    {Name: "Ana", testGrade: 2},
    {Name: "Julio", testGrade: 10},
]

const newlist2 = list2.map(data => { // mostrar "aproved" para estudantes com a nota maior que 7 e reproved para estudantes com a nota menor que 7
    let result

    if (data.testGrade >= 7) {
        result = 'aproved'
    }
    else {
        result = 'reproved'
    }
    const newlist2 = {
    Name: data.Name,
    finalResult: result
    }
    return newlist2
})

console.log(newlist2)// mostrar "aproved" para estudantes com a nota maior que 7 e reproved para estudantes com a nota menor que 7


//.map ^






const list3 = [20, 30, 234, 12, 17, 541, 6, 87, 275, 1000]

const filterlist3 = list3.filter (data => {
    return data % 2 == 0 && data % 5 == 0
})

console.log(filterlist3)// numeros pares e divisiveis por 5 usando filter


//

const companies = [
    {Name: 'Samsung', Marketvalue: 50, Ceo: 'Kim Hyun Suk', foundedOn: 1938},
    {Name: 'Microsoft', Marketvalue: 415, Ceo: 'Satya Nadella', foundedOn: 1975},
    {Name: 'Intel', Marketvalue: 117, Ceo: 'Brian Krazanich', foundedOn: 1968},
    {Name: 'Facebook', Marketvalue: 383, Ceo: 'Mark Zuckerberg', foundedOn: 2004},
    {Name: 'Spotfy', Marketvalue: 30, Ceo: 'Daniel Ek', foundedOn: 2006},
    {Name: 'Apple', Marketvalue: 845, Ceo: 'Tim Cook', foundedOn: 1976},
];

const Newcompanieslist = companies.filter(data => {// comapnias fundadas depois de 1975 e que tenham mais de 2  de valor de mercado
    return data.Name && data.Marketvalue > 200 && data.Ceo && data.foundedOn > 1975
})

console.log(Newcompanieslist)// comapnias fundadas depois de 1975 e que tenham mais de 2  de valor de mercado


//.filter^





const morecompanies = [
    {Name: 'Samsung', Marketvalue: 50, Ceo: 'Kim Hyun Suk', foundedOn: 1938},
    {Name: 'Microsoft', Marketvalue: 415, Ceo: 'Satya Nadella', foundedOn: 1975},
    {Name: 'Intel', Marketvalue: 117, Ceo: 'Brian Krazanich', foundedOn: 1968},
    {Name: 'Facebook', Marketvalue: 383, Ceo: 'Mark Zuckerberg', foundedOn: 2004},
    {Name: 'Spotfy', Marketvalue: 30, Ceo: 'Daniel Ek', foundedOn: 2006},
    {Name: 'Apple', Marketvalue: 845, Ceo: 'Tim Cook', foundedOn: 1976},
];

const comp = morecompanies.reduce((acc, morecompanies) => acc + morecompanies.Marketvalue, 0)// usar o .reduce para acumular um certo valor de um objeto, no cado o marketvalue de cada objeto


console.log(comp)// usar o .reduce para acumular um certo valor de um objeto, no cado o marketvalue de cada objeto


// .reduce^






const lasttimecompanies = [
    {Name: 'Samsung', Marketvalue: 50, Ceo: 'Kim Hyun Suk', foundedOn: 1938},
    {Name: 'Microsoft', Marketvalue: 415, Ceo: 'Satya Nadella', foundedOn: 1975},
    {Name: 'Intel', Marketvalue: 117, Ceo: 'Brian Krazanich', foundedOn: 1968},
    {Name: 'Facebook', Marketvalue: 383, Ceo: 'Mark Zuckerberg', foundedOn: 2004},
    {Name: 'Spotfy', Marketvalue: 30, Ceo: 'Daniel Ek', foundedOn: 2006},
    {Name: 'Apple', Marketvalue: 845, Ceo: 'Tim Cook', foundedOn: 1976},
];

const map = lasttimecompanies.map(data => data.Marketvalue + (data.Marketvalue * 0.10))

console.log(map)

//.map ^^

const filter = lasttimecompanies.filter (data => {
    return data.Name && data.Marketvalue && data.Ceo && data.foundedOn < 2000
})
console.log(filter)

//.filter^^

const reduce = filter.reduce ((acc, lasttimecompanies) => acc + lasttimecompanies.Marketvalue, 0)

console.log(`${reduce + (reduce * 0.10)}`)

//.reduce ^^