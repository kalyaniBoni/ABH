// SVG Logo Components for ABH - Aravind Bulk Harvest

export const ABHLogo1 = ({ width = 200, height = 80 }) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 200 80"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Wheat stalks background */}
    <g opacity="0.1">
      <path
        d="M20 60 Q25 40 30 60"
        stroke="#228B22"
        strokeWidth="2"
        fill="none"
      />
      <path
        d="M25 60 Q30 40 35 60"
        stroke="#228B22"
        strokeWidth="2"
        fill="none"
      />
      <path
        d="M30 60 Q35 40 40 60"
        stroke="#228B22"
        strokeWidth="2"
        fill="none"
      />
    </g>

    {/* Main text ABH */}
    <text
      x="60"
      y="35"
      fontSize="28"
      fontWeight="bold"
      fill="#228B22"
      fontFamily="Arial, sans-serif"
    >
      ABH
    </text>

    {/* Subtitle */}
    <text
      x="60"
      y="55"
      fontSize="12"
      fill="#8B4513"
      fontFamily="Arial, sans-serif"
    >
      ARAVIND BULK HARVEST
    </text>

    {/* Accent line */}
    <line x1="60" y1="40" x2="140" y2="40" stroke="#FFD700" strokeWidth="2" />
  </svg>
);

export const ABHLogo2 = ({ width = 180, height = 120 }) => (
  <svg
    width={width}
    height={120}
    viewBox="0 0 180 120"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Circular background */}
    <circle cx="90" cy="60" r="50" fill="#228B22" opacity="0.1" />

    {/* Grain pattern */}
    <g fill="#FFD700" opacity="0.3">
      <circle cx="75" cy="45" r="3" />
      <circle cx="85" cy="48" r="3" />
      <circle cx="95" cy="45" r="3" />
      <circle cx="105" cy="48" r="3" />
      <circle cx="80" cy="55" r="3" />
      <circle cx="90" cy="58" r="3" />
      <circle cx="100" cy="55" r="3" />
      <circle cx="85" cy="65" r="3" />
      <circle cx="95" cy="68" r="3" />
    </g>

    {/* Main text */}
    <text
      x="90"
      y="35"
      fontSize="24"
      fontWeight="bold"
      fill="#228B22"
      textAnchor="middle"
      fontFamily="Arial, sans-serif"
    >
      ABH
    </text>
    <text
      x="90"
      y="95"
      fontSize="10"
      fill="#8B4513"
      textAnchor="middle"
      fontFamily="Arial, sans-serif"
    >
      ARAVIND BULK HARVEST
    </text>
  </svg>
);

export const ABHLogo3 = ({ width = 200, height = 60 }) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 200 60"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Modern geometric design */}
    <g fill="#228B22">
      <polygon points="10,40 20,20 30,40 25,45 15,45" />
      <polygon points="35,40 45,20 55,40 50,45 40,45" />
      <polygon points="60,40 70,20 80,40 75,45 65,45" />
    </g>

    {/* Company name */}
    <text
      x="90"
      y="25"
      fontSize="18"
      fontWeight="bold"
      fill="#228B22"
      fontFamily="Arial, sans-serif"
    >
      ARAVIND
    </text>
    <text
      x="90"
      y="45"
      fontSize="14"
      fill="#8B4513"
      fontFamily="Arial, sans-serif"
    >
      BULK HARVEST
    </text>

    {/* ABH accent */}
    <text
      x="170"
      y="35"
      fontSize="16"
      fontWeight="bold"
      fill="#FFD700"
      fontFamily="Arial, sans-serif"
    >
      ABH
    </text>
  </svg>
);

export const ABHLogo4 = ({ width = 150, height = 150 }) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 150 150"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Shield/Badge design */}
    <path
      d="M75 10 L120 30 L120 90 Q120 120 75 140 Q30 120 30 90 L30 30 Z"
      fill="#228B22"
      opacity="0.1"
      stroke="#228B22"
      strokeWidth="2"
    />

    {/* Central design */}
    <circle
      cx="75"
      cy="60"
      r="25"
      fill="none"
      stroke="#FFD700"
      strokeWidth="3"
    />

    {/* ABH in center */}
    <text
      x="75"
      y="50"
      fontSize="16"
      fontWeight="bold"
      fill="#228B22"
      textAnchor="middle"
      fontFamily="Arial, sans-serif"
    >
      ABH
    </text>

    {/* Company name around circle */}
    <text
      x="75"
      y="100"
      fontSize="8"
      fill="#8B4513"
      textAnchor="middle"
      fontFamily="Arial, sans-serif"
    >
      ARAVIND BULK HARVEST
    </text>
    <text
      x="75"
      y="115"
      fontSize="6"
      fill="#8B4513"
      textAnchor="middle"
      fontFamily="Arial, sans-serif"
    >
      QUALITY • TRUST • DELIVERY
    </text>
  </svg>
);

export const ABHLogo5 = ({ width = 220, height = 80 }) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 220 80"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Truck silhouette */}
    <g fill="#228B22" opacity="0.2">
      <rect x="10" y="45" width="30" height="15" rx="2" />
      <rect x="35" y="35" width="25" height="25" rx="2" />
      <circle cx="20" cy="65" r="5" />
      <circle cx="50" cy="65" r="5" />
    </g>

    {/* Upward arrow */}
    <path
      d="M70 50 L80 30 L90 50"
      stroke="#FFD700"
      strokeWidth="3"
      fill="none"
    />
    <line x1="80" y1="30" x2="80" y2="55" stroke="#FFD700" strokeWidth="3" />

    {/* Text */}
    <text
      x="100"
      y="35"
      fontSize="22"
      fontWeight="bold"
      fill="#228B22"
      fontFamily="Arial, sans-serif"
    >
      ABH
    </text>
    <text
      x="100"
      y="55"
      fontSize="10"
      fill="#8B4513"
      fontFamily="Arial, sans-serif"
    >
      ARAVIND BULK HARVEST
    </text>
    <text
      x="100"
      y="68"
      fontSize="8"
      fill="#666"
      fontFamily="Arial, sans-serif"
    >
      Premium Agricultural Products
    </text>
  </svg>
);
