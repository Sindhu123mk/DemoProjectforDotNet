
The API will be available at `https://localhost:5001` or `http://localhost:5000`.
 **Access Swagger UI**

Open your browser and navigate to `http://localhost:5001/swagger/index.html` to explore and test the API endpoints.

## API Endpoints

| Method | Endpoint           | Description                |
|--------|--------------------|----------------------------|
| GET    | `/api/users`       | Get all users              |
| GET    | `/api/users/{id}`  | Get user by ID             |
| POST   | `/api/users`       | Create a new user          |
| PUT    | `/api/users/{id}`  | Update an existing user    |
| DELETE | `/api/users/{id}`  | Delete a user              |

## Project Structure

- `Controllers/UsersController.cs` - API endpoints for user management
- `Data/AppDbContext.cs` - Entity Framework Core database context
- `Models/User.cs` - User entity model
- `Program.cs` - Application entry point and service configuration

## Database

The application uses a local SQLite database file named `users.db`. The database is automatically created on first run.
