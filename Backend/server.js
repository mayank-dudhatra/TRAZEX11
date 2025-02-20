// const express = require('express');
// const mongoose = require('mongoose');
// const bcrypt = require('bcrypt');
// const jwt = require('jsonwebtoken');
// const cors = require('cors')


// const app = express();
// app.use(express.json());
// app.use(cors());

// // mongoose.connect('mongodb+srv://mayankapi6:g58Rc8dB7OgwgfgD@trazex.vra1e.mongodb.net/TrazexUser', {
// //     useNewUrlParser: true,
// //     useUnifiedTopology: true
// // });

// mongoose.connect('mongodb+srv://mayankapi6:g58Rc8dB7OgwgfgD@trazex.vra1e.mongodb.net/Trazex', {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// })
// .then(() => console.log('Connected to MongoDB'))
// .catch(err => console.error('MongoDB Connection Error:', err));


// const userSchema = new mongoose.Schema({
//     id: { type: Number, unique: true }, 
//     username: { type: String, required: true, unique: true },
//     name: { type: String, required: true },
//     email: { type: String, required: true, unique: true },
//     password: { type: String, required: true }
// });

// const User = mongoose.model('User', userSchema);

// // Register User
// app.post('/users', async (req, res) => {
//     try {
//         const { name, email, password } = req.body;
//         const hashedPassword = await bcrypt.hash(password, 10);
//         const user = new User({ name, email, password: hashedPassword });
//         await user.save();
//         res.status(201).json({ message: 'User registered successfully' });
//     } catch (error) {
//         res.status(400).json({ error: error.message });
//     }
// });

// // Get User Details
// app.get('/users/:id', async (req, res) => {
//     try {
//         const user = await User.findById(req.params.id).select('-password');
//         if (!user) return res.status(404).json({ error: 'User not found' });
//         res.json(user);
//     } catch (error) {
//         res.status(400).json({ error: error.message });
//     }
// });

// // Update User
// app.patch('/users/:id', async (req, res) => {
//     try {
//         const updates = req.body;
//         if (updates.password) {
//             updates.password = await bcrypt.hash(updates.password, 10);
//         }
//         const user = await User.findByIdAndUpdate(req.params.id, updates, { new: true }).select('-password');
//         if (!user) return res.status(404).json({ error: 'User not found' });
//         res.json({ message: 'User updated successfully', user });
//     } catch (error) {
//         res.status(400).json({ error: error.message });
//     }
// });

// // Delete User
// app.delete('/users/:id', async (req, res) => {
//     try {
//         const user = await User.findByIdAndDelete(req.params.id);
//         if (!user) return res.status(404).json({ error: 'User not found' });
//         res.json({ message: 'User deleted successfully' });
//     } catch (error) {
//         res.status(400).json({ error: error.message });
//     }
// });

// // User Login
// app.post('/users/login', async (req, res) => {
//     try {
//         const { email, password } = req.body;
//         const user = await User.findOne({ email });
//         if (!user || !(await bcrypt.compare(password, user.password))) {
//             return res.status(401).json({ error: 'Invalid credentials' });
//         }
//         const token = jwt.sign({ id: user._id }, 'secret_key', { expiresIn: '1h' });
//         res.json({ message: 'Login successful', token });
//     } catch (error) {
//         res.status(400).json({ error: error.message });
//     }
// });

// // User Logout (Dummy Endpoint)
// app.post('/users/logout', (req, res) => {
//     res.json({ message: 'Logout successful' });
// });

// app.listen(3000, () => console.log('Server running on port 3000'));



// const express = require('express');
// const mongoose = require('mongoose');
// const bcrypt = require('bcrypt');
// const jwt = require('jsonwebtoken');
// const cors = require('cors');

// const app = express();
// app.use(express.json());
// app.use(cors());

// // MongoDB connection
// mongoose.connect('mongodb+srv://mayankapi6:g58Rc8dB7OgwgfgD@trazex.vra1e.mongodb.net/Trazex', {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// })
// .then(() => console.log('Connected to MongoDB'))
// .catch(err => console.error('MongoDB Connection Error:', err));

// // User Schema
// const userSchema = new mongoose.Schema({
//     id: { type: Number, unique: true },
//     username: { type: String, required: true, unique: true },
//     name: { type: String, required: true },
//     email: { type: String, required: true, unique: true },
//     password: { type: String, required: true }
// });

// const User = mongoose.model('User', userSchema);

// // Register User (including username)
// app.post('/users', async (req, res) => {
//     try {
//         const { username, name, email, password } = req.body;

//         // Check if the username already exists
//         const existingUser = await User.findOne({ username });
//         if (existingUser) {
//             return res.status(400).json({ error: 'Username already exists' });
//         }

//         const hashedPassword = await bcrypt.hash(password, 10);
//         const user = new User({ username, name, email, password: hashedPassword });
//         await user.save();
//         res.status(201).json({ message: 'User registered successfully' });
//     } catch (error) {
//         res.status(400).json({ error: error.message });
//     }
// });

// // Get User Details by ID (excluding password)
// app.get('/users/:id', async (req, res) => {
//     try {
//         const user = await User.findById(req.params.id).select('-password');
//         if (!user) return res.status(404).json({ error: 'User not found' });
//         res.json(user);
//     } catch (error) {
//         res.status(400).json({ error: error.message });
//     }
// });

// // Get User by Username (excluding password)
// app.get('/users/username/:username', async (req, res) => {
//     try {
//         const user = await User.findOne({ username: req.params.username }).select('-password');
//         if (!user) return res.status(404).json({ error: 'User not found' });
//         res.json(user);
//     } catch (error) {
//         res.status(400).json({ error: error.message });
//     }
// });

// // Update User
// app.patch('/users/:id', async (req, res) => {
//     try {
//         const updates = req.body;
//         if (updates.password) {
//             updates.password = await bcrypt.hash(updates.password, 10);
//         }
//         const user = await User.findByIdAndUpdate(req.params.id, updates, { new: true }).select('-password');
//         if (!user) return res.status(404).json({ error: 'User not found' });
//         res.json({ message: 'User updated successfully', user });
//     } catch (error) {
//         res.status(400).json({ error: error.message });
//     }
// });

// // Delete User
// app.delete('/users/:id', async (req, res) => {
//     try {
//         const user = await User.findByIdAndDelete(req.params.id);
//         if (!user) return res.status(404).json({ error: 'User not found' });
//         res.json({ message: 'User deleted successfully' });
//     } catch (error) {
//         res.status(400).json({ error: error.message });
//     }
// });

// // User Login
// app.post('/users/login', async (req, res) => {
//     try {
//         const { username, password } = req.body;
//         const user = await User.findOne({ username });
//         if (!user || !(await bcrypt.compare(password, user.password))) {
//             return res.status(401).json({ error: 'Invalid credentials' });
//         }
//         const token = jwt.sign({ id: user._id }, 'your_jwt_secret_key_here', { expiresIn: '1h' });
//         res.json({ message: 'Login successful', token });
//     } catch (error) {
//         res.status(400).json({ error: error.message });
//     }
// });

// // User Logout (Dummy Endpoint)
// app.post('/users/logout', (req, res) => {
//     res.json({ message: 'Logout successful' });
// });

// app.listen(3000, () => console.log('Server running on port 3000'));


const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const userRoutes = require('./routes/userRoutes');

const app = express();
app.use(express.json());
app.use(cors());

// MongoDB connection
mongoose.connect('mongodb+srv://mayankapi6:g58Rc8dB7OgwgfgD@trazex.vra1e.mongodb.net/Trazex', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.error('MongoDB Connection Error:', err));

// Use routes
app.use(userRoutes);

app.listen(3000, () => console.log('Server running on port 3000'));
