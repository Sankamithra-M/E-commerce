const express = require('express')
const {upload} = require('../multer')
const user = require('../model/user')
const path = require('path')
const  ErrorHandler = require('../utils/ErrorHandler')

const router=express.Router()