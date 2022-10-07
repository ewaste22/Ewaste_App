import {Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');

export const COLORS = {
  // base colors
  primary: '#85C681',
  secondary: '#2D5030',
  third: '#D0E3AD',
  
  background: '#F6F5F5',

  accent: '#4895ef',
  danger: '#f72585',
  success: '#31Ad66',
  warning: '#FFCE31',

  // colors
  black: '#151515',
  white: '#FFFFFF',
  lightGray: '#3C3C3C',
  lightGray2: '#EFEFF0',
  lightGray3: '#8A8A8A',
  lightGray4: '#7D7E84',
  grey1: '#7D8797',
  grey2: '#B1B7C2',
  grey3: '#E5E5E5',
  grey4: '#EDEEF0',
  grey5: '#B1B7C2',
  grey6: '#B0B0B0',
  grey7: '#F0F0F0',
  grey8: '#D0D0D0',

  transparent: 'rgba(30, 27, 38, 0.8)',
};

export const SIZES = {
  // Dimensions
  width,
  height,

  // Global
  base: 8,
  font: 14,
  icon: 24,
  radius1: 12,
  radius2: 16,
  padding1: 12,
  padding2: 14,
  padding3: 16,
  padding4: 18,
  padding5: 24,
  padding6: 36,

  // Fonts
  largeTitle: 43,
  h1: 28,
  h2: 24,
  h3: 20,
  h4: 18,
  h5: 16,
  h6: 14,
  h7: 12,
};

export const RADIUS = {
  small: 12,
  medium: 14,
  large: 16,
  xLarge: 24,
};

export const FONTS = {
  bodySmallRegular: { fontFamily: 'Poppins-Regular', fontSize: SIZES.h7 },
  bodySmallMedium: { fontFamily: 'Poppins-Medium', fontSize: SIZES.h7 },
  bodySmallBold: { fontFamily: 'Poppins-Bold', fontSize: SIZES.h7, fontWeight: 'bold' },

  bodyNormalRegular: { fontFamily: 'Poppins-Regular', fontSize: SIZES.h6 },
  bodyNormalMedium: { fontFamily: 'Poppins-Medium', fontSize: SIZES.h6 },
  bodyNormalBold: { fontFamily: 'Poppins-Bold', fontSize: SIZES.h6, fontWeight: 'bold' },

  bodyLargeRegular: { fontFamily: 'Poppins-Regular', fontSize: SIZES.h5 },
  bodyLargeMedium: { fontFamily: 'Poppins-Medium', fontSize: SIZES.h5 },
  bodyLargeBold: { fontFamily: 'Poppins-Bold', fontSize: SIZES.h5, fontWeight: 'bold' },

  titleNormalRegular: { fontFamily: 'Poppins-Regular', fontSize: SIZES.h4 },
  titleNormalMedium: { fontFamily: 'Poppins-Medium', fontSize: SIZES.h4 },
  titleNormalBold: { fontFamily: 'Poppins-Bold', fontSize: SIZES.h4, fontWeight: 'bold' },

  titleLargeRegular: { fontFamily: 'Poppins-Regular', fontSize: SIZES.h3 },
  titleLargeMedium: { fontFamily: 'Poppins-Medium', fontSize: SIZES.h3 },
  titleLargeBold: { fontFamily: 'Poppins-Bold', fontSize: SIZES.h3, fontWeight: 'bold' },

  headingNormalRegular: { fontFamily: 'Poppins-Regular', fontSize: SIZES.h2 },
  headingNormalMedium: { fontFamily: 'Poppins-Medium', fontSize: SIZES.h2 },
  headingNormalBold: { fontFamily: 'Poppins-Bold', fontSize: SIZES.h2, fontWeight: 'bold' },

  headingLargeRegular: { fontFamily: 'Poppins-Regular', fontSize: SIZES.h1 },
  headingLargeMedium: { fontFamily: 'Poppins-Medium', fontSize: SIZES.h1 },
  headingLargeBold: { fontFamily: 'Poppins-Bold', fontSize: SIZES.h1,fontWeight: 'bold' },
};