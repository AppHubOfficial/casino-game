import * as React from "react"
function PokerTable(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlSpace="preserve"
      width={1920}
      height={1080}
      viewBox="0 0 1920 1080"
      style={{ transform: 'scale: 0.3' }}
      {...props}
    >
      <defs>
        <filter
          id="a"
          width={1.0628284}
          height={1.12827}
          x={-0.031414189}
          y={-0.064134979}
          colorInterpolationFilters="sRGB"
        >
          <feGaussianBlur stdDeviation={11.2224} />
        </filter>
        <filter
          id="b"
          width={1.0524736}
          height={1.1058144}
          x={-0.026236815}
          y={-0.052907161}
          colorInterpolationFilters="sRGB"
        >
          <feGaussianBlur stdDeviation={9.3036289} />
        </filter>
      </defs>
      <g fillOpacity={1} strokeDasharray="none">
        <rect
          width={1811.5035}
          height={944.24377}
          x={57.086815}
          y={58.612019}
          fill="#01681f"
          stroke="#000"
          strokeWidth={84.8517}
          ry={472.12189}
        />
        <path
          fill="none"
          stroke="#ccc"
          strokeWidth={15.6513}
          d="M599.23 271.771c-154.635 0-279.79 121.216-279.79 270.985 0 149.77 125.155 270.988 279.79 270.988h546.908c154.635 0 279.789-121.218 279.789-270.988s-125.154-270.985-279.79-270.985z"
          color="#000"
          filter="url(#a)"
          style={{
            mixBlendMode: "normal"
          }}
          transform="matrix(1.63538 0 0 1.7461 -465.559 -413.845)"
        />
        <rect
          width={1674.1765}
          height={794.78632}
          x={134.09271}
          y={132.34186}
          fill="none"
          stroke="#983a2d"
          strokeOpacity={1}
          strokeWidth={74.8385}
          ry={397.39316}
        />
        <path
          fill="none"
          stroke="#ccc"
          strokeWidth={13.404}
          d="M599.23 271.771c-154.635 0-279.79 121.216-279.79 270.985 0 149.77 125.166 269.094 279.79 270.988l548.533 6.717c154.624 1.893 278.164-127.935 278.164-277.705s-125.154-270.985-279.79-270.985z"
          color="#000"
          filter="url(#b)"
          style={{
            mixBlendMode: "normal"
          }}
          transform="matrix(1.52433 0 0 1.47529 -359.778 -273.483)"
        />
      </g>
    </svg>
  )
}
export default PokerTable
