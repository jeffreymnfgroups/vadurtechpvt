const trustItems = [
  {
    text: "SSM Registered",
    icon: (
      <svg width="16" height="16" viewBox="0 0 16 16" stroke="currentColor" strokeWidth="1.2" fill="none">
        <path d="M8 2L3 4.5V8.5C3 11.5 8 14 8 14C8 14 13 11.5 13 8.5V4.5L8 2Z" />
        <path d="M5.5 8.5L7 10L10.5 6.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    text: "Google Partner",
    icon: (
      <svg width="16" height="16" viewBox="0 0 16 16" stroke="currentColor" strokeWidth="1.2" fill="none">
        <circle cx="8" cy="8" r="6" />
        <path d="M11 8H8.5V9.5H10C9.7 10.3 9 10.8 8 10.8C6.7 10.8 5.7 9.8 5.7 8.5C5.7 7.2 6.7 6.2 8 6.2C8.6 6.2 9.1 6.4 9.5 6.8L10.5 5.8C9.8 5.2 9 4.8 8 4.8C5.9 4.8 4.2 6.5 4.2 8.5C4.2 10.5 5.9 12.2 8 12.2C10 12.2 11.5 10.7 11.5 8.7C11.5 8.4 11.4 8.2 11 8Z" />
      </svg>
    ),
  },
  {
    text: "200+ Websites Built",
    icon: (
      <svg width="16" height="16" viewBox="0 0 16 16" stroke="currentColor" strokeWidth="1.2" fill="none">
        <rect x="2" y="2" width="12" height="9" rx="1.5" />
        <line x1="5" y1="13" x2="11" y2="13" />
        <line x1="8" y1="11" x2="8" y2="13" />
        <circle cx="8" cy="6.5" r="2" />
        <line x1="6" y1="6.5" x2="10" y2="6.5" />
        <path d="M7 4.5C7 4.5 7.5 5 8 6.5C8.5 8 9 8.5 9 8.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    text: "Malaysia-Based Team",
    icon: (
      <svg width="16" height="16" viewBox="0 0 16 16" stroke="currentColor" strokeWidth="1.2" fill="none">
        <path d="M8 2C5.8 2 4 3.8 4 6C4 9.3 8 14 8 14C8 14 12 9.3 12 6C12 3.8 10.2 2 8 2Z" />
        <circle cx="8" cy="6" r="1.5" />
      </svg>
    ),
  },
  {
    text: "Delivery in 14 Days",
    icon: (
      <svg width="16" height="16" viewBox="0 0 16 16" stroke="currentColor" strokeWidth="1.2" fill="none">
        <circle cx="8" cy="8" r="6" />
        <line x1="8" y1="5" x2="8" y2="8" />
        <line x1="8" y1="8" x2="10.5" y2="9.5" />
      </svg>
    ),
  },
  {
    text: "5-Star Rated",
    icon: (
      <svg width="16" height="16" viewBox="0 0 16 16" stroke="currentColor" strokeWidth="1.2" fill="none">
        <path d="M8 2L9.5 5.5L13 6L10.5 8.5L11 12L8 10.2L5 12L5.5 8.5L3 6L6.5 5.5Z" />
      </svg>
    ),
  }
];

export default function TrustBar() {
  return (
    <div className="bg-white/5 backdrop-blur-sm border-y border-white/10 py-4 overflow-hidden">
      <div className="flex">
        <div className="animate-marquee flex gap-16 whitespace-nowrap">
          {trustItems.map((item, i) => (
            <div key={`t1-${i}`} className="flex items-center gap-2 text-sm" style={{ color: 'hsl(240,4%,66%)' }}>
              {item.icon}
              <span>{item.text}</span>
            </div>
          ))}
          {trustItems.map((item, i) => (
            <div key={`t2-${i}`} className="flex items-center gap-2 text-sm" style={{ color: 'hsl(240,4%,66%)' }}>
              {item.icon}
              <span>{item.text}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}