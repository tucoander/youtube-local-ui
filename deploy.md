## 🧭 Estrutura das Branches

| Branch         | Função                                         |
|----------------|------------------------------------------------|
| `main`         | Produção (código estável e pronto para deploy) |
| `dev`          | Integração contínua e testes                   |
| `feature/*`    | Novas funcionalidades ou melhorias             |
| `hotfix/*`     | Correções urgentes em produção                 |

---

## 🚀 Fluxo de Trabalho

### 1. **Clonar o projeto**
```bash
git clone https://github.com/usuario/repositorio.git
cd repositorio
```

### 2. **Criar a branch de desenvolvimento**
```bash
git checkout -b dev
```

### 3. **Criar branches para novas features**
```bash
git checkout -b feature/login
# faz alterações
git add .
git commit -m "Implementa tela de login"
git push origin feature/login
```

### 4. **Pull Request da feature → dev**
- No GitHub, abra um PR da `feature/login` para `dev`.
- Faça revisão, testes, e merge.

### 5. **Preparar deploy para produção**
```bash
git checkout main
git merge dev
git push origin main
```

Esse merge libera o código estável para deploy.