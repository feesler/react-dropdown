import './App.css';
import Dropdown from './components/Dropdown.jsx';

const profileMenuItems = [{
  id: 'profile-info',
  title: 'Profile Information',
  link: 'profile/info'
}, {
  id: 'profile-pwd',
  title: 'Change Password',
  link: 'profile/changepassword'
}, {
  id: 'profile-pro',
  title: 'Become PRO',
  link: 'pro'
}, {
  id: 'profile-help',
  title: 'Help',
  link: 'profile/help'
}, {
  id: 'profile-logout',
  title: 'Log Out',
  link: 'logout'
}];

function App() {
  return (
    <div className="container">
      <Dropdown title="Account Settings" items={profileMenuItems} />
    </div>
  );
}

export default App;
