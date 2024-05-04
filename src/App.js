import profileImage from './profile.webp';

function App() {
  return (
    <div>
      <h1>Hi, I'm Lang'at Joel</h1>
      <img src={profileImage} alt="Lang'at Joel" />
      <h2>About Me</h2>
      <p>As a passionate and skilled software developer, I thrive on turning complex ideas into elegant solutions. With a strong foundation in programming languages such as JavaScript, Python, and Java, coupled with experience in web development frameworks like React and Django, I have a proven track record of delivering high-quality software projects. My expertise extends to both frontend and backend development, allowing me to create seamless user experiences while ensuring robust and scalable architecture. I am dedicated to continuous learning and staying updated with the latest technologies to drive innovation and deliver cutting-edge solutions to meet the evolving needs of clients and users."</p>
      <a href="https://github.com/yourgithubusername" target="_blank" rel="noopener noreferrer">GitHub</a>
      <a href="https://www.linkedin.com/in/yourlinkedinusername" target="_blank" rel="noopener noreferrer">LinkedIn</a>
    </div>
  );
}

export default App;