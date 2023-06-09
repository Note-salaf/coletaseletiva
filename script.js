const sacola = document.querySelector('#sacola')
const copo = document.querySelector('#copo')
const garrafaPlastico = document.querySelector('#garrafaPlastico')

const jornal = document.querySelector('#jornal')
const caixaPapelao = document.querySelector('#caixaPapelao')
const sacolaPapel = document.querySelector('#sacolaPapel')

const espelho = document.querySelector('#espelho')
const garrafaVidro = document.querySelector('#garrafaVidro')
const taca = document.querySelector('#taca')

const maca = document.querySelector('#maca')
const banana = document.querySelector('#banana')
const peixe = document.querySelector('#peixe')

const latinha = document.querySelector('#latinha')
const talher = document.querySelector('#talher')
const panela = document.querySelector('#panela')

const itens = document.querySelectorAll('.itens')

const contagemPlastico = document.querySelector('#contagemPlastico')
const contagemPapel = document.querySelector('#contagemPapel')
const contagemVidro = document.querySelector('#contagemVidro')
const contagemOrganico = document.querySelector('#contagemOrganico')
const contagemMetal = document.querySelector('#contagemMetal')

const lixeiraPlastico = document.querySelector('#lixeiraPlastico')
const lixeiraPapel = document.querySelector('#lixeiraPapel')
const lixeiraVidro = document.querySelector('#lixeiraVidro')
const lixeiraOrganico = document.querySelector('#lixeiraOrganico')
const lixeiraMetal = document.querySelector('#lixeiraMetal')

const somPontos = document.querySelector('#somPontos')
const somErro = document.querySelector('#somErro')
const musicaFinal = document.querySelector('#musicaFinal')

//Código para arrastar e soltar elementos de plástico
sacola.addEventListener('dragstart', (event) => {
    event.dataTransfer.setData('text/plain', event.target.id);
    });
copo.addEventListener('dragstart', (event) => {
    event.dataTransfer.setData('text/plain', event.target.id);
    });
garrafaPlastico.addEventListener('dragstart', (event) => {
    event.dataTransfer.setData('text/plain', event.target.id);
    });

lixeiraPlastico.addEventListener('dragover', (event) => {
 event.preventDefault();
    });
lixeiraPlastico.addEventListener('drop', (event) => {
    event.preventDefault();
    const data = event.dataTransfer.getData('text/plain');
    const draggedElement = document.getElementById(data);
    if (draggedElement.classList.contains('itemPlastico')) {
        lixeiraPlastico.appendChild(draggedElement);
        // Oculta o elemento arrastável após a soltura
        draggedElement.style.display = 'none';
        contarElementosFilhosPlastico()
        tocaSomPontos()
        acabouLixo()
    } else {
        setTimeout(() => {
            tocaSomErro()
            alert('Isso não é plástico, amiguinho!')
        }, 100);
    }
     
     });    
//função para contar elementos filhos lixeiraPlastico
function contarElementosFilhosPlastico() {
   let elementos =  lixeiraPlastico.childElementCount;
   contagemPlastico.textContent = elementos
  }

//código para arrastar e soltar elementos de papel
jornal.addEventListener('dragstart', (event) => {
    event.dataTransfer.setData('text/plain', event.target.id);
    });
caixaPapelao.addEventListener('dragstart', (event) => {
    event.dataTransfer.setData('text/plain', event.target.id);
    });
sacolaPapel.addEventListener('dragstart', (event) => {
    event.dataTransfer.setData('text/plain', event.target.id);
    });
// torna possível arrastar sobre lixeira de papel
lixeiraPapel.addEventListener('dragover', (event) => {
    event.preventDefault();
     });
//executa quando solta item sobre a lixeira de papel
lixeiraPapel.addEventListener('drop', (event) => {
    event.preventDefault();
    const data = event.dataTransfer.getData('text/plain');
    const draggedElement = document.getElementById(data);
    //verifica se item é papel
    if (draggedElement.classList.contains('itemPapel')) {
        lixeiraPapel.appendChild(draggedElement);
        // Oculta o elemento arrastável após a soltura
        draggedElement.style.display = 'none';
        contarElementosFilhosPapel()
        tocaSomPontos()
        acabouLixo()
    } else {
        setTimeout(() => {
            tocaSomErro()
            alert('Isso não é papel, amiguinho!')
        }, 100);
    }
     
     });
//contar elementos de papel      
function contarElementosFilhosPapel() {
    let elementos =  lixeiraPapel.childElementCount;
    contagemPapel.textContent = elementos
    }
//código para arrastar e soltar elementos de vidro
espelho.addEventListener('dragstart', (event) => {
    event.dataTransfer.setData('text/plain', event.target.id);
    });
garrafaVidro.addEventListener('dragstart', (event) => {
    event.dataTransfer.setData('text/plain', event.target.id);
    });
taca.addEventListener('dragstart', (event) => {
    event.dataTransfer.setData('text/plain', event.target.id);
    });
// torna possível arrastar sobre lixeira de vidro
lixeiraVidro.addEventListener('dragover', (event) => {
    event.preventDefault();
     });
//executa quando solta item sobre a lixeira de vidro
lixeiraVidro.addEventListener('drop', (event) => {
    event.preventDefault();
    const data = event.dataTransfer.getData('text/plain');
    const draggedElement = document.getElementById(data);
    //verifica se item é vidro
    if (draggedElement.classList.contains('itemVidro')) {
        lixeiraVidro.appendChild(draggedElement);
        // Oculta o elemento arrastável após a soltura
        draggedElement.style.display = 'none';
        contarElementosFilhosVidro()
        tocaSomPontos()
        acabouLixo()
    } else {
        tocaSomErro()
        setTimeout(() => {
           alert('Isso não é vidro, amiguinho!')
        }, 100);
    }
     
     });
//contar elementos de vidro      
function contarElementosFilhosVidro() {
    let elementos =  lixeiraVidro.childElementCount;
    contagemVidro.textContent = elementos
    }

    //Código para arrastar e soltar elementos organicos
maca.addEventListener('dragstart', (event) => {
    event.dataTransfer.setData('text/plain', event.target.id);
    });
banana.addEventListener('dragstart', (event) => {
    event.dataTransfer.setData('text/plain', event.target.id);
    });
peixe.addEventListener('dragstart', (event) => {
    event.dataTransfer.setData('text/plain', event.target.id);
    });

lixeiraOrganico.addEventListener('dragover', (event) => {
 event.preventDefault();
    });
lixeiraOrganico.addEventListener('drop', (event) => {
    event.preventDefault();
    const data = event.dataTransfer.getData('text/plain');
    const draggedElement = document.getElementById(data);
    if (draggedElement.classList.contains('itemOrganico')) {
        lixeiraOrganico.appendChild(draggedElement);
        // Oculta o elemento arrastável após a soltura
        draggedElement.style.display = 'none';
        contarElementosFilhosOrganico()
        tocaSomPontos()
        acabouLixo()
    } else {
        tocaSomErro()
        setTimeout(() => {
            alert('Isso não é orgânico, amiguinho!')
        }, 100);
    }
     
     });    
//função para contar elementos filhos lixeiraOrganico
function contarElementosFilhosOrganico() {
   let elementos =  lixeiraOrganico.childElementCount;
   contagemOrganico.textContent = elementos
  }

  //Código para arrastar e soltar elementos de metal
latinha.addEventListener('dragstart', (event) => {
    event.dataTransfer.setData('text/plain', event.target.id);
    });
talher.addEventListener('dragstart', (event) => {
    event.dataTransfer.setData('text/plain', event.target.id);
    });
panela.addEventListener('dragstart', (event) => {
    event.dataTransfer.setData('text/plain', event.target.id);
    });

lixeiraMetal.addEventListener('dragover', (event) => {
 event.preventDefault();
    });
lixeiraMetal.addEventListener('drop', (event) => {
    event.preventDefault();
    const data = event.dataTransfer.getData('text/plain');
    const draggedElement = document.getElementById(data);
    if (draggedElement.classList.contains('itemMetalico')) {
        lixeiraMetal.appendChild(draggedElement);
        // Oculta o elemento arrastável após a soltura
        draggedElement.style.display = 'none';
        contarElementosFilhosMetal()
        tocaSomPontos()
        acabouLixo()
    } else {
        tocaSomErro()
        setTimeout(() => {
            alert('Isso não é metal, amiguinho!')   
        }, 100); 
    }
     
     });    
//função para contar elementos filhos lixeiraMetal
function contarElementosFilhosMetal() {
   let elementos =  lixeiraMetal.childElementCount;
   contagemMetal.textContent = elementos
  }

function tocaSomPontos() {
    somPontos.play()
}
function tocaSomErro() {
    somErro.play()
}

//código para o modal final
 let modalFinal = document.querySelector('#modalFinal');
 let botFechar = document.querySelector('#botFechar');

 // função para abrir o modal
  function abrirModalFinal() {
    tocaMusicaFinal()
   modalFinal.showModal();
   
 }

 // adiciona um listener de evento ao botão de fechar para fechar o modal
 botFechar.addEventListener('click', function() {
   modalFinal.close();
   paraMusicaFinal()
   reiniciaContagem()
   reapareceItens()

 });

 // verifica se todos os itens foram colocados nas lixeiras
 function acabouLixo() {
    let materialRecolhido = parseInt(contagemPlastico.textContent) + parseInt(contagemPapel.textContent) + parseInt(contagemVidro.textContent) + parseInt(contagemOrganico.textContent) + parseInt(contagemMetal.textContent)
    if ( materialRecolhido == 15) {
        abrirModalFinal()
    }  
 }
function tocaMusicaFinal() {
    musicaFinal.play()
}
function paraMusicaFinal() {
    musicaFinal.pause()
}

function reiniciaContagem() {
    contagemPlastico.textContent = ''
    contagemPapel.textContent = ''
    contagemVidro.textContent = ''
    contagemOrganico.textContent = ''
    contagemMetal.textContent = ''
}

function reapareceItens() {
    itens.forEach(elemento => {
        document.body.appendChild(elemento); // Move o elemento de volta para o elemento pai original
        elemento.style.display = 'block'; // Exibe novamente o elemento
    })
}