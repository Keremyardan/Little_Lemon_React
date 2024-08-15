import chefsMarioAndAdrianAImage from './assets/chefs-mario-and-adrian_a.jpg';
import chefsMarioAndAdrianBImage from './assets/chefs-mario-and-adrian_b.jpg';
import './OurStory.css';

const OurStory = () => {
  return (
    <section className="container grid our-story">
      <div className="our-story-description">
        <h1>Little Lemon</h1>
        <h2>Chicago</h2>
        <p>
          Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.
          Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.
          Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.
          Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.
          Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.
          Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.
          Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.
          Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.
        </p>
      </div>
      <div className="our-story-chefs">
        <img src={chefsMarioAndAdrianAImage} alt="Chefs Mario and Adrian" />
        <img src={chefsMarioAndAdrianBImage} alt="Chefs Mario and Adrian" />
      </div>
    </section>
  );
};

export default OurStory;