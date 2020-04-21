const express = require('express');
const Scheme = require('./scheme-model.js');
const router = express.Router();

// fetch all resources
router.get('/', (req, res) => {
    Scheme.getResources()
        .then(info => {
            res.status(200).json(info);
        })
        .catch(err => {
            res.status(500).json({ message: 'Failed to get info.' });
        });
})

// fetch single resource by id
router.get('/:id', (req, res) => {
    const { id } = req.params;
    Scheme.getResourceById(id)
        .then(resource => {
            if (resource) {
                res.status(200).json(resource);
            } else {
                res.status(404).json({ message: 'Could not find resource with given id.' })
            }
        })
        .catch(err => {
            res.status(500).json({ message: 'Failed to get resource.' });
        });
});

// add a resource
router.post('/', (req, res) => {
    const resourceData = req.body;
    Scheme.addResource(resourceData)
        .then(resource => {
            res.status(201).json(resource);
        })
        .catch(err => {
            res.status(500).json({ message: 'Failed to create new resource.' });
        });
});

router.put('/:id', (req, res) => {
    const { id } = req.params;
    const changes = req.body;
    Scheme.getResourceById(id)
        .then(resource => {
            if (resource) {
                Scheme.updateResource(changes, id)
                    .then(updatedResource => {
                        res.status(202).json(updatedResource);
                    });
            } else {
                res.status(404).json({ message: 'Could not find resource with given id.' });
            }
        })
        .catch(err => {
            res.status(500).json({ message: 'Failed to update resource.' });
        });
});

router.delete('/:id', (req, res) => {
    const { id } = req.params;
    Scheme.removeResource(id)
        .then(deleted => {
            if (deleted) {
                res.status(200).json({ removed: deleted });
            } else {
                res.status(404).json({ message: 'Could not find resource with given id.' });
            }
        })
        .catch(err => {
            res.status(500).json({ message: 'Failed to delete resource.' });
        });
});

module.exports = router;
