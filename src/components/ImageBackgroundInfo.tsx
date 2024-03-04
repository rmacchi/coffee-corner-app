/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */

import React from 'react';
import { ImageProps, StyleSheet, View, ImageBackground, TouchableOpacity, Text } from 'react-native';
import GradientBGIcon from './GradientBGIcon';
import { BORDERRADIUS, COLORS, FONTFAMILY, FONTSIZE, SPACING } from '../theme/theme';
import CustomIcon from './CustomIcon';

interface ImageBackgroundInfoProps {
  EnableBackHandler: boolean;
  imagelink_portrait: ImageProps;
  type: string;
  id: string;
  favorite: boolean;
  name: string;
  special_ingredient: string;
  ingredients: string;
  average_rating: number;
  ratings_count: string;
  roasted: string;
  BackHandler?: any;
  ToggleFavorite: any;
}

const ImageBackgroundInfo: React.FC<ImageBackgroundInfoProps> = ({
  EnableBackHandler,
  imagelink_portrait,
  type,
  id,
  favorite,
  name,
  special_ingredient,
  ingredients,
  average_rating,
  ratings_count,
  roasted,
  BackHandler,
  ToggleFavorite,
}) => {
  return (
    <View>
      <ImageBackground
        source={imagelink_portrait}
        style={styles.ItemBackgroundImage}
      >
        {EnableBackHandler ? (
          <View style={styles.ImageHeaderBarContainerWithBack}>
            <TouchableOpacity
              onPress={() => { BackHandler(); }}
            >
              <GradientBGIcon
                name="left"
                color={COLORS.primaryLightGreyHex}
                size={FONTSIZE.size_16}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => ToggleFavorite(favorite, type, id)}
            >
              <GradientBGIcon
                name="like"
                color={favorite ? COLORS.primaryRedHex : COLORS.primaryLightGreyHex}
                size={FONTSIZE.size_16}
              />
            </TouchableOpacity>
          </View>
        ) : (
          <View style={styles.ImageHeaderBarContainerWithoutBack}>
            <TouchableOpacity
              onPress={() => ToggleFavorite(favorite, type, id)}
            >
              <GradientBGIcon
                name="like"
                color={favorite ? COLORS.primaryRedHex : COLORS.primaryLightGreyHex}
                size={FONTSIZE.size_16}
              />
            </TouchableOpacity>
          </View>
        )}

        <View style={styles.ImageInfoOuterContainer}>
          <View style={styles.ImageInfoInnerContainer}>
            <View style={styles.InfoContainerRow}>
              <View>
                <Text style={styles.ItemTitleText}>{name}</Text>
                <Text style={styles.ItemSubtitleText}>{special_ingredient}</Text>
              </View>
              <View style={styles.ItemPropertiesContainer}>
                <View style={styles.ProperFirst}>
                  <CustomIcon
                    name={type == 'Bean' ? 'bean' : 'beans'}
                    size={type == 'Bean' ? FONTSIZE.size_20 : FONTSIZE.size_28}
                    color={COLORS.primaryOrangeHex}
                  />
                  <Text
                    style={[
                      styles.PropertyTextFirst,
                      {
                        marginTop:
                          type == 'Bean'
                            ? SPACING.space_4 + SPACING.space_2
                            : 0,
                      },
                    ]}
                  >{type}</Text>
                </View>
                <View style={styles.ProperFirst}>
                  <CustomIcon
                    name={type == 'Bean' ? 'location' : 'drop'}
                    size={FONTSIZE.size_20}
                    color={COLORS.primaryOrangeHex}
                  />
                  <Text style={styles.PropertyTextLast}>{ingredients}</Text>
                </View>
              </View>
            </View>
            <View style={styles.InfoContainerRow}>
              <View style={styles.RatingContainer}>
                <CustomIcon
                  name={'star'}
                  color={COLORS.primaryOrangeHex}
                  size={FONTSIZE.size_24}
                />
                <Text style={styles.RatingText}>{average_rating}</Text>
                <Text style={styles.RatingCountText}>({ratings_count})</Text>
              </View>
              <View style={styles.RoastedContainer}>
                <Text style={styles.RoastedText}>{roasted}</Text>
              </View>
            </View>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};


const styles = StyleSheet.create({
  ItemBackgroundImage: {
    width: '100%',
    aspectRatio: 20 / 25,
    justifyContent: 'space-between',
  },
  ImageHeaderBarContainerWithBack: {
    padding: SPACING.space_30,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  ImageHeaderBarContainerWithoutBack: {
    padding: SPACING.space_30,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  ImageInfoOuterContainer: {
    backgroundColor: COLORS.primaryBlackRGBA,
    paddingVertical: SPACING.space_24,
    paddingHorizontal: SPACING.space_30,
    borderTopLeftRadius: BORDERRADIUS.radius_20 * 2,
    borderTopRightRadius: BORDERRADIUS.radius_20 * 2,
  },
  ImageInfoInnerContainer: {
    justifyContent: 'space-between',
    gap: SPACING.space_15,
  },
  InfoContainerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  ItemTitleText: {
    fontFamily: FONTFAMILY.poppins_semibold,
    fontSize: FONTSIZE.size_28,
    color: COLORS.primaryWhiteHex,
  },
  ItemSubtitleText: {
    fontFamily: FONTFAMILY.poppins_regular,
    fontSize: FONTSIZE.size_16,
    color: COLORS.secondaryLightGreyHex,
  },
  ItemPropertiesContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: SPACING.space_10,
  },
  ProperFirst: {
    height: 68,
    width: 68,
    backgroundColor: COLORS.primaryBlackHex,
    borderRadius: BORDERRADIUS.radius_15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  PropertyTextFirst: {
    color: COLORS.primaryWhiteHex,
    fontFamily: FONTFAMILY.poppins_medium,
    fontSize: FONTSIZE.size_14,
    marginBottom: SPACING.space_15 - SPACING.space_10,
  },
  PropertyTextLast: {
    color: COLORS.primaryWhiteHex,
    fontFamily: FONTFAMILY.poppins_medium,
    fontSize: FONTSIZE.size_14,
    marginTop: SPACING.space_2 + SPACING.space_4,
  },
  RatingContainer: {
    flexDirection: 'row',
    gap: SPACING.space_8,
    alignItems: 'center',
  },
  RatingText: {
    fontFamily: FONTFAMILY.poppins_semibold,
    fontSize: FONTSIZE.size_20,
    color: COLORS.primaryWhiteHex,
    marginTop: SPACING.space_4,
  },
  RatingCountText: {
    fontFamily: FONTFAMILY.poppins_regular,
    fontSize: FONTSIZE.size_14,
    color: COLORS.secondaryLightGreyHex,
    marginTop: SPACING.space_4,
  },
  RoastedContainer: {
    backgroundColor: COLORS.primaryBlackHex,
    height: 60,
    width: 145,
    borderRadius: BORDERRADIUS.radius_15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  RoastedText: {
    fontFamily: FONTFAMILY.poppins_medium,
    fontSize: FONTSIZE.size_14,
    color: COLORS.primaryWhiteHex,
  },
});

export default ImageBackgroundInfo;
