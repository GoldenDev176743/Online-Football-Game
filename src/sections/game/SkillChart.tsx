import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer, Tooltip, Legend } from 'recharts';

const SkillChart = () => {
  const data = [
    { value: 'shots', Team_1: 10, Team_2: 15 },
    { value: 'crosses', Team_1: 20, Team_2: 7 },
    { value: 'outs', Team_1: 12, Team_2: 22 },
    { value: 'saves', Team_1: 25, Team_2: 6 },
    { value: 'corners', Team_1: 8, Team_2: 18 },
    { value: 'passes', Team_1: 14, Team_2: 28 }
  ];

  return (
    <div style={{ height: 300 }}>
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
          <PolarGrid stroke="#696b69" />
          <PolarAngleAxis
            dataKey="value"
            style={{
              textTransform: 'uppercase',
              fontFamily: 'Montserrat',
              fontSize: '15px',
              fontWeight: '600'
            }}
          />
          <Radar dataKey="Team_1" activeDot={{ stroke: '#ED0423' }} stroke="#ED0423" strokeWidth={4} fill="#ED0423" fillOpacity={0.1} />
          <Radar dataKey="Team_2" activeDot={{ stroke: '#11f219' }} stroke="#11f219" strokeWidth={4} fill="#11f219" fillOpacity={0.1} />
          <Tooltip
            cursor={false}
            contentStyle={{
              borderRadius: '8px',
              fontFamily: 'inherit',
              fontWeight: '500',
              background: '#3e4040',
              color: 'white',
              textTransform: 'uppercase'
            }}
          />
          <Legend verticalAlign="bottom" align="center" iconType="circle" iconSize={10} />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default SkillChart;
