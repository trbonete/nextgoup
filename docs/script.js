// Função para carregar e renderizar Markdown
async function loadMarkdown(file) {
    try {
        const response = await fetch(file);
        const text = await response.text();
        const html = marked.parse(text);
        document.getElementById('content').innerHTML = html;
    } catch (error) {
        document.getElementById('content').innerHTML = '<p>Erro ao carregar o conteúdo.</p>';
    }
}

// Carregar introdução por padrão
window.onload = () => {
    loadMarkdown('introducao.md');
};

// Adicionar event listeners aos links
document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('.sidebar a');
    links.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const file = link.getAttribute('href');
            loadMarkdown(file);
        });
    });
});
