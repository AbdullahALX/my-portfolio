import React, { useState } from 'react';
import '../WorksCard/WorksCards.css';
import { motion as m } from 'framer-motion';

const WorksCards = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <m.section className="WorksSection">
      <span className="worksTitle">My Works</span>

      <m.div
        className="Cards"
        onClick={() => {
          setIsOpen(!isOpen);
        }}
        transition={{
          opacity: { ease: 'linear' },
          layout: { duration: 0.3 },
        }}
      >
        <m.h2 className="cardTitle" layout>
          {' '}
          Project one
        </m.h2>

        {isOpen && (
          <m.div className="workDescription" layout>
            <m.p layout>
              GUI application that allows the user to add in stock items to a
              shopping cart The application has special way of searching by
              taking item's id and provide the details for the user provides
              details for each item such as Name, Quantity and, Price Throw an
              error Message if the item is not available Calculate the total all
              costs (including tax), produces an invoice, and append a
              transaction log file
            </m.p>
          </m.div>
        )}
      </m.div>
    </m.section>
  );
};

export default WorksCards;
