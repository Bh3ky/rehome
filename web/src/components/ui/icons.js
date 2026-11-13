const base = {
  width: 20,
  height: 20,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": true,
};

export const ArrowRight = (props) => (
  <svg {...base} {...props}>
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);

export const ChevronDown = (props) => (
  <svg {...base} {...props}>
    <path d="m6 9 6 6 6-6" />
  </svg>
);

export const MapPin = (props) => (
  <svg {...base} {...props}>
    <path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 0 1 16 0Z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

export const Play = (props) => (
  <svg {...base} {...props}>
    <path d="M7 5v14l12-7Z" />
  </svg>
);

export const Pause = (props) => (
  <svg {...base} {...props}>
    <path d="M8 5v14M16 5v14" />
  </svg>
);

export const Volume = (props) => (
  <svg {...base} {...props}>
    <path d="M4 9v6h4l5 4V5L8 9Z" />
    <path d="M16 9a4 4 0 0 1 0 6M18.5 6.5a8 8 0 0 1 0 11" />
  </svg>
);

export const VolumeOff = (props) => (
  <svg {...base} {...props}>
    <path d="M4 9v6h4l5 4V5L8 9Z" />
    <path d="m17 9 5 6M22 9l-5 6" />
  </svg>
);

export const Plus = (props) => (
  <svg {...base} {...props}>
    <path d="M12 4v16M4 12h16" />
  </svg>
);

export const Mail = (props) => (
  <svg {...base} {...props}>
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="m3 7 9 6 9-6" />
  </svg>
);

export const Phone = (props) => (
  <svg {...base} {...props}>
    <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2Z" />
  </svg>
);

export const Chat = (props) => (
  <svg {...base} {...props}>
    <path d="M4 5h16v11H9l-5 4V5Z" />
    <path d="M8 9h8M8 12h5" />
  </svg>
);

export const ArrowUpRight = (props) => (
  <svg {...base} {...props}>
    <path d="M7 17 17 7M8 7h9v9" />
  </svg>
);

export const Menu = (props) => (
  <svg {...base} {...props}>
    <path d="M4 7h16M4 12h16M4 17h16" />
  </svg>
);

export const Close = (props) => (
  <svg {...base} {...props}>
    <path d="M6 6l12 12M18 6 6 18" />
  </svg>
);
