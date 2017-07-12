import Product from '../models/product';
export const getProducts = (req, res) => {
    Product
        .find()
        .exec((err, products) => {
            if(err){
                return res.status(500).send(err);
            }
            return res.status(200).json(products);
        });
        
    
};

export const addProduct = (req, res) => {
    const prod = req.body;
    const product = new Product({
        title: prod.title,
        price: prod.price
    });
    product.save((err, prod) => {
        if(err){
            return res.status(500).send(err);
        }
        return res.status(201).json({
            message: 'created successfully'
        });
    });
    
};

export const getProductById = (req, res) => {
    const prodId = req.params.productId;
    Product
        .findOne()
        .where('_id').equals(prodId)
        .select('title price')
        .exec((err, prod) => {
                if(err){
                    res.status(404).json(err);                    
                }
                else{
                    res.status(200).json(prod);
                }
        });
    
};