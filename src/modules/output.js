const aplication = document.querySelector('.scores-cont');

const leaderboard = (e) => {
  for (let i = 0; i < e.result.length; i++) {
    const p = document.createElement('p');
    p.innerHTML = `${e.result[i].user} ${e.result[i].score}`;
    aplication.appendChild(p);
  }
};

fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/77714/scores/')
  .then((response) => response.json())
  .then((json) => leaderboard(json))
  .catch((err) => console.log(err));

document.getElementById('refresh-btn').addEventListener('click', () => {
  location.reload();
});