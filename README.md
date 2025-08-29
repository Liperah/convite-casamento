# Convite de Casamento — Landing Page

Landing page estática (HTML/CSS/JS) com contagem regressiva, confirmação via Google Forms e link do Maps.

## Como usar
1. Edite os textos e datas em `index.html`.
2. (Opcional) Troque o fundo: coloque uma imagem em `img/fundo.jpg` e,
   se quiser usar a imagem no fundo, altere o CSS conforme comentário em `css/styles.css`.

## Deploy

### GitHub Pages
1. Crie um repositório e envie estes arquivos.
2. Settings → Pages → Source: **Deploy from a branch**; Branch: **main** e **/root**.
3. Abra o link gerado (ex.: `https://seu-usuario.github.io/nome-do-repo/`).

### Vercel
- Importar o repositório na Vercel (Add New → Project). Ela detecta como projeto estático. Clique **Deploy**.
- Ou via CLI:
  ```bash
  npm i -g vercel
  vercel --prod
  ```

## Observações
- Todos os recursos externos usam **HTTPS** (Google Maps e Forms), então a página funciona bem em GitHub Pages/Vercel.
- Não há dependências de servidor (apenas front-end).

