import Button from '../../components/Button/Button';
import websiteIllustration from '../../assets/images/website.svg';

const MainSection = () => {
  return (
    <section className="col-span-full flex gap-6 px-4 py-12 md:px-8 md:py-16 lg:p-16">
      <div className="flex flex-1 flex-col gap-6">
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-4">
            <span className="font-body text-body font-bold text-highlight-0">
              Hey,
            </span>
            <h1 className="font-title text-h1-major-third text-text-0 md:text-h1-perfect-fourth 2xl:text-h1-augmented-fourth">
              I'm <span className="text-primary-0">Willyan N. Pereira</span>,
              your favorite problem solver.
            </h1>
          </div>
          <p className="w-fit font-body text-body text-text-0">
            <span className="font-title text-h1-major-second">M</span>y journey
            of constant learning and dedication translates into reliable web
            solutions that provide a smooth experience.
          </p>
        </div>
        <div className="flex gap-2">
          <Button content="talk to me" />
          <Button content="download cv" />
        </div>
      </div>
      <div className="hidden flex-1 object-contain lg:flex">
        <img src={websiteIllustration} className="object-fill" />
      </div>
    </section>
  );
};

export default MainSection;
