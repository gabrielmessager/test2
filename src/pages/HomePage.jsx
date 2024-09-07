import { Header } from "../components/Header";
import { ProductsList } from "../components/ProductsList";
import { Banner } from "../components/Banner";
import Banner2Img from "../assets/banner-2.jpg";
import Banner1Img from "../assets/banner-1.jpg";

const HomePage = () => {
  return (
    <>
      <Header />
      <ProductsList title="Products we are proud of" />
      <Banner
        imageSrc={Banner1Img}
        description="RAOUF Products are all made to standard sizes so that you can mix and match them freely."
        title="Creative harmonious living"
        ctaTitle="Shop Now"
      />
      <ProductsList title="Trending Now" />
      <Banner
        imageSrc={Banner2Img}
        description="RAOUF Products are all made to standard sizes so that you can mix and match them freely."
        title="Comfortable & Elegant Living"
        ctaTitle="Shop Now"
        showImageFirst
      />
    </>
  );
};

export default HomePage;
