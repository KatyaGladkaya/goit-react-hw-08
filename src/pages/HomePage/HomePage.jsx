import s from "../HomePage/HomePage.module.css"
const HomePage = () => {
  return (
    <div className={s.homePage}>
      <h1 className={s.title}>Welcome to Contact Book</h1>
      <p>Register or log in to manage your private contacts.</p>
    </div>
  );
};

export default HomePage;