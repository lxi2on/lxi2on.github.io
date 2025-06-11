let savedFiles = [];

function saveCode() {
    const code = document.getElementById('codeEditor').value;
    const language = document.getElementById('languageSelect').value;
    const fileName = prompt('Introduce un nombre para el archivo:');
    if (fileName) {
        const fileContent = {
            name: fileName,
            language: language,
            content: code
        };
        savedFiles.push(fileContent);
        displaySavedFiles();
        updateTextView();
        alert('Código guardado con éxito!');
    }
}

function exportCode() {
    const code = document.getElementById('codeEditor').value;
    const language = document.getElementById('languageSelect').value;
    const blob = new Blob([code], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `codigo.${language}`;
    a.click();
    URL.revokeObjectURL(url);
    alert('Código exportado con éxito!');
}

function toggleTheme() {
    document.body.classList.toggle('light-theme');
    document.body.classList.toggle('dark-theme');
}

function displaySavedFiles() {
    const fileButtonsContainer = document.getElementById('fileButtons');
    fileButtonsContainer.innerHTML = '';
    savedFiles.forEach((file, index) => {
        const button = document.createElement('button');
        button.className = 'saved-file';
        button.innerText = file.name;
        button.onclick = () => viewFileContent(index);
        fileButtonsContainer.appendChild(button);
    });
}

function viewFileContent(index) {
    const file = savedFiles[index];
    const newWindow = window.open('', '_blank');
    newWindow.document.write(`<html><head><title>${file.name}</title></head><body><pre>${file.content}</pre></body></html>`);
    newWindow.document.close();
}

function updateTextView() {
    const textViewContainer = document.getElementById('textViewContainer');
    textViewContainer.innerHTML = '';
    savedFiles.forEach((file, index) => {
        const button = document.createElement('button');
        button.className = 'saved-file';
        button.innerText = file.name;
        button.onclick = () => viewFileContent(index);
        textViewContainer.appendChild(button);
    });
}