import React from "react";
import Screen from "../../../components/Screen";
import { useRoute, useNavigation } from "@react-navigation/native";
import { ICard } from "../../../interfaces";
import { ScrollView } from "react-native";
import ZoomView from "../../common/ImageView/ZoomView";
import ITCard from "../../common/ITCard/ITCard";
import Button from "../../../components/Button";
import styled from "styled-components/native";
import { Spacing } from "../../../styled/spacing";
import Icon from "../../../components/Icon";
import colors from "../../../themes/colors";
import { SpacingProps } from "../../../interfaces/index";
import { Text } from "../../../styled/typography";
import IconCont from "./components/IconCont";

const ViewMyCard = () => {
    const navigation = useNavigation();
    const [zoomImage, setZoomImage] = React.useState<string | null>(null);

    const [myCard, setMycard] = React.useState<ICard>({});

    const params = useRoute().params as { data: ICard };

    React.useLayoutEffect(() => {
        try {
            setMycard(params?.data);
            navigation.setOptions({
                title: params?.data?.title,
            });
        } catch (error) {
            console.log(error);
        }
    }, [params]);

    return (
        <Screen>
            <ScrollView
                style={{
                    paddingHorizontal: 16,
                    paddingVertical: 20,
                }}
                showsVerticalScrollIndicator={false}
            >
                {zoomImage && (
                    <ZoomView
                        images={[zoomImage]}
                        isVisible={zoomImage && zoomImage !== null}
                        onClose={() => setZoomImage(null)}
                    />
                )}
                <ITCard
                    frontImage={myCard?.frontImage}
                    title={"Front side"}
                    onPress={() => {
                        setZoomImage(myCard?.frontImage);
                    }}
                />
                <ITCard
                    frontImage={myCard?.backImage}
                    title={"Back side"}
                    onPress={() => setZoomImage(myCard.backImage)}
                />

                <IconCont title="Qr code" />
                <IconCont title="Share Card" icon="share" />

                <Button
                    onPress={() =>
                        navigation.navigate("ACManualy", {
                            data: myCard,
                        })
                    }
                    mt={20}
                    text="Edit Card"
                />
            </ScrollView>
        </Screen>
    );
};

const IconContainer = styled.Pressable<SpacingProps>`
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    ${Spacing}
`;

const IconBox = styled.View`
    background: ${colors.lightBlue100};
    width: 55px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    ${Spacing}
`;

export default ViewMyCard;
