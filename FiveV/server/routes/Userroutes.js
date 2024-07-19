const express = require('express')

import { signupUser, loginUser } from "../controllers/Usercontrollers"

router.post('/login', loginUser)

router.post('/signup', signupUser)





export default router