const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

// find all tags
router.get('/', (req, res) => {
  Tag.findAll({
    include:[Product]
}).then(allTaga=>{
    res.status(200).json(allTaga)
}).catch(err=>{
    console.log(err);
    res.status(500).json({err:err})
})
})

// find a single tag by its `id`
router.get('/:id', (req, res) => {
  Tag.findByPk(req.params.id, {
    include:[Product]
}).then(oneTag=>{
    res.status(200).json(oneTag)
  }).catch(err=>{
    console.log(err);
    res.status(500).json({err:err})
  })
});

// create a new tag
router.post('/', (req, res) => {
  console.log(req.body)
    Tag.create({
        tag_name:req.body.tag_name,
    }).then(data=>{
        res.json(data)
    }).catch(err=>{
        console.log(err);
        res.status(500).json({err:err})
    })
});

// update a tag's name by its `id` value
router.put('/:id', (req, res) => {
  Tag.update (
    {
      tag_name:req.body.tag_name,
    },
    {
      where: {
        id: req.params.id
      }
    }
  ) .then ((updatedTag)=>{
    if (updatedTag[0]===0) {
      return res.status(404).json({msg: "no tag found"})
    }
    res.status(200).json(updatedTag)
  }). catch ((err)=> {
    console.log(err);
    res.status(500).json({err:err})
  })
  
});

// delete on tag by its `id` value
router.delete('/:id', (req, res) => {
  Tag.destroy({
    where: {
      id: req.params.id,
    },
  }).then ((delTag)=>{
    if (delTag === 0) {
      return res.status(404).json({msg: "no tag found!"})
    }
    res.status(200).json(delTag)
  }).catch ((err)=>{
    console.log(err);
    res.status(500).json({err:err})
    })
});

module.exports = router;
