const zadanie = parseInt( prompt(`Wybierz zadanie:'
1. Pole powierzchni i objętość walca,
2. Pole powierzchni i objętość kuli,
3. Pole powierzchni trójkąta,
4. Odległość punktów,
5. Pierwiaski równiania,
6. Losowa liczba z zakresu od 1 do 10. 
`))

switch (zadanie) {
    case 1:
        const r = prompt("Podaj r:")
        const h = prompt("Podaj h:")

        const v = Math.PI * (r * r) * h
        const ppb = 2 * Math.PI * r * h
        const ppc = ppb + 2 * Math.PI


        document.write('<p>ZADANIE 1</p>')
        document.write(`<p style='color: green'> Pole powierzchni walca: ${ppc}</p>`)
        document.write(`<p style='color: blue'> Objętość walca: ${v}</p>`)
        break;

    case 2:

        const r = prompt("Podaj r:")
        const h = prompt("Podaj h:")

        const V = (4 / 3) * Math.PI * (r * r * r)
        const ppc = 4 * Math.PI * (r * r)

        document.write('<p>ZADANIE 2</p>')
        document.write(`<p style='color: green'> Pole powierzchni kuli: ${ppc}</p>`)
        document.write(`<p style='color: blue'> Objętość kuli: ${V}</p>`)

        break;

    case 3:

        document.write('<p>ZADANIE 3</p>')
        
        const choose = prompt('a - wzor z sinusem czy b - wzor heliona');
        if (choose === 'a') {
            const a = parseFloat(prompt('Podaj a'));
            const b = parseFloat(prompt('Podaj b'));
            const kat = parseFloat(prompt('Podaj kąt'));
            const radiany = Math.PI / 180 * kat;

            const pta = 1 / 2 * a * b * Math.sin(radiany)
            document.write(`<p style='color: blue'> Pole powierzchni trójkąta ze wzoru sinus: ${pta.toFixed(4)}</p>`)
            break;
        } else if (choose === 'b') {
            const at = parseFloat(prompt('Podaj a'));
            const bt = parseFloat(prompt('Podaj b'));
            const ct = parseFloat(prompt('Podaj c'));

            const dt = (at + bt + ct) / 2

            const pt = Math.sqrt(dt * (dt - at) * (dt - bt) * (dt - ct))

           
            document.write(`<p style='color: red'> Pole powierzchni trójkąta ze wzoru heliona: ${pt.toFixed(4)}</p>`)
        
        }

       
        break;

    case 4:

            document.write('<p>ZADANIE 4 - odległość punktów</p>')

            const Xa = prompt("Podaj x pierwszego punktu:")
            const Ya = prompt("Podaj y pierwszego punktu:")
            const Xb = prompt("Podaj x drugiego punktu:")
            const Yb = prompt("Podaj y drugiego punktu:")

            const d= Math.sqrt(Math.pow(Xb - Xa, 2)+ Math.pow(Yb - Ya, 2));

            document.write(`<p style='color: red'> Odległość tych punktów wynosi: ${d.toFixed(4)}</p>`)
               
        break;


    case 5:

            document.write('<p>ZADANIE 5 - obliczanie pierwiastków równania kwadratowego</p>')


            const a = prompt("Podaj a")
            const b = prompt("Podaj b:")
            const c = prompt("Podaj c:")

            const delta= Math.pow(b,2) - 4*a*c

            if(delta<0){
                    
                document.write(`<p>Brak miejsc zerowych</p>`);

            }

            else if(delta==0){
                   
                const x0=(-b)/(2*a);
                document.write(`<p>Funkcja posiada jedno miejsce zerowe ${x0.toFixed(4)} </p> `);

            } 
            
            else if(delta>0){

                const pierw=Math.sqrt(delta)
                   
                const x1=(-b)-pierw/(2*a);
                const x2=(-b)+pierw/(2*a);
                document.write(`<p>Funkcja posiada dwa miejsca zerowe: x1= ${x1.toFixed(4)},  x2= ${x2.toFixed(4)} </p> `);

            }  

            
        break;

    case 6:

            document.write('<p>ZADANIE 6 - losowa liczba z zakresu wybranego przez użytkownika</p>')

            var min= prompt('Wartość minimalna:')
            var max= prompt('Wartość maksymalna:')

            function getRandomIntInclusive(min, max) {
                min = Math.ceil(min);
                max = Math.floor(max);
                const komp= Math.floor(Math.random() * (max - min + 1)) + min;

                document.write(`<p>Wylosowana liczba z zakresu ${min.toFixed(4)} - ${max.toFixed(4)} to: ${komp.toFixed(4)}</p>  `);
                   
              }

        break;


    default:
        document.write(`Zła odpowiedź`)    



}