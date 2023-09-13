import React, { useRef, useState } from 'react';
import '../Works/Works.css';
import { motion as m } from 'framer-motion';
import javaSwing from '../../assets/javaSwing.png';

const cards = [1, 2, 3, 4];

const projectInfo = {
  title: 'E- STORE SIMULATION',
  info: ' ',
  id: '1',
};

const Works = () => {
  const [selectedId, setSelectedId] = useState(null);

  const containerRefs = useRef(new Array());
  const handlePanEnd = (e, info, card) => {
    if (selectedId) {
      if (Math.abs(info.offset.x) < 5) {
        const styles = getComputedStyle(containerRefs.current[card]);
        const timeout = styles.transform.split(',')[4] * -0.6;

        setTimeout(() => {
          setSelectedId(null);
        }, timeout);
      }
    } else {
      setSelectedId(card);
    }
  };
  return (
    <section className="Works">
      <div style={{ textAlign: 'center' }}>
        {' '}
        <span className="works-title">My Works </span>
      </div>

      <div className="layout-cards">
        {cards.map((card, i) => (
          <m.div
            className={selectedId === card ? 'opened-card' : 'card'}
            key={i}
            layout
            drag={selectedId === card ? 'x' : false}
            dragConstraints={{
              left: 0,
              right: 0,
            }}
            dragElastic={0.2}
            onPanEnd={(e, info) => handlePanEnd(e, info, card)}
            ref={(el) => (containerRefs.current[card] = el)}
          >
            {projectInfo.id == card && card !== selectedId && (
              <div className="temp">
                <h1 className="infoTitle">{projectInfo.title}</h1>
                {/* <img src={javaSwing} className="logoWork" alt="" /> */}
              </div>
            )}
            {selectedId === card && (
              <>
                <div className="divC" id={projectInfo.id}></div>
              </>
            )}
          </m.div>
        ))}
      </div>
    </section>
  );
};

export default Works;
