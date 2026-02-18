
const mongoose = require('mongoose');
const Admin = require('./models/admin_details');
const db = require('./config/mongoose');

async function seedAdmin() {
    try {
        // Wait for connection to be ready if needed, or just proceed
        // The mongoose.connection is already established in config/mongoose.js

        // Give it a moment to connect
        await new Promise(resolve => setTimeout(resolve, 2000));

        const existingAdmin = await Admin.findOne({ Username: 'admin' });
        if (existingAdmin) {
            console.log('Admin user already exists.');
        } else {
            const newAdmin = new Admin({
                Username: 'admin',
                Password: 'admin' // Plaintext as per controller logic
            });
            await newAdmin.save();
            console.log('Admin user created successfully.');
            console.log('Username: admin');
            console.log('Password: admin');
        }
    } catch (error) {
        console.error('Error seeding admin:', error);
    } finally {
        mongoose.disconnect();
        process.exit();
    }
}

seedAdmin();
