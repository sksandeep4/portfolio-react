const Hero = () => {
  return (
    <div className="hero">
      <div className="image">
        <img src="src\images.png" alt="Sandeep.jpg" className="propic" />
      </div>
      <div className="container">
        <p /*style="float: right"*/>
          I am <span className="name-highlight">Sandeep</span>. A Full Stack
          Developer. Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          Obcaecati enim consectetur labore aliquid laudantium dicta nostrum
          iure quidem eveniet. Adipisci cumque blanditiis id delectus. Lorem
          ipsum dolor, sit amet consectetur adipisicing elit. Sunt, iusto?
        </p>
        <button className="contactBtnHero">Contact Me</button>
      </div>
    </div>
  );
};
export default Hero;
