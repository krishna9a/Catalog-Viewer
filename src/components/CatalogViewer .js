import React, { useState, useEffect, useRef } from "react";
import "./CatalogViewer.css";
import img1 from "./assets/1.jpeg";
import img2 from "./assets/2.jpg";
import img3 from "./assets/3.jpeg";
import img4 from "./assets/4.jpeg";
import img5 from "./assets/5.jpg";
import img6 from "./assets/6.jpg";
import img7 from "./assets/7.jpeg";
import img8 from "./assets/8.jpg";
import img9 from "./assets/9.jpg";
import img10 from "./assets/10.webp";

const CatalogViewer = () => {
  const items = [
    {
      id: 1,
      title: "Jabalpur",
      imageurl: img1,
      detail:
        "Jabalpur is a city situated on the banks of Narmada River in the state of Madhya Pradesh, India. According to the 2011 census, it is the third-largest urban agglomeration in Madhya Pradesh and the country's 38th-largest urban agglomeration. Jabalpur is an important administrative, industrial and business center of Madhya Pradesh. It is the judicial capital of Madhya Pradesh as The Madhya Pradesh High Court along with other important administrative headquarters of India and Madhya Pradesh are located in Jabalpur. It is generally accepted that the game of Snooker originated in Jabalpur. Jabalpur is the administrative headquarters of Jabalpur district (the second-most-populous district in Madhya Pradesh) and the Jabalpur division. It also is a major education centre in India. ",
    },
    {
      id: 2,
      title: "Bhedaghat",
      imageurl: img2,
      detail:
        "Bhedaghat is a town located in the Jabalpur district of Madhya Pradesh, India. It is situated on the banks of the river Narmada, approximately 20 km away from the city of Jabalpur. Bhedaghat is known for its scenic beauty, particularly the majestic marble rocks that line the Narmada River and create a stunning gorge The marble rocks of Bhedaghat are made of pure white marble and rise up to a height of about 100 feet. They form a valley through which the Narmada River flows, creating a picturesque setting. The sunlight reflecting off the marble rocks gives them a radiant appearance, especially during sunrise and sunset.",
    },
    {
      id: 3,
      title: "Dhuandhar Falls",
      imageurl: img3,
      detail:
        'Dhuandhar Falls is a prominent waterfall located in Bhedaghat, near Jabalpur in the state of Madhya Pradesh, India. The name "Dhuandhar" translates to "a stream of smoke" in Hindi, which aptly describes the appearance of the waterfall due to the misty spray it generates.The waterfall is formed by the Narmada River as it plunges down from a considerable height, creating a roaring cascade. The force of the water creates a dense mist that rises up, resembling smoke, hence the name Dhuandhar Falls. The mist adds to the dramatic and picturesque ambiance of the place. ',
    },
    {
      id: 4,
      title: "Kachnar City Shiv Temple",
      imageurl: img4,
      detail:
        "The Kachnar City is well known for the tourist attraction and religious destination for the locals and the people from abroad because of the tallest statue of Lord Shiva which was build in the year 2004 and was made available for the public, tourists and the devotees from 15 February 2006.The statue measured around 76 feet tall equivalent to 23 meters, build under the open-sky on the cavern which has the replicas of the lingam (Shiva Lingam) called the “Jyotirlinga”. There is about 12 Jyotirlinga in the caverns on which the Lord Shiva’s idol is built. These 12 Lingam has been collected from various shrines of Lord Shiva throughout the country.",
    },
    {
      id: 5,
      title: "Dumna Nature Reserve Park",
      imageurl: img5,
      detail:
        "The Dumna Nature Reserve (DNR) of Jabalpur Municipal Corporation is spread over nearly 1800 acres of forested land on a plateau, about 40 meters above Jabalpur town. It was transferred to the Municipal Committee of Jubbulpore by the provincial government to act as the catchment area for the Khandari lake. The construction of Khandari Dam materialized in February 1883 under J.H. Morris, Chief Commissioner of the Central Provinces and Berar. Since then, the forested area provides rainwater to feed the Khandari Reservoir. The place, along with Lower Gaur forest, is described in Captain James Forsyth’s ‘Highlands of Central India’ as a favored place for tiger shoots for British officers. This forest is a dry deciduous type, typical of central Indian mixed forests. It is home to many species of native trees, plants, shrubs, herbs, creepers, climbers, and grasses.",
    },
    {
      id: 6,
      title: "Balancing Rocks",
      imageurl: img6,
      detail:
        "Balancing Rocks in Jabalpur, Madhya Pradesh, is a sheer geological marvel in the true sense. Located on the way to the Madan Mahal Fort, which was built by Raja Madan Singh, a Gond ruler, Balancing Rocks is a rocky formation of uneven rocks, which is said to be created by volcanic ruptions thousands of years ago. The rchaeologists and geologists fail to sight the exact reason stating how these rocks could stay unmoved for so many years.  However, they assume that it might be their weight and positioning along with the gravitational pull that has allowed these rocks to even withstand an earthquake that rocked Jabalpur in 1997. Balancing rocks can be seen from the top of the Madan Mahal Fort along with a panoramic view of the whole city.",
    },
    {
      id: 7,
      title: "Chausath Yogini Temple",
      imageurl: img7,
      detail:
        'The Chausath Yogini Temple is an ancient temple located in Jabalpur, Madhya Pradesh, India. It is dedicated to the 64 Yoginis, female deities associated with the Tantric tradition of Hinduism. The term "Chausath" means sixty-four in Hindi.The Chausath Yogini Temple is believed to have been built during the 10th or 11th century. It is constructed in the circular shape and is considered one of the four major Chausath Yogini temples in India. The other three temples are located in Bhedaghat (near Jabalpur), Hirapur (Odisha), and Ranipur Jharial (Odisha). The temple complex consists of 64 small shrines, each housing a statue of a Yogini. These Yoginis are considered as manifestations of the divine feminine energy and are often associated with power, transformation, and mysticism in the Tantric tradition.',
    },
    {
      id: 8,
      title: "Madan Mahal Fort",
      imageurl: img8,
      detail:
        "Madan Mahal is a historical fort located in Jabalpur, Madhya Pradesh, India. It is situated on a hilltop overlooking the city of Jabalpur and the Narmada River. The fort is known for its architectural beauty and historical significance. Madan Mahal was built by Gond ruler Raja Madan Shah during the 11th century. It served as a strategic fortress and observation point to monitor the surrounding areas. The fort is a fine example of Gond architecture and reflects a mix of Islamic and Hindu architectural elements.The structure of Madan Mahal is relatively small compared to other forts in India but possesses a unique charm. It is made of red stone and has a simple yet elegant design. The fort consists of a central palace building with a courtyard and a few rooms. There are also bastions and watchtowers for defense purposes.",
    },
    {
      id: 9,
      title: "VIJAN MAHAL",
      imageurl: img9,
      detail:
        "Vijan Mahal Jabalpur is an epitome of palatial properties - one among the finest in India. The five star Property and destination wedding venue is a virtual citadel with an architectural grandeur that is absolutely stunning. The plush furnishings, art work and decor are akin to the palaces of Maharajas of yore.The exhuberant greenery of gardens, sprawling lawns and fountains extol the grand spectacle that is Vijan Mahal. The panoramic landscape enshrines all offerings for a rejuvenating experience of being in a heavenly environment.   The maginificent hotel accomodation and spa resort offers classic stay in luxurious ambiance for those who cherish hospitality with state of art amenities incorporated. The grand venues are best suited for upscale marriage ceremonies, theme and destination weddings and parties in picturesque Jabalpur.",
    },
    {
      id: 10,
      title: "Engineering College ",
      imageurl: img10,
      detail:
        "Jabalpur Engineering College (JEC) is a prestigious engineering institution located in Jabalpur, Madhya Pradesh, India. It is also known as Government Engineering College, Jabalpur. The college was established in 1947 and is affiliated with Rajiv Gandhi Proudyogiki Vishwavidyalaya (RGPV), Bhopal.Jabalpur Engineering College offers undergraduate (B.Tech) and postgraduate (M.Tech) programs in various engineering disciplines, including Civil Engineering, Mechanical Engineering, Electrical Engineering, Electronics and Communication Engineering, Computer Science and Engineering, and Information Technology. The college also offers doctoral (Ph.D.) programs in several disciplines.",
    },
  ];
  const [currentImage, setCurrentImage] = useState(items[0]);
  const [slideshowActive, setSlideshowActive] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const containerRef = useRef(null);

  const handlePrevious = () => {
    const currentIndex = items.findIndex(
      (items) => items.id === currentImage.id
    );
    const previousIndex = (currentIndex - 1 + items.length) % items.length;
    setCurrentImage(items[previousIndex]);
    setSelectedImageIndex(previousIndex);
  };
  const handleNext = () => {
    const currentIndex = items.findIndex(
      (items) => items.id === currentImage.id
    );
    const nextIndex = (currentIndex + 1) % items.length;
    setCurrentImage(items[nextIndex]);
    setSelectedImageIndex(nextIndex);
  };

  const handleSlideshowToggle = () => {
    setSlideshowActive(!slideshowActive);
  };
  useEffect(() => {
    let intervalId = null;
    let cnt = 0;
    if (slideshowActive) {
      intervalId = setInterval(() => {
        const currentIndex = items.findIndex(
          (items) => items.id === currentImage.id
        );
        const nextIndex = (currentIndex + cnt++) % items.length;
        cnt %= items.length;
        setCurrentImage(items[nextIndex]);
        setSelectedImageIndex(nextIndex);
      }, 3000);
    }

    return () => {
      clearInterval(intervalId);
    };
  }, [slideshowActive]);

  useEffect(() => {
    const container = containerRef.current;
    const selectedThumbnail = container.querySelector(".slide.selected");
    if (selectedThumbnail) {
      const containerRect = container.getBoundingClientRect();
      const thumbnailRect = selectedThumbnail.getBoundingClientRect();
      const scrollOffset =
        thumbnailRect.left -
        containerRect.left -
        containerRect.width / 2 +
        thumbnailRect.width / 2;
      container.scrollTo({
        left: container.scrollLeft + scrollOffset,
        behavior: "smooth",
      });
    }
  }, [selectedImageIndex]);

  const handleThumbnailClick = (index) => {
    setCurrentImage(items[index]);
    setSelectedImageIndex(index);
    setSlideshowActive(false);
  };

  return (
    <div className="catalog-container">
      <div className="catalog-viewer">
        <div className="viewer-image">
          <img className="v-image" src={currentImage.imageurl} alt=""></img>
        </div>
        <div className="thumbnail-container ">
          <div className="arrow prev" onClick={handlePrevious}>
            &#10094;
          </div>
          <div className="container" ref={containerRef}>
            {items.map((item, index) => (
              <div
                key={item.id}
                className={`slide ${
                  index === selectedImageIndex ? "selected" : ""
                }`}
                onClick={() => handleThumbnailClick(index)}
              >
                <img src={item.imageurl} alt={item.id} />
              </div>
            ))}
          </div>
          <div className="arrow next" onClick={handleNext}>
            &#10095;
          </div>
        </div>
      </div>
      <div className="viewer-details">
        <div className="details">
          <h1>{currentImage.title}</h1>
          <p>{currentImage.detail}</p>
        </div>
        <div className="viewer-btn">
          <span onClick={handlePrevious}>
            <i className="bi bi-skip-start-fill"></i>
          </span>
          <span onClick={handleSlideshowToggle}>
            <i
              className={slideshowActive ? "bi-pause-fill" : "bi-play-fill"}
            ></i>
          </span>
          <span onClick={handleNext}>
            <i className="bi bi-skip-end-fill"></i>
          </span>
        </div>
      </div>
    </div>
  );
};
export default CatalogViewer;
