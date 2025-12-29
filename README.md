# My Angular Project

Angular 21 application with ASP.NET Core backend.

## Prerequisites

- Node.js (v18 or higher)
- Angular CLI (`npm install -g @angular/cli`)
- .NET 8.0 SDK (or your ASP.NET Core version)
- Visual Studio (for backend)

## Setup Instructions

### 1. Clone the Repository
```bash
git clone <your-repository-url>
cd <project-folder>
```

### 2. Configure the Application

Copy the configuration template and add your local settings:
```bash
# For Windows (Command Prompt)
copy public\config.template.json public\config.json

# For Windows (PowerShell)
Copy-Item public\config.template.json public\config.json

# For Mac/Linux
cp public/config.template.json public/config.json
```

Open `public/config.json` and update with your local backend URL:
```json
{
  "apiUrl": "http://localhost:YOUR_PORT/api"
}
```

Replace `YOUR_PORT` with your actual ASP.NET Core backend port.

### 3. Install Dependencies
```bash
npm install
```

### 4. Run the Backend

1. Open the ASP.NET Core solution in Visual Studio
2. Press **F5** to run the backend
3. Note the port number
4. Update `public/config.json` with this port if different

### 5. Run the Angular Application
```bash
ng serve
```

Navigate to `http://localhost:YOUR_FRONTEND_API` in your browser.

## Project Structure
```
project-root/
├── src/                      # Angular source files
│   ├── app/                  # Application components and services
│   │   └── services/         # Services (ConfigService, ProductService, etc.)
│   └── main.ts               # Application entry point
├── public/                   # Static assets (Angular 17+)
│   ├── config.json          # Local configuration (not in Git)
│   └── config.template.json # Configuration template (in Git)
├── angular.json             # Angular CLI configuration
├── package.json             # NPM dependencies
└── README.md                # This file
```

## Available Scripts

### Development
```bash
# Start development server
ng serve

```

### Building
```bash
# Build for production
ng build

# Build output will be in dist/ folder
```

### Testing
```bash
# Run unit tests
ng test

# Run end-to-end tests
ng e2e
```

## Configuration

### Frontend Configuration

The application uses runtime configuration loaded from `public/config.json`:

- **Development**: Update `public/config.json` with your local backend URL
- **Production**: Replace `public/config.json` during deployment with production values

### Backend Configuration

The ASP.NET Core backend configuration:

- **CORS**: Configured to allow requests from `http://localhost:YOUR_FRONTEND_API_PORT`
- **API Base URL**: Typically `http://localhost:YOUR_BACKEND_API_PORT/api`

## Deployment

### Building for Production
```bash
ng build --configuration production
```

### Deploying with Different Configurations

1. Build the application once
2. Replace `dist/<app-name>/browser/config.json` with environment-specific config
3. Deploy the `dist/<app-name>/browser` folder

Example:
```bash
# Build once
ng build

# Deploy to staging
cp config.staging.json dist/my-app/browser/config.json
# Deploy dist/my-app/browser folder

# Deploy to production
cp config.production.json dist/my-app/browser/config.json
# Deploy dist/my-app/browser folder
```

## Troubleshooting

### CORS Errors

If you see CORS errors in the browser console:

1. Verify backend is running
2. Check CORS configuration in ASP.NET Core `Program.cs`
3. Ensure the origin `http://localhost:YOUR_FRONTEND_API_PORT` is allowed

### Configuration Not Loading

If you see "Configuration not loaded" errors:

1. Verify `public/config.json` exists
2. Check browser Network tab (F12) for 404 errors on `/config.json`
3. Ensure `public/config.json` has valid JSON format

### Backend Connection Failed

If API calls fail:

1. Verify backend is running in Visual Studio
2. Check the port in `public/config.json` matches your backend port
3. Try accessing the API directly: `http://localhost:YOUR_PORT/api/products`

## Contributing

1. Create a feature branch
2. Make your changes
3. Test thoroughly
4. Submit a pull request

## License

MIT License

## Contact

https://www.linkedin.com/in/vince-angelo-bermejo