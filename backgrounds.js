// Dopamine-decor floral SVG backgrounds
const backgrounds = [
    // Background 1: Pink & Yellow Flowers
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid slice">
        <rect fill="#FFF5E1" width="1920" height="1080"/>
        <circle cx="200" cy="150" r="80" fill="#FFB6C1" opacity="0.8"/>
        <circle cx="200" cy="150" r="50" fill="#FFC0CB"/>
        <circle cx="180" cy="130" r="15" fill="#FF69B4"/>
        <circle cx="220" cy="130" r="15" fill="#FF69B4"/>
        <circle cx="180" cy="170" r="15" fill="#FF69B4"/>
        <circle cx="220" cy="170" r="15" fill="#FF69B4"/>
        <circle cx="200" cy="110" r="15" fill="#FF69B4"/>

        <circle cx="1700" cy="900" r="100" fill="#FFD700" opacity="0.7"/>
        <circle cx="1700" cy="900" r="65" fill="#FFA500"/>
        <circle cx="1670" cy="860" r="20" fill="#FF8C00"/>
        <circle cx="1730" cy="860" r="20" fill="#FF8C00"/>
        <circle cx="1670" cy="940" r="20" fill="#FF8C00"/>
        <circle cx="1730" cy="940" r="20" fill="#FF8C00"/>

        <ellipse cx="1600" cy="200" rx="60" ry="100" fill="#DDA0DD" opacity="0.6"/>
        <ellipse cx="1600" cy="200" rx="30" ry="60" fill="#DA70D6"/>

        <path d="M 400 800 Q 420 750 440 800 Q 460 850 440 900 Q 420 950 400 900 Q 380 850 400 800" fill="#98FB98" opacity="0.7"/>
        <circle cx="420" cy="825" r="30" fill="#90EE90"/>

        <ellipse cx="800" cy="100" rx="70" ry="40" fill="#FFB6C1" opacity="0.5" transform="rotate(-30 800 100)"/>
        <ellipse cx="850" cy="150" rx="70" ry="40" fill="#FFD700" opacity="0.5" transform="rotate(20 850 150)"/>

        <circle cx="300" cy="950" r="40" fill="#87CEEB" opacity="0.6"/>
        <circle cx="280" cy="930" r="15" fill="#4682B4"/>
        <circle cx="320" cy="930" r="15" fill="#4682B4"/>
        <circle cx="300" cy="970" r="15" fill="#4682B4"/>
    </svg>`,

    // Background 2: Coral & Mint
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid slice">
        <rect fill="#FFF9F0" width="1920" height="1080"/>
        <circle cx="1800" cy="200" r="90" fill="#FF7F50" opacity="0.7"/>
        <circle cx="1800" cy="200" r="55" fill="#FF6347"/>
        <circle cx="1770" cy="170" r="18" fill="#FF4500"/>
        <circle cx="1830" cy="170" r="18" fill="#FF4500"/>
        <circle cx="1770" cy="230" r="18" fill="#FF4500"/>
        <circle cx="1830" cy="230" r="18" fill="#FF4500"/>
        <circle cx="1800" cy="145" r="18" fill="#FF4500"/>

        <circle cx="150" cy="850" r="110" fill="#98D8C8" opacity="0.6"/>
        <circle cx="150" cy="850" r="70" fill="#7FFFD4"/>
        <circle cx="115" cy="810" r="22" fill="#40E0D0"/>
        <circle cx="185" cy="810" r="22" fill="#40E0D0"/>
        <circle cx="115" cy="890" r="22" fill="#40E0D0"/>
        <circle cx="185" cy="890" r="22" fill="#40E0D0"/>

        <path d="M 1000 950 L 1050 920 L 1100 950 L 1070 1000 L 1030 1000 Z" fill="#F0E68C" opacity="0.7"/>
        <circle cx="1065" cy="960" r="25" fill="#FFD700"/>

        <ellipse cx="600" cy="150" rx="80" ry="120" fill="#FFB6D9" opacity="0.6" transform="rotate(15 600 150)"/>
        <ellipse cx="600" cy="150" rx="45" ry="70" fill="#FF69B4"/>

        <circle cx="1400" cy="800" r="50" fill="#DDA0DD" opacity="0.65"/>
        <circle cx="1380" cy="775" r="18" fill="#BA55D3"/>
        <circle cx="1420" cy="775" r="18" fill="#BA55D3"/>
        <circle cx="1400" cy="820" r="18" fill="#BA55D3"/>
    </svg>`,

    // Background 3: Lavender & Peach
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid slice">
        <rect fill="#FFFAF5" width="1920" height="1080"/>
        <circle cx="250" cy="200" r="95" fill="#E6E6FA" opacity="0.75"/>
        <circle cx="250" cy="200" r="60" fill="#D8BFD8"/>
        <circle cx="215" cy="165" r="20" fill="#BA55D3"/>
        <circle cx="285" cy="165" r="20" fill="#BA55D3"/>
        <circle cx="215" cy="235" r="20" fill="#BA55D3"/>
        <circle cx="285" cy="235" r="20" fill="#BA55D3"/>
        <circle cx="250" cy="140" r="20" fill="#BA55D3"/>

        <circle cx="1650" cy="850" r="105" fill="#FFDAB9" opacity="0.7"/>
        <circle cx="1650" cy="850" r="68" fill="#FFB347"/>
        <circle cx="1610" cy="805" r="21" fill="#FF8C69"/>
        <circle cx="1690" cy="805" r="21" fill="#FF8C69"/>
        <circle cx="1610" cy="895" r="21" fill="#FF8C69"/>
        <circle cx="1690" cy="895" r="21" fill="#FF8C69"/>

        <ellipse cx="900" cy="950" rx="75" ry="110" fill="#FFE4E1" opacity="0.7" transform="rotate(-20 900 950)"/>
        <ellipse cx="900" cy="950" rx="40" ry="65" fill="#FFB6C1"/>

        <path d="M 1750 400 Q 1780 360 1810 400 Q 1840 440 1810 480 Q 1780 520 1750 480 Q 1720 440 1750 400" fill="#B0E0E6" opacity="0.6"/>
        <circle cx="1780" cy="430" r="35" fill="#87CEEB"/>

        <circle cx="500" cy="900" r="55" fill="#F0E68C" opacity="0.65"/>
        <circle cx="475" cy="875" r="19" fill="#FFD700"/>
        <circle cx="525" cy="875" r="19" fill="#FFD700"/>
        <circle cx="500" cy="925" r="19" fill="#FFD700"/>
    </svg>`,

    // Background 4: Sunny Yellow & Sky Blue
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid slice">
        <rect fill="#FFFEF0" width="1920" height="1080"/>
        <circle cx="1700" cy="250" r="115" fill="#FFEC8B" opacity="0.7"/>
        <circle cx="1700" cy="250" r="75" fill="#FFD700"/>
        <circle cx="1655" cy="200" r="24" fill="#FFA500"/>
        <circle cx="1745" cy="200" r="24" fill="#FFA500"/>
        <circle cx="1655" cy="300" r="24" fill="#FFA500"/>
        <circle cx="1745" cy="300" r="24" fill="#FFA500"/>
        <circle cx="1700" cy="175" r="24" fill="#FFA500"/>
        <circle cx="1700" cy="325" r="24" fill="#FFA500"/>

        <circle cx="180" cy="800" r="100" fill="#B0E0E6" opacity="0.65"/>
        <circle cx="180" cy="800" r="63" fill="#87CEEB"/>
        <circle cx="145" cy="760" r="20" fill="#4682B4"/>
        <circle cx="215" cy="760" r="20" fill="#4682B4"/>
        <circle cx="145" cy="840" r="20" fill="#4682B4"/>
        <circle cx="215" cy="840" r="20" fill="#4682B4"/>

        <ellipse cx="1200" cy="900" rx="85" ry="125" fill="#FFB6D9" opacity="0.6" transform="rotate(25 1200 900)"/>
        <ellipse cx="1200" cy="900" rx="48" ry="72" fill="#FF69B4"/>

        <circle cx="400" cy="150" r="58" fill="#98FB98" opacity="0.7"/>
        <circle cx="375" cy="125" r="17" fill="#3CB371"/>
        <circle cx="425" cy="125" r="17" fill="#3CB371"/>
        <circle cx="400" cy="175" r="17" fill="#3CB371"/>

        <path d="M 1500 600 L 1560 580 L 1600 630 L 1570 690 L 1510 680 Z" fill="#DDA0DD" opacity="0.6"/>
        <circle cx="1545" cy="635" r="32" fill="#DA70D6"/>
    </svg>`,

    // Background 5: Rose & Mint Green
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid slice">
        <rect fill="#FFFCF5" width="1920" height="1080"/>
        <circle cx="300" cy="250" r="105" fill="#FFB6C1" opacity="0.75"/>
        <circle cx="300" cy="250" r="68" fill="#FF69B4"/>
        <circle cx="260" cy="210" r="22" fill="#FF1493"/>
        <circle cx="340" cy="210" r="22" fill="#FF1493"/>
        <circle cx="260" cy="290" r="22" fill="#FF1493"/>
        <circle cx="340" cy="290" r="22" fill="#FF1493"/>
        <circle cx="300" cy="182" r="22" fill="#FF1493"/>

        <circle cx="1600" cy="750" r="98" fill="#B4EEB4" opacity="0.7"/>
        <circle cx="1600" cy="750" r="62" fill="#90EE90"/>
        <circle cx="1565" cy="712" r="20" fill="#3CB371"/>
        <circle cx="1635" cy="712" r="20" fill="#3CB371"/>
        <circle cx="1565" cy="788" r="20" fill="#3CB371"/>
        <circle cx="1635" cy="788" r="20" fill="#3CB371"/>

        <ellipse cx="800" cy="900" rx="70" ry="105" fill="#FFDAB9" opacity="0.65" transform="rotate(-15 800 900)"/>
        <ellipse cx="800" cy="900" rx="38" ry="62" fill="#FFB347"/>

        <circle cx="1800" cy="450" r="60" fill="#E0BBE4" opacity="0.7"/>
        <circle cx="1775" cy="425" r="18" fill="#957DAD"/>
        <circle cx="1825" cy="425" r="18" fill="#957DAD"/>
        <circle cx="1800" cy="475" r="18" fill="#957DAD"/>

        <path d="M 150 400 Q 180 360 210 400 Q 240 440 210 480 Q 180 520 150 480 Q 120 440 150 400" fill="#FFD700" opacity="0.65"/>
        <circle cx="180" cy="430" r="33" fill="#FFA500"/>
    </svg>`
];
