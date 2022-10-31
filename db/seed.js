import data from '../lib/db/bookmarks.json' assert { type: 'json' }
import mongoose from 'mongoose'
import connection from '../connection.js'
import Bookmark from '../models/Bookmark.js'

let bookmarkData = data.map( item => {
    const bookmark = {}
    bookmark.title = item.title
    bookmark.url = item.url
    return bookmark
})

Bookmark
    .deleteMany({})
    .then(() => Bookmark.create(bookmarkData))
    .then(() => console.log('done'))
    .then(()=> mongoose.disconnect())
    .catch(error => console.error('error: ', error))


// let makeMarks = async() => {
//     await Bookmark.deleteMany({})
//     await Bookmark.create(bookmarkData)
//     console.log('done')
//     mongoose.connection.close()
// }

// makeMarks()
