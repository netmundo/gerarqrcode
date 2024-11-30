// Referencia os elementos da interface
const generateBtn = document.getElementById('generateBtn');
const textInput = document.getElementById('textInput');
const qrCodeContainer = document.getElementById('qrcode');
const message = document.getElementById('message');
const loadingSpinner = document.getElementById('loading');

// Função para gerar o QR Code com um atraso de 1 segundo
generateBtn.addEventListener('click', () => {
    // Limpa o QR Code anterior, mensagem e exibe o carregamento
    qrCodeContainer.innerHTML = '';
    message.classList.add('hidden');
    loadingSpinner.classList.remove('hidden');
    generateBtn.disabled = true; // Desabilita o botão enquanto gera o QR

    // Obtém o texto do input
    const text = textInput.value.trim();

    if (text === '') {
        alert('Por favor, insira um link ou texto para gerar o QR Code.');
        loadingSpinner.classList.add('hidden');
        generateBtn.disabled = false; // Reabilita o botão
        return;
    }

    // Simula o atraso de 1 segundo para mostrar o QR Code
    setTimeout(() => {
        // Cria o QR Code
        new QRCode(qrCodeContainer, {
            text: text,
            width: 200,
            height: 200,
        });

        // Exibe a mensagem com a seta
        message.classList.remove('hidden');
        loadingSpinner.classList.add('hidden');
        generateBtn.innerText = 'Pronto!'; // Muda o texto do botão
        generateBtn.disabled = false; // Reabilita o botão
    }, 1000); // Atraso de 1 segundo (1000 ms)
});

// Restaura o texto do botão para "Gerar QR Code" ao focar no input
textInput.addEventListener('focus', () => {
    generateBtn.innerText = 'Gerar QR Code';
});
