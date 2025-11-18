import React from 'react';
import Header from '../components/Header';
import PageWrapper from '../components/PageWrapper';
import placeholderImg from '../assets/placeholder.jpg';
import MessageButton from "../components/MessageButton";

const Home = () => {
  return (
    <PageWrapper>
      <Header title="New Log-Entry" />
      
      <main>
        {/* H2 subtitle */}
        <h2 className="font-heading text-h2 text-primaryText mb-4 md:text-h2-md lg:text-h2-lg">
          Pelcran Tales log-entries are coming soon!
        </h2>

        {/* Image floated on medium+ screens */}
        <img
          src={placeholderImg}
          alt="Placeholder"
          className="w-full md:w-64 md:float-left md:mr-6 mb-4 rounded-lg shadow-md"
        />

        {/* Page content */}
        <p className="font-body text-body text-bodyText mb-4">
          Sed eros nisl, accumsan nec arcu a, sodales finibus odio. Nunc congue neque in pulvinar volutpat. Duis lacus justo, malesuada eu justo vestibulum, tincidunt tempus lorem. Curabitur fringilla pellentesque est, a hendrerit turpis pretium quis. Aenean eu metus ullamcorper, auctor tellus quis, lacinia enim. Suspendisse nec lectus aliquam, commodo nisi vel, feugiat nulla. Praesent velit turpis, sollicitudin id quam id, tempor ullamcorper dolor. Nullam leo est, placerat finibus porta sed, blandit id nulla. Suspendisse malesuada, metus vitae dignissim consequat, ante sapien porta massa, quis laoreet leo quam vitae diam. Curabitur sed rhoncus massa. Vivamus vel lectus lorem. Vestibulum leo dolor, tempor ac nunc quis, mollis pellentesque leo. Quisque mattis leo justo, vitae fermentum diam tempor at. Integer ut pharetra arcu.
        </p>

        <p className="font-body text-body text-bodyText">
          Donec eget efficitur quam. Maecenas eu sollicitudin lorem. In nec fermentum justo, non bibendum lacus. Nam at pretium sem, non congue lacus. Sed ullamcorper, nibh vitae semper elementum, massa mi tristique turpis, a eleifend mauris ante sed tellus. In feugiat ligula at est tempor, tempor accumsan nisi elementum. Integer ullamcorper porttitor nisi sed laoreet. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Duis pellentesque velit vel nisl tincidunt interdum. Fusce vel magna quam. Nam id consectetur sem. Nulla vitae mi at sem semper ornare. Curabitur eget mollis massa. Suspendisse porttitor, dolor sed semper tincidunt, ligula diam vehicula velit, ac posuere eros velit eu arcu. Ut arcu lorem, bibendum eu est quis, accumsan consectetur mi.
        </p>

        {/* Clear float so anything below starts full width */}
        <div className="clear-both" />
      </main>

      {/* Fixed MessageButton */}
      <div className="fixed bottom-[93px] right-[21px] z-50">
        <MessageButton />
      </div>
    </PageWrapper>
  );
};

export default Home;



