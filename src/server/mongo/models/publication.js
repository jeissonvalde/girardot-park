'use strict'

import mongoose from 'mongoose'

const Schema = mongoose.Schema


// Publication
const PublicationSchema = Schema({
  title: String,
  user: Object,
  description: { type: String, required: 'you need a description for this article' },
  createdAt: { type: Date, default: new Date() },
  exposedId: String,
  face_link: String,
  idSocial: Number,
  video: String,
  img: { type: Array, default: [0,1,2] }
})

export default mongoose.model('Publication', PublicationSchema)
