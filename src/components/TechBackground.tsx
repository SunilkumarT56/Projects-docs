import React from 'react';
import { 
  SiApachekafka, SiExpress, SiNodedotjs, SiAmazon, SiAmazons3, 
  SiElastic, SiNginx, SiDocker, SiPostgresql, SiMongodb, 
  SiSpring, SiDjango, SiNestjs
} from 'react-icons/si';

// For items without specific icons in the main simple icons set, or needing custom text representation
const TechItem: React.FC<{ 
  icon?: React.ReactNode; 
  text: string; 
  top: string; 
  left: string; 
  rotate: string; 
  size: string 
}> = ({ icon, text, top, left, rotate, size }) => (
  <div style={{
    position: 'absolute',
    top,
    left,
    transform: `rotate(${rotate})`,
    opacity: 0.06, // Reduced opacity as requested (was 0.12)
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'var(--text-primary)',
    fontSize: size,
    whiteSpace: 'nowrap',
    fontWeight: 'bold',
    zIndex: 0,
    pointerEvents: 'none'
  }}>
    {icon && <div style={{ marginBottom: '5px' }}>{icon}</div>}
    <span style={{ fontSize: '0.4em', letterSpacing: '0.1em' }}>{text}</span>
  </div>
);

export const TechBackground: React.FC = () => {
  // Static scattered positions to avoid hydration mismatches or re-renders jumping
  // We distribute them roughly across the screen
  return (
    <div style={{
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      overflow: 'hidden',
      pointerEvents: 'none',
      zIndex: 0
    }}>
      {/* Top Left Area */}
      <TechItem icon={<SiApachekafka />} text="KAFKA" top="10%" left="5%" rotate="-15deg" size="4rem" />
      <TechItem icon={<SiExpress />} text="EXPRESS" top="15%" left="25%" rotate="10deg" size="3rem" />
      <TechItem icon={<SiNodedotjs />} text="NODE.JS" top="5%" left="45%" rotate="-5deg" size="5rem" />
      <TechItem text="PUB/SUB" top="20%" left="15%" rotate="5deg" size="2.5rem" />

      {/* Top Right Area */}
      <TechItem icon={<SiAmazon />} text="AWS" top="8%" left="75%" rotate="15deg" size="6rem" />
      <TechItem icon={<SiAmazons3 />} text="S3" top="18%" left="85%" rotate="-10deg" size="3rem" />
      <TechItem text="AWS SQS" top="25%" left="65%" rotate="5deg" size="2.5rem" />
      <TechItem text="AWS SNS" top="12%" left="60%" rotate="-5deg" size="2.5rem" />

      {/* Middle Left Area */}
      <TechItem icon={<SiNginx />} text="NGINX" top="40%" left="8%" rotate="-20deg" size="4.5rem" />
      <TechItem icon={<SiDocker />} text="DOCKER" top="45%" left="22%" rotate="15deg" size="5rem" />
      <TechItem text="EC2" top="35%" left="35%" rotate="-10deg" size="3rem" />
      <TechItem text="LAMBDA" top="50%" left="5%" rotate="20deg" size="2.5rem" />

      {/* Middle Right Area */}
      <TechItem icon={<SiPostgresql />} text="POSTGRES" top="42%" left="70%" rotate="-15deg" size="4rem" />
      <TechItem icon={<SiMongodb />} text="MONGODB" top="50%" left="85%" rotate="10deg" size="4rem" />
      <TechItem text="ELB" top="35%" left="80%" rotate="5deg" size="3rem" />
      <TechItem icon={<SiElastic />} text="ELASTIC" top="55%" left="60%" rotate="-5deg" size="3.5rem" />

      {/* Bottom Left Area */}
      <TechItem icon={<SiSpring />} text="SPRING" top="70%" left="10%" rotate="15deg" size="4rem" />
      <TechItem icon={<SiNestjs />} text="NESTJS" top="80%" left="25%" rotate="-10deg" size="4.5rem" />
      <TechItem text="MOTIA" top="75%" left="35%" rotate="5deg" size="3rem" />
      <TechItem text="WEBSOCKETS" top="85%" left="5%" rotate="-15deg" size="2.5rem" />

      {/* Bottom Right Area */}
      <TechItem icon={<SiDjango />} text="DJANGO" top="72%" left="75%" rotate="-20deg" size="4rem" />
      <TechItem text="WEBHOOKS" top="80%" left="60%" rotate="10deg" size="3rem" />
      <TechItem text="ELASTIC SEARCH" top="85%" left="80%" rotate="-5deg" size="2.5rem" />
    </div>
  );
};
