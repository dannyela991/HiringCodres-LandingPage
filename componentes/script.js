function abreModal() {
    $("#myModal").modal({
      show: true
    });
  }
  
  setTimeout(abreModal, 1000);

let countDownDate = new Date("Nov 26, 2021 00:00:00").getTime();
    let x = setInterval(function() {
        // Pegue a data e hora de hoje
        let now = new Date().getTime();
            
        // Encontre a distância entre agora e a data da contagem regressiva
        let distance = countDownDate - now;
            
        // Cálculos de tempo para dias, horas, minutos e segundos
        let days = Math.floor(distance / (1000 * 60 * 60 * 24));
        let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((distance % (1000 * 60)) / 1000);
            
        // Produza o resultado em um elemento com id correspondente
        document.getElementById("dias").innerHTML = days;
        document.getElementById("horas").innerHTML =  hours;
        document.getElementById("minutos").innerHTML = minutes;
        document.getElementById("segundos").innerHTML = seconds;
            
        // Se a contagem regressiva terminar, escreva algum texto
        if (distance < 0) {
            clearInterval(x);
            document.getElementById("dias").innerHTML = "EXPIROU";
        }
    }, 1000)

    const form = document.getElementById('form')
    form.addEventListener('submit', (e) =>{
        e.preventDefault();
        let nome = document.getElementById('nome').value;        
        let email = document.getElementById('email').value;

        let data = {
            nome,
            email,
        }
        let convertData = JSON.stringify(data);
        localStorage.setItem('lead', convertData)

        let content = document.getElementById('content')
        let carregando = `<p>Carregando...</p>`
        let pronto = `<p>Cadastrado com sucesso!</p>`

        content.innerHTML = carregando;
        setTimeout(() => {
            content.innerHTML = pronto;
        },1000 )
        
    })

 