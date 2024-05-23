export const navItems = [
  { name: 'About', link: '#about' },
  { name: 'Projects', link: '#projects' },
  { name: 'Testimonials', link: '#testimonials' },
  { name: 'Contact', link: '#contact' },
];

export const gridItems = [
  {
    id: 1,
    title:
      'I am Turning Coffee into <span class="text-purple">Code</span> and <span class="text-purple">Dreams</span> into Reality!',
    description: '',
    className: 'lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]',
    imgClassName: 'w-full h-full',
    titleClassName: 'justify-end',
    img: '/lukas-transparent-bg.png',
    spareImg: '',
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: '',
    className: 'lg:col-span-2 md:col-span-3 md:row-span-2',
    imgClassName: '',
    titleClassName: 'justify-start',
    img: '',
    spareImg: '',
  },
  {
    id: 3,
    title: 'My tech stack',
    description: 'I constantly try to improve',
    className: 'lg:col-span-2 md:col-span-3 md:row-span-2',
    imgClassName: '',
    titleClassName: 'justify-center',
    img: '',
    spareImg: '',
  },
  {
    id: 4,
    title: 'Tech enthusiast  excited to join your voice skill team',
    description: '',
    className: 'lg:col-span-2 md:col-span-3 md:row-span-1',
    imgClassName: '',
    titleClassName: 'justify-start',
    img: '/grid.svg',
    spareImg: '/b4.svg',
  },

  {
    id: 5,
    title:
      'Currently building a platform for booking sports guides using Next.js and Nest.js',
    description: 'The Inside Scoop',
    className: 'md:col-span-3 md:row-span-2',
    imgClassName: 'absolute right-0 bottom-0 md:w-96 w-60',
    titleClassName: 'justify-center md:justify-start lg:justify-center',
    img: '/somepanion.png',
    spareImg: '/grid.svg',
  },
  {
    id: 6,
    title: 'Do you want to start working together?',
    description: '',
    className: 'lg:col-span-2 md:col-span-3 md:row-span-1',
    imgClassName: '',
    titleClassName: 'justify-center md:max-w-full max-w-60 text-center',
    img: '',
    spareImg: '',
  },
];

export const projects = [
  {
    id: 1,
    title: 'Somepanion Sportsguide Webapp',
    des: 'Book your next atventure guide online with Somepaion, the ultimate Platform for booking sports guides.',
    img: '/somepanion1.png',
    iconLists: [
      '/next.svg',
      '/nest.svg',
      '/tail.svg',
      '/ts.svg',
      '/postgres.svg',
    ],
    link: 'https://github.com/ghostsxxx/somepanion',
  },
  {
    id: 2,
    title: 'Yoom - Video Conferencing App',
    des: 'Simplify your video conferencing experience with Yoom. Seamlessly connect with colleagues and friends.',
    img: '/p2.svg',
    iconLists: ['/next.svg', '/tail.svg', '/ts.svg', '/stream.svg', '/c.svg'],
    link: '/ui.yoom.com',
  },
  {
    id: 3,
    title: 'AI Image SaaS - Canva Application',
    des: 'A REAL Software-as-a-Service app with AI features and a payments and credits system using the latest tech stack.',
    img: '/p3.svg',
    iconLists: ['/re.svg', '/tail.svg', '/ts.svg', '/three.svg', '/c.svg'],
    link: '/ui.aiimg.com',
  },
  {
    id: 4,
    title: 'Animated Apple Iphone 3D Website',
    des: 'Recreated the Apple iPhone 15 Pro website, combining GSAP animations and Three.js 3D effects..',
    img: '/p4.svg',
    iconLists: ['/next.svg', '/tail.svg', '/ts.svg', '/three.svg', '/gsap.svg'],
    link: '/ui.apple.com',
  },
];

export const testimonials = [
  {
    quote:
      'The detailed investigation of the boot process and firmware via the UART interface reveals several device vulnerabilities. Methods like default passwords, password cracking, firmware downgrades, and direct root shell access through the bootloader demonstrate significant risks despite existing security mechanisms. Notably, extracting and decrypting the password from the firmware shows that even salted MD5 hashes are insufficient. The use of outdated and insecure hash functions like MD5 further weakens the security architecture.',
    name: 'Tp-Link Tapo C100',
    title: 'A cheap Ip-camera',
    img: '/PCB_TapoC100.jpg',
  },
  {
    quote:
      'The investigation of the Eufy security camera system revealed significant vulnerabilities. Easy access to the root shell and plaintext password storage are major security risks. Analyzing memory blocks and extracting sensitive data exposed system weaknesses. The lack of adequate authentication and easily found passwords highlight the need for improved security measures. These findings emphasize the importance of regular security updates and proper disposal or reset of old devices to prevent misuse. Even modern surveillance systems can be susceptible to exploitation by unauthorized parties.',
    name: 'Eufy Security Camera System',
    title: 'Director of AlphaStream Technologies',
    img: '/PCB_Eufy.jpg',
  },
  {
    quote:
      "The investigation of the Reolink E1 IP camera revealed several security issues. Analysis of boot logs showed U-Boot version 2019.04 and listed flash memory partitions. The root password, stored with a DES hash in /etc/passwd, was cracked in seconds using 'John the Ripper', revealing 'bc2020'. Logging in with these credentials allowed full system access via the UART console.The camera firmware was also downloaded and analyzed, uncovering security-sensitive files, including a private RSA key. These findings highlight potential vulnerabilities that could be exploited for unauthorized system access.",
    name: 'Reolink E1',
    title: 'Ip-camera',
    img: '/PCB_Reolink_E1.jpg',
  },
  {
    quote:
      'The investigation of the Netgear N750 DGND4000 router revealed significant security flaws. By utilizing UART serial access, the correct baud rate of 115200 was identified using a Python script. Connecting to the router via the serial console allowed monitoring and interrupting the boot process, granting root shell access without authentication. Further exploration showed that the `/etc/passwd` file had no passwords set, and the `/tmp/etc/htpasswd` file contained the admin password in plaintext.',
    name: 'Netgear N750 DGND4000 router',
    title: 'DSL Router',
    img: '/PCB_Netgear.jpg',
  },
];

export const companies = [
  {
    id: 1,
    name: 'cloudinary',
    img: '/cloud.svg',
    nameImg: '/cloudName.svg',
  },
  {
    id: 2,
    name: 'appwrite',
    img: '/app.svg',
    nameImg: '/appName.svg',
  },
  {
    id: 3,
    name: 'HOSTINGER',
    img: '/host.svg',
    nameImg: '/hostName.svg',
  },
  {
    id: 4,
    name: 'stream',
    img: '/s.svg',
    nameImg: '/streamName.svg',
  },
  {
    id: 5,
    name: 'docker.',
    img: '/dock.svg',
    nameImg: '/dockerName.svg',
  },
];

export const workExperience = [
  {
    id: 1,
    title: 'Fullstack Developer and Co-Founder - Somepanion',
    desc: 'CIO and Co-Founder of Somepanion, a platform for booking sports guides using Next.js and Nest.js.',
    className: 'md:col-span-2',
    thumbnail: '/exp1.svg',
  },
  {
    id: 2,
    title: 'Project collaborator in an IoT-security research project',
    desc: 'Working at the Josef Ressel Center for Security Analysis of IoT Devices on the JSAID research project. [Learn more](https://research.mci.edu/de/jsaid)',
    className: 'md:col-span-2',
    thumbnail: '/exp4.svg',
  },
  {
    id: 3,
    title: 'TensionTerminator Freelance Mobile-App developement',
    desc: 'Developing an app for a client using React Native, react-native-vision-camera and Google ML-Kit',
    className: 'md:col-span-2', // change to md:col-span-2
    thumbnail: '/exp3.svg',
  },
  {
    id: 4,
    title: 'Defops Engineer - @ University Project',
    desc: 'Developing an CI/CD pipeline for a university project using Docker and GCP- Cloud Build.',
    className: 'md:col-span-2',
    thumbnail: '/exp2.svg',
  },
];

export const socialMedia = [
  {
    id: 1,
    img: '/git.svg',
  },
  {
    id: 2,
    img: '/twit.svg',
  },
  {
    id: 3,
    img: '/link.svg',
  },
];
