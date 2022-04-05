# Projeto Loteca
Este é um projeto de simulador de loteria, 
onde o usuário digita 6 numeros e realiza um 
sorteio de outros 6 numeros no final é verificado 
quantos numeros ele acertou

## Tecnologias utilizadas 
- **HTML**: estrutura do site
- _CSS_: Estilização do site 
- *_JS_*: funções do site
- ~~BootStrap~~: Não foi utilizado

### Melhorias Possiveis
1. [X] Subir para GitHubPages
2. [ ] Alterar os Alerts
3. [ ] Utilizar o Bootstrap
4. [ ] deixar responsivo

### disponibilizado em
[GitHubPage](https://carloscacho.github.io/loteca-mat-2/)


### Prints da tela

| ID | Primeira tela | Segunda Tela |
|----|---------------|--------------|
| 1  | locateca Limpa| loteca Preenchida |
| 2  | ![tela loteca não preechida](https://user-images.githubusercontent.com/10943305/161781583-159d2893-b2ff-49d7-b585-89b2836f2c6e.png) | ![image](https://user-images.githubusercontent.com/10943305/161782390-bf932726-4ef6-4f73-8fe7-710a4e34d8bc.png) |


#### Função Principal
```js:
function sorteio(){
  var cont = 0
  numSort = []

  while(cont < 6){
    let num = Math.random() * 60
    num = Math.ceil(num)
    if(!numSort.includes(num)){
      numSort[cont] = num
      console.log(numSort)
      cont++
    }
     
  }
```

#### comando git
para iniciar o projeto
```bash:
git init
```
