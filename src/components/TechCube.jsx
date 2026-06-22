import { SiReact, SiNodedotjs, SiPython, SiMysql, SiLaravel, SiPostgresql } from 'react-icons/si';
import './TechCube.css';

const faces = [
  { icon:<SiPython />,     label:'Python',     color:'#3776ab', cls:'front'  },
  { icon:<SiNodedotjs />,  label:'Node.js',    color:'#339933', cls:'back'   },
  { icon:<SiReact />,      label:'ReactJS',    color:'#61dafb', cls:'right'  },
  { icon:<SiLaravel />,    label:'Laravel',    color:'#ff2d20', cls:'left'   },
  { icon:<SiPostgresql />, label:'PostgreSQL', color:'#336791', cls:'top'    },
  { icon:<SiMysql />,      label:'MySQL',      color:'#00758f', cls:'bottom' },
];

export default function TechCube() {
  return (
    <div className="cube-scene">
      <div className="cube">
        {faces.map(f => (
          <div key={f.cls} className={`cube-face face-${f.cls}`}>
            <span style={{ color:f.color, fontSize:'2.6rem' }}>{f.icon}</span>
            <span className="face-label" style={{ color:f.color }}>{f.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
