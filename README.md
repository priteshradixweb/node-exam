##  Project Architecture

This project follows a modular structure . i have used **Service-Controller** pattern.

### Folder Structure

*   **/services**: Contains all business logic. Each module has a dedicated service file to keep logic independent of the controllers.
*   **/controllers**: Handles incoming requests and orchestrates calls to the services.
*   **/middleware**: Custom middleware for request processing (e.g., authentication, upload).
*   **/models**: Database schemas and data definitions for each module.
*   **/validation**: Module-specific validation rules and schemas to ensure data integrity.
*   **/util**: Shared utility functions and helper methods used across the application.
*   **/uploads**: Shared utility functions and helper methods used across the application.
*   **index.js** is the main starting point of project

##  Getting Started

### Prerequisites
Before running the project, you must set up your environment variables. 
I have used mysql as database to develop this project

1. Copy the example environment file:
   ```bash
   cp .env.example .env
   ```
2. Open `.env` and fill in the required values.

### Installation & Execution
Node version : v24.15.0
To install dependencies and start the application, run:

```bash
# Install dependencies
npm install

# Start the project
npm run start
```

# use this file for postman collection available in Bookstore api.postman_collection.json 
