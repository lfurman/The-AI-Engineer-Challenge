# 🚀 AI Chat Frontend

Welcome to the **coolest** AI chat interface you've ever seen! This React-based frontend connects to your FastAPI backend and provides a sleek, modern chat experience powered by OpenAI's latest models.

## ✨ Features That'll Blow Your Mind

- **🎨 Beautiful UI**: Modern, responsive design with smooth animations
- **💬 Real-time Chat**: Stream responses from OpenAI models as they're generated
- **⚙️ Smart Settings**: Configure your API key, choose models, and customize AI behavior
- **📱 Mobile-First**: Works perfectly on all devices
- **🎯 Custom Prompts**: Set the context for how your AI should behave
- **🔒 Secure**: Your API key stays local and never touches our servers

## 🛠️ Tech Stack

- **Next.js 14** - The React framework for production with App Router
- **React 18** - The latest and greatest React features
- **TypeScript** - Type-safe JavaScript for better development experience
- **Tailwind CSS** - Utility-first CSS framework for rapid UI development
- **Lucide React** - Beautiful, customizable icons
- **Modern JavaScript** - ES6+ features and async/await patterns

## 🚀 Getting Started

### Prerequisites

Make sure you have these installed:
- **Node.js** (version 16 or higher)
- **npm** or **yarn**
- Your **FastAPI backend** running (check the `api/` folder)

#### Windows Users - Special Notes 🪟
- **PowerShell or Command Prompt**: Use either PowerShell (recommended) or Command Prompt
- **Node.js Installation**: Download from [nodejs.org](https://nodejs.org/) - the LTS version is recommended
- **Git Bash**: If you prefer Unix-like commands, you can use Git Bash (comes with Git for Windows)
- **Windows Subsystem for Linux (WSL)**: For advanced users who want a Linux environment on Windows

### Installation

1. **Navigate to the frontend directory:**
   ```bash
   cd frontend
   ```
   
   **Windows Users**: 
   ```cmd
   # In Command Prompt:
   cd frontend
   
   # In PowerShell:
   cd frontend
   
   # In Git Bash:
   cd frontend
   ```

2. **Install dependencies:**
   ```bash
   npm install
   # or if you're a yarn person:
   # yarn install
   ```
   
   **Windows Users**: Same commands work in all terminals! 🎯

3. **Start the development server:**
   ```bash
   npm run dev
   # or
   # yarn dev
   ```
   
   **Windows Users**: Same commands work in all terminals! 🎯

4. **Open your browser** and go to `http://localhost:3000`
   
   **Windows Users**: Your default browser should open automatically. If not, manually open your preferred browser and navigate to the URL.
   
   **Note**: Next.js will automatically open your browser when you run `npm run dev`!

## 🔧 Configuration

### API Connection

The frontend automatically connects to your FastAPI backend at `http://localhost:8000`. If you're running it on a different port or URL, you can:

1. **Set an environment variable:**
   ```bash
   # Create a .env file in the frontend directory
   REACT_APP_API_URL=http://your-api-url:port
   ```
   
   **Windows Users**: 
   ```cmd
   # In Command Prompt/PowerShell:
   echo REACT_APP_API_URL=http://your-api-url:port > .env
   
   # Or manually create a .env file in the frontend folder
   # Right-click → New → Text Document → rename to ".env" (with quotes)
   ```

2. **Or modify the default in `src/services/api.js`**

### First Time Setup

1. **Click the settings icon** (⚙️) in the top-right corner
2. **Enter your OpenAI API key** (get one from [OpenAI's platform](https://platform.openai.com/))
3. **Choose your preferred AI model** (GPT-4.1 Mini is the default)
4. **Customize the system prompt** to define how your AI should behave
5. **Save and start chatting!**

## 🎨 Customization

### Styling

The app uses Tailwind CSS with custom components. You can modify:
- **Colors**: Edit `tailwind.config.js` to change the color scheme
- **Components**: Modify `src/index.css` for custom component styles
- **Animations**: Add new animations in the Tailwind config

### Adding Features

The component structure is modular and easy to extend:
- `src/components/` - Reusable UI components
- `src/services/` - API communication and external services
- `src/App.js` - Main application logic

## 🚀 Building for Production

When you're ready to deploy:

```bash
npm run build
# or
# yarn build
```

**Windows Users**: Same commands work in all terminals! 🎯

This creates an optimized production build in the `build/` folder.

## 🐛 Troubleshooting

### Common Issues

1. **"Module not found" errors**: Run `npm install` again
2. **API connection issues**: Make sure your FastAPI backend is running
3. **Styling not loading**: Check that Tailwind CSS is properly configured

#### Windows-Specific Issues 🪟

4. **"npm is not recognized"**: 
   - Make sure Node.js is installed and added to PATH
   - Restart your terminal after installing Node.js
   - Try running `node --version` to verify installation

5. **Permission errors**: 
   - Run PowerShell as Administrator if needed
   - Check Windows Defender isn't blocking npm operations
   - Ensure your user account has write permissions to the project folder

6. **Port already in use**: 
   - Use `netstat -ano | findstr :3000` to find what's using port 3000
   - Kill the process with `taskkill /PID <PID>` or restart your computer

### Getting Help

- Check the browser console for error messages
- Verify your API key is correct
- Ensure your backend is accessible from the frontend

#### Windows Users - Additional Help 🪟

- **Check Windows Event Viewer** for system-level errors
- **Use Windows Terminal** (available in Microsoft Store) for a better terminal experience
- **Git Bash** provides a Unix-like environment if you're more comfortable with Linux commands
- **WSL2** is great for advanced users who want full Linux compatibility

## 🤝 Contributing

Want to make this even more awesome? Here's how:

1. **Fork the repository**
2. **Create a feature branch** (`git checkout -b feature/amazing-feature`)
3. **Commit your changes** (`git commit -m 'Add amazing feature'`)
4. **Push to the branch** (`git push origin feature/amazing-feature`)
5. **Open a Pull Request**

## 📝 License

This project is part of The AI Engineer Challenge. Feel free to use, modify, and distribute as needed!

---

**Happy coding! 🎉** If you run into any issues, don't panic - just check the troubleshooting section above or reach out to the community.