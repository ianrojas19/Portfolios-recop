const navMb = document.querySelector('#navigation-mb');

document.getElementById('display-navmb').addEventListener('click', function () {
    if (navMb.style.display === 'none' || navMb.style.display === '') {
        navMb.style.display = 'flex';
    } else {
        navMb.style.display = 'none';
    }
});

document.getElementById('nav-out').addEventListener('click', function () {
    navMb.style.display = 'none';
});