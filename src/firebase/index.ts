import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
	apiKey: 'AIzaSyBpmPQakEFWQRJlBuoQMXzHk2VGlnQqfiw',
	authDomain: 'gym-training-662cb.firebaseapp.com',
	projectId: 'gym-training-662cb',
	storageBucket: 'gym-training-662cb.appspot.com',
	messagingSenderId: '64423888798',
	appId: '1:64423888798:web:ab35cd0118569b3f63b88f',
}

const app = initializeApp(firebaseConfig)
const auth = getAuth(app)
const db = getFirestore(app)

export { auth, db }
