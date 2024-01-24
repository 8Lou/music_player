# https://8lou.github.io/music_player/

## React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

### npm create vite@latest
### npm install
### npm i @mui/material @emotion/react @emotion/styled @mui/icons-material moment sass classnames

## deploy:

### I. git checkout -b gh-pages
### git push origin gh-pages
### file:`.github/workflows/gh-pages.yaml`

### II.`"deploy": "gh-pages -d dist",`
git add dist -f
git subtree push --prefix dist https://8lou.github.io/music_player/ gh-pages
npm run build

### npm run dev
17:46

While working on this project, I encountered difficulties. These difficulties were related to the problem of visualizing the deployment. This means that the completed project was not displayed on the Github. I found out what the problem was. It was a mismatch of paths. This is because the assembly was performed manually, and not automatically, as Reacn + Vite does. The Russian development team helped me with the search for incidents, creating an analog of CHATJPT-3.5-turbo.