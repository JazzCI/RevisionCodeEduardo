const baseEndpoint = 'https://api.github.com';
const usersEndpoint = `${baseEndpoint}/users`;
const $n = document.querySelector('name');
const $b = document.querySelector('#blog');
const $l = document.querySelector('.location');

  async function displayUser(username) {  /* async agregué la promesa para que las condiciones se puedan cumplir */
  $n.textContent = 'cargando...';
  const data = await fetch(`${usersEndpoint}/${username}`); /* cambie el response por el data, para que leyera los datos en la consola */
  console.log(data);
  $n.textContent = '${data.name}';
  $b.textContent = '${data.blog}';
  $l.textContent = '${data.location}';
}

function handleError(err) {
  console.log('OH NO!');
  console.log(err);
  n.textContent = `Algo salió mal: ${err}`
}

displayUser('stolinski').catch(handleError);