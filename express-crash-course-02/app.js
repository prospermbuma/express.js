import express from 'express';

// Config app
const app = express();
const port = process.env.PORT || 8080;

// Middleware
// Static file server
app.use(express.static('public'));

// Config ejs
app.set('view engine', 'ejs');
app.set('views', 'views');

// Routes
app.get('/', (req, res) => {
    res.render('index', {
        title: "Extrap",
        message: "Welcome to Extrap",
        layout: false,
    });
});

app.get('/about', (req, res) => {
    res.render('about', {
        title: "About",
        message: "About Us",
        about: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat dolores, voluptate architecto voluptates perferendis vel natus suscipit exercitationem, quaerat dicta consectetur maiores corporis error. Maiores obcaecati officia nesciunt culpa adipisci consectetur adipisicing elit. Placeat dolores, voluptate architecto voluptates perferendis vel natus suscipit exercitationem, quaerat dicta consectetur maiores corporis error. Maiores obcaecati officia nesciunt culpa adipisci?",
        layout: false,
    });
});

app.get('/services', (req, res) => {
    res.render('service', {
        title: "Services",
        message: "Our Services",
        services: [
            'Software Development',
            'Cybersecurity Consultancy',
            'AI Engineering',
            'Branding (Graphic Design, Motion Graphic, Logo Design and more)'
        ],
        layout: false,
    });
});

app.get('/contact', (req, res) => {
    res.render('contact', {
        title: "Contact",
        message: "Contact Us",
        contacts: [
            'www.extrap.co.tz',
            'info@extrap.co.tz',
            '+255 716 491 716',
            'Kinondoni - Dar es salaam, Tanzania'
        ],
        layout: false,
    });
});

// Starting server
app.listen(port, console.log(`Server is running on port ${port}`));
