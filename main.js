function loopThis() {
    document.getElementById('portaltimer').click();
    setTimeout(loopThis, 60000);
}

loopThis();
