# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


# Deploy Vite Project

To deploy the project follow these steps:
- Edit `tailwind.css` and replace the content line with `content: ["index.html", "./src/**/*.jsx"]`
- Open a new terminal inside the project and run `npm run build`

This will create a folder named *dist* with all you need to deploy the project