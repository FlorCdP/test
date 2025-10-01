// Retro 60s/70s floral SVG backgrounds - inspired by vintage flower power aesthetic
const backgrounds = [
    // Background 1: Pink with Orange Flowers
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid slice">
        <rect fill="#FFC0D9" width="1920" height="1080"/>

        <!-- Top left flower -->
        <ellipse cx="150" cy="80" rx="65" ry="85" fill="#FF9B50"/>
        <ellipse cx="250" cy="80" rx="65" ry="85" fill="#FF9B50"/>
        <ellipse cx="200" cy="30" rx="85" ry="65" fill="#FF9B50"/>
        <ellipse cx="200" cy="130" rx="85" ry="65" fill="#FF9B50"/>
        <ellipse cx="140" cy="140" rx="75" ry="75" fill="#FF9B50" transform="rotate(45 140 140)"/>
        <circle cx="200" cy="80" r="45" fill="#E94196"/>

        <!-- Top right flower -->
        <ellipse cx="1720" cy="120" rx="70" ry="90" fill="#FF9B50"/>
        <ellipse cx="1830" cy="120" rx="70" ry="90" fill="#FF9B50"/>
        <ellipse cx="1775" cy="60" rx="90" ry="70" fill="#FF9B50"/>
        <ellipse cx="1775" cy="180" rx="90" ry="70" fill="#FF9B50"/>
        <ellipse cx="1705" cy="185" rx="80" ry="80" fill="#FF9B50" transform="rotate(45 1705 185)"/>
        <circle cx="1775" cy="120" r="48" fill="#E94196"/>

        <!-- Bottom left flower -->
        <ellipse cx="200" cy="900" rx="80" ry="100" fill="#FF9B50"/>
        <ellipse cx="330" cy="900" rx="80" ry="100" fill="#FF9B50"/>
        <ellipse cx="265" cy="830" rx="100" ry="80" fill="#FF9B50"/>
        <ellipse cx="265" cy="970" rx="100" ry="80" fill="#FF9B50"/>
        <ellipse cx="185" cy="980" rx="90" ry="90" fill="#FF9B50" transform="rotate(45 185 980)"/>
        <circle cx="265" cy="900" r="55" fill="#E94196"/>

        <!-- Bottom right flower -->
        <ellipse cx="1680" cy="920" rx="75" ry="95" fill="#FF9B50"/>
        <ellipse cx="1800" cy="920" rx="75" ry="95" fill="#FF9B50"/>
        <ellipse cx="1740" cy="855" rx="95" ry="75" fill="#FF9B50"/>
        <ellipse cx="1740" cy="985" rx="95" ry="75" fill="#FF9B50"/>
        <ellipse cx="1665" cy="995" rx="85" ry="85" fill="#FF9B50" transform="rotate(45 1665 995)"/>
        <circle cx="1740" cy="920" r="50" fill="#E94196"/>

        <!-- Center large flower -->
        <ellipse cx="860" cy="500" rx="90" ry="115" fill="#FF9B50"/>
        <ellipse cx="1000" cy="500" rx="90" ry="115" fill="#FF9B50"/>
        <ellipse cx="930" cy="420" rx="115" ry="90" fill="#FF9B50"/>
        <ellipse cx="930" cy="580" rx="115" ry="90" fill="#FF9B50"/>
        <ellipse cx="850" cy="590" rx="100" ry="100" fill="#FF9B50" transform="rotate(45 850 590)"/>
        <circle cx="930" cy="500" r="60" fill="#E94196"/>
    </svg>`,

    // Background 2: Light Pink with Orange & Yellow Flowers
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid slice">
        <rect fill="#FFD4E5" width="1920" height="1080"/>

        <!-- Top flowers -->
        <ellipse cx="300" cy="100" rx="60" ry="80" fill="#FFA938"/>
        <ellipse cx="400" cy="100" rx="60" ry="80" fill="#FFA938"/>
        <ellipse cx="350" cy="50" rx="80" ry="60" fill="#FFA938"/>
        <ellipse cx="350" cy="150" rx="80" ry="60" fill="#FFA938"/>
        <ellipse cx="285" cy="155" rx="70" ry="70" fill="#FFA938" transform="rotate(45 285 155)"/>
        <circle cx="350" cy="100" r="42" fill="#E94196"/>

        <ellipse cx="1550" cy="150" rx="70" ry="90" fill="#FF9B50"/>
        <ellipse cx="1660" cy="150" rx="70" ry="90" fill="#FF9B50"/>
        <ellipse cx="1605" cy="90" rx="90" ry="70" fill="#FF9B50"/>
        <ellipse cx="1605" cy="210" rx="90" ry="70" fill="#FF9B50"/>
        <circle cx="1605" cy="150" r="47" fill="#D6689D"/>

        <!-- Middle flowers -->
        <ellipse cx="150" cy="540" rx="85" ry="105" fill="#FF9B50"/>
        <ellipse cx="275" cy="540" rx="85" ry="105" fill="#FF9B50"/>
        <ellipse cx="212" cy="470" rx="105" ry="85" fill="#FF9B50"/>
        <ellipse cx="212" cy="610" rx="105" ry="85" fill="#FF9B50"/>
        <circle cx="212" cy="540" r="58" fill="#E94196"/>

        <!-- Bottom flowers -->
        <ellipse cx="1200" cy="900" rx="75" ry="95" fill="#FFA938"/>
        <ellipse cx="1320" cy="900" rx="75" ry="95" fill="#FFA938"/>
        <ellipse cx="1260" cy="835" rx="95" ry="75" fill="#FFA938"/>
        <ellipse cx="1260" cy="965" rx="95" ry="75" fill="#FFA938"/>
        <circle cx="1260" cy="900" r="52" fill="#D6689D"/>

        <ellipse cx="500" cy="920" rx="65" ry="85" fill="#FF9B50"/>
        <ellipse cx="600" cy="920" rx="65" ry="85" fill="#FF9B50"/>
        <ellipse cx="550" cy="865" rx="85" ry="65" fill="#FF9B50"/>
        <ellipse cx="550" cy="975" rx="85" ry="65" fill="#FF9B50"/>
        <circle cx="550" cy="920" r="45" fill="#E94196"/>
    </svg>`,

    // Background 3: Peachy Pink with Orange Flowers
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid slice">
        <rect fill="#FFCCD5" width="1920" height="1080"/>

        <!-- Large corner flowers -->
        <ellipse cx="120" cy="100" rx="80" ry="100" fill="#FF9B50"/>
        <ellipse cx="250" cy="100" rx="80" ry="100" fill="#FF9B50"/>
        <ellipse cx="185" cy="30" rx="100" ry="80" fill="#FF9B50"/>
        <ellipse cx="185" cy="170" rx="100" ry="80" fill="#FF9B50"/>
        <ellipse cx="110" cy="175" rx="90" ry="90" fill="#FF9B50" transform="rotate(45 110 175)"/>
        <circle cx="185" cy="100" r="55" fill="#E94196"/>

        <ellipse cx="1750" cy="980" rx="85" ry="105" fill="#FF9B50"/>
        <ellipse cx="1880" cy="980" rx="85" ry="105" fill="#FF9B50"/>
        <ellipse cx="1815" cy="910" rx="105" ry="85" fill="#FF9B50"/>
        <ellipse cx="1815" cy="1050" rx="105" ry="85" fill="#FF9B50"/>
        <circle cx="1815" cy="980" r="58" fill="#E94196"/>

        <!-- Center area flowers -->
        <ellipse cx="1400" cy="300" rx="70" ry="90" fill="#FFA938"/>
        <ellipse cx="1510" cy="300" rx="70" ry="90" fill="#FFA938"/>
        <ellipse cx="1455" cy="240" rx="90" ry="70" fill="#FFA938"/>
        <ellipse cx="1455" cy="360" rx="90" ry="70" fill="#FFA938"/>
        <circle cx="1455" cy="300" r="48" fill="#D6689D"/>

        <ellipse cx="600" cy="600" rx="75" ry="95" fill="#FF9B50"/>
        <ellipse cx="720" cy="600" rx="75" ry="95" fill="#FF9B50"/>
        <ellipse cx="660" cy="535" rx="95" ry="75" fill="#FF9B50"/>
        <ellipse cx="660" cy="665" rx="95" ry="75" fill="#FF9B50"/>
        <circle cx="660" cy="600" r="52" fill="#E94196"/>

        <!-- Bottom flowers -->
        <ellipse cx="300" cy="880" rx="65" ry="85" fill="#FFA938"/>
        <ellipse cx="400" cy="880" rx="65" ry="85" fill="#FFA938"/>
        <ellipse cx="350" cy="825" rx="85" ry="65" fill="#FFA938"/>
        <ellipse cx="350" cy="935" rx="85" ry="65" fill="#FFA938"/>
        <circle cx="350" cy="880" r="45" fill="#E94196"/>
    </svg>`,

    // Background 4: Soft Pink with Mixed Orange Flowers
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid slice">
        <rect fill="#FFB8D1" width="1920" height="1080"/>

        <!-- Top scattered flowers -->
        <ellipse cx="400" cy="120" rx="75" ry="95" fill="#FF9B50"/>
        <ellipse cx="520" cy="120" rx="75" ry="95" fill="#FF9B50"/>
        <ellipse cx="460" cy="55" rx="95" ry="75" fill="#FF9B50"/>
        <ellipse cx="460" cy="185" rx="95" ry="75" fill="#FF9B50"/>
        <circle cx="460" cy="120" r="52" fill="#E94196"/>

        <ellipse cx="1600" cy="200" rx="70" ry="90" fill="#FFA938"/>
        <ellipse cx="1710" cy="200" rx="70" ry="90" fill="#FFA938"/>
        <ellipse cx="1655" cy="140" rx="90" ry="70" fill="#FFA938"/>
        <ellipse cx="1655" cy="260" rx="90" ry="70" fill="#FFA938"/>
        <circle cx="1655" cy="200" r="48" fill="#D6689D"/>

        <!-- Middle flowers -->
        <ellipse cx="200" cy="450" rx="80" ry="100" fill="#FF9B50"/>
        <ellipse cx="330" cy="450" rx="80" ry="100" fill="#FF9B50"/>
        <ellipse cx="265" cy="380" rx="100" ry="80" fill="#FF9B50"/>
        <ellipse cx="265" cy="520" rx="100" ry="80" fill="#FF9B50"/>
        <circle cx="265" cy="450" r="55" fill="#E94196"/>

        <ellipse cx="1350" cy="580" rx="85" ry="105" fill="#FFA938"/>
        <ellipse cx="1475" cy="580" rx="85" ry="105" fill="#FFA938"/>
        <ellipse cx="1412" cy="510" rx="105" ry="85" fill="#FFA938"/>
        <ellipse cx="1412" cy="650" rx="105" ry="85" fill="#FFA938"/>
        <circle cx="1412" cy="580" r="58" fill="#E94196"/>

        <!-- Bottom flowers -->
        <ellipse cx="800" cy="900" rx="70" ry="90" fill="#FF9B50"/>
        <ellipse cx="910" cy="900" rx="70" ry="90" fill="#FF9B50"/>
        <ellipse cx="855" cy="840" rx="90" ry="70" fill="#FF9B50"/>
        <ellipse cx="855" cy="960" rx="90" ry="70" fill="#FF9B50"/>
        <circle cx="855" cy="900" r="48" fill="#E94196"/>

        <ellipse cx="1650" cy="880" rx="65" ry="85" fill="#FFA938"/>
        <ellipse cx="1750" cy="880" rx="65" ry="85" fill="#FFA938"/>
        <ellipse cx="1700" cy="825" rx="85" ry="65" fill="#FFA938"/>
        <ellipse cx="1700" cy="935" rx="85" ry="65" fill="#FFA938"/>
        <circle cx="1700" cy="880" r="45" fill="#D6689D"/>
    </svg>`,

    // Background 5: Rose Pink with Bold Orange Flowers
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid slice">
        <rect fill="#FFC4D6" width="1920" height="1080"/>

        <!-- Corner flowers -->
        <ellipse cx="200" cy="150" rx="85" ry="105" fill="#FF9B50"/>
        <ellipse cx="330" cy="150" rx="85" ry="105" fill="#FF9B50"/>
        <ellipse cx="265" cy="80" rx="105" ry="85" fill="#FF9B50"/>
        <ellipse cx="265" cy="220" rx="105" ry="85" fill="#FF9B50"/>
        <ellipse cx="185" cy="230" rx="95" ry="95" fill="#FF9B50" transform="rotate(45 185 230)"/>
        <circle cx="265" cy="150" r="58" fill="#E94196"/>

        <ellipse cx="1700" cy="150" rx="75" ry="95" fill="#FFA938"/>
        <ellipse cx="1820" cy="150" rx="75" ry="95" fill="#FFA938"/>
        <ellipse cx="1760" cy="85" rx="95" ry="75" fill="#FFA938"/>
        <ellipse cx="1760" cy="215" rx="95" ry="75" fill="#FFA938"/>
        <circle cx="1760" cy="150" r="52" fill="#D6689D"/>

        <!-- Center flowers -->
        <ellipse cx="900" cy="540" rx="80" ry="100" fill="#FF9B50"/>
        <ellipse cx="1030" cy="540" rx="80" ry="100" fill="#FF9B50"/>
        <ellipse cx="965" cy="470" rx="100" ry="80" fill="#FF9B50"/>
        <ellipse cx="965" cy="610" rx="100" ry="80" fill="#FF9B50"/>
        <circle cx="965" cy="540" r="55" fill="#E94196"/>

        <!-- Bottom flowers -->
        <ellipse cx="150" cy="850" rx="70" ry="90" fill="#FFA938"/>
        <ellipse cx="260" cy="850" rx="70" ry="90" fill="#FFA938"/>
        <ellipse cx="205" cy="790" rx="90" ry="70" fill="#FFA938"/>
        <ellipse cx="205" cy="910" rx="90" ry="70" fill="#FFA938"/>
        <circle cx="205" cy="850" r="48" fill="#E94196"/>

        <ellipse cx="1550" cy="920" rx="80" ry="100" fill="#FF9B50"/>
        <ellipse cx="1680" cy="920" rx="80" ry="100" fill="#FF9B50"/>
        <ellipse cx="1615" cy="850" rx="100" ry="80" fill="#FF9B50"/>
        <ellipse cx="1615" cy="990" rx="100" ry="80" fill="#FF9B50"/>
        <circle cx="1615" cy="920" r="55" fill="#E94196"/>
    </svg>`
];
