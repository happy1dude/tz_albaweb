window.addEventListener('load', () => {
    setTimeout(() => {
        let preloader = document.getElementById('preloader-page');
        if (!preloader.classList.contains('done') ) {
            preloader.classList.add('done')
        }
    }, 1000)
});

// window.onload = () => {
//     setTimeout(() => {
//         let preloader = document.getElementById('preloader-page');
//         if (!preloader.classList.contains('done') ) {
//             preloader.classList.add('done')
//         }
//     }, 1000)
// };
