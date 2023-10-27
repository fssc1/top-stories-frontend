# Setting up React + Vite Environment

This repository provides a minimal setup to get React working in Vite with HMR (Hot Module Replacement) and some ESLint rules. Here are the steps to set up the environment:

1. Clone the Repository:

   ```bash
   git clone <repository_url>
   ```

2. Clone the `.env_example` File:

   - Find the `.env_example` file in the project root.
   - Make a clone of this file and rename it to `.env`.
   - Open the `.env` file and replace the `VITE_BACKEND_API` variable's value with the link of your API.

3. Further Environment Setup:

   Follow the remaining setup steps provided by the Vite template to configure the environment as needed.

## Official Vite Plugins

Currently, two official Vite plugins are available for React:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md): This plugin uses [Babel](https://babeljs.io/) for Fast Refresh.

- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc): This plugin uses [SWC](https://swc.rs/) for Fast Refresh.
```

This content provides clear instructions for setting up the React + Vite environment and briefly introduces the official Vite plugins available for React. Make sure to replace `<repository_url>` with the actual URL of your repository.