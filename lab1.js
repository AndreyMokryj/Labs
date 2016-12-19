'use strict';
let emp = ['Октавиан Август', 'ч Чжэн Чэнгун','Чжэн Кэцзан', 'Чжу Юсун','Чжу Чанфан','Чжу Юаньчжан','т Тиберий',
           'к Калигула','Клавдий','Нерон','о Отон','Вителлий','Тит','т Траян','Адриан','л Луций Вер','Марк Аврелий',
           'Коммод','Септимий Север','Каракалла','Элагабал','Александр Север','ф Филипп Араб','Филипп Младший',
           'д Деций Траян'];
let emp1 = emp.filter(sb);
function sb(value)
{
    return (value[0]>='а'&&value[0]<='я');
}
console.log('Изначальный массив:\n');
console.dir(emp);
console.log('\nМассив после фильтрации:\n');
console.dir(emp1);
emp1 = emp1.sort(function (a,b) {return a<b});
console.log('\nОтсортированый массив:');
console.dir(emp1);
var word = new Array(emp1.length); var symb = new Array(emp1.length);
for (var i=0; i < emp1.length; i++) {word[i] = [];   }
var k; 
console.log('\nМассивы слов:\n');
for (var i = 0; i < emp1.length; i++) 
{
    k = 1; emp1[i] = emp1[i] + ' ';
    for (var j=0; k < emp1[i].length - 1; j++)    
    {                                                        
        
        word[i][j] = emp1[i].substring(k + 1, emp1[i].indexOf(' ', k+1));     
        k = emp1[i].indexOf(' ', k + 1); 
    }        
} 
console.log(word);   
console.log ('\nМассив частоты использования символов:\n');
for (let i = 0; i < emp1.length; i++) symb[i] = [];   
for (let i = 0; i < emp1.length; i = i+1)
{
    var j1 = 0; 
    for (let j = 0; j < emp1[i].length; j++)
    { 
        k = 0;   
        for (let z = 0; z < emp1[i].length; z++) if (emp1[i][j] === emp1[i][z]) k++;                                 
        if (emp1[i].indexOf(emp1[i][j]) === j)  { symb[i][j1] = emp1[i][j] + ':' +  k; j1++; }
    }
}
console.log(symb) ;                  
 




