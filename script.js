const icons = document.querySelectorAll('.icon-detail');

async function copy(e) {
    e.preventDefault();

    const url = this.getAttribute('link');
    console.log(url)
    try {
        await navigator.clipboard.writeText(url);
        Swal.fire('Link have been copied');
    } catch (err) {
        console.error(err)
    }

}

icons.forEach(icon => icon.addEventListener('click', copy));