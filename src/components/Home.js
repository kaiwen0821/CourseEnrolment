import banner from "../assets/img-main.jpg";

export default function Home() {
  return (
    <div className="container">
      <img
        src={banner}
        alt="School of Infocomm"
        className="img-feat"
      />

      <h1>Welcome to Republic Polytechnic</h1>
      <p>
        Explore the diplomas offered by the School of Infocomm at Republic Polytechnic.
        Discover the modules available under each diploma, learn more about course
        content, and register your interest in areas that match your career goals.
      </p>
    </div>
  );
}
