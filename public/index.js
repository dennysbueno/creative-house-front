window.addEventListener('load', () =>{
  registerSW()
})

async function registerSW(){
  if('serviceWorker' in navigator){
    try{
      await navigator.serviceWorker.register('./sw.js')
      console.log('registrado com sucesso')
    } catch(e){
      console.log('falha no registro do SW', e);
    }
  } else{
    console.log('instale outro navegador')
  }
}