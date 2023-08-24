

export default function TotalCostIcon () {
    let radiusSmallCircle = 20;
  let circumferenceSmallCircle = Math.PI * 2 * radiusSmallCircle;
  const smallCircleOffset = ((100 - 55) / 100) * circumferenceSmallCircle;
  

    return (
        <div>
        <svg
          style={{
            transform: "rotate(130deg)",
          }}
          width={80}
          height={80}
          viewBox={`0 0 60 60`}
        >
          <circle
            cx={30}
            cy={30}
            r={radiusSmallCircle - 3}
            fill="#48CAA3"
            stroke="#0BB885"
            strokeWidth="3px"
          ></circle>
          <circle
            cx={30}
            cy={30}
            r={radiusSmallCircle}
            fill="transparent"
            stroke="#0BB885"
            strokeWidth="3px"
          ></circle>
    
          <circle
            cx={30}
            cy={30}
            r={radiusSmallCircle}
            fill="transparent"
            stroke="#FFFFFF"
            strokeDasharray={circumferenceSmallCircle}
            strokeDashoffset={smallCircleOffset}
            strokeWidth="3px"
            strokeLinecap="round"
          ></circle>
        </svg>
      </div>
    )
}