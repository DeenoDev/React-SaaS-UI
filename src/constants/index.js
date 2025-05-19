export const features = [
    {
        id: '0',
        icon: '/images/feature-1.png',
        caption: 'DEMO CAPTION',
        title: 'FEATURE 1',
        text: 'TEXT 1',
        button: {
            icon: '/images/magictouch.svg',
            title: 'Watch the demo'
        }
    },
    {
        id: '1',
        icon: '/images/feature-2.png',
        caption: 'DEMO CAPTION',
        title: 'FEATURE 2',
        text: 'TEXT 2',
        button: {
            icon: '/images/magictouch.svg',
            title: 'Watch the demo'
        }
    }
]

export const details = [
    {
      id: "0",
      icon: "/images/detail-1.png",
      title: "AI automated video editing",
    },
    {
      id: "1",
      icon: "/images/detail-2.png",
      title: "Collaborate with your team",
    },
    {
      id: "2",
      icon: "/images/detail-3.png",
      title: "Ultra fast cloud-engine",
    },
    {
      id: "3",
      icon: "/images/detail-4.png",
      title: "24 / 7 Customer support",
    },
  ];

  export const plans = [
    {
      id: "0",
      title: "Core",
      priceMonthly: 19,
      priceYearly: 12,
      caption: "Best for solo creators",
      features: [
        "100MB Cloud storage",
        "100+ prompt templates",
        "5 projects",
        "24/7 support",
      ],
      icon: "/images/circle.svg",
      logo: "/images/plan-1.png",
    },
    {
      id: "1",
      title: "Overdrive",
      priceMonthly: 79,
      priceYearly: 59,
      caption: "Most popular plan",
      features: [
        "All Starter features",
        "1TB additional storage",
        "Unlimited projects",
        "Analytics",
      ],
      icon: "/images/triangle.svg",
      logo: "/images/plan-2.png",
    },
    {
      id: "2",
      title: "Team",
      priceMonthly: 39,
      priceYearly: 29,
      caption: "Exclusively for teams",
      features: [
        "All Overdrive features",
        "10TB additional storage",
        "50% off per member",
        "Real-time collaboration",
      ],
      icon: "/images/hexagon.svg",
      logo: "/images/plan-3.png",
    },
  ];

  export const faq = [
    {
      id: "0",
      question: "How easy is it to setup Xora?",
      answer:
        "Absolutely! Not only you can upgrade your plan at any time but you also get a prorated discount giving you maximum value for your subscription.",
    },
    {
      id: "1",
      question: "Can I integrate Xora with other platforms?",
      answer:
        "Absolutely! Not only you can upgrade your plan at any time but you also get a prorated discount giving you maximum value for your subscription.",
    },
    {
      id: "2",
      question: "How often do you add new content?",
      answer:
        "Absolutely! Not only you can upgrade your plan at any time but you also get a prorated discount giving you maximum value for your subscription.",
    },
    {
      id: "3",
      question: "What your refund policy?",
      answer:
        "Absolutely! Not only you can upgrade your plan at any time but you also get a prorated discount giving you maximum value for your subscription.",
    },
    {
      id: "4",
      question: "Do you have corporate plans?",
      answer:
        "Absolutely! Not only you can upgrade your plan at any time but you also get a prorated discount giving you maximum value for your subscription.",
    },
    {
      id: "5",
      question: "What happens when I’m out of storage?",
      answer:
        "Absolutely! Not only you can upgrade your plan at any time but you also get a prorated discount giving you maximum value for your subscription.",
    },
    {
      id: "6",
      question: "Can I upgrade my plan?",
      answer:
        "Absolutely! Not only you can upgrade your plan at any time but you also get a prorated discount giving you maximum value for your subscription.",
    },
    {
      id: "7",
      question: "How do I invite my team?",
      answer:
        "Absolutely! Not only you can upgrade your plan at any time but you also get a prorated discount giving you maximum value for your subscription.",
    },
    {
      id: "8",
      question: "Do you offer training for individuals and teams?",
      answer:
        "Absolutely! Not only you can upgrade your plan at any time but you also get a prorated discount giving you maximum value for your subscription.",
    },
    {
      id: "9",
      question: "I’m locked out of my account what do I do?",
      answer:
        "Absolutely! Not only you can upgrade your plan at any time but you also get a prorated discount giving you maximum value for your subscription.",
    },
  ];

  export const testimonials = [
    {
      id: "0",
      name: "Jessica Saunders",
      role: "Globalnomads",
      avatarUrl: "/images/testimonials/jessica-saunders.png",
      comment:
        "Xora's customer support is second to none! They’re like my tech superheroes, always there when I need them.",
    },
    {
      id: "1",
      name: "Mark Erixon",
      role: "Vid capital intl",
      avatarUrl: "/images/testimonials/mark-erixon.png",
      comment:
        "I was skeptical at first, but now I can't imagine our content operations without it. It's that impactful.",
    },
    {
      id: "2",
      name: "Melanie Hurst",
      role: "Cyberleap",
      avatarUrl: "/images/testimonials/melanie-hurst.png",
      comment:
        "Adopting this software was a breeze. It's made everyday tasks so much simpler.",
    },
    {
      id: "3",
      name: "Alicia Barker",
      role: "Cyberleap",
      avatarUrl: "/images/testimonials/alicia-barker.png",
      comment:
        "The analytics feature is like having a personal fortune teller. It's been instrumental in guiding our business decisions.",
    },
    {
      id: "4",
      name: "Becky Snider",
      role: "Floclips",
      avatarUrl: "/images/testimonials/becky-snider.png",
      comment:
        "Switched to Xora last month, and I'm already seeing results. Best decision for our team!",
    },
    {
      id: "5",
      name: "Jim Bradley",
      role: "Vid capital intl",
      avatarUrl: "/images/testimonials/jim-bradley.png",
      comment:
        "The efficiency boost is undeniable. This platform has transformed our workflow, forever.",
    },
  ];

  export const Ios = () => {
    return (
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M24.9404 17.0175C24.9566 15.791 25.2903 14.5884 25.9105 13.5217C26.5307 12.4549 27.4173 11.5586 28.4876 10.9162C27.8077 9.96818 26.9106 9.18798 25.8677 8.63759C24.8249 8.0872 23.6649 7.78178 22.48 7.74559C19.9523 7.48658 17.5019 9.22215 16.2138 9.22215C14.9009 9.22215 12.9177 7.77131 10.7822 7.8142C9.40087 7.85777 8.05467 8.2499 6.87475 8.95239C5.69483 9.65487 4.72143 10.6438 4.04939 11.8227C1.13826 16.7431 3.3097 23.9744 6.09832 27.9516C7.49352 29.8992 9.12411 32.0746 11.2577 31.9975C13.3456 31.913 14.1253 30.6978 16.6456 30.6978C19.1424 30.6978 19.874 31.9975 22.0509 31.9484C24.2912 31.9129 25.7028 29.9922 27.049 28.0262C28.0514 26.6385 28.8228 25.1048 29.3345 23.4819C28.0329 22.9445 26.9222 22.0449 26.1408 20.8954C25.3594 19.7458 24.942 18.3971 24.9404 17.0175Z"
          fill="#EAEDFF"
        />
        <path
          d="M20.829 5.12933C22.0505 3.69777 22.6523 1.85774 22.5066 0C20.6403 0.191354 18.9165 1.0621 17.6784 2.43873C17.0731 3.11126 16.6095 3.89365 16.3141 4.74119C16.0187 5.58873 15.8973 6.4848 15.9569 7.37817C16.8903 7.38755 17.8138 7.19004 18.6577 6.8005C19.5017 6.41097 20.244 5.83956 20.829 5.12933Z"
          fill="#EAEDFF"
        />
      </svg>
    );
  };

  export const Android = () => {
    return (
      <svg
        width="33"
        height="32"
        viewBox="0 0 33 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M4.74 0.0459256L22.8329 10.1427L18.5589 14.2804L4.37614 0.543765C4.12087 0.295202 4.41704 -0.131925 4.72872 0.0394973L4.74 0.0459256Z"
          fill="#EAEDFF"
        />
        <path
          d="M1.8335 30.0342V1.96373C1.83368 1.90283 1.85161 1.84334 1.88505 1.79272C1.91848 1.7421 1.96592 1.70261 2.02142 1.67919C2.07692 1.65577 2.13801 1.64947 2.19703 1.66108C2.25606 1.67269 2.31038 1.70169 2.3532 1.74445L16.7828 15.9997L2.3532 30.2534C2.31038 30.2962 2.25606 30.3252 2.19703 30.3368C2.13801 30.3484 2.07692 30.3421 2.02142 30.3187C1.96592 30.2953 1.91848 30.2558 1.88505 30.2052C1.85161 30.1545 1.83368 30.0951 1.8335 30.0342Z"
          fill="#EAEDFF"
        />
        <path
          d="M4.37775 31.4555C4.12108 31.7041 4.41724 32.1312 4.73033 31.9598L4.74161 31.9534L22.8331 21.8566L18.5591 17.7175L4.37775 31.4555Z"
          fill="#EAEDFF"
        />
        <path
          d="M25.0844 11.3955L30.1368 14.214C31.5112 14.9832 31.5112 17.016 30.1368 17.7853L25.0844 20.6016L20.3338 15.9996L25.0844 11.3955Z"
          fill="#EAEDFF"
        />
      </svg>
    );
  };
  
  

  export const links = [
    {
      id: "0",
      title: "Ios",
      icon: <Ios />,
      url: "#",
    },
    {
      id: "1",
      title: "Android",
      icon: <Android />,
      url: "#",
    },
    {
      id: "2",
      title: "Windows",
      icon: <Windows />,
      url: "#",
    },
    {
      id: "3",
      title: "Web",
      icon: <Web />,
      url: "#",
    },
  ];
  