import GaugeComponent from 'react-gauge-component';

const Gauge = () => {
  return (
    <GaugeComponent
      type="grafana"
      arc={{
        subArcs: [
          {
            limit: -10,
            color: '#EA4228',
            // showTick: true,
            tooltip: {
              text: 'Team 1 wins!'
            }
          },
          {
            limit: 10,
            color: '#F5CD19',
            // showTick: true,
            tooltip: {
              text: 'Draw'
            }
          },
          {
            limit: 100,
            color: '#5BE12C',
            // showTick: true,
            tooltip: {
              text: 'Team 2 wins!'
            }
          }
        ]
      }}
      labels={{
        valueLabel: { formatTextValue: (value) => value + '%' }
      }}
      pointer={{ type: 'blob', animationDelay: 0, elastic: true }}
      value={19}
      minValue={-100}
      maxValue={100}
    />
  );
};

export default Gauge;
