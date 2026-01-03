import React from "react";
import { SvgXml } from "react-native-svg";

import { Spacer } from "../../../components/spacer/spacer.component";
import { Text } from "../../../components/typography/text.component";
import star from "../../../../assets/star";
import open from "../../../../assets/open";
import {
  RestaurantCard,
  RestaurantCardCover,
  Info,
  Section,
  SectionEnd,
  Rating,
  Icon,
  Address,
} from "./restaurant-info-card.styles";

export const RestaurantInfoCard = ({ restaurant = {} }) => {
  const {
    name = "Andrew Chikubi",
    icon = "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
    photos = [
      "https://instagram.fsyd10-2.fna.fbcdn.net/v/t51.2885-19/575721108_18334831846229275_7915769890048543997_n.jpg?efg=eyJ2ZW5jb2RlX3RhZyI6InByb2ZpbGVfcGljLmRqYW5nby4xMDgwLmMyIn0&_nc_ht=instagram.fsyd10-2.fna.fbcdn.net&_nc_cat=107&_nc_oc=Q6cZ2QEygPW3YHao-ISaRuzd9l4YMC0EhuPUyC3gLxLXKoi5kbRc1OILBQ-7_LSRcdY4drU&_nc_ohc=_VEYZ-dWUmMQ7kNvwHjk2k7&_nc_gid=uQqbQOCHy9nxbgauhV0_PA&edm=ALGbJPMBAAAA&ccb=7-5&oh=00_AfqdR1TVczLWLZz1WXjM_c05zG4PhCtpAI0cBjp6umq3YQ&oe=695C21C9&_nc_sid=7d3ac5",
    ],
    address = "69 Random street",
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily = true,
  } = restaurant;

  const ratingArray = Array.from(new Array(Math.floor(rating)));

  return (
    <RestaurantCard elevation={5}>
      <RestaurantCardCover key={name} source={{ uri: photos[0] }} />
      <Info>
        <Text variant="label">{name}</Text>
        <Section>
          <Rating>
            {ratingArray.map((_, index) => (
              <SvgXml key={`star-${index}`} xml={star} width={20} height={20} />
            ))}
          </Rating>
          <SectionEnd>
            {isClosedTemporarily && (
              <Text variant="error">CLOSED TEMPORARILY</Text>
            )}
            <Spacer position="left" size="large">
              {isOpenNow && <SvgXml xml={open} width={20} height={20} />}
            </Spacer>
            <Spacer position="left" size="large">
              <Icon source={{ uri: icon }} />
            </Spacer>
          </SectionEnd>
        </Section>
        <Address>{address}</Address>
      </Info>
    </RestaurantCard>
  );
};
