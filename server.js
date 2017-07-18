const express = require('express')
const app = express()
let mongoose = require('./db/schema.js')
const bodyParser = require('body-parser')

let Blog = mongoose.model("Blog")
let Comment = mongoose.model("Comment")

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

app.get(`/api/blogs`, function(req, res){
  Blog.find({}).then(function(blogs){
    res.json(blogs)
  })
})

app.get(`/api/blogs/:id`, function(req, res){
  Blog.findOne({_id: req.params.id}).then(function(blog){
    res.json(blog)
  })
})

app.post(`/api/blogs`, function(req, res){
  Blog.create(req.body).then(function(blog){
    res.json(blog)
  })
})

app.delete(`/api/blogs/:id`,function(req,res){
    Blog.findOneAndRemove({_id: req.params.id}).then(function(){
        res.json({succes: true})
    })
})

app.put(`/api/blogs/:id`,function(req,res){
    Blog.findOneAndUpdate({_id: req.params.id}, req.body, {new: true}).then(function(game) {
            res.json(game)
        })
})


app.listen(4000, () => {
  console.log(`app listening on port 4000`)
})
