const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

// find all categories
// be sure to include its associated Products
router.get('/', (req, res) => {
  Category.findAll({
    include:[Product]
}).then(allCategories=>{
    res.status(200).json(allCategories)
}).catch(err=>{
    console.log(err);
    res.status(500).json({err:err})
})
})

// find one category by its `id` value
// be sure to include its associated Products
router.get('/:id', (req, res) => {
  Category.findByPk(req.params.id, {
    include:[Product]
}).then(oneCategory=>{
    res.status(200).json(oneCategory)
  }).catch(err=>{
    console.log(err);
    res.status(500).json({err:err})
  })
});

// create a new category
router.post('/', (req, res) => {
  console.log(req.body)
    Owner.create({
        username:req.body.username,
        password:req.body.password
    }).then(data=>{
        res.json(data)
    }).catch(err=>{
        console.log(err);
        res.status(500).json({err:err})
    })
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
});

module.exports = router;
