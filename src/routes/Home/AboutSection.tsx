import Button from '../../components/Button/Button';

const AboutSection = () => {
  return (
    <section className="px-4 py-12 md:px-8 md:py-16 lg:p-16">
      <div className="flex flex-col gap-4 xl:items-end">
        <div className="flex flex-col gap-4">
          <span className="font-body text-body font-bold text-highlight-0">
            Now,
          </span>
          <h2 className="font-title text-h2-major-third text-text-0 md:text-h2-perfect-fourth 2xl:text-h2-augmented-fourth">
            Get to know me a little.
          </h2>
        </div>
        <div className="flex flex-col gap-3 xl:items-end">
          <p className="w-fit font-body text-body text-text-0 xl:w-1/2 xl:text-right">
            <span className="font-title text-h1-major-second">H</span>i, I'm
            Willyan, a Web Developer and student at Alpha Edtech. I'm seeking my
            first big opportunity to showcase my potential.
          </p>
          <Button content="know more" />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
