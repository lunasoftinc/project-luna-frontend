import Apercu from 'next/font/local';

export const font = Apercu({
	src: [
    {
      path: '../public/fonts/Apercu Light.otf',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../public/fonts/Apercu_Regular.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/fonts/Apercu Italic.otf',
      weight: '400',
      style: 'italic',
    },
    {
      path: '../public/fonts/Apercu Medium.otf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../public/fonts/Apercu Medium Italic.otf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../public/fonts/Apercu Bold.otf',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../public/fonts/Apercu Bold Italic.otf',
      weight: '700',
      style: 'italic',
    },
  ],
});