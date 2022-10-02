const table = [
    {
        de: 'Desenvolvimento de site',
        pr: 'R$ 12.000,00',
        ca: 'Venda',
        da:'13/04/2022',
    },
    {
        de: 'Hamburguer',
        pr: '-R$ 59,00',
        ca: 'Alimentação',
        da:'10/04/2022',
    },
    {
        de: 'Aluguel do apartamento',
        pr: '-R$ 1.200,00',
        ca: 'Casa',
        da:'27/03/2022',
    },
    {
        de: 'Computador',
        pr: 'R$ 5.400,00',
        ca: 'Venda',
        da:'15/03/2022',
    },
    {
        de: 'Desenvolvimento de site',
        pr: 'R$ 8.000,00',
        ca: 'Venda',
        da:'13/03/2022',
    },
    {
        de: 'Janta',
        pr: '-R$ 39,00',
        ca: 'Alimentação',
        da:'10/03/2022',
    },
    {
        de: 'Aluguel do apartamento',
        pr: '-R$ 1.200,00',
        ca: 'Casa',
        da:'27/02/2022',
    },
    {
        de: 'Salário',
        pr: 'R$ 5.400,00',
        ca: 'Salário',
        da:'15/02/2022',
    },
    {
        de: 'Almoço',
        pr: '-R$ 30,00',
        ca: 'Alimentação',
        da:'05/02/2022',
    },
    {
        de: 'Fone de ouvido',
        pr: '-R$ 150,00',
        ca: 'Itens',
        da:'02/02/2022',
    }
]

let arr = [];

const tablle = document.querySelector('table');

window.addEventListener('DOMContentLoaded', function(){
    displayTable(table);
    const sher = document.querySelectorAll('.shero14')
    let we = sher.textContent;
    

    for(i = 0; i < sher.length; i++){
        let pro = sher[i].textContent.split('');
        
        
        
        pro.forEach(function(){
            if(pro[0] === '-'){
                sher[i].style.color = '#F75A68';
            } else{
                sher[i].style.color = '#00B37E';
            }
        })
    }

    
})


function displayTable(ar){
    let display = ar.map(function(data){

        //console.log(`${data.pr}`.split('')[0]);

        /*if(`${data.pr}`.split('')[0] === '-'){
            console.log(true);
        } else{
            console.log(false);
        }*/
        return`
        <tr class="shero12">
            <td class="shero13">${data.de}</td>
            <td class="shero14">${data.pr}</td>
            <td class="shero15">${data.ca}</td>
            <td class="shero16">${data.da}</td>
        </tr>`
    });

    display = display.join('');
    tablle.innerHTML = `
    <tr class="sheroX">
        <th class="shero13a">Descrição</th>
        <th class="shero14a">Preço</th>
        <th class="shero15a">Categoria</th>
        <th class="shero16a">Data</th>
    </tr>

    ${display}`;
}


const search = document.querySelector('#search');

const searchBtn = document.querySelector('.shero11')


let w3r =document.querySelector('.w3r');
let textt = document.querySelector('#shhero1')
let textt1 = document.querySelector('#shhero11')
let textt2 = document.querySelector('#shhero12')
let textt3 = document.querySelector('#shhero13')

let upload = document.querySelector('.shhero2')
let upload2 = document.querySelector('.shhero3')
let upload3 = document.querySelector('.shhero4')
let upload4 = document.querySelector('.shhero5')

let tvalue1 = textt.value;
let tvalue2 = textt1.value;
let tvalue3 = textt2.value;
let tvalue4 = textt3.value;

let freshObj ={de:'CAt',
pr:'',
ca:'',
da:''};

function adder(){
    upload.addEventListener('click', function(e){
        let tvalue1 = textt.value;
        e.preventDefault();
        freshObj.de = tvalue1;
        textt.style.display = 'none';
        textt1.style.display = 'block';
        upload.style.display = 'none'
        upload2.style.display = 'block'
    
    
        w3r.textContent = `Preço`;
    
        console.log(freshObj.de);
        console.log(tvalue2);
        console.log(tvalue3);
        console.log(tvalue4);
        
    })
    
    
    upload2.addEventListener('click', function(){
        let tvalue2 = textt1.value;
        freshObj.pr = tvalue2;
        textt1.style.display = 'none';
        textt2.style.display = 'block';
        upload2.style.display = 'none'
        upload3.style.display = 'block';
    
        w3r.textContent = `Categoria`;
        console.log(freshObj.de);
        console.log(tvalue2);
        console.log(tvalue3);
        console.log(tvalue4);
    })
    
    
    
    upload3.addEventListener('click', function(){
        let tvalue3 = textt2.value;
        freshObj.ca = tvalue3;
        textt2.style.display = 'none';
        textt3.style.display = 'block';
        upload3.style.display = 'none';
        upload4.style.display = 'block';
    
    
        w3r.textContent = `Data`;
    })
    
    
    upload4.addEventListener('click', function(){
        let tvalue4 = textt3.value;
        freshObj.da = tvalue4;
        
    
        let table = [...table, freshObj];
        
    
        displayTable(arr);
        const sher = document.querySelectorAll('.shero14')
        let we = sher.textContent;
        
    
        for(i = 0; i < sher.length; i++){
            let pro = sher[i].textContent.split('');
            
            
            
            pro.forEach(function(){
                if(pro[0] === '-'){
                    sher[i].style.color = '#F75A68';
                } else{
                    sher[i].style.color = '#00B37E';
                }
            })
        }
    
        w3r.textContent = `Type in your Restaurant's Delicacies so it can be uploaded to the website after screening! Descrição:`;
        w3r.classList.add('w3r');
        
        textt3.style.display = 'none';
        textt.style.display = 'block';
        upload4.style.display = 'none';
        upload.style.display = 'block';
        
    })
}

if(arr !== table){
    adder();
}


search.addEventListener('input', function(e){
    let value = e.target.value.toLowerCase();
    console.log(value);

    function sasha(tow){
        let filterDisplay = tow.map(function(toww){
            let isVisible = toww.de.toLowerCase().includes(value)
            if(isVisible){
                
                return`
                <tr class="shero12">
                    <td class="shero13">${toww.de}</td>
                    <td class="shero14">${toww.pr}</td>
                    <td class="shero15">${toww.ca}</td>
                    <td class="shero16">${toww.da}</td>
                </tr>`
            }
        })

        filterDisplay =filterDisplay.join('');
        tablle.innerHTML = `
        <tr class="sheroX">
            <th class="shero13a">Descrição</th>
            <th class="shero14a">Preço</th>
            <th class="shero15a">Categoria</th>
            <th class="shero16a">Data</th>
        </tr>
    
        ${filterDisplay}`;
    }

    sasha(table);
})