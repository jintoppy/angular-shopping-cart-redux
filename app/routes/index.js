import express from 'express';

const router = express.Router();

router.get('/products', (req, res) => {
    res.render('products', {
        title: 'Products Page',
        products: [
            {
                title: 'Oculus Rift',
                price: 45000
            },
            {
                title: 'HTC Vive',
                price: 75000
            }
        ]
    })
});

router.get('/', (req,res) => {
    console.log('within index rendere');
    res.render('index', {
        title: 'NodeJS App'        
    });
});

export default router;