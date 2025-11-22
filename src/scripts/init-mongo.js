// MongoDB initialization script for landing-pages application
// This creates a database user with read/write permissions

print('Creating landing_pages database user...');

// Switch to the landing_pages database
db = db.getSiblingDB('landing_pages');

// Create a user for the application
db.createUser({
    user: 'landing_pages_user',
    pwd: 'landing_pages_password',
    roles: [
        {
            role: 'readWrite',
            db: 'landing_pages'
        }
    ]
});

print('Database user created successfully!');
