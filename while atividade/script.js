     function gerarTabuada() {

            let conteudo = "";

            let i = 1;
            
            while (i <= 10) { 
            
                conteudo += `<div class="tabuada"><h3>Tabuada do ${i}</h3>`;     

                let t = 1;
                while (t <= 10) { 
                    let resultado = i * t;

                    conteudo += `<p>${i} x ${t} = ${resultado}</p>`;

                    t++;
                }
                conteudo += `</div>`;

                i++;   
            }         

            document.getElementById("resultado").innerHTML = conteudo;
        }