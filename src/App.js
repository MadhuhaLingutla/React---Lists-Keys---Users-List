import UserProfile from './Components/UserProfile/index'
import './App.css'

const userDetailsList = [
  {
    uniqueno: 1,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/esther-howard-img.png',
    name: 'Madhu',
    role: 'Software Developer',
  },
  {
    uniqueno: 2,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/esther-howard-img.png',
    name: 'Maha',
    role: 'Software Developer',
  },
  {
    uniqueno: 3,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/esther-howard-img.png',
    name: 'Deepu',
    role: 'Software Developer',
  },
  {
    uniqueno: 4,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/esther-howard-img.png',
    name: 'Janaki',
    role: 'Software Developer',
  },
]

const App = () => (
  <div className="list-container">
    <h1 className="title">Users List</h1>
    <ul>
      {userDetailsList.map(each => (
        <UserProfile userDetails={each} key={each.uniqueno} />
      ))}
    </ul>
  </div>
)

export default App
