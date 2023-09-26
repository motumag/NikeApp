import {
  CustomerReviews,
  Hero,
  Fotter,
  PopularProducts,
  Services,
  SpecialOffers,
  Subscribe,
  SupperQuality,
} from "./sections";
import Nav from "./components/Nav";
const App = () => (
  <main className="relative">
    <Nav />
    <section className="xl:padding-1 wide:padding-r padding-b">
      <CustomerReviews />
    </section>
    <section className="padding">
      <PopularProducts />
    </section>
    <section className="padding">
      <SupperQuality />
    </section>
    <section className="padding-x py-10">
      <Services />
    </section>
    <section className="padding">
      <SpecialOffers />
    </section>
    <section className="bg-pale-blue padding">
      <CustomerReviews />
    </section>
    <section className="padding-x sm:py-32 py-16 w-full">
      <Subscribe />
    </section>
    <section className=" bg-black padding-x padding-t pb-8">
      <Fotter />
    </section>
    <section className=" bg-black padding-x padding-t pb-8">
      <Hero />
    </section>
  </main>
);
export default App;
