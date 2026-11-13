const path = require('path');

const filePath = 'uploads/users/profile/photo.jpg';

const extension = path.extname(filePath).toLowerCase();

const imageExtensions = ['.jpg', '.jpeg', '.png', '.gif', '.webp'];

if (imageExtensions.includes(extension)) {
    console.log('Image file detected');
} else {
    console.log('Not an image file');
}
